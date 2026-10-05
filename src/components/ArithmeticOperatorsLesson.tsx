import { useState } from "react";

interface ArithmeticOperatorsLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function ArithmeticOperatorsLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: ArithmeticOperatorsLessonProps) {
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
          Kotlin Arithmetic Operators
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Arithmetic Operator কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Arithmetic Operator কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ গাণিতিক হিসাব করার জন্য যে Operator ব্যবহার করা হয়, তাকে <strong>Arithmetic Operator</strong> বলা হয়।
          </p>
          <p>
            যেমন—যোগ, বিয়োগ, গুণ, ভাগ এবং ভাগশেষ বের করার জন্য Kotlin-এ বিভিন্ন Arithmetic Operator রয়েছে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Kotlin-এর Arithmetic Operators Table */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এর Arithmetic Operators
        </h2>

        {/* Operators Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[320px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Operator</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">নাম</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">কাজ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">+</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Addition</td>
                <td className="px-4 py-3 text-ink/90">যোগ</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">-</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Subtraction</td>
                <td className="px-4 py-3 text-ink/90">বিয়োগ</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">*</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Multiplication</td>
                <td className="px-4 py-3 text-ink/90">গুণ</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">/</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Division</td>
                <td className="px-4 py-3 text-ink/90">ভাগ</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">%</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Modulus</td>
                <td className="px-4 py-3 text-ink/90">ভাগশেষ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Addition (+) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Addition (+)
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            দুটি বা একাধিক Number যোগ করার জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Addition.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("val result = 10 + 5", "code-add")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-add" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 + 5
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">10</code> এবং <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code> যোগ করে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এর value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">15</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Subtraction (-) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Subtraction (-)
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি Number থেকে অন্য Number বিয়োগ করার জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Subtraction.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("val result = 10 - 5", "code-sub")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-sub" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 - 5
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এর value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Multiplication (*) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Multiplication (*)
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            দুটি Number গুণ করার জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">*</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Multiplication.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("val result = 10 * 5", "code-mul")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-mul" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 * 5
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এর value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">50</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: Division (/) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Division (/)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি Number-কে অন্য Number দিয়ে ভাগ করার জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">/</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Division.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("val result = 10 / 5", "code-div1")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-div1" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 / 5
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এর value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">2</code>।
          </p>

          <div className="rounded-[12px] border-l-4 border-amber-500 bg-sand/60 p-4 text-[16px] text-ink space-y-2">
            <p>
              তবে <strong>Integer-এর মধ্যে Division করার সময়</strong> একটি গুরুত্বপূর্ণ বিষয় মনে রাখতে হবে—দশমিক অংশ সংরক্ষণ করা হয় না।
            </p>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 5 / 2
            </pre>
          </div>

          <p>
            এখানে result হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">2</code>, <code className="font-mono font-bold text-soft line-through">2.5</code> নয়।
          </p>

          <p>
            দশমিক result পেতে Number-এর Type-ও দশমিক হতে হবে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 5.0 / 2
            </pre>
          </div>

          <p>
            এখানে result হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">2.5</code>।
          </p>

          <p className="text-[14.5px] italic text-soft">
            «Integer ও Decimal Division-এর এই পার্থক্য পরবর্তী Number-related Lesson-এ আরও বিস্তারিতভাবে আলোচনা করা হবে।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: Modulus (%) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Modulus (%)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি Number-কে অন্য Number দিয়ে ভাগ করার পর যে ভাগশেষ থাকে, তা বের করার জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">%</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Modulus.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("val result = 10 % 3", "code-mod")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-mod" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 % 3
            </pre>
          </div>

          <p>
            <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">10</code>-কে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">3</code> দিয়ে ভাগ করলে ভাগশেষ থাকে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">1</code>।
          </p>

          <p>
            তাই <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এর value হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">1</code>।
          </p>

          <p>
            Modulus ব্যবহার করে কোনো Number জোড় নাকি বিজোড়—এ ধরনের বিষয়ও যাচাই করা যায়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 8: Arithmetic Operators-এর ব্যবহার */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Arithmetic Operators-এর ব্যবহার
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একাধিক Arithmetic Operator একই Expression-এর মধ্যে ব্যবহার করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Expression.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("val result = 10 + 5 * 2", "code-expr")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-expr" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 + 5 * 2
            </pre>
          </div>

          <p>
            এখানে কোন হিসাবটি আগে হবে, তা <strong>Operator Precedence</strong>-এর ওপর নির্ভর করে।
          </p>

          <p className="text-[14.5px] italic text-soft">
            «Operator কোন ক্রমে কাজ করে, তা Operator Precedence Lesson-এ বিস্তারিতভাবে শেখা হবে।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 9: মনে রাখার বিষয় */}
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
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded">+</code> → যোগ</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded">-</code> → বিয়োগ</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded">*</code> → গুণ</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded">/</code> → ভাগ</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded">%</code> → ভাগশেষ</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Integer Division-এ দশমিক অংশ থাকে না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক Operator থাকলে তাদের কাজের ক্রম গুরুত্বপূর্ণ।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: পাটিগণিতের যোগ-বিয়োগ-গুণ-ভাগ এবং ভাগশেষ করার হাতিয়ারই হলো Arithmetic Operators!&raquo;
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
