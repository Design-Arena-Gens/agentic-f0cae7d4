export default function ClassesPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="heading-serif text-4xl mb-6">Classes & Coaching</h1>
      <p className="text-black/70 max-w-prose mb-10">
        Designed for elegant strength and health restoration. We keep groups small and the environment discreet.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="heading-serif text-2xl mb-2">Small-Group Coaching</h2>
          <p className="text-black/70 mb-4">Up to 4. Personalized programming within a supportive circle. 25 hours/week availability.</p>
          <div className="flex items-center justify-between">
            <div className="heading-serif text-2xl">$400/mo</div>
            <a href="/booking" className="btn btn-primary">Join waitlist</a>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="heading-serif text-2xl mb-2">Large Classes</h2>
          <p className="text-black/70 mb-4">Rhythmic conditioning for posture, stamina, and grace. Multiple weekly times.</p>
          <div className="flex items-center justify-between">
            <div className="heading-serif text-2xl">$200–$300/mo</div>
            <a href="/booking" className="btn btn-secondary">Reserve</a>
          </div>
        </div>
        <div className="card p-6 md:col-span-2">
          <h2 className="heading-serif text-2xl mb-2">Private Training</h2>
          <p className="text-black/70 mb-4">One-to-one sessions for targeted outcomes, privacy, and accelerated progress.</p>
          <div className="flex items-center justify-between">
            <div className="heading-serif text-2xl">$650 / 10 sessions</div>
            <a href="/booking" className="btn btn-primary">Enquire</a>
          </div>
        </div>
      </div>
    </div>
  );
}
