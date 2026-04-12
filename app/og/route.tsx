import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0a0a0f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "200px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            zIndex: 1,
          }}
        >
          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#22c55e",
                fontFamily: "sans-serif",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Disponible para trabajo remoto
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              fontFamily: "sans-serif",
              color: "#f8fafc",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Daniel Lopez
          </div>

          {/* Title with gradient */}
          <div
            style={{
              fontSize: "36px",
              fontWeight: 500,
              fontFamily: "sans-serif",
              color: "#3b82f6",
              marginBottom: "40px",
              letterSpacing: "-0.01em",
            }}
          >
            Full Stack Developer
          </div>

          {/* Tech pills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "48px",
              flexWrap: "wrap",
            }}
          >
            {["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "9999px",
                    background: "rgba(59,130,246,0.12)",
                    border: "1px solid rgba(59,130,246,0.3)",
                    color: "#93c5fd",
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { value: "2.5+", label: "años en producción" },
              { value: "3", label: "países: CO · MX · BR" },
              { value: "10+", label: "proyectos reales" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#f8fafc",
                    fontFamily: "sans-serif",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    fontFamily: "sans-serif",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* URL bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "16px",
            color: "#334155",
            fontFamily: "sans-serif",
            zIndex: 1,
          }}
        >
          daniellopez.dev
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
