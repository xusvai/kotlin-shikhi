import { useState } from "react";

interface VariableKiLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function VariableKiLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: VariableKiLessonProps) {
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
        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Variable কী?
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Variable কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Variable কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ আমাদের বিভিন্ন ধরনের data সাময়িকভাবে সংরক্ষণ করে পরে ব্যবহার করতে হয়। এই data রাখার জন্য যে নামযুক্ত storage তৈরি করা হয়, তাকে Variable বলা হয়।
          </p>
          <p>
            সহজভাবে ভাবো, Variable হলো একটি নাম দেওয়া পাত্র—যেখানে কোনো value রাখা যায় এবং প্রয়োজনে সেই value ব্যবহার করা যায়।
          </p>
          <p>
            যেমন, একজন মানুষের নাম, বয়স বা স্কোর program-এর মধ্যে সংরক্ষণ করতে হলে আমরা Variable ব্যবহার করতে পারি।
          </p>

          {/* Visual Analogy Card */}
          <div className="rounded-[14px] border border-line bg-card p-4.5 shadow-2xs">
            <h3 className="text-[16px] font-bold text-terra-deep flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-terra"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
              </svg>
              <span>বাস্তব জীবনের সহজ উদাহরণ</span>
            </h3>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink/90">
              রান্নাঘরে যেমন একটি বয়ামের ওপর লেবেল লাগানো থাকে <strong>&ldquo;চিনি&rdquo;</strong> এবং ভেতরে রাখা থাকে চিনি, ঠিক তেমনই:
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[14px]">
              <div className="p-2.5 rounded-[10px] bg-sand/70 border border-line">
                <span className="block font-bold text-ink">বয়ামের নাম (Label)</span>
                <span className="font-mono text-terra-deep font-semibold">Variable Name</span>
              </div>
              <div className="p-2.5 rounded-[10px] bg-sand/70 border border-line">
                <span className="block font-bold text-ink">ভেতরের জিনিস</span>
                <span className="font-mono text-leaf-deep font-semibold">Value (মান)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: কোটলিনে Variable দেখতে কেমন হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          কোটলিনে Variable দেখতে কেমন হয়?
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          Kotlin-এ একটি variable ডিক্লেয়ার করার সাধারণ গঠন:
        </p>

