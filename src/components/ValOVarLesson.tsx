import { useState } from "react";

interface ValOVarLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function ValOVarLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: ValOVarLessonProps) {
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
          val ও var
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: মূল পার্থক্য */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          val এবং var-এর মূল পার্থক্য
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          Kotlin-এ variable ডিক্লেয়ার করার জন্য এই দুটি keyword ব্যবহার করা হয়। এদের মধ্যে সবচেয়ে বড় পার্থক্য হলো <strong>মান পরিবর্তন করা যাবে কি যাবে না</strong>।
        </p>

        {/* Comparison Cards Grid */}
        <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
          {/* val Card */}
          <div className="rounded-[16px] border-2 border-terra/30 bg-terra-soft/30 p-4.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="rounded-[8px] bg-terra-deep px-3 py-1 font-mono text-[16px] font-bold text-white shadow-2xs">
                val
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-terra-deep">
                Immutable (অপরিবর্তনশীল)
              </span>
            </div>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink font-medium">
              একবার মান দিলে <strong>আর কখনোই পরিবর্তন করা যায় না</strong>। এটি সম্পূর্ণ Read-only।
            </p>
            <div className="mt-3 rounded-[10px] bg-card p-3 font-mono text-[14px] border border-line">
              <span className="text-terra-deep font-bold">val</span> birthYear = 2002
            </div>
          </div>

          {/* var Card */}
          <div className="rounded-[16px] border-2 border-kotlin/30 bg-kotlin-soft/30 p-4.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="rounded-[8px] bg-kotlin px-3 py-1 font-mono text-[16px] font-bold text-white shadow-2xs">
                var
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-kotlin">
                Mutable (পরিবর্তনযোগ্য)
              </span>
            </div>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink font-medium">
              প্রয়োজন অনুযায়ী পরবর্তীতে <strong>যেকোনো সময় মান পরিবর্তন করা যায়</strong>।
            </p>
            <div className="mt-3 rounded-[10px] bg-card p-3 font-mono text-[14px] border border-line">
              <span className="text-kotlin font-bold">var</span> currentAge = 22
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: val কীভাবে কাজ করে? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-terra-soft font-mono text-[13px] font-bold text-terra-deep">
            ১
          </span>
          <span>val কীভাবে কাজ করে?</span>
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">val</code> শব্দটি এসেছে <strong>Value</strong> থেকে। একবার <code className="font-mono text-ink">val</code> দিয়ে মান নির্ধারণ করার পর তা পরিবর্তন করতে গেলে Kotlin Compiler লাল দাগ (Error) দেবে!
        </p>

        {/* val error demo code */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>ValErrorDemo.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'fun main() {\n    val pi = 3.1416\n    pi = 3.15 // ❌ Error: Val cannot be reassigned\n}',
                  "code-val-error"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-val-error" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">fun</span>{" "}
            <span className="text-[#D4C4F5]">main</span>() &#123;
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">val</span> pi = 3.1416
            {"\n"}
            {"    "}pi = 3.15{" "}
            <span className="text-[#E06C75] font-bold">&#47;&#47; ❌ Error: Val cannot be reassigned</span>
            {"\n"}
            &#125;
          </pre>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: var কীভাবে কাজ করে? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-kotlin-soft font-mono text-[13px] font-bold text-kotlin-deep">
            ২
          </span>
          <span>var কীভাবে কাজ করে?</span>
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">var</code> শব্দটি এসেছে <strong>Variable</strong> থেকে। এর মান যেকোনো সময় নতুন করে অ্যাসাইন (পুনঃনির্ধারণ) করা যায়।
        </p>

        {/* var success code */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>VarDemo.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'fun main() {\n    var score = 10\n    println(score) // আউটপুট: 10\n    \n    score = 25     // ✅ মান পরিবর্তন করা হলো\n    println(score) // আউটপুট: 25\n}',
                  "code-var-success"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-var-success" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">fun</span>{" "}
            <span className="text-[#D4C4F5]">main</span>() &#123;
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">var</span> score = 10
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(score){" "}
            <span className="text-[#8FA1B3] italic">&#47;&#47; আউটপুট: 10</span>
            {"\n\n"}
            {"    "}score = 25{" "}
            <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ মান পরিবর্তন হলো</span>
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(score){" "}
            <span className="text-[#8FA1B3] italic">&#47;&#47; আউটপুট: 25</span>
            {"\n"}
            &#125;
          </pre>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: দ্রুত তুলনামূলক টেবিল */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          এক নজরে তুলনা
        </h2>
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">বৈশিষ্ট্য</th>
                <th className="px-4 py-3 text-[14px] font-bold text-terra-deep">val</th>
                <th className="px-4 py-3 text-[14px] font-bold text-kotlin">var</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[15px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-medium text-ink">পরিবর্তনযোগ্যতা</td>
                <td className="px-4 py-3 text-soft">না (Immutable)</td>
                <td className="px-4 py-3 text-ink font-semibold">হ্যাঁ (Mutable)</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-medium text-ink">পুনরায় মান দেওয়া</td>
                <td className="px-4 py-3 text-terra-deep font-semibold">সম্ভব নয়</td>
                <td className="px-4 py-3 text-leaf-deep font-semibold">সম্ভব</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-medium text-ink">উৎস শব্দ</td>
                <td className="px-4 py-3 font-mono text-soft">Value</td>
                <td className="px-4 py-3 font-mono text-soft">Variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: মনে রাখার বিষয় */}
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
            <span>
              <code className="font-mono font-bold text-terra-deep">val</code> → Value পুনরায় assign করা যায় না
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>
              <code className="font-mono font-bold text-kotlin">var</code> → Value পুনরায় assign করা যায়
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>দুটিই Variable তৈরির জন্য ব্যবহৃত হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Value পরিবর্তনের প্রয়োজন না থাকলে <code className="font-mono font-bold text-terra-deep">val</code> ব্যবহার করা ভালো।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          সহজভাবে মনে রাখো: <span className="font-mono text-terra-deep">val</span> = একবার assign, <span className="font-mono text-kotlin">var</span> = প্রয়োজনে আবার assign।
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
