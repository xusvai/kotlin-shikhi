import { useState } from "react";

interface UnaryOperatorsLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function UnaryOperatorsLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: UnaryOperatorsLessonProps) {
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
          Kotlin Unary Operators
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Unary Operator কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Unary Operator কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            যে Operator একটি মাত্র value বা operand-এর ওপর কাজ করে, তাকে <strong>Unary Operator</strong> বলা হয়।
          </p>
          <p>
            আগের Arithmetic বা Comparison Operator-এ সাধারণত দুইটি value নিয়ে কাজ করা হয়। কিন্তু Unary Operator-এর ক্ষেত্রে মাত্র একটি value বা operand থাকে।
          </p>

          <p className="text-[16px] font-semibold text-ink">উদাহরণ:</p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>UnaryIntro.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard("val number = 5\nval result = -number", "code-intro")
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-intro" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> number = 5
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = -number
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-</code> একটি Unary Operator, কারণ এটি শুধু <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর ওপর কাজ করছে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Kotlin-এর প্রধান Unary Operators Table */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এর প্রধান Unary Operators
        </h2>

        {/* Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Operator</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">কাজ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">+</code>
                </td>
                <td className="px-4 py-3 text-ink/90">Positive value নির্দেশ করে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">-</code>
                </td>
                <td className="px-4 py-3 text-ink/90">সংখ্যার sign পরিবর্তন করে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">++</code>
                </td>
                <td className="px-4 py-3 text-ink/90">Value ১ বাড়ায়</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">--</code>
                </td>
                <td className="px-4 py-3 text-ink/90">Value ১ কমায়</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">!</code>
                </td>
                <td className="px-4 py-3 text-ink/90">Boolean value উল্টে দেয়</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: "+" Unary Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          &quot;+&quot; Unary Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+</code> কোনো Number-এর positive মান নির্দেশ করতে ব্যবহার করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> number = 5
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = +number
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এর মান হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code>।
          </p>
          <p className="text-[15px] text-soft">
            সাধারণত positive number লেখার সময় <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+</code> ব্যবহার করা প্রয়োজন হয় না।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: "-" Unary Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          &quot;-&quot; Unary Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-</code> কোনো সংখ্যার sign পরিবর্তন করে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> number = 5
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = -number
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code> হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-5</code>।
          </p>

          <p>
            আবার negative value-এর সামনে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-</code> ব্যবহার করলে সেটি positive হয়ে যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> number = -5
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = -number
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code> হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: "++" Increment Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          &quot;++&quot; Increment Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++</code> কোনো <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">var</code>-এর value ১ বাড়ায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> number = 5
              {"\n"}
              number++
            </pre>
          </div>

          <p>
            এখন <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর মান হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">6</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: "--" Decrement Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          &quot;--&quot; Decrement Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code> কোনো <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">var</code>-এর value ১ কমায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> number = 5
              {"\n"}
              number--
            </pre>
          </div>

          <p>
            এখন <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর মান হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">4</code>।
          </p>

          <div className="rounded-[12px] border-l-4 border-amber-500 bg-sand/60 p-4 text-[16px] text-ink leading-relaxed">
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++</code> এবং <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code> ব্যবহার করলে যে variable-এর value পরিবর্তন হবে, সেটি অবশ্যই <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">var</code> হতে হবে।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: "!" NOT Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          &quot;!&quot; NOT Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!</code> একটি Boolean value-এর বিপরীত মান তৈরি করে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> isOpen = <span className="text-[#98C379]">true</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = !isOpen
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code> হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code>।
          </p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>!true &nbsp;→ false</p>
            <p>!false → true</p>
          </div>

          <p className="text-[15px] text-soft">
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!</code> আমরা আগের Logical Operators-এও দেখেছি। Unary Operator হিসেবে এখানে এর মূল বিষয় হলো—এটি একটি মাত্র Boolean value-এর ওপর কাজ করে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 8: মনে রাখার বিষয় */}
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
            <span>Unary Operator একটি মাত্র value বা operand-এর ওপর কাজ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+</code> → Positive value নির্দেশ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">-</code> → সংখ্যার sign পরিবর্তন করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++</code> → Value ১ বাড়ায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code> → Value ১ কমায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!</code> → Boolean value উল্টে দেয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++</code> ও <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code> ব্যবহার করলে variable-টি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">var</code> হতে হয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;মনে রাখুন: Unary Operator = একটি value বা operand-এর ওপর কাজ করা Operator।&raquo;
        </div>

        <p className="mt-3 text-[14.5px] text-soft italic">
          «&quot;++&quot; ও &quot;--&quot;-এর ক্ষেত্রে value আগে নাকি পরে পরিবর্তিত হয়—এটি Prefix ও Postfix হিসেবে পরবর্তী পাঠে বিস্তারিতভাবে তুলে ধরা হয়েছে।»
        </p>
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
