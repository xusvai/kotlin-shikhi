import { useState } from "react";

interface ValueChangeLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function ValueChangeLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: ValueChangeLessonProps) {
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
          Variable-এ Value পরিবর্তন
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Value পরিবর্তন কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Value পরিবর্তন কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Program চলার সময় কোনো Variable-এর মধ্যে থাকা value-এর পরিবর্তে নতুন value দেওয়াকে <strong>Value পরিবর্তন</strong> বা <strong>Reassignment</strong> বলা হয়।
          </p>
          <p>
            তবে Kotlin-এ সব Variable-এর value পরিবর্তন করা যায় না। এটি Variable তৈরির সময় <code className="font-mono text-terra-deep font-bold">val</code> নাকি <code className="font-mono text-kotlin font-bold">var</code> ব্যবহার করা হয়েছে, তার ওপর নির্ভর করে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: "var" দিয়ে Value পরিবর্তন */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono text-kotlin font-bold">var</code> দিয়ে Value পরিবর্তন
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono text-kotlin font-bold">var</code> ব্যবহার করা Variable-এর value পরে পরিবর্তন করা যায়।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>VarReassignment.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "var score = 80\nscore = 95",
                    "code-var-reassign"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-var-reassign" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> score = 80
              {"\n"}
              score = 95{" "}
              <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ মান সফলভাবে পরিবর্তন হলো</span>
            </pre>
          </div>

          <p>
            এখানে প্রথমে <code className="font-mono text-ink font-semibold">score</code>-এর value ছিল <code className="font-mono text-ink font-semibold">80</code>। পরে নতুন করে <code className="font-mono text-ink font-semibold">95</code> assign করা হয়েছে।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            তাই এখন <code className="font-mono text-ink font-semibold">score</code>-এর value হলো <code className="font-mono text-ink font-semibold">95</code>।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: "val" দিয়ে Value পরিবর্তন */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono text-terra-deep font-bold">val</code> দিয়ে Value পরিবর্তন
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono text-terra-deep font-bold">val</code> ব্যবহার করা Variable-এ একবার value assign করার পর সেটিতে নতুন value assign করা যায় না।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>ValError.kt</span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-white/70">Compiler Error</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> score = 80
              {"\n"}
              score = 95{" "}
              <span className="text-[#E06C75] font-semibold">&#47;&#47; ❌ Error: Val cannot be reassigned</span>
            </pre>
          </div>

          <p>
            এখানে দ্বিতীয় লাইনে নতুন value দেওয়ার চেষ্টা করা হয়েছে। তাই Kotlin error দেখাবে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Value পরিবর্তনের সময় Type */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Value পরিবর্তনের সময় Type
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি Variable-এর value পরিবর্তন করার সময় নতুন value-টি সেই Variable-এর data type-এর সঙ্গে সামঞ্জস্যপূর্ণ হতে হবে।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>TypeCheck.kt</span>
              <span className="text-white/60">Type Match</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> score = 80
              {"\n"}
              score = 95{" "}
              <span className="text-[#98C379] font-semibold">&#47;&#47; ✅ দুটিই Int ধরনের সংখ্যা</span>
            </pre>
          </div>

          <p>
            এখানে দুটিই <code className="font-mono text-ink font-semibold">Int</code> ধরনের value।
          </p>

          {/* Type Mismatch Warning */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>TypeMismatchDemo.kt</span>
              <span className="text-white/60">Compiler Check</span>
            </div>
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> score = 80
              {"\n"}
              score = <span className="text-[#E6D3A1]">&quot;Pass&quot;</span>{" "}
              <span className="text-[#E06C75] font-semibold">
                &#47;&#47; ❌ Error: Type mismatch (Required: Int, Found: String)
              </span>
            </pre>
          </div>

          <p className="text-[15.5px] text-soft">
            কিন্তু ভিন্ন ধরনের data সরাসরি assign করলে এমন সমস্যা হতে পারে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Reassignment আর নতুন Variable তৈরি এক নয় */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Reassignment আর নতুন Variable তৈরি এক নয়
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একই Variable-এ নতুন value দেওয়াকে Reassignment বলা হয়।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>ReassignmentVsNew.kt</span>
              <span className="text-white/60">Concept</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> age = 24{" "}
              <span className="text-[#8FA1B3] italic">&#47;&#47; Variable তৈরি হলো</span>
              {"\n"}
              age = 25{" "}
              <span className="text-[#98C379] font-semibold">&#47;&#47; বিদ্যমান পাত্রে নতুন মান Reassign হলো</span>
            </pre>
          </div>

          <div className="rounded-[12px] border border-line bg-card p-4 shadow-2xs text-[16px] text-ink/90 leading-relaxed">
            এখানে নতুন Variable তৈরি হয়নি। <code className="font-mono text-terra-deep font-semibold">age</code> Variable-টির value পরিবর্তন হয়েছে।
          </div>
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
            <span>
              <code className="font-mono font-bold text-kotlin">var</code> → value পরিবর্তন করা যায়।
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>
              <code className="font-mono font-bold text-terra-deep">val</code> → পুনরায় value assign করা যায় না।
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>নতুন value assign করাকে Reassignment বলা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Reassignment করার সময় value-এর type সামঞ্জস্যপূর্ণ হতে হবে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Value পরিবর্তন মানে নতুন Variable তৈরি করা নয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-medium text-ink italic">
          &laquo;সহজভাবে মনে রাখো: <span className="font-mono font-bold text-kotlin">var</span> হলে value বদলানো যায়, <span className="font-mono font-bold text-terra-deep">val</span> হলে একবার assign করার পর আর নতুন value দেওয়া যায় না।&raquo;
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
