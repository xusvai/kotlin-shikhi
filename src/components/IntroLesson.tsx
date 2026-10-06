import { useState } from "react";

interface IntroLessonProps {
  onBack: () => void;
  onOpenMenu?: () => void;
  onNextLesson?: () => void;
}

export function IntroLesson({ onBack, onNextLesson }: IntroLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[32px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Kotlin Introduction
        </h1>
        <span
          className="mt-3 block h-[3.5px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
        <p className="mt-3 text-[16px] text-soft">
          সহজ ভাষায় প্রোগ্রামিংয়ের সূচনা ও Kotlin-এর পরিচিতি
        </p>
      </header>

      {/* Section 1: Kotlin কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin হলো একটি <strong className="font-semibold text-terra-deep">modern programming language</strong>, যেটি JetBrains তৈরি করেছে।
          </p>
          <p>
            Programming language দিয়ে আমরা computer-কে বিভিন্ন কাজ করার জন্য instructions দিতে পারি।
          </p>
          <p className="text-soft">
            যেমন, computer-কে যদি বলি—
          </p>
          <div className="pl-3.5 border-l-2 border-terra/70 py-0.5 font-medium text-ink">
            “Hello, Kotlin!” লেখাটি দেখাও।
          </div>
          <p className="text-soft">
            Kotlin দিয়ে সেই instruction এভাবে লেখা যায়:
          </p>
        </div>

        {/* Code Snippet 1 */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>Kotlin</span>
            <button
              type="button"
              onClick={() => copyToClipboard('println("Hello, Kotlin!")', "intro-code-1")}
              className="rounded px-2.5 py-1 text-[11px] font-medium text-white/75 hover:bg-white/15 hover:text-white transition-colors"
            >
              {copiedCode === "intro-code-1" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[15px] sm:text-[16px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">println</span>(
            <span className="text-[#98C379]">&quot;Hello, Kotlin!&quot;</span>)
          </pre>
        </div>

        {/* Output */}
        <div className="mt-3 flex items-center gap-3 rounded-[12px] border border-line bg-card px-4 py-3">
          <span className="text-[13px] font-semibold text-soft shrink-0">এর ফলাফল হবে:</span>
          <code className="font-mono text-[15px] font-semibold text-leaf-deep">
            Hello, Kotlin!
          </code>
        </div>

        <div className="mt-4 space-y-2 text-[15.5px] leading-relaxed text-soft">
          <p>
            এখানে আপাতত শুধু এটুকু মনে রাখো:
            <br />
            <strong className="text-ink font-semibold">
              “<code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30">println()</code> ব্যবহার করে আমরা কোনো লেখা output হিসেবে দেখাতে পারি।”
            </strong>
          </p>
          <p className="text-[14.5px] text-soft/90">
            <code className="font-mono font-bold text-terra-deep bg-sand/70 px-1.5 py-0.5 rounded-[5px] border border-line text-[13.5px]">println()</code> কীভাবে কাজ করে, সেটা আমরা পরের lesson-এ বিস্তারিতভাবে শিখব।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: কেন Kotlin? - Grouped list with divider & SVG icons */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          কেন Kotlin?
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming শেখার জন্য অনেক language আছে। তাহলে Kotlin কেন?
          </p>
          <p>
            Kotlin এমনভাবে তৈরি করা হয়েছে যাতে code সহজে লেখা, পড়া এবং maintain করা যায়।
          </p>
        </div>

        <p className="mt-4 text-[15px] font-semibold text-soft">
          এর কয়েকটি গুরুত্বপূর্ণ দিক হলো:
        </p>

        {/* Grouped list with rounded top/bottom and divider */}
        <div className="mt-3 overflow-hidden rounded-[18px] border border-line divide-y divide-line bg-card shadow-2xs">
          {[
            {
              title: "সহজ ও concise",
              desc: "অনেক কাজ Kotlin-এ তুলনামূলক কম code দিয়ে করা যায়।",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
                </svg>
              ),
            },
            {
              title: "নিরাপদ",
              desc: "Kotlin-এর design-এর মধ্যে এমন কিছু feature রয়েছে যা programming-এর common ভুল কমাতে সাহায্য করে।",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              ),
            },
            {
              title: "Android development",
              desc: "Android application তৈরিতে Kotlin ব্যাপকভাবে ব্যবহৃত হয়।",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <line x1="12" x2="12.01" y1="18" y2="18" />
                </svg>
              ),
            },
            {
              title: "শুধু Android নয়",
              desc: "Kotlin ব্যবহার করে Android-এর বাইরেও বিভিন্ন ধরনের software তৈরি করা যায়।",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-4.5 py-3.5 transition-colors hover:bg-sand/35"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-sand text-terra-deep">
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[16px] text-ink">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[14px] text-soft">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Kotlin দিয়ে কী তৈরি করা যায়? Grouped List with Divider & SVG icons */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin দিয়ে কী তৈরি করা যায়?
        </h2>
        <div className="mt-3 space-y-2 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এর ব্যবহার শুধু একটি নির্দিষ্ট ক্ষেত্রের মধ্যে সীমাবদ্ধ নয়।
          </p>
          <p className="font-medium text-terra-deep">
            তুমি Kotlin দিয়ে কাজ করতে পারো—
          </p>
        </div>

        {/* Grouped list with rounded top/bottom and divider */}
        <div className="mt-4 overflow-hidden rounded-[18px] border border-line divide-y divide-line bg-card shadow-2xs">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <line x1="12" x2="12.01" y1="18" y2="18" />
                </svg>
              ),
              title: "Android Apps",
              desc: "Mobile application তৈরি করতে।",
              badge: "Mobile",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                  <line x1="6" x2="6.01" y1="6" y2="6" />
                  <line x1="6" x2="6.01" y1="18" y2="18" />
                </svg>
              ),
              title: "Backend",
              desc: "Server-side application তৈরি করতে।",
              badge: "Server",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              ),
              title: "Desktop Applications",
              desc: "Desktop software তৈরি করতে।",
              badge: "Desktop",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              ),
              title: "Multiplatform Projects",
              desc: "একাধিক platform-এর জন্য code share করতে।",
              badge: "KMP",
            },
          ].map((area, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-4.5 py-3.5 transition-colors hover:bg-sand/35"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-sand text-terra-deep">
                {area.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-[16px] text-ink">
                    {area.title}
                  </h3>
                  <span className="rounded-full bg-sand px-2.5 py-0.5 font-mono text-[11px] font-semibold text-soft border border-line/60">
                    {area.badge}
                  </span>
                </div>
                <p className="mt-0.5 text-[14px] text-soft">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tip Box with proper Amber Tip Styling */}
        <div className="mt-4 rounded-[14px] border border-amber-500/35 bg-amber-500/10 p-4 text-ink flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-800 mt-0.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </span>
          <p className="text-[14.5px] leading-relaxed text-ink/90">
            <strong className="text-amber-800 font-semibold">পরামর্শ: </strong>
            Kotlin শেখার মাধ্যমে তুমি শুধু একটি ধরনের application তৈরির মধ্যে আটকে থাকবে না।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Kotlin দেখতে কেমন? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin দেখতে কেমন?
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          এখন শুধু একটি ছোট example দেখি:
        </p>

        {/* Code Snippet 2 */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>Kotlin</span>
            <button
              type="button"
              onClick={() => copyToClipboard('println("I am learning Kotlin!")', "intro-code-2")}
              className="rounded px-2.5 py-1 text-[11px] font-medium text-white/75 hover:bg-white/15 hover:text-white transition-colors"
            >
              {copiedCode === "intro-code-2" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[15px] sm:text-[16px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">println</span>(
            <span className="text-[#98C379]">&quot;I am learning Kotlin!&quot;</span>)
          </pre>
        </div>

        {/* Output */}
        <div className="mt-3 flex items-center gap-3 rounded-[12px] border border-line bg-card px-4 py-3">
          <span className="text-[13px] font-semibold text-soft shrink-0">Output:</span>
          <code className="font-mono text-[15px] font-semibold text-leaf-deep">
            I am learning Kotlin!
          </code>
        </div>

        <div className="mt-4 space-y-2 text-[16px] leading-[1.8] text-soft">
          <p>
            খেয়াল করো, Kotlin-এর code দেখতে বেশ পরিষ্কার এবং সহজবোধ্য।
          </p>
          <p>
            তবে এই মুহূর্তে code-এর প্রতিটি অংশ বোঝার দরকার নেই। আমরা course-এর পরবর্তী lesson-গুলোতে একটি একটি করে প্রতিটি concept শিখব।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: একটা বিষয় মনে রাখো - Tip Callout */}
      <section className="rounded-[16px] border border-amber-500/35 bg-card p-5 sm:p-6 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-amber-500/15 text-amber-800">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          </span>
          <h2 className="text-[19px] font-bold text-ink">
            একটা বিষয় মনে রাখো
          </h2>
        </div>

        <p className="mt-3 text-[16.5px] font-semibold text-ink leading-[1.7]">
          Kotlin শেখার সময় আমাদের লক্ষ্য হবে code মুখস্থ করা নয়, code বোঝা।
        </p>

        <div className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-ink/90 border-t border-line/60 pt-3.5">
          <p>
            যেমন: <code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 text-[14px]">println(&quot;Hello&quot;)</code>
          </p>
          <p className="text-soft">
            শুধু এটা মুখস্থ করার পরিবর্তে আমরা বুঝব—
            <br />
            <strong className="text-ink font-semibold">
              “<code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30">println()</code> কেন ব্যবহার করা হচ্ছে?”
            </strong>
          </p>
          <p className="flex items-start gap-2 text-ink">
            <span className="font-bold text-amber-800 shrink-0">উত্তর:</span>
            <span>Console-এ কোনো লেখা বা value দেখানোর জন্য।</span>
          </p>
        </div>

        <p className="mt-4 text-[14.5px] text-soft border-t border-line/60 pt-3">
          এইভাবেই আমরা ধীরে ধীরে Kotlin-এর প্রতিটি concept শিখব।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: আজকের শেখা - Restored previous style with check badges, without roadmap button */}
      <section className="rounded-[16px] border border-leaf/40 bg-leaf-soft/20 p-5 shadow-xs">
        <div className="flex items-center gap-2 text-leaf-deep">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h2 className="text-[20px] font-bold text-ink">
            আজকের শেখা
          </h2>
        </div>

        <p className="mt-3 text-[16px] text-soft">
          এই lesson শেষে তুমি জানো:
        </p>

        <ul className="mt-3.5 space-y-2.5">
          {[
            { text: "Kotlin কী" },
            { text: "Kotlin কে তৈরি করেছে" },
            { text: "কেন Kotlin শেখা যেতে পারে" },
            { text: "Kotlin কোথায় ব্যবহার হয়" },
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-[16px] text-ink font-medium">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white text-[12px] font-bold">
                ✓
              </span>
              <span>{item.text}</span>
            </li>
          ))}
          <li className="flex items-center gap-2.5 text-[16px] text-ink font-medium">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white text-[12px] font-bold">
              ✓
            </span>
            <span>
              <code className="font-mono font-bold text-leaf-deep bg-white/70 px-1.5 py-0.5 rounded-[5px] border border-leaf/30 text-[14.5px]">println()</code> দিয়ে output দেখানো যায়
            </span>
          </li>
        </ul>

        <div className="mt-5 pt-3 border-t border-line/60">
          <p className="text-[15.5px] font-semibold text-leaf-deep">
            এর বেশি কিছু এখন মনে রাখার দরকার নেই।
          </p>
        </div>
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
          পরবর্তী পাঠ →
        </button>
      </footer>
    </article>
  );
}
