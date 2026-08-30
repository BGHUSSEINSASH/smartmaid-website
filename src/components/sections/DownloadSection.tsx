"use client";
import { useLocale } from "next-intl";

export default function DownloadSection() {
  const locale = useLocale();
  const ar = locale === "ar";

  return (
    <section id="download" className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="mx">
        <div style={{
          borderRadius: 28, overflow: "hidden", position: "relative",
          background: "linear-gradient(135deg, #1C1640 0%, #0B1A2E 50%, #1C1640 100%)",
          padding: "clamp(3rem,8vw,5.5rem) clamp(2rem,6vw,5rem)",
          textAlign: "center",
        }}>
          <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: .5 }} />
          <div className="blob" style={{ width: 500, height: 500, background: "rgba(79,70,229,.25)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <div className="blob" style={{ width: 300, height: 300, background: "rgba(6,182,212,.12)", insetInlineEnd: "5%", top: "10%" }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <span className="badge badge-dark" style={{ marginBottom: "1.5rem" }}>
              <span className="pulse" style={{ background: "#c7d2fe" }} />
              {ar ? "حمّل التطبيق" : "Get the App"}
            </span>
            <h2 className="t-h1" style={{ color: "#fff", marginBottom: "1rem" }}>
              {ar ? "حمّل التطبيق الآن" : "Download the App Now"}
            </h2>
            <p style={{ color: "rgba(255,255,255,.58)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: 480, marginInline: "auto" }}>
              {ar
                ? "ابدأ رحلتك نحو منزل أنظف اليوم. متاح على iOS وAndroid مجاناً."
                : "Start your journey to a cleaner home today. Available free on iOS and Android."}
            </p>

            {/* Store buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", color: "#0B0918", padding: ".9rem 2rem", borderRadius: 14, fontWeight: 800, textDecoration: "none", fontSize: ".95rem", boxShadow: "0 8px 32px rgba(0,0,0,.25)", transition: "transform .2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"}>
                <svg width="22" height="22" fill="#0B0918" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {ar ? "تحميل — App Store" : "Download on App Store"}
              </a>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.1)", border: "1.5px solid rgba(255,255,255,.2)", backdropFilter: "blur(12px)", color: "#fff", padding: ".9rem 2rem", borderRadius: 14, fontWeight: 800, textDecoration: "none", fontSize: ".95rem", transition: "all .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.18)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.1)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24">
                  <path d="M3.18 23.76A1 1 0 012 22.84V1.16A1 1 0 013.18.24l11.67 11.76-11.67 11.76z" />
                </svg>
                {ar ? "تحميل — Google Play" : "Download on Google Play"}
              </a>
            </div>

            {/* QR Code + Stats row */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
              {/* QR */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <div style={{ width: 88, height: 88, borderRadius: 14, background: "#fff", padding: 7, boxShadow: "0 8px 24px rgba(0,0,0,.3)", display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 1 }}>
                  {[...Array(49)].map((_, i) => <div key={i} style={{ borderRadius: 1, background: [0,1,2,3,4,5,6,7,13,14,20,21,28,35,41,42,43,44,45,46,9,10,11,15,19,23,25,29,33,37,38,39,47].includes(i) ? "#1a1040" : "transparent" }} />)}
                </div>
                <span style={{ fontSize: ".72rem", color: "rgba(255,255,255,.4)" }}>{ar ? "امسح للتحميل" : "Scan to download"}</span>
              </div>

              {/* Divider */}
              <div style={{ width: 1, height: 60, background: "rgba(255,255,255,.12)" }} className="hide-mobile" />

              {/* Stats */}
              <div style={{ display: "flex", gap: "2rem" }}>
                {(ar ? [["4.9","نجوم"],["+10K","مستخدم"],["+500","عاملة"]] : [["4.9","Stars"],["+10K","Users"],["+500","Maids"]]).map(([v, l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff" }}>{v}</div>
                    <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.4)", marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
