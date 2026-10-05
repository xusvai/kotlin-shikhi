import { useState } from "react";

interface NamingRulesLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function NamingRulesLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: NamingRulesLessonProps) {
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
          Variable Naming Rules
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Variable-এর Name কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Variable-এর Name কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable তৈরি করার সময় আমরা সেটিকে একটি Name দিই। এই Name ব্যবহার করেই পরে Variable-এর value-কে access বা পরিবর্তন করা হয়।
          </p>
          <p>
            তবে Variable-এর Name ইচ্ছামতো লেখা যায় না। Kotlin-এ Variable-এর Name লেখার কিছু নিয়ম রয়েছে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Variable Naming-এর মূল নিয়ম */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Variable Naming-এর মূল নিয়ম
        </h2>

        <div className="mt-5 space-y-5">
          {/* Rule 1 */}
          <div className="rounded-[16px] border border-line bg-card p-4.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[12px] font-bold text-terra-deep">
                ১
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Name অবশ্যই অক্ষর, underscore (<code className="font-mono text-terra-deep font-semibold">_</code>) দিয়ে শুরু হতে হবে
              </h3>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">
              Number (সংখ্যা) দিয়ে ভ্যারিয়েবলের নাম শুরু করা যাবে না।
            </p>

            {/* IDE Style Code Box */}
            <div className="mt-3 overflow-hidden rounded-[12px] border border-line bg-code text-[#F6F1EA]">
              <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-1.5 text-[11px] font-mono text-[#E6D3A1]">
                <span>Rule1.kt</span>
                <span className="text-white/60">Character Start</span>
              </div>
              <pre className="p-3.5 font-mono text-[13.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">val</span> name = <span className="text-[#E6D3A1]">&quot;Shihab&quot;</span>{" "}
                <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ সঠিক</span>
                {"\n"}
                <span className="text-[#F0B48A]">val</span> _name = <span className="text-[#E6D3A1]">&quot;Shihab&quot;</span>{" "}
                <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ সঠিক</span>
                {"\n\n"}
                <span className="text-[#F0B48A]">val</span> 1name = <span className="text-[#E6D3A1]">&quot;Shihab&quot;</span>{" "}
                <span className="text-[#E06C75] font-semibold">&#47;&#47; ❌ ভুল (Number দিয়ে শুরু করা যাবে না)</span>
              </pre>
            </div>
          </div>

          {/* Rule 2 */}
          <div className="rounded-[16px] border border-line bg-card p-4.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[12px] font-bold text-terra-deep">
                ২
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Name-এর মধ্যে Letter, Number এবং Underscore ব্যবহার করা যায়
              </h3>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">
              মাঝখানে বা শেষে সংখ্যা ও আন্ডারস্কোর রাখা বৈধ, তবে শুরুতে নয়।
            </p>

            {/* IDE Style Code Box */}
            <div className="mt-3 overflow-hidden rounded-[12px] border border-line bg-code text-[#F6F1EA]">
              <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-1.5 text-[11px] font-mono text-[#E6D3A1]">
                <span>Rule2.kt</span>
                <span className="text-white/60">Letters &amp; Numbers</span>
              </div>
              <pre className="p-3.5 font-mono text-[13.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">val</span> player1 = <span className="text-[#E6D3A1]">&quot;Messi&quot;</span>{" "}
                <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ সঠিক</span>
                {"\n"}
                <span className="text-[#F0B48A]">val</span> player_name = <span className="text-[#E6D3A1]">&quot;Messi&quot;</span>{" "}
                <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ সঠিক</span>
              </pre>
            </div>
          </div>

          {/* Rule 3 */}
          <div className="rounded-[16px] border border-line bg-card p-4.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[12px] font-bold text-terra-deep">
                ৩
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Name-এর মধ্যে Space (ফাঁকা জায়গা) ব্যবহার করা যায় না
              </h3>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">
              <code className="font-mono text-terra-deep font-semibold">player name</code> এভাবে স্পেস দিয়ে লেখা যাবে না। একাধিক শব্দ থাকলে সাধারণত <strong>camelCase</strong> ব্যবহার করা হয়।
            </p>

            {/* IDE Style Code Box */}
            <div className="mt-3 overflow-hidden rounded-[12px] border border-line bg-code text-[#F6F1EA]">
              <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-1.5 text-[11px] font-mono text-[#E6D3A1]">
                <span>Rule3.kt</span>
                <span className="text-white/60">No Space</span>
              </div>
              <pre className="p-3.5 font-mono text-[13.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">val</span> playerName = <span className="text-[#E6D3A1]">&quot;Messi&quot;</span>{" "}
                <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ সঠিক (camelCase)</span>
                {"\n"}
                <span className="text-[#F0B48A]">val</span> playerAge = 24{" "}
                <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ সঠিক</span>
                {"\n\n"}
                <span className="text-[#8FA1B3] italic">&#47;&#47; val player name = &quot;Messi&quot; ❌ ভুল! স্পেস অবৈধ</span>
              </pre>
            </div>
          </div>

          {/* Rule 4 */}
          <div className="rounded-[16px] border border-line bg-card p-4.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[12px] font-bold text-terra-deep">
                ৪
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Variable Name Case-Sensitive (বড় ও ছোট হাতের অক্ষরে পার্থক্য রয়েছে)
              </h3>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">
              Kotlin-এ বড় হাতের এবং ছোট হাতের অক্ষর আলাদা হিসেবে বিবেচিত হয়।
            </p>

            {/* IDE Style Code Box */}
            <div className="mt-3 overflow-hidden rounded-[12px] border border-line bg-code text-[#F6F1EA]">
              <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-1.5 text-[11px] font-mono text-[#E6D3A1]">
                <span>Rule4.kt</span>
                <span className="text-white/60">Case Sensitive</span>
              </div>
              <pre className="p-3.5 font-mono text-[13.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">val</span> name = <span className="text-[#E6D3A1]">&quot;Shihab&quot;</span>
                {"\n"}
                <span className="text-[#F0B48A]">val</span> Name = <span className="text-[#E6D3A1]">&quot;Kotlin&quot;</span>
                {"\n\n"}
                <span className="text-[#8FA1B3] italic">&#47;&#47; এখানে name এবং Name দুটি সম্পূর্ণ আলাদা Variable</span>
              </pre>
            </div>
          </div>

          {/* Rule 5 */}
          <div className="rounded-[16px] border border-line bg-card p-4.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[12px] font-bold text-terra-deep">
                ৫
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                Kotlin-এর Reserved Keyword ব্যবহার করা যায় না
              </h3>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">
              Kotlin-এর কিছু শব্দ language-এর নিজস্ব কাজে ব্যবহৃত হয়। যেমন: <code className="font-mono text-ink font-semibold">val</code>, <code className="font-mono text-ink font-semibold">var</code>, <code className="font-mono text-ink font-semibold">fun</code>, <code className="font-mono text-ink font-semibold">class</code> ইত্যাদি। তাই এগুলো সাধারণভাবে Variable-এর Name হিসেবে ব্যবহার করা যাবে না।
            </p>

            {/* IDE Style Code Box */}
            <div className="mt-3 overflow-hidden rounded-[12px] border border-line bg-code text-[#F6F1EA]">
              <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-1.5 text-[11px] font-mono text-[#E6D3A1]">
                <span>Rule5.kt</span>
                <span className="text-white/60">Keywords</span>
              </div>
              <pre className="p-3.5 font-mono text-[13.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">val</span> <span className="text-[#E06C75] font-semibold">val</span> = 10{" "}
                <span className="text-[#E06C75] font-semibold">&#47;&#47; ❌ ভুল (Reserved Keyword ব্যবহার করা যাবে না)</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: ভালো Variable Name কেমন হওয়া উচিত? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          ভালো Variable Name কেমন হওয়া উচিত?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable-এর Name এমন হওয়া উচিত, যাতে Name দেখেই বোঝা যায় Variable-এর মধ্যে কী ধরনের data রাখা হয়েছে।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>MeaningfulNames.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    'val studentName = "Rahim"\nval studentAge = 20\nval totalScore = 95',
                    "code-meaningful"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-meaningful" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> studentName = <span className="text-[#E6D3A1]">&quot;Rahim&quot;</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> studentAge = 20
              {"\n"}
              <span className="text-[#F0B48A]">val</span> totalScore = 95
            </pre>
          </div>

          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[15.5px] text-ink leading-relaxed">
            এগুলো <code className="font-mono text-ink font-semibold">x</code>, <code className="font-mono text-ink font-semibold">a</code>, <code className="font-mono text-ink font-semibold">data1</code>-এর মতো অস্পষ্ট Name-এর চেয়ে code বোঝার জন্য অনেক বেশি সুবিধাজনক।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Kotlin Naming Convention */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin Naming Convention
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ সাধারণ Variable ও Function-এর Name লেখার সময় <strong>camelCase convention</strong> অনুসরণ করা হয়।
          </p>
          <p>
            একাধিক শব্দ থাকলে প্রথম শব্দটি ছোট হাতের অক্ষরে এবং পরের প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের অক্ষরে লেখা হয়।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>CamelCaseConvention.kt</span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-white/70">Standard</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> firstName = <span className="text-[#E6D3A1]">&quot;Rahim&quot;</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> phoneNumber = <span className="text-[#E6D3A1]">&quot;01234567890&quot;</span>
            </pre>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: মনে রাখার বিষয় */}
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
            <span>Variable Name number দিয়ে শুরু করা যায় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Name-এর মধ্যে সাধারণত Letter, Number এবং <code className="font-mono text-ink font-semibold">&quot;_&quot;</code> ব্যবহার করা যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Name-এর মধ্যে Space ব্যবহার করা যায় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Kotlin Case-Sensitive।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Reserved Keyword সাধারণভাবে Variable Name হিসেবে ব্যবহার করা যায় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক শব্দের Name-এর জন্য camelCase ব্যবহার করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>অর্থপূর্ণ Name ব্যবহার করলে code পড়া ও বোঝা সহজ হয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-medium text-ink italic">
          &laquo;সহজভাবে বললে, Variable-এর Name এমনভাবে দাও, যাতে code দেখলেই বোঝা যায় Variable-টি কীসের জন্য ব্যবহার করা হয়েছে।&raquo;
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
