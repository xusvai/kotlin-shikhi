interface IntroLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onNextLesson?: () => void;
}

export function IntroLesson({ onBack, onOpenMenu, onNextLesson }: IntroLessonProps) {
  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[32px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Kotlin Introduction
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Kotlin কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin কী?
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin হলো একটি আধুনিক, সহজ এবং শক্তিশালী <strong>programming language</strong>। এটি এমনভাবে তৈরি করা হয়েছে, যাতে কম code লিখে সহজে নির্ভরযোগ্য software তৈরি করা যায়।
          </p>
          <p>
            Kotlin বর্তমানে বিশেষ করে <strong>Android app development</strong>-এর জন্য খুব জনপ্রিয়। তবে শুধু Android নয়—Kotlin দিয়ে Web, Backend, Desktop সহ বিভিন্ন ধরনের software তৈরি করা যায়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Kotlin কেন শিখব? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin কেন শিখব?
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          Programming শেখার শুরুতে অনেক নতুন বিষয় একসাথে কঠিন মনে হতে পারে। Kotlin সেই শেখার পথটাকে তুলনামূলকভাবে সহজ করে।
        </p>

        <p className="mt-4 text-[16px] font-semibold text-soft">
          Kotlin-এর কিছু গুরুত্বপূর্ণ বৈশিষ্ট্য হলো:
        </p>

        <ul className="mt-3 space-y-2.5">
          {[
            {
              title: "সহজ Syntax",
              desc: "code দেখতে পরিষ্কার এবং পড়তে সহজ।",
            },
            {
              title: "কম Code",
              desc: "একই কাজের জন্য অনেক সময় কম code লিখতে হয়।",
            },
            {
              title: "Safe",
              desc: "ভুল কমানোর জন্য Kotlin-এ বিভিন্ন safety feature রয়েছে।",
            },
            {
              title: "Modern",
              desc: "আধুনিক programming-এর প্রয়োজন মাথায় রেখে তৈরি।",
            },
            {
              title: "Android-এর জন্য জনপ্রিয়",
              desc: "Android app তৈরিতে Kotlin একটি প্রধান language।",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terra" />
              <div className="text-[16px] leading-[1.6]">
                <strong className="text-ink">{item.title}</strong> —{" "}
                <span className="text-soft">{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Kotlin কোথায় ব্যবহার হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin কোথায় ব্যবহার হয়?
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          Kotlin-এর ব্যবহার অনেক ক্ষেত্রেই দেখা যায়:
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Android Development",
              desc: "মোবাইল application তৈরি করতে Kotlin ব্যাপকভাবে ব্যবহৃত হয়।",
              badge: "Mobile",
            },
            {
              title: "Backend Development",
              desc: "Server-side application এবং API তৈরি করতেও Kotlin ব্যবহার করা যায়।",
              badge: "Server",
            },
            {
              title: "Desktop Development",
              desc: "Desktop application তৈরিতেও Kotlin ব্যবহার করা সম্ভব।",
              badge: "Desktop",
            },
            {
              title: "Web Development",
              desc: "Web application তৈরির ক্ষেত্রেও Kotlin ব্যবহার করা যায়।",
              badge: "Web",
            },
          ].map((area, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[14px] border border-line bg-card p-4 shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-[16.5px] text-ink">
                    {area.title}
                  </h3>
                  <span className="rounded-full bg-sand px-2 py-0.5 font-mono text-[11px] font-semibold text-soft">
                    {area.badge}
                  </span>
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-soft">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 rounded-[10px] bg-sand/70 px-3.5 py-2.5 text-[15px] font-medium text-ink">
          💡 অর্থাৎ, Kotlin শুধু Android-এর জন্য সীমাবদ্ধ নয়।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Kotlin বনাম Java */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin বনাম Java
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin এবং Java দুটিই <strong>JVM ecosystem</strong>-এর গুরুত্বপূর্ণ programming language। Android development-এর ক্ষেত্রে দুটিই ব্যবহার করা যায়।
          </p>
          <p>
            তবে Kotlin-এর Syntax সাধারণত বেশি concise এবং কিছু ক্ষেত্রে বেশি readable।
          </p>
          <p>
            উদাহরণ হিসেবে, একই ধরনের একটি সাধারণ কাজ Java-তে তুলনামূলক বেশি code চাইতে পারে, যেখানে Kotlin-এ সেটি কম code-এ প্রকাশ করা সম্ভব।
          </p>
          <div className="rounded-[12px] border-l-4 border-kotlin bg-sand/50 p-4 text-[15.5px] text-soft leading-relaxed">
            তবে এর অর্থ Java অপ্রয়োজনীয় নয়। Java এখনও ব্যাপকভাবে ব্যবহৃত হয় এবং Kotlin-এর সঙ্গে পাশাপাশি কাজও করতে পারে।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Kotlin শেখার আগে যা জানা দরকার */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin শেখার আগে যা জানা দরকার
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin শেখার জন্য আগে থেকে programming-এর অনেক কিছু জানা বাধ্যতামূলক নয়।
          </p>
          <p className="font-semibold text-terra-deep">
            তুমি যদি একদম beginner হও, তবুও শুরু করতে পারবে।
          </p>
        </div>

        {/* Learning Roadmap Chain */}
        <div className="mt-4 rounded-[14px] border border-line bg-card p-4 shadow-2xs">
          <p className="text-[14px] font-semibold text-soft">
            আমরা ধীরে ধীরে শিখব—
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[13px] font-semibold">
            {[
              "Syntax",
              "Variables",
              "Data Types",
              "Operators",
              "Conditions",
              "Loops",
              "Functions",
              "Collections",
              "OOP",
            ].map((step, idx, arr) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="rounded-[6px] bg-sand px-2 py-1 text-ink border border-line">
                  {step}
                </span>
                {idx < arr.length - 1 && (
                  <span className="text-terra">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[15.5px] text-soft leading-relaxed">
          প্রতিটি বিষয় আগের বিষয়ের ওপর ভিত্তি করে শেখানো হবে। তাই কোনো বিষয় না বুঝে পরের অংশে যাওয়ার প্রয়োজন নেই।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: এই Lesson থেকে মনে রাখো */}
      <section className="rounded-[16px] border-2 border-terra/60 bg-terra-soft/40 p-5 shadow-xs">
        <div className="flex items-center gap-2 text-terra-deep">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <h2 className="text-[16px] font-bold uppercase tracking-wider">
            এই Lesson থেকে মনে রাখো
          </h2>
        </div>
        <blockquote className="mt-3 text-[17px] sm:text-[18px] font-semibold leading-[1.6] text-ink">
          &ldquo;Kotlin হলো একটি modern, concise এবং powerful programming language, যা বিশেষ করে Android development-এর জন্য ব্যাপকভাবে ব্যবহৃত হয়।&rdquo;
        </blockquote>
      </section>

      {/* Bottom Navigation Buttons */}
      <footer className="mt-10 flex items-center justify-between gap-3 border-t border-line pt-6">
        <button
          type="button"
          onClick={onBack}
          className="btn btn-secondary flex-1"
        >
          ← পূর্ববর্তী
        </button>

        <button
          type="button"
          onClick={onNextLesson}
          className="btn btn-primary flex-1"
        >
          পরবর্তী →
        </button>
      </footer>
    </article>
  );
}