        {/* Code Block with copy */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>VariableExample.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'fun main() {\n    val name = "Kotlin"\n    val age = 8\n\n    println(name)\n    println(age)\n}',
                  "code-var-demo"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-var-demo" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">fun</span>{" "}
            <span className="text-[#D4C4F5]">main</span>() &#123;
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">val</span> name ={" "}
            <span className="text-[#E6D3A1]">&quot;Kotlin&quot;</span>
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">val</span> age = 8
            {"\n\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(name)
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(age)
            {"\n"}
            &#125;
          </pre>
        </div>

        {/* Code Explanation */}
        <div className="mt-4 space-y-2 text-[15.5px] leading-relaxed text-ink/90">
          <div className="flex items-baseline gap-2">
            <code className="font-mono font-bold text-terra-deep bg-card px-1.5 py-0.5 rounded border border-line">name</code>
            <span>হলো variable-এর নাম এবং এতে জমা আছে <code className="font-mono text-ink font-semibold">&quot;Kotlin&quot;</code> টেক্সটটি।</span>
          </div>
          <div className="flex items-baseline gap-2">
            <code className="font-mono font-bold text-terra-deep bg-card px-1.5 py-0.5 rounded border border-line">age</code>
            <span>হলো আরেকটি variable যার ভেতরে জমা আছে <code className="font-mono text-ink font-semibold">8</code> সংখ্যাটি।</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Variable-এর ৩টি মূল অংশ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Variable-এর ৩টি মূল অংশ
        </h2>
        <p className="mt-2 text-[16px] leading-[1.7] text-soft">
          একটি Variable তৈরি করার সময় সাধারণত ৩টি বিষয় গুরুত্বপূর্ণ:
        </p>

        {/* 3 Detailed Items */}
        <div className="mt-4 space-y-3">
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[12px] font-bold text-terra-deep">
                ১
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Keyword
              </h3>
            </div>
            <p className="mt-1.5 text-[15.5px] leading-relaxed text-soft">
              <code className="font-mono font-bold text-terra-deep bg-sand px-1.5 py-0.5 rounded border border-line">val</code> বা <code className="font-mono font-bold text-kotlin bg-sand px-1.5 py-0.5 rounded border border-line">var</code> — Variable তৈরি করার ঘোষণা দেয়।
            </p>
          </div>

          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-kotlin-soft font-mono text-[12px] font-bold text-kotlin-deep">
                ২
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Name
              </h3>
            </div>
            <p className="mt-1.5 text-[15.5px] leading-relaxed text-soft">
              Variable-কে চেনার জন্য দেওয়া নাম।
            </p>
          </div>

          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-leaf-soft font-mono text-[12px] font-bold text-leaf-deep">
                ৩
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Value
              </h3>
            </div>
            <p className="mt-1.5 text-[15.5px] leading-relaxed text-soft">
              Variable-এর মধ্যে যে data রাখা হয়।
            </p>
          </div>
        </div>

        {/* Visual Anatomy Banner / Diagram (Strictly single-line) */}
        <div className="mt-5 rounded-[16px] border border-line bg-card p-3 sm:p-5 shadow-xs">
          <p className="text-[14px] font-semibold text-soft mb-2">উদাহরণ:</p>
          <div className="overflow-x-auto pb-1">
            <div className="inline-flex min-w-full items-center justify-center gap-2 sm:gap-3 rounded-[12px] bg-sand/60 px-3 py-3.5 sm:px-4 sm:py-4 border border-line font-mono text-[16px] sm:text-[22px] whitespace-nowrap">
              {/* 1. Keyword */}
              <div className="flex flex-col items-center">
                <span className="rounded-[8px] bg-terra-soft px-3 py-1 font-bold text-terra-deep border border-terra/30 shadow-2xs">
                  val
                </span>
                <span className="mt-1.5 font-sans text-[11px] font-bold text-terra-deep uppercase tracking-wider">
                  Keyword
                </span>
              </div>

              {/* 2. Name */}
              <div className="flex flex-col items-center">
                <span className="rounded-[8px] bg-kotlin-soft px-3 py-1 font-bold text-kotlin-deep border border-kotlin/30 shadow-2xs">
                  age
                </span>
                <span className="mt-1.5 font-sans text-[11px] font-bold text-kotlin-deep uppercase tracking-wider">
                  Name
                </span>
              </div>

              {/* Equal Operator */}
              <div className="flex flex-col items-center px-1">
                <span className="text-soft font-bold text-[20px]">=</span>
                <span className="mt-1.5 font-sans text-[11px] text-faint">সমান</span>
              </div>

              {/* 3. Value */}
              <div className="flex flex-col items-center">
                <span className="rounded-[8px] bg-leaf-soft px-3.5 py-1 font-bold text-leaf-deep border border-leaf/30 shadow-2xs">
                  24
                </span>
                <span className="mt-1.5 font-sans text-[11px] font-bold text-leaf-deep uppercase tracking-wider">
                  Value
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3.5 rounded-[10px] bg-sand/40 p-3 border border-line text-[14.5px] leading-relaxed text-ink/90 font-mono">
            <span className="font-bold text-ink">এখানে—</span>
            <ul className="mt-1.5 space-y-1 font-sans text-[14.5px]">
              <li>• <code className="font-mono font-bold text-terra-deep">val</code> → Keyword</li>
              <li>• <code className="font-mono font-bold text-kotlin">age</code> → Variable-এর Name</li>
              <li>• <code className="font-mono font-bold text-leaf-deep">24</code> → Value</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Variable কেন ব্যবহার করব? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Variable কেন ব্যবহার করব?
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable ব্যবহার করলে data একবার সংরক্ষণ করে program-এর বিভিন্ন জায়গায় সেটি ব্যবহার করা যায়।
          </p>
          <p>
            উদাহরণস্বরূপ, কোনো মানুষের বয়স একটি Variable-এ রাখলে পরে সেই বয়স ব্যবহার করে বিভিন্ন কাজ করা সম্ভব।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            এতে code আরও <strong>organized</strong>, <strong>readable</strong> এবং <strong>reusable</strong> হয়।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Variable-এর Value কি পরিবর্তন করা যায়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Variable-এর Value কি পরিবর্তন করা যায়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ Variable তৈরির সময় <code className="font-mono font-bold text-terra-deep bg-sand px-1.5 py-0.5 rounded border border-line">val</code> অথবা <code className="font-mono font-bold text-kotlin bg-sand px-1.5 py-0.5 rounded border border-line">var</code> ব্যবহার করা হয়।
          </p>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-terra/30 bg-terra-soft/30 p-3.5">
              <span className="font-mono text-[15px] font-bold text-terra-deep">val</span>
              <p className="mt-1 text-[14.5px] text-ink/90">➔ value পরে পরিবর্তন করা যায় না।</p>
            </div>
            <div className="rounded-[12px] border border-kotlin/30 bg-kotlin-soft/30 p-3.5">
              <span className="font-mono text-[15px] font-bold text-kotlin-deep">var</span>
              <p className="mt-1 text-[14.5px] text-ink/90">➔ value পরে পরিবর্তন করা যায়।</p>
            </div>
          </div>

          <p className="text-[15.5px] text-soft">
            এদের পার্থক্য আমরা পরবর্তী Lesson-এ বিস্তারিতভাবে শিখব।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: মনে রাখার বিষয় */}
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
            মনে রাখার বিষয়
          </h2>
        </div>

        <ul className="mt-3.5 space-y-2 text-[16px] leading-[1.7] text-ink">
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Variable-এর মধ্যে data সংরক্ষণ করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Variable-এর একটি Name থাকে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Kotlin-এ Variable তৈরি করতে <code className="font-mono font-bold text-terra-deep">val</code> বা <code className="font-mono font-bold text-kotlin">var</code> ব্যবহার করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep">val</code> এবং <code className="font-mono font-bold text-kotlin">var</code> একই নয়; এদের ব্যবহারের মধ্যে গুরুত্বপূর্ণ পার্থক্য রয়েছে।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-medium text-ink italic">
          &laquo;সহজভাবে বললে, Variable হলো এমন একটি নামযুক্ত পাত্র যেখানে program-এর data রাখা যায় এবং প্রয়োজনে সেই data ব্যবহার করা যায়।&raquo;
        </div>
      </section>

      {/* Bottom Navigation Buttons: Exactly 2 horizontal buttons */}
      <footer className="mt-10 flex items-center justify-between gap-3 border-t border-line pt-6">
        <button
          type="button"
          onClick={onPrevLesson || onBack}
          className="btn btn-secondary flex-1"
        >
          ← পূর্ববর্তী
        </button>

        <button
          type="button"
          onClick={onNextLesson || onOpenMenu}
          className="btn btn-primary flex-1"
        >
          পরবর্তী →
        </button>
      </footer>
    </article>
  );
}
