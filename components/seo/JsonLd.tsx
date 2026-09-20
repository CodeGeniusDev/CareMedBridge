/**
 * Renders a JSON-LD structured-data script tag from a plain object.
 * Use the builders in @/lib/seo to construct the data.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const type =
    typeof data["@type"] === "string" ? (data["@type"] as string) : "data";
  return (
    <script
      type="application/ld+json"
      data-schema={type}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
