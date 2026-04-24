import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Lawn Mowing",
      body: "We slash, mow, edge, and rake your lawn to keep it healthy, neat, and beautifully framed.",
    },
    {
      title: "Hedge Trimming",
      body: "Shape and maintain hedges with scheduled trimming every few months for tidy growth.",
    },
    {
      title: "Weeding and Garden Cleanup",
      body: "Hand-pulling, treatment, and tidy-up work tailored to what your garden needs most.",
    },
  ];

  const testimonials = [
    {
      quote:
        "SMT Gardening did an excellent job trimming my high hedges. The final trim was perfect and done for a very good price.",
      author: "Martin, Hawthorn East",
    },
    {
      quote: "Great service, professional. We would definitely use their service again.",
      author: "Michelle, Lalor",
    },
    {
      quote:
        "Payam and his team did a fantastic job. Would recommend to everyone.",
      author: "Jenie, Nunawading",
    },
  ];

  const faqs = [
    {
      question: "Do I need to sign a long-term contract?",
      answer:
        "No. Ongoing maintenance is flexible, and we tailor plans based on your property and schedule.",
    },
    {
      question: "How quickly can I get a quote?",
      answer:
        "Most online quote requests are reviewed quickly, and we will contact you to confirm next steps.",
    },
    {
      question: "How do I know when you will arrive?",
      answer:
        "You will receive SMS updates with an estimated arrival time and an on-the-way notification.",
    },
    {
      question: "Can I cancel a booking?",
      answer:
        "Yes. Bookings cancelled with at least 24 hours notice are generally fee-free.",
    },
  ];

  const transformations = [
    {
      title: "Front Yard Refresh",
      before: "/before-front-yard.png",
      after: "/after-front-yard.png",
    },
    {
      title: "Backyard Cleanup",
      before: "/before-backyard.png",
      after: "/after-backyard.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#071a14] text-emerald-50">
      <header className="sticky top-0 z-20 border-b border-emerald-800/80 bg-[#071a14]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold tracking-wide text-white">SMT Gardening</p>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="text-emerald-100/90 transition hover:text-white">
              Services
            </a>
            <a href="#testimonials" className="text-emerald-100/90 transition hover:text-white">
              Reviews
            </a>
            <a href="#faq" className="text-emerald-100/90 transition hover:text-white">
              FAQ
            </a>
            <a
              href="#quote"
              className="rounded-full bg-[#d5ff45] px-4 py-2 text-sm font-semibold text-[#12231b] transition hover:bg-[#bfee34]"
            >
              Get a Free Quote
            </a>
          </div>
          <a
            href="#quote"
            className="rounded-full bg-[#d5ff45] px-4 py-2 text-sm font-semibold text-[#12231b] transition hover:bg-[#bfee34] md:hidden"
          >
            Quote
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-emerald-700/80 bg-emerald-900/40 px-3 py-1 text-sm text-emerald-100">
              Professional gardening services across Melbourne&apos;s eastern suburbs
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
              Save Time, Enjoy a Better Garden
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-emerald-100/90">
              SMT Gardening delivers reliable lawn mowing, hedge trimming, and weeding services in Blackburn and surrounding suburbs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="rounded-full bg-[#d5ff45] px-6 py-3 text-center font-semibold text-[#12231b] transition hover:bg-[#bfee34]"
              >
                Get Free Quote
              </a>
              <a
                href="#services"
                className="rounded-full border border-emerald-600 px-6 py-3 text-center font-semibold text-emerald-100 transition hover:bg-emerald-900/60"
              >
                View Services
              </a>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-4 text-sm text-emerald-100/95 sm:grid-cols-3 sm:gap-4">
              <p className="rounded-2xl border border-emerald-800/80 bg-emerald-900/35 p-4">
                <span className="block text-xl font-bold text-[#d5ff45] sm:text-2xl">Melbourne</span>
                Service area
              </p>
              <p className="rounded-2xl border border-emerald-800/80 bg-emerald-900/35 p-4">
                <span className="block text-xl font-bold text-[#d5ff45] sm:text-2xl">Blackburn</span>
                Local base
              </p>
              <p className="rounded-2xl border border-emerald-800/80 bg-emerald-900/35 p-4">
                <span className="block text-xl font-bold text-[#d5ff45] sm:text-2xl">Fast</span>
                Quote response
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-700/70 bg-emerald-900/45 p-8">
            <h2 className="text-xl font-semibold text-white">Why clients choose SMT Gardening</h2>
            <ul className="mt-5 space-y-4 text-emerald-100">
              <li>- Professional and friendly garden care team</li>
              <li>- Easy online quote and streamlined booking</li>
              <li>- SMS updates and clear communication</li>
              <li>- Flexible ongoing maintenance plans</li>
            </ul>
          </div>
        </section>

        <section id="services" className="bg-[#f6fbf9] py-20 text-emerald-950">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our Services</h2>
            <p className="mt-3 max-w-2xl text-emerald-900/80">
              Practical gardening support that keeps your property neat, healthy, and easy to maintain.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-emerald-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Included in plan
                  </p>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-emerald-900/80">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ecf7f2] py-20 text-emerald-950">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Before and After Results
            </h2>
            <p className="mt-3 max-w-2xl text-emerald-900/80">
              A quick look at how regular maintenance transforms overgrown spaces into clean, healthy gardens.
            </p>
            <div className="mt-10 grid gap-8">
              {transformations.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm md:p-6"
                >
                  <p className="mb-4 text-xl font-semibold text-emerald-950">{item.title}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-emerald-200">
                      <Image
                        src={item.before}
                        alt={`${item.title} before service`}
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-emerald-200">
                      <Image
                        src={item.after}
                        alt={`${item.title} after service`}
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-18">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Simple 3-Step Process
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Request a free quote online in minutes.",
              "We confirm scope, timing, and pricing.",
              "Enjoy a beautifully maintained garden year-round.",
            ].map((step, index) => (
              <article
                key={step}
                className="rounded-2xl border border-emerald-700/80 bg-emerald-900/55 p-6"
              >
                <p className="text-sm font-semibold text-[#d5ff45]">Step {index + 1}</p>
                <p className="mt-2 text-lg text-emerald-50">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="bg-white py-20 text-emerald-950">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Testimonials</h2>
            <p className="mt-3 max-w-2xl text-emerald-900/75">
              Consistent, professional service is what local homeowners mention most.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="rounded-2xl border border-emerald-200 bg-[#f7fbf9] p-6 shadow-sm"
                >
                  <p className="text-xl text-[#2f7f5f]">★★★★★</p>
                  <p className="mt-2 text-emerald-900/90">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-4 font-semibold text-emerald-950">{item.author}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f1f8f5] py-20 text-emerald-950">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Read Our FAQs</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold">
                    <span>{item.question}</span>
                    <span className="float-right text-emerald-500 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-emerald-900/80">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="bg-[#dff2ea] py-20 text-emerald-950">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Request a Callback
              </h2>
              <p className="mt-3 max-w-lg text-emerald-900/80">
                Fill out your details and we will contact you to discuss your gardening needs.
              </p>
              <div className="mt-6 rounded-2xl border border-emerald-300 bg-white p-5">
                <p className="font-semibold">Service highlights</p>
                <p className="mt-2 text-emerald-900/80">
                  Professional service, simple booking, clear communication, and reliable garden outcomes.
                </p>
              </div>
            </div>
            <form className="space-y-4 rounded-2xl border border-emerald-300 bg-white p-6 shadow-sm">
              <label className="block text-sm font-medium">
                Name
                <input
                  className="mt-1 w-full rounded-lg border border-emerald-300 px-3 py-2 outline-none ring-emerald-600 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium">
                Phone
                <input
                  className="mt-1 w-full rounded-lg border border-emerald-300 px-3 py-2 outline-none ring-emerald-600 focus:ring-2"
                  placeholder="04xx xxx xxx"
                />
              </label>
              <label className="block text-sm font-medium">
                Address
                <input
                  className="mt-1 w-full rounded-lg border border-emerald-300 px-3 py-2 outline-none ring-emerald-600 focus:ring-2"
                  placeholder="Suburb, VIC"
                />
              </label>
              <label className="block text-sm font-medium">
                Service needed
                <select className="mt-1 w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 outline-none ring-emerald-600 focus:ring-2">
                  <option>Weekly mowing</option>
                  <option>Hedge trimming</option>
                  <option>Weeding</option>
                  <option>Other</option>
                </select>
              </label>
              <button
                type="button"
                className="w-full rounded-full bg-emerald-900 px-5 py-3 font-semibold text-emerald-50 transition hover:bg-emerald-800"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>

        <section className="border-t border-emerald-800/80 bg-[#071a14] py-14">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 px-6 md:flex-row md:items-center">
            <div>
              <p className="text-2xl font-semibold text-white">Ready to save time on your garden?</p>
              <p className="mt-1 text-emerald-100/90">
                Request your quote online and our team will get in touch.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#quote"
                className="rounded-full border border-emerald-600 px-5 py-3 font-semibold text-emerald-50 transition hover:bg-emerald-900/60"
              >
                Request Callback
              </a>
              <a
                href="#quote"
                className="rounded-full bg-[#d5ff45] px-5 py-3 font-semibold text-[#12231b] transition hover:bg-[#bfee34]"
              >
                Request Quote
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
