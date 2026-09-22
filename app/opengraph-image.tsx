import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "CareMedBridge: Healthcare Billing Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #06131F 0%, #0B1F33 55%, #0E7490 130%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #0E7490, #14B8A6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
            CareMedBridge
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              maxWidth: 900,
            }}
          >
            Healthcare Billing Services
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#94A3B8", lineHeight: 1.4, maxWidth: 880 }}>
            Medical billing, coding, and revenue cycle management for practices across the USA.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            fontWeight: 600,
            color: "#14B8A6",
          }}
        >
          <div style={{ display: "flex" }}>caremedbridge.com</div>
          <div style={{ display: "flex", width: 40, height: 2, background: "#14B8A6" }} />
          <div style={{ display: "flex", color: "#CBD5E1" }}>Request a Consultation</div>
        </div>
      </div>
    ),
    size,
  );
}
