import { useState } from "react";

interface LogicalOperatorsLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function LogicalOperatorsLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: LogicalOperatorsLessonProps) {
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
          Kotlin Logical Operators
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Logical Operator কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Logical Operator কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ একাধিক condition বা Boolean value একসঙ্গে নিয়ে কাজ করার জন্য যে Operator ব্যবহার করা হয়, তাকে <strong>Logical Operator</strong> বলা হয়।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            <strong>সহজভাবে বললে:</strong> যখন একটি সিদ্ধান্ত নেওয়ার জন্য একাধিক শর্ত যাচাই করতে হয় (যেমন: বয়স ১৮ হতে হবে এবং আইডি কার্ড থাকতে হবে), তখন Logical Operators ব্যবহার করা হয়।
          </div>
          <p>
            Kotlin-এর Logical Operator মূলত <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code> এবং <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code>—এই দুই ধরনের Boolean value নিয়ে কাজ করে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Kotlin-এর ৩টি Logical Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এর ৩টি Logical Operator
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          Kotlin-এ মূলত ৩টি প্রধান Logical Operator রয়েছে:
        </p>

        {/* Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[320px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Operator</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">নাম</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">অর্থ / কাজ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">&&</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Logical AND</td>
                <td className="px-4 py-3 text-ink/90">সব শর্ত সত্য (true) হলেই কেবল true হয়</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">||</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Logical OR</td>
                <td className="px-4 py-3 text-ink/90">যেকোনো একটি শর্ত সত্য (true) হলেই true হয়</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">!</code>
                </td>
                <td className="px-4 py-3 font-semibold text-ink">Logical NOT</td>
                <td className="px-4 py-3 text-ink/90">মান উল্টে দেয় (true থাকলে false, false থাকলে true)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: AND (&&) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          AND (&&)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&&</code> ব্যবহার করা হয় যখন সবগুলো condition-ই সত্য হতে হবে। যদি একটি শর্তও মিথ্যা (<code className="font-mono font-bold text-terra-deep">false</code>) হয়, তবে পুরো হিসাবের ফলাফলই <code className="font-mono font-bold text-terra-deep">false</code> হয়ে যাবে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>LogicalAnd.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val age = 20\nval hasNID = true\n\nval canVote = (age >= 18) && hasNID\nprintln(canVote)  // Output: true (উভয় শর্তই সত্য)",
                    "code-and"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-and" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> age = 20
              {"\n"}
              <span className="text-[#F0B48A]">val</span> hasNID = <span className="text-[#98C379]">true</span>
              {"\n\n"}
              <span className="text-[#F0B48A]">val</span> canVote = (age &gt;= 18) &amp;&amp; hasNID
              {"\n"}
              println(canVote)  <span className="text-[#98C379]">&#47;&#47; Output: true (উভয় শর্তই সত্য)</span>
            </pre>
          </div>

          <p className="text-[15.5px] font-semibold text-leaf-deep">
            «মনে রাখো: <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&&</code> → সব শর্ত সত্য হতে হবে।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: OR (||) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          OR (||)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">||</code> ব্যবহার করা হয় যখন একাধিক condition-এর মধ্যে অন্তত একটি সত্য হলেই পুরো expression সত্য হবে। সবকটি শর্ত মিথ্যা হলে তবেই কেবল ফলাফল <code className="font-mono font-bold text-terra-deep">false</code> হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>LogicalOr.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val isWeekend = false\nval isHoliday = true\n\nval canRest = isWeekend || isHoliday\nprintln(canRest) // Output: true",
                    "code-or"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-or" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> isWeekend = <span className="text-[#E06C75]">false</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> isHoliday = <span className="text-[#98C379]">true</span>
              {"\n\n"}
              <span className="text-[#F0B48A]">val</span> canRest = isWeekend || isHoliday
              {"\n"}
              println(canRest)  <span className="text-[#98C379]">&#47;&#47; Output: true</span>
            </pre>
          </div>

          <p className="text-[15.5px] font-semibold text-leaf-deep">
            «মনে রাখো: <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">||</code> → অন্তত একটি শর্ত সত্য হলেই হবে।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: NOT (!) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          NOT (!)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!</code> অপারেটর যেকোনো Boolean মানকে উল্টে দেয়। অর্থাৎ <code className="font-mono font-bold text-leaf-deep">true</code>-কে <code className="font-mono font-bold text-terra-deep">false</code> এবং <code className="font-mono font-bold text-terra-deep">false</code>-কে <code className="font-mono font-bold text-leaf-deep">true</code> বানিয়ে ফেলে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>LogicalNot.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val isLoggedIn = true\nprintln(!isLoggedIn) // Output: false",
                    "code-not"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-not" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> isLoggedIn = <span className="text-[#98C379]">true</span>
              {"\n"}
              println(!isLoggedIn)  <span className="text-[#98C379]">&#47;&#47; Output: false</span>
            </pre>
          </div>

          <p className="text-[15.5px] font-semibold text-leaf-deep">
            «মনে রাখো: <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!</code> → উল্টে দেয়।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: Logical Operator কোথায় ব্যবহার হয়? */}
      <section className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
        <h2 className="text-[19px] font-bold text-ink">
          Logical Operator কোথায় ব্যবহার হয়? 💡
        </h2>
        <p className="mt-2 text-[16px] text-soft leading-relaxed">
          Logical Operator সাধারণত একাধিক condition একসঙ্গে যাচাই করার সময় ব্যবহার করা হয়। যেমন—
        </p>

        <ul className="mt-3 space-y-2 text-[15.5px] text-ink pl-1">
          <li className="flex items-start gap-2">
            <span className="font-bold text-terra-deep">•</span>
            <span>User-এর বয়স নির্দিষ্ট সীমার মধ্যে কি না</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-terra-deep">•</span>
            <span>User logged in এবং verified কি না</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-terra-deep">•</span>
            <span>কোনো একটি শর্ত পূরণ হলেই কাজটি করা যাবে কি না</span>
          </li>
        </ul>

        <p className="mt-3.5 text-[14.5px] italic text-soft border-t border-line/60 pt-2.5">
          «পরবর্তী Conditions ও Decision Making Lesson-এ <code className="font-mono font-bold text-ink not-italic">if</code>, <code className="font-mono font-bold text-ink not-italic">else</code> ইত্যাদির সঙ্গে Logical Operator-এর ব্যবহার আরও বাস্তব উদাহরণে দেখা হবে।»
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: মনে রাখার বিষয় */}
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
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&&</code> (AND): সব শর্ত সত্য হতে হবে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">||</code> (OR): যেকোনো একটি শর্ত সত্য হলেই সত্য হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">!</code> (NOT): ফলাফলকে বিপরীত করে দেয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Logical Operators-এর ফলাফলও সবসময় একটি Boolean (true বা false) মান দেয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: &quot;&amp;&amp;&quot; = সব, &quot;||&quot; = যেকোনো একটি, &quot;!&quot; = উল্টো।&raquo;
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
