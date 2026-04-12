import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daniel Lopez — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #0f0f12 50%, #18181b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "56px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "7px",
                background: "#10b981",
                display: "flex",
              }}
            />
            <div
              style={{
                color: "#10b981",
                fontSize: "26px",
                fontWeight: 500,
                display: "flex",
              }}
            >
              Disponible para nuevas oportunidades
            </div>
          </div>

          <div
            style={{
              fontSize: "92px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.0,
              marginBottom: "20px",
              display: "flex",
              letterSpacing: "-2px",
            }}
          >
            Daniel Lopez
          </div>

          <div
            style={{
              fontSize: "48px",
              color: "#3b82f6",
              fontWeight: 600,
              marginBottom: "48px",
              display: "flex",
            }}
          >
            Full Stack Developer
          </div>

          <div
            style={{
              fontSize: "32px",
              color: "#a1a1aa",
              lineHeight: 1.4,
              display: "flex",
              maxWidth: "1040px",
            }}
          >
            Construyo sistemas que escalan, no solo código que funciona.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "#71717a",
              fontSize: "26px",
            }}
          >
            <span>React</span>
            <span>·</span>
            <span>Next.js</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Node.js</span>
            <span>·</span>
            <span>PostgreSQL</span>
          </div>
          <div
            style={{
              color: "#52525b",
              fontSize: "22px",
              display: "flex",
            }}
          >
            daniellopez.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
