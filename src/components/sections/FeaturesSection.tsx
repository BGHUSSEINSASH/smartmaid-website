"use client";
import { useLocale } from "next-intl";

const FEATS = {
  ar: [
    { icon:"⚡", t:"حجز فوري", d:"احجز عاملتك المثالية خلال أقل من دقيقة", c:"icon-indigo" },
    { icon:"🛡️", t:"عاملات موثّقات KYC", d:"تحقق كامل من الهوية والمستندات قبل التفعيل", c:"icon-cyan" },
    { icon:"💳", t:"دفع آمن بـ Escrow", d:"أموالك محفوظة حتى إتمام الخدمة بشكل مُرضٍ", c:"icon-indigo" },
    { icon:"📍", t:"تحديد الموقع GPS", d:"حدّد عنوانك بدقة بلمسة واحدة عبر GPS أو الخريطة", c:"icon-cyan" },
    { icon:"⭐", t:"تقييمات حقيقية", d:"شفافية كاملة — لا تقييمات وهمية أبداً", c:"icon-indigo" },
    { icon:"📍", t:"تتبّع لحظي", d:"راقب حالة طلبك وموقع العاملة لحظة بلحظة", c:"icon-cyan" },
    { icon:"💰", t:"محفظة رقمية", d:"شحن واسترداد آمن مع سجل معاملات كامل", c:"icon-indigo" },
    { icon:"👑", t:"اشتراكات Pro", d:"Gold وPlatinum بمزايا حصرية وخصومات دائمة", c:"icon-cyan" },
    { icon:"🎛️", t:"تحكم مركزي", d:"المدير يتحكم في كل شيء لحظة بلحظة", c:"icon-indigo" },
  ],
  en: [
    { icon:"⚡", t:"Instant Booking", d:"Book your perfect maid in under a minute", c:"icon-indigo" },
    { icon:"🛡️", t:"KYC Verified Maids", d:"Full identity and document verification before activation", c:"icon-cyan" },
    { icon:"💳", t:"Escrow Payments", d:"Your money held until service is completed satisfactorily", c:"icon-indigo" },
    { icon:"📍", t:"GPS Address Detection", d:"Set your address precisely with one tap via GPS or map", c:"icon-cyan" },
    { icon:"⭐", t:"Real Reviews", d:"Full transparency — no fake ratings ever", c:"icon-indigo" },
    { icon:"🔍", t:"Live Tracking", d:"Track your order and maid's location in real time", c:"icon-cyan" },
    { icon:"💰", t:"Digital Wallet", d:"Top-up and refund with full transaction history", c:"icon-indigo" },
    { icon:"👑", t:"Pro Subscriptions", d:"Gold and Platinum with exclusive discounts", c:"icon-cyan" },
    { icon:"🎛️", t:"Central Control", d:"Admin controls everything in real time", c:"icon-indigo" },
  ],
};

export default function FeaturesSection() {
  const locale = useLocale();
  const ar = locale === "ar";
  const items = ar ? FEATS.ar : FEATS.en;

  return (
    <section id="features" className="section" style={{ background:"var(--bg)" }}>
      <div className="mx">
        <div style={{ textAlign:"center", marginBottom:"clamp(2.5rem,5vw,4rem)" }}>
          <span className="badge badge-brand" style={{ marginBottom:"1rem" }}>
            <span className="pulse" />
            {ar?"المميزات":"Features"}
          </span>
          <h2 className="t-h1" style={{ color:"var(--text)", marginBottom:".75rem" }}>
            {ar?"كل ما تحتاجه في مكان واحد":"Everything you need in one place"}
          </h2>
          <p className="t-lead" style={{ maxWidth:520, marginInline:"auto" }}>
            {ar?"منصة متكاملة صُممت بعناية لأفضل تجربة خدمات منزلية ممكنة":"An all-in-one platform built for the best home services experience"}
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }} className="feat-grid">
          <style>{`.feat-grid{@media(max-width:900px){grid-template-columns:repeat(2,1fr)!important}@media(max-width:560px){grid-template-columns:1fr!important}}`}</style>
          {items.map((f,i) => (
            <div key={i} className="card" style={{ padding:"2rem 1.75rem" }}>
              <div className={`icon-box ${f.c}`} style={{ marginBottom:"1.25rem", width:52, height:52, borderRadius:14, fontSize:"1.4rem" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize:"1.05rem", fontWeight:800, color:"var(--text)", marginBottom:".5rem" }}>{f.t}</h3>
              <p style={{ fontSize:".875rem", color:"var(--text-2)", lineHeight:1.7 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
