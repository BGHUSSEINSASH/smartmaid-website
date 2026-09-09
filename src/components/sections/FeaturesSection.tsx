"use client";
import { useLocale } from "next-intl";

const FEATS = {
  ar: [
    { icon:"⚡", t:"حجز فوري", d:"احجز عاملتك المثالية خلال أقل من دقيقة بخطوات بسيطة", c:"icon-indigo" },
    { icon:"🎤", t:"بحث صوتي ذكي", d:"تحدّث بشكل طبيعي والذكاء الاصطناعي يجد لك الأفضل فوراً", c:"icon-cyan" },
    { icon:"🤖", t:"ذكاء اصطناعي في كل مكان", d:"مساعد AI في كل شاشة يرد، يقترح، ويحلل — 24/7", c:"icon-indigo" },
    { icon:"📅", t:"حجز سنوي بخصم 30%", d:"جدول ثابت أسبوعياً بأفضل الأسعار وعاملة مخصصة لك", c:"icon-cyan" },
    { icon:"🛡️", t:"عاملات موثّقات KYC", d:"تحقق كامل من الهوية والمستندات قبل التفعيل", c:"icon-indigo" },
    { icon:"💳", t:"دفع آمن بـ Escrow", d:"أموالك محفوظة حتى إتمام الخدمة بشكل مُرضٍ", c:"icon-cyan" },
    { icon:"📍", t:"تحديد الموقع GPS", d:"حدّد عنوانك بدقة بلمسة واحدة عبر GPS أو الخريطة", c:"icon-indigo" },
    { icon:"⭐", t:"تقييمات حقيقية", d:"نافذة إلزامية للتقييم المنخفض مع سبب — شفافية كاملة", c:"icon-cyan" },
    { icon:"🔒", t:"قفل التطبيق PIN", d:"حماية إضافية برمز سري أو بصمة الإصبع", c:"icon-indigo" },
  ],
  en: [
    { icon:"⚡", t:"Instant Booking", d:"Book your perfect maid in under a minute with simple steps", c:"icon-indigo" },
    { icon:"🎤", t:"Voice Smart Search", d:"Speak naturally and AI finds the best match for you instantly", c:"icon-cyan" },
    { icon:"🤖", t:"AI Everywhere", d:"AI assistant in every screen — replies, suggests, analyzes — 24/7", c:"icon-indigo" },
    { icon:"📅", t:"Annual Booking (30% off)", d:"Fixed weekly schedule at the best price with a dedicated maid", c:"icon-cyan" },
    { icon:"🛡️", t:"KYC Verified Maids", d:"Full identity and document verification before activation", c:"icon-indigo" },
    { icon:"💳", t:"Escrow Payments", d:"Your money is held until service is completed satisfactorily", c:"icon-cyan" },
    { icon:"📍", t:"GPS Location", d:"Set your address precisely with one tap via GPS or map", c:"icon-indigo" },
    { icon:"⭐", t:"Honest Reviews", d:"Mandatory low-rating dialog with reason — full transparency", c:"icon-cyan" },
    { icon:"🔒", t:"PIN App Lock", d:"Extra protection with encrypted PIN code or fingerprint", c:"icon-indigo" },
  ],
};

export default function FeaturesSection() {
  const locale = useLocale();
  const ar = locale === "ar";
  const items = ar ? FEATS.ar : FEATS.en;

  return (
    <section id="features" className="section" style={{ background: "var(--bg)" }}>
      <div className="mx">
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
          <span className="badge badge-brand" style={{ marginBottom: "1rem" }}>
            <span className="pulse" />
            {ar ? "المميزات" : "Features"}
          </span>
          <h2 className="t-h1" style={{ color: "var(--text)", marginBottom: ".75rem" }}>
            {ar ? "كل ما تحتاجه في مكان واحد" : "Everything you need in one place"}
          </h2>
          <p className="t-lead" style={{ maxWidth: 520, marginInline: "auto" }}>
            {ar ? "منصة متكاملة صُممت بعناية — من البحث الصوتي إلى الحجز السنوي والذكاء الاصطناعي في كل شاشة" : "An all-in-one platform — from voice search to annual booking and AI in every screen"}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="feat-grid">
          <style>{`.feat-grid{@media(max-width:900px){grid-template-columns:repeat(2,1fr)!important}@media(max-width:560px){grid-template-columns:1fr!important}}`}</style>
          {items.map((f, i) => (
            <div key={i} className="card" style={{ padding: "2rem 1.75rem" }}>
              <div className={`icon-box ${f.c}`} style={{ marginBottom: "1.25rem", width: 52, height: 52, borderRadius: 14, fontSize: "1.4rem" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text)", marginBottom: ".5rem" }}>{f.t}</h3>
              <p style={{ fontSize: ".875rem", color: "var(--text-2)", lineHeight: 1.7 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
