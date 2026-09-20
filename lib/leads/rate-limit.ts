/**
 * Minimal in-memory sliding-window rate limiter for the lead Server Action.
 *
 * NOTE: state lives in a single server process. On serverless or
 * multi-instance deployments replace the Map with a shared store
 * (e.g. Upstash Redis) keyed the same way — the call sites won't change.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 3;

const hits = new Map<string, number[]>();

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfterSeconds: number };

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= MAX_PER_WINDOW) {
    const oldest = timestamps[0];
    return {
      ok: false,
      retryAfterSeconds: Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000)),
    };
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Crude sweep to bound memory once the map grows large.
  if (hits.size > 5000) {
    for (const [k, arr] of hits) {
      const fresh = arr.filter((t) => t > windowStart);
      if (fresh.length === 0) hits.delete(k);
      else hits.set(k, fresh);
    }
  }

  return { ok: true };
}
