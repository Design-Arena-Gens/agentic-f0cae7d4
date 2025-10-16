export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24 max-w-4xl">
      <h1 className="heading-serif text-4xl mb-6">Our Philosophy</h1>
      <p className="text-black/70 mb-6">
        Ketch Wellness is a luxury, evidence-based space for restoration and strength. We serve women 30+ seeking a discreet, intelligent path to vitality without shortcuts.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="heading-serif text-2xl mb-2">Founder — Hannah</h2>
          <p className="text-black/70">Dietetics expert bringing clinical integrity to practical, elegant training and nourishment.</p>
        </div>
        <div className="card p-6">
          <h2 className="heading-serif text-2xl mb-2">Care for Mothers</h2>
          <p className="text-black/70">Thoughtful programming for post-baby core, bone density, and long-term beauty-health.</p>
        </div>
      </div>
    </div>
  );
}
