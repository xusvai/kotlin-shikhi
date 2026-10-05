import { useState } from "react";

interface SyntaxLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function SyntaxLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: SyntaxLessonProps) {
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
          Kotlin Syntax
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Syntax কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Syntax কী?
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            যেকোনো ভাষার যেমন ব্যাকরণ বা গ্রামার থাকে, ঠিক তেমনই একটি programming language-এ code সঠিকভাবে লেখার নিয়মকানুনকে <strong>Syntax</strong> বলা হয়।
          </p>
          <p>
            Kotlin-এর Syntax বিশেষভাবে তৈরি করা হয়েছে যেন তা অত্যন্ত <strong>সহজ, সংক্ষিপ্ত ও পড়তে সুবিধাজনক (readable)</strong> হয়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: একটি সাধারণ Kotlin Program-এর গঠন */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin Program-এর মূল গঠন
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          একটি আদর্শ Kotlin program দেখতে সাধারণত এরকম হয়:
        </p>

        {/* Code Snippet with Copy */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>Main.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'fun main() {\n    println("Hello, Kotlin!")\n}',
                  "code-syntax"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-syntax" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[15px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">fun</span>{" "}
            <span className="text-[#D4C4F5]">main</span>() &#123;
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(
            <span className="text-[#E6D3A1]">&quot;Hello, Kotlin!&quot;</span>)
            {"\n"}
            &#125;
          </pre>
        </div>

        {/* Breakdown Card */}
        <div className="mt-5 space-y-3">
          <p className="text-[16px] font-bold text-ink">
            এই কোডের প্রতিটি অংশের অর্থ:
          </p>

          <div className="space-y-2.5">
            <div className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-kotlin" />
              <div className="text-[15.5px] leading-[1.6]">
                <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">
                  fun
                </code>{" "}
                — Kotlin-এ function ডিক্লেয়ার করার জন্য ব্যবহৃত মূল keyword।
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terra" />
              <div className="text-[15.5px] leading-[1.6]">
                <code className="font-mono font-bold text-terra bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">
                  main()
                </code>{" "}
                — যেকোনো Kotlin program চলার এন্ট্রি পয়েন্ট (Entry Point)। Program চলা এখান থেকেই শুরু হয়।
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-leaf" />
              <div className="text-[15.5px] leading-[1.6]">
                <code className="font-mono font-bold text-ink bg-sand px-1.5 py-0.5 rounded border border-line">
                  &#123; ... &#125;
                </code>{" "}
                — কার্লি ব্র্যাকেট হলো কোড ব্লক। এর ভেতরে যা লেখা থাকে, function কল হলে ঠিক সেটুকুই রান করে।
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-kotlin" />
              <div className="text-[15.5px] leading-[1.6]">
                <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">
                  println()
                </code>{" "}
                — ব্র্যাকেটের ভেতরের ভ্যালু বা টেক্সট আউটপুটে প্রদর্শন করে পরবর্তী লাইনে চলে যায়।
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: সেমিকোলন (;) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          সেমিকোলন (<code className="font-mono text-terra font-bold">;</code>)
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            অনেক প্রোগ্রামিং ভাষায় প্রতি লাইনের শেষে সেমিকোলন (<code className="font-mono font-bold text-terra bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">;</code>) দেওয়া বাধ্যতামূলক হলেও, <strong>Kotlin-এ সেমিকোলন দিতে হয় না।</strong>
          </p>

          {/* Simple comparison card */}
          <div className="grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-line bg-card p-3.5">
              <span className="text-[12px] font-bold uppercase tracking-wider text-soft">
                অন্যান্য ভাষা (Java/C++)
              </span>
              <pre className="mt-1 font-mono text-[14.5px] text-ink bg-sand/60 px-2.5 py-1.5 rounded border border-line">
                println(&quot;Hello&quot;);
              </pre>
              <p className="mt-1 text-[13px] text-soft">শেষে <code className="font-mono text-terra">;</code> বাধ্যতামূলক</p>
            </div>

            <div className="rounded-[12px] border border-leaf/40 bg-leaf-soft/40 p-3.5">
              <span className="text-[12px] font-bold uppercase tracking-wider text-leaf-deep">
                Kotlin (সহজ ও পরিচ্ছন্ন)
              </span>
              <pre className="mt-1 font-mono text-[14.5px] font-semibold text-leaf-deep bg-card px-2.5 py-1.5 rounded border border-line">
                println(&quot;Hello&quot;)
              </pre>
              <p className="mt-1 text-[13px] text-leaf-deep">কোনো <code className="font-mono text-leaf-deep">;</code> প্রয়োজন নেই</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Case Sensitivity */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Case Sensitivity (ছোট-বড় হাতের অক্ষরের নিয়ম)
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin একটি <strong>Case-Sensitive</strong> ল্যাঙ্গুয়েজ। এর মানে হলো বড় হাতের অক্ষর এবং ছোট হাতের অক্ষরকে সম্পূর্ণ ভিন্ন হিসেবে বিবেচনা করা হয়।
          </p>

          {/* Do and Don't comparison */}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[12px] border border-leaf/40 bg-leaf-soft/40 p-4">
              <span className="font-bold text-leaf-deep flex items-center gap-1.5 text-[15px]">
                ✓ সঠিক Syntax
              </span>
              <pre className="mt-2 font-mono text-[14px] font-semibold text-ink bg-card p-2.5 rounded border border-line">
                println(&quot;Hi&quot;)
              </pre>
              <p className="mt-2 text-[13px] text-soft">
                সবগুলো ছোট হাতের অক্ষরে লেখা।
              </p>
            </div>

            <div className="rounded-[12px] border border-terra/40 bg-terra-soft/40 p-4">
              <span className="font-bold text-terra-deep flex items-center gap-1.5 text-[15px]">
                ✕ ভুল Syntax
              </span>
              <pre className="mt-2 font-mono text-[14px] font-semibold text-terra-deep bg-card p-2.5 rounded border border-line">
                Println(&quot;Hi&quot;)
              </pre>
              <p className="mt-2 text-[13px] text-soft">
                প্রথম অক্ষর বড় হাতের &apos;P&apos; দিলে তা এরর দেখাবে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: মনে রাখো */}
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
            Syntax মনে রাখার মূল বিষয়
          </h2>
        </div>
        <ul className="mt-3.5 space-y-2 text-[16px] leading-[1.65] text-ink">
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>প্রোগ্রামের শুরু হয় <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">fun main()</code> দিয়ে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>লাইনের শেষে সেমিকোলন (<code className="font-mono text-terra font-bold">;</code>) দেওয়ার প্রয়োজন নেই।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>Kotlin সম্পূর্ণ Case-Sensitive, তাই কি-ওয়ার্ড ও ফাংশনের বানান সবসময় সঠিক কেসে লিখতে হবে।</span>
          </li>
        </ul>
      </section>

      {/* Bottom Navigation Buttons */}
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
          onClick={onNextLesson}
          className="btn btn-primary flex-1"
        >
          পরবর্তী →
        </button>
      </footer>
    </article>
  );
}
