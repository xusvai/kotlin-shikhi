import { useState } from "react";

interface ComparisonOperatorsLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function ComparisonOperatorsLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: ComparisonOperatorsLessonProps) {
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
          Kotlin Comparison Operators
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Comparison Operator কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Comparison Operator কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            দুটি value-এর মধ্যে তুলনা করার জন্য যে Operator ব্যবহার করা হয়, তাকে <strong>Comparison Operator</strong> বলা হয়।
          </p>
          <p>
            যেমন—দুটি সংখ্যা সমান কি না, একটি অন্যটির চেয়ে বড় বা ছোট কি না—এসব যাচাই করতে Comparison Operator ব্যবহার করা হয়।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            Comparison Operator ব্যবহার করলে result হিসেবে সাধারণত <strong>Boolean value</strong> পাওয়া যায়—অর্থাৎ <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code> অথবা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code>।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Kotlin-এর Comparison Operators Table */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এর Comparison Operators
        </h2>

        {/* Operators Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Operator</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">অর্থ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">==</code>
                </td>
                <td className="px-4 py-3 font-medium text-ink">সমান কি না</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">!=</code>
                </td>
                <td className="px-4 py-3 font-medium text-ink">সমান নয় কি না</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">&gt;</code>
                </td>
                <td className="px-4 py-3 font-medium text-ink">বড় কি না</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">&lt;</code>
                </td>
                <td className="px-4 py-3 font-medium text-ink">ছোট কি না</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">&gt;=</code>
                </td>
                <td className="px-4 py-3 font-medium text-ink">বড় অথবা সমান কি না</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">&lt;=</code>
                </td>
                <td className="px-4 py-3 font-medium text-ink">ছোট অথবা সমান কি না</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Equal (==) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Equal (==)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            দুটি value সমান কি না যাচাই করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">==</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 == 10
            </pre>
          </div>

          <p>
            দুটি value সমান হওয়ায় <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code> হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code>।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 == 5
            </pre>
          </div>

          <p>
            এখানে value দুটি সমান নয়, তাই <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code> হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Not Equal (!=) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Not Equal (!=)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            দুটি value সমান নয় কি না যাচাই করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 != 5
            </pre>
          </div>

          <p>
            দুটি value সমান নয়, তাই result হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Greater Than (>) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Greater Than (&gt;)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি value অন্যটির চেয়ে বড় কি না যাচাই করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&gt;</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 &gt; 5
            </pre>
          </div>

          <p>
            <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">10</code> হলো <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code>-এর চেয়ে বড়, তাই result হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: Less Than (<) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Less Than (&lt;)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি value অন্যটির চেয়ে ছোট কি না যাচাই করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&lt;</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 5 &lt; 10
            </pre>
          </div>

          <p>
            <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code> হলো <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">10</code>-এর চেয়ে ছোট, তাই result হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: Greater Than or Equal (>=) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Greater Than or Equal (&gt;=)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি value অন্যটির চেয়ে বড় অথবা সমান কি না যাচাই করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&gt;=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 &gt;= 10
            </pre>
          </div>

          <p>
            এখানে দুটি value সমান, তাই result হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 8: Less Than or Equal (<=) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Less Than or Equal (&lt;=)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি value অন্যটির চেয়ে ছোট অথবা সমান কি না যাচাই করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&lt;=</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 5 &lt;= 10
            </pre>
          </div>

          <p>
            <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code> হলো <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">10</code>-এর চেয়ে ছোট, তাই result হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 9: Comparison Operator এবং Boolean */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Comparison Operator এবং Boolean
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Comparison Operator-এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য হলো—এগুলোর result <strong>Boolean</strong> হয়।
          </p>
          <p>
            অর্থাৎ result সবসময় <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code> অথবা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code> হবে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>BooleanComparison.kt</span>
              <button
                type="button"
                onClick={() => copyToClipboard("val age = 24\nval result = age >= 18", "code-bool-comp")}
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-bool-comp" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> age = 24
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = age &gt;= 18
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">age &gt;= 18</code> একটি comparison। এর result হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code>।
          </p>

          <p>
            এই Boolean result পরবর্তীতে Condition এবং Decision Making-এ খুব গুরুত্বপূর্ণ ভূমিকা রাখবে।
          </p>

          <p className="text-[14.5px] italic text-soft">
            «<code className="font-mono font-bold text-ink not-italic">if</code>, <code className="font-mono font-bold text-ink not-italic">else</code> এবং Condition-এর সঙ্গে Comparison Operator-এর ব্যবহার আমরা পরবর্তী Lesson-এ বিস্তারিতভাবে শিখব।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 10: "=" এবং "==" এক নয় */}
      <section className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
        <h2 className="text-[19px] font-bold text-ink">
          = এবং == এক নয় ⚠️
        </h2>
        <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-ink/90">
          <p>
            Beginner হিসেবে এই পার্থক্যটি খুব ভালোভাবে মনে রাখা জরুরি:
          </p>

          <ul className="space-y-1.5 pl-1">
            <li className="flex items-center gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">=</code> &nbsp;→&nbsp; Assignment করে</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">==</code> &nbsp;→&nbsp; Comparison করে</span>
            </li>
          </ul>

          <div className="overflow-hidden rounded-[12px] border border-line bg-code text-[#F6F1EA] shadow-2xs">
            <pre className="p-3.5 font-mono text-[14px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> age = 24
              {"\n"}
              age = 25
            </pre>
          </div>

          <p className="text-[15px] text-soft">
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">=</code> ব্যবহার করে value পরিবর্তন করা হয়েছে।
          </p>

          <p className="text-[15px] font-medium text-ink pt-1">
            অন্যদিকে:
          </p>

          <div className="overflow-hidden rounded-[12px] border border-line bg-code text-[#F6F1EA] shadow-2xs">
            <pre className="p-3.5 font-mono text-[14px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = age == 25
            </pre>
          </div>

          <p className="text-[15px] text-soft">
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">==</code> ব্যবহার করে দুটি value তুলনা করা হয়েছে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 11: মনে রাখার বিষয় */}
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
            মনে রাখার বিষয়
          </h2>
        </div>

        <ul className="mt-3.5 space-y-2 text-[16px] leading-[1.7] text-ink">
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Comparison Operator দুটি value-এর মধ্যে তুলনা করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Result হয় <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code> অথবা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code>।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">==</code> → সমান</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!=</code> → সমান নয়</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&gt;</code> → বড়</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&lt;</code> → ছোট</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&gt;=</code> → বড় অথবা সমান</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&lt;=</code> → ছোট অথবা সমান</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">=</code> এবং <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">==</code> এক জিনিস নয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: Comparison Operator-এর কাজ হলো “তুলনা করা”, আর তার উত্তর আসে &quot;true&quot; অথবা &quot;false&quot; হিসেবে।&raquo;
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
