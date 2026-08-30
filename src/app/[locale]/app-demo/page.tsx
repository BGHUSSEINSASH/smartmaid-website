"use client";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function AppDemoPage() {
  const locale = useLocale();
  const ar = locale === "ar";
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<"mobile" | "tablet" | "fullscreen">("mobile");

  const sizes = {
    mobile:     { w: 390,  h: 844,  label: ar ? "📱 هاتف"  : "📱 Phone"  },
    tablet:     { w: 768,  h: 1024, label: ar ? "📟 تابلت" : "📟 Tablet" },
    fullscreen: { w: 0,    h: 0,    label: ar ? "🖥️ ملء الشاشة" : "🖥️ Fullscreen" },
  };

  if (view === "fullscreen") {
    return (
      <div style={{ width: "100vw", height: "100dvh", display: "flex", flexDirection: "column", background: "#0B0918" }}>
        {/* Top bar */}
        <div style={{ height: 48, background: "rgba(255,255,255,.04)", borderBottom: "1px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", paddingInline: 16, gap: 12, flexShrink: 0 }}>
          <a href={`/${locale}`} style={{ color: "rgba(255,255,255,.6)", fontSize: ".8rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            ← {ar ? "العودة للموقع" : "Back to site"}
          </a>
          <span style={{ fontSize: ".8rem", color: "rgba(255,255,255,.3)" }}>|</span>
          <span style={{ fontSize: ".85rem", fontWeight: 700, color: "#fff" }}>SmartMaid Web App</span>
          <div style={{ marginInlineStart: "auto", display: "flex", gap: 8 }}>
            {(["mobile","tablet"] as const).map(v => (
              <button key={v} onClick={() => setView(v)} style={{ padding: ".3rem .75rem", borderRadius: 8, border: "1px solid rgba(255,255,255,.15)", background: "transparent", color: "rgba(255,255,255,.6)", cursor: "pointer", fontSize: ".78rem" }}>
                {sizes[v].label}
              </button>
            ))}
          </div>
        </div>
        <iframe
          src="/app/index.html"
          style={{ flex: 1, border: "none", width: "100%", height: "100%" }}
          onLoad={() => setLoaded(true)}
          allow="camera; microphone; geolocation"
          title="SmartMaid App"
        />
      </div>
    );
  }

  const sz = sizes[view];

  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0B0918 0%,#1C1640 50%,#0B0918 100%)", position: "relative", overflow: "hidden" }}>
      {/* bg dots */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(79,70,229,.15) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      {/* glows */}
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(79,70,229,.2)", filter: "blur(100px)", top: "30%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(6,182,212,.12)", filter: "blur(80px)", top: "10%", right: "5%", pointerEvents: "none" }} />

      {/* Nav bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(20px)", background: "rgba(11,9,24,.8)", borderBottom: "1px solid rgba(255,255,255,.08)", padding: ".75rem 0" }}>
        <div style={{ maxWidth: 1160, marginInline: "auto", paddingInline: "clamp(1.25rem,5vw,2.5rem)", display: "flex", alignItems: "center", gap: 16 }}>
          <a href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.7)", textDecoration: "none", fontSize: ".875rem", fontWeight: 600, transition: "color .15s" }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#fff"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,.7)"}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            {ar ? "العودة" : "Back"}
          </a>
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,.12)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/logos/logo-glass.svg" width={26} height={26} alt="SmartMaid" />
            <span style={{ fontWeight: 800, color: "#fff", fontSize: ".95rem" }}>SmartMaid</span>
            <span style={{ background: "rgba(6,182,212,.2)", border: "1px solid rgba(6,182,212,.35)", color: "#67e8f9", fontSize: ".68rem", fontWeight: 700, padding: ".2rem .55rem", borderRadius: 99 }}>
              {ar ? "نسخة تجريبية" : "Demo"}
            </span>
          </div>

          {/* View switcher */}
          <div style={{ marginInlineStart: "auto", display: "flex", gap: 6 }}>
            {(["mobile","tablet","fullscreen"] as const).map(v => (
              <button key={v} onClick={() => setView(v)} style={{
                padding: ".4rem .85rem", borderRadius: 10, fontSize: ".8rem", fontWeight: 700, cursor: "pointer", transition: "all .2s",
                background: view === v ? "rgba(79,70,229,.3)" : "transparent",
                border: `1px solid ${view === v ? "rgba(79,70,229,.5)" : "rgba(255,255,255,.12)"}`,
                color: view === v ? "#c7d2fe" : "rgba(255,255,255,.5)",
              }}>{sizes[v].label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(2rem,5vw,4rem) clamp(1rem,4vw,2rem)", position: "relative", zIndex: 2 }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)", fontWeight: 900, color: "#fff", marginBottom: ".75rem", letterSpacing: "-.025em" }}>
            {ar ? <>جرّب <span style={{ background: "linear-gradient(135deg,#818cf8,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>SmartMaid</span> الآن</> : <>Try <span style={{ background: "linear-gradient(135deg,#818cf8,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>SmartMaid</span> Now</>}
          </h1>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: "1rem", maxWidth: 480, marginInline: "auto", lineHeight: 1.7 }}>
            {ar
              ? "جرّب التطبيق كاملاً مباشرة من متصفحك — بدون تحميل، بدون تسجيل"
              : "Try the full app directly from your browser — no download, no signup needed"}
          </p>
          {/* Demo accounts hint */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: "1rem", padding: ".5rem 1.1rem", borderRadius: 99, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", fontSize: ".78rem", color: "rgba(255,255,255,.5)" }}>
            💡 {ar ? "حسابات تجريبية: اضغط زر الدخول السريع" : "Demo accounts: tap the quick login button"}
          </div>
        </div>

        {/* Device frame */}
        <div style={{ position: "relative" }}>
          {/* Device outer frame */}
          <div style={{
            width: sz.w + 24, borderRadius: view === "mobile" ? 52 : 28,
            background: "linear-gradient(160deg, #2a2440, #1a1535)",
            padding: view === "mobile" ? "12px" : "8px",
            boxShadow: "0 40px 120px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.08) inset, 0 0 80px rgba(79,70,229,.2)",
            position: "relative",
          }}>
            {/* Home indicator / notch for mobile */}
            {view === "mobile" && (
              <>
                <div style={{ position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)", width: 100, height: 6, background: "rgba(255,255,255,.12)", borderRadius: 99, zIndex: 10 }} />
                <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", width: 120, height: 4, background: "rgba(255,255,255,.2)", borderRadius: 99, zIndex: 10 }} />
              </>
            )}

            {/* Screen */}
            <div style={{
              width: sz.w, height: sz.h,
              borderRadius: view === "mobile" ? 42 : 20,
              overflow: "hidden", position: "relative",
              background: "#0f0c24",
            }}>
              {/* Loader overlay */}
              {!loaded && (
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(160deg,#0B0918,#1C1640)", zIndex: 20 }}>
                  <img src="/logos/logo-glass.svg" width={56} height={56} alt="" style={{ marginBottom: 16, animation: "pulse 2s infinite" }} />
                  <div style={{ fontSize: ".9rem", color: "rgba(255,255,255,.6)", marginBottom: 12 }}>
                    {ar ? "جارٍ تحميل التطبيق..." : "Loading the app..."}
                  </div>
                  <div style={{ width: 120, height: 3, borderRadius: 99, background: "rgba(255,255,255,.1)", overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 99, background: "linear-gradient(90deg,#4F46E5,#06B6D4)", animation: "shimmer 1.5s ease-in-out infinite", backgroundSize: "200% 100%" }} />
                  </div>
                </div>
              )}

              <iframe
                src="/app/index.html"
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                onLoad={() => setLoaded(true)}
                allow="camera; microphone; geolocation"
                title="SmartMaid App"
              />
            </div>
          </div>

          {/* Glow under device */}
          <div style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", width: "80%", height: 60, background: "rgba(79,70,229,.35)", filter: "blur(30px)", borderRadius: "50%", pointerEvents: "none" }} />
        </div>

        {/* Login hints */}
        <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {[
            { role: ar ? "👤 عميل" : "👤 Customer", email: "customer@demo.com", color: "#4F46E5" },
            { role: ar ? "👩‍🔧 عاملة" : "👩‍🔧 Maid", email: "worker@demo.com", color: "#06B6D4" },
            { role: ar ? "🏢 شركة" : "🏢 Company", email: "company@demo.com", color: "#8B5CF6" },
            { role: ar ? "🛡️ إدارة" : "🛡️ Admin", email: "admin@demo.com", color: "#10B981" },
          ].map(item => (
            <div key={item.email} style={{ padding: ".65rem 1.25rem", borderRadius: 14, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", textAlign: "center" }}>
              <div style={{ fontSize: ".9rem", fontWeight: 800, color: item.color, marginBottom: 2 }}>{item.role}</div>
              <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.4)", fontFamily: "monospace" }}>{item.email}</div>
              <div style={{ fontSize: ".68rem", color: "rgba(255,255,255,.25)", marginTop: 1 }}>Passw0rd!</div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".82rem", marginBottom: ".75rem" }}>
            {ar ? "تريد التجربة الكاملة؟" : "Want the full experience?"}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", color: "#0B0918", padding: ".65rem 1.4rem", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: ".85rem", transition: "transform .2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"}>
              📱 App Store
            </a>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", color: "#fff", padding: ".65rem 1.4rem", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: ".85rem", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.18)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.1)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
              ▶ Google Play
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.7;transform:scale(.95)} }
      `}</style>
    </div>
  );
}
