export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container grid gap-10 py-20 md:py-28 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-[--brand-charcoal] tracking-tight">
              Discreet transformation, beautifully evidenced.
            </h1>
            <p className="text-lg text-black/70 max-w-xl">
              Ketch Wellness is a luxury holistic gym on Western Avenue for women 30+ seeking post-baby renewal, bone density, strength, and radiance—without shortcuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/booking" className="btn btn-primary">Book a consult</a>
              <a href="/classes" className="btn btn-secondary">Explore classes</a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-black/60">
              <div>
                <span className="font-semibold text-[--brand-charcoal]">Soft open</span> — October 15, 2025
              </div>
              <div>Western Avenue, Oklahoma City</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[5/6] rounded-3xl bg-gradient-to-br from-[--brand-peach]/40 via-white to-[--brand-sage]/20 ring-1 ring-black/5 shadow-lg flex items-center justify-center">
              <div className="h-28 w-28 rounded-full bg-[--brand-sage] text-white grid place-items-center text-3xl font-semibold">KW</div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="heading-serif text-2xl mb-2">Strength + Sculpture</h3>
            <p className="text-black/70">Evidence-led barbell and Pilates-inspired programming to restore posture, power, and silhouette.</p>
          </div>
          <div className="card p-6">
            <h3 className="heading-serif text-2xl mb-2">Bone Density Focus</h3>
            <p className="text-black/70">Progressive loading built for longevity. Strong bones, strong future.</p>
          </div>
          <div className="card p-6">
            <h3 className="heading-serif text-2xl mb-2">Nutrition with Integrity</h3>
            <p className="text-black/70">Guidance by a dietetics expert. Beauty and health without quick fixes.</p>
          </div>
        </div>
      </section>
      <section className="bg-[--brand-cream] py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl mb-4">Memberships</h2>
            <p className="text-black/70 max-w-prose">Small-group coaching and elegant class experiences tailored for busy mothers in OKC and Edmond. Limited capacity for discretion and care.</p>
          </div>
          <div className="grid gap-4">
            <div className="card p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">Small Groups</div>
                <div className="text-sm text-black/60">Up to 4 — 25 hrs/week schedule</div>
              </div>
              <div className="text-right">
                <div className="heading-serif text-2xl">$400/mo</div>
                <a href="/booking" className="text-[--brand-sage] underline decoration-[--brand-peach]">Join waitlist</a>
              </div>
            </div>
            <div className="card p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">Large Classes</div>
                <div className="text-sm text-black/60">Graceful conditioning</div>
              </div>
              <div className="text-right">
                <div className="heading-serif text-2xl">$200–$300/mo</div>
                <a href="/booking" className="text-[--brand-sage] underline decoration-[--brand-peach]">Reserve</a>
              </div>
            </div>
            <div className="card p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">Private Training</div>
                <div className="text-sm text-black/60">One-to-one precision</div>
              </div>
              <div className="text-right">
                <div className="heading-serif text-2xl">$650 / 10 sessions</div>
                <a href="/booking" className="text-[--brand-sage] underline decoration-[--brand-peach]">Enquire</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
