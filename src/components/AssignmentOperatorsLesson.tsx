import { useState } from "react";

interface AssignmentOperatorsLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function AssignmentOperatorsLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: AssignmentOperatorsLessonProps) {
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
          Kotlin Assignment Operators
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Assignment Operator কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Assignment Operator কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            কোনো Variable-এর মধ্যে value সংরক্ষণ বা নতুন value assign করার জন্য যে Operator ব্যবহার করা হয়, তাকে <strong>Assignment Operator</strong> বলা হয়।
          </p>
          <p>
            Kotlin-এ এর প্রধান Assignment Operator হলো <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">=</code>।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            <strong>সহজভাবে বললে:</strong> Assignment Operator Variable-এর সঙ্গে একটি value যুক্ত করে।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Basic Assignment (=) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Basic Assignment (=)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">=</code> ব্যবহার করে কোনো Variable-এর মধ্যে value assign করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>BasicAssign1.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("var score = 80", "code-assign-1")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-assign-1" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> score = 80
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">80</code> value-টি <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">score</code> Variable-এ assign করা হয়েছে।
          </p>

          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">var</code> Variable-এর value পরে পরিবর্তন করতেও <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">=</code> ব্যবহার করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>BasicAssign2.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("var score = 80\nscore = 95", "code-assign-2")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-assign-2" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> score = 80
              {"\n"}
              score = 95
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">score</code>-এর আগের value <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">80</code> পরিবর্তন হয়ে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">95</code> হয়েছে।
          </p>

          <p className="text-[14.5px] italic text-soft">
            «<code className="font-mono font-bold text-ink not-italic">val</code> এবং <code className="font-mono font-bold text-ink not-italic">var</code>-এর মধ্যে value পরিবর্তনের পার্থক্য আমরা আগের Lesson-এ শিখেছি।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Compound Assignment Operators */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Compound Assignment Operators
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ কোনো Variable-এর বর্তমান value-এর সঙ্গে হিসাব করে সেই Variable-এই নতুন result assign করার জন্য কিছু সংক্ষিপ্ত Assignment Operator ব্যবহার করা যায়।
          </p>
          <p>
            যেমন—
          </p>

          {/* Table */}
          <div className="mt-2 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
            <table className="w-full text-left border-collapse min-w-[320px]">
              <thead>
                <tr className="border-b border-line bg-sand/60">
                  <th className="px-4 py-3 text-[14px] font-bold text-ink">Operator</th>
                  <th className="px-4 py-3 text-[14px] font-bold text-ink">উদাহরণ</th>
                  <th className="px-4 py-3 text-[14px] font-bold text-ink">প্রকৃত সমতুল্য রূপ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[14.5px]">
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">+=</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-ink">x += 5</td>
                  <td className="px-4 py-3 font-mono text-soft">x = x + 5</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">-=</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-ink">x -= 3</td>
                  <td className="px-4 py-3 font-mono text-soft">x = x - 3</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">*=</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-ink">x *= 2</td>
                  <td className="px-4 py-3 font-mono text-soft">x = x * 2</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">/=</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-ink">x /= 4</td>
                  <td className="px-4 py-3 font-mono text-soft">x = x / 4</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">%=</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-ink">x %= 2</td>
                  <td className="px-4 py-3 font-mono text-soft">x = x % 2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: += */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          +=
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable-এর বর্তমান value-এর সঙ্গে কোনো value যোগ করে নতুন value assign করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>PlusAssign.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("var score = 80\nscore += 10", "code-plus-assign")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-plus-assign" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> score = 80
              {"\n"}
              score += 10
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">score</code>-এর নতুন value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">90</code>।
          </p>

          {/* Clean 2-row representation for small screens */}
          <div className="rounded-[12px] bg-sand/70 p-3.5 border border-line text-ink">
            <span className="text-[13px] font-bold uppercase tracking-wider text-soft block">
              সহজ সমতুল্য হিসাব:
            </span>
            <div className="mt-1.5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 font-mono text-[15px]">
              <span className="font-bold text-terra-deep">score += 10</span>
              <span className="text-soft text-[14px]">মানে হলো →</span>
              <span className="font-bold text-leaf-deep">score = score + 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: -= */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          -=
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable-এর বর্তমান value থেকে কোনো value বিয়োগ করে নতুন value assign করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>MinusAssign.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("var score = 80\nscore -= 10", "code-minus-assign")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-minus-assign" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> score = 80
              {"\n"}
              score -= 10
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">score</code>-এর নতুন value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">70</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: *= */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          *=
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable-এর বর্তমান value-এর সঙ্গে কোনো value গুণ করে নতুন value assign করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">*=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>MulAssign.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("var number = 10\nnumber *= 3", "code-mul-assign")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-mul-assign" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> number = 10
              {"\n"}
              number *= 3
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর নতুন value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">30</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: /= */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          /=
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable-এর বর্তমান value-কে কোনো value দিয়ে ভাগ করে নতুন value assign করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">/=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>DivAssign.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("var number = 20\nnumber /= 4", "code-div-assign")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-div-assign" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> number = 20
              {"\n"}
              number /= 4
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর নতুন value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 8: %= */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          %=
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable-এর বর্তমান value-এর ভাগশেষ বের করে সেই result-টি আবার Variable-এ assign করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">%=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>ModAssign.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("var number = 10\nnumber %= 3", "code-mod-assign")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-mod-assign" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> number = 10
              {"\n"}
              number %= 3
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর নতুন value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">1</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 9: Assignment Operator মনে রাখার সহজ উপায় */}
      <section className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
        <h2 className="text-[19px] font-bold text-ink">
          Assignment Operator মনে রাখার সহজ উপায় 💡
        </h2>
        <p className="mt-2 text-[16px] text-soft leading-relaxed">
          Compound Assignment Operator-গুলোকে আলাদা আলাদা নিয়ম হিসেবে মুখস্থ করার প্রয়োজন নেই।
        </p>
        <p className="mt-2.5 text-[16px] text-ink leading-relaxed">
          প্রথমে Operator (<code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+</code>,{" "}
          <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-</code>,{" "}
          <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">*</code>,{" "}
          <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">/</code>,{" "}
          <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">%</code>) কী কাজ করে সেটা বোঝো। তার সঙ্গে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">=</code> যুক্ত হলে সেই হিসাবের result আবার Variable-এ assign হয়।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 10: মনে রাখার বিষয় */}
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
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">=</code> → value assign করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+=</code> → যোগ করে assign করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-=</code> → বিয়োগ করে assign করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">*=</code> → গুণ করে assign করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">/=</code> → ভাগ করে assign করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">%=</code> → ভাগশেষ বের করে assign করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Compound Assignment Operator সাধারণত <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">var</code> Variable-এর সঙ্গে ব্যবহার করা হয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: Assignment Operator-এর কাজ হলো Variable-এ value দেওয়া বা হিসাবের পর নতুন value আবার সেই Variable-এ assign করা।&raquo;
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
