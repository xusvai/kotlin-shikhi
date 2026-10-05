import { useState } from "react";

interface CharLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function CharLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: CharLessonProps) {
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
          Kotlin Char
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Char কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Char কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ একটি মাত্র অক্ষর বা character সংরক্ষণ করার জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs">Char</code> Data Type ব্যবহার করা হয়।
          </p>
          <p>
            যেমন—<code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs">&#39;A&#39;</code>, <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs">&#39;b&#39;</code>, <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs">&#39;7&#39;</code> বা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs">&#39;@&#39;</code>—প্রতিটিই একটি করে character হতে পারে।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            <strong>সহজভাবে মনে রাখো:</strong> একটি মাত্র character হলে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Char</code>।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Char কীভাবে লেখা হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Char কীভাবে লেখা হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code> লেখার জন্য single quotation (<span className="whitespace-nowrap"><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">&#39;&nbsp;&#39;</code></span>) ব্যবহার করা হয়।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>CharExplicit.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard("val grade: Char = 'A'", "code-explicit")
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-explicit" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> grade:{" "}
              <span className="text-[#7F52FF] font-semibold">Char</span> ={" "}
              <span className="text-[#98C379]">&#39;A&#39;</span>
            </pre>
          </div>

          <p className="text-[15.5px] text-soft">
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">&#39;A&#39;</code> হলো একটি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code> value।
          </p>

          <p className="pt-2">
            Type Annotation না লিখলেও Kotlin value দেখে বুঝতে পারে এটি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code>।
          </p>

          {/* IDE Style Code Box: Type Inference */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>CharInference.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard("val grade = 'A'", "code-inference")
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-inference" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> grade ={" "}
              <span className="text-[#98C379]">&#39;A&#39;</span>
            </pre>
          </div>

          <p className="text-[15.5px] text-soft">
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">grade</code>-এর Data Type Kotlin নিজেই <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code> হিসেবে নির্ধারণ করে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Char-এ একাধিক অক্ষর রাখা যায় না */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Char-এ একাধিক অক্ষর রাখা যায় না
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Char</code> শুধুমাত্র একটি character ধারণ করতে পারে।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>SingleCharOnly.kt</span>
              <span className="text-white/60">Valid</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> letter:{" "}
              <span className="text-[#7F52FF] font-semibold">Char</span> ={" "}
              <span className="text-[#98C379]">&#39;A&#39;</span>
            </pre>
          </div>

          <p className="pt-2">
            কিন্তু একাধিক character একসঙ্গে লিখলে সেটি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Char</code> হবে না।
          </p>

          {/* IDE Style Error Box */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>CharError.kt</span>
              <span className="text-[#E06C75] font-semibold">Error Check</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> letter:{" "}
              <span className="text-[#7F52FF] font-semibold">Char</span> ={" "}
              <span className="text-[#E06C75]">&#39;AB&#39;</span>{" "}
              <span className="text-[#E06C75] font-semibold">&#47;&#47; ভুল</span>
            </pre>
          </div>

          <p className="pt-2">
            একাধিক character বা Text সংরক্ষণ করতে হলে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">String</code> ব্যবহার করতে হয়।
          </p>

          {/* IDE Style String Fix Box */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>UseStringInstead.kt</span>
              <span className="text-[#98C379] font-semibold">Correct</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> name ={" "}
              <span className="text-[#E6D3A1]">&quot;AB&quot;</span>
            </pre>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Char এবং String-এর পার্থক্য */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Char এবং String-এর পার্থক্য
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          দুটোর মধ্যে মূল পার্থক্য হলো কতগুলো character রাখা যায় এবং কোন quotation ব্যবহার করা হয়।
        </p>

        {/* Comparison Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[340px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Data Type</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">কী রাখে</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Quotation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Char</code>
                </td>
                <td className="px-4 py-3 text-ink/90">একটি character</td>
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&#39; &#39;</code>
                </td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">String</code>
                </td>
                <td className="px-4 py-3 text-ink/90">এক বা একাধিক character</td>
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot; &quot;</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IDE Style Code Box */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>CharVsString.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'val grade: Char = \'A\'\nval name: String = "Ali"',
                  "code-diff"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-diff" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">val</span> grade:{" "}
            <span className="text-[#7F52FF] font-semibold">Char</span> ={" "}
            <span className="text-[#98C379]">&#39;A&#39;</span>
            {"\n"}
            <span className="text-[#F0B48A]">val</span> name:{" "}
            <span className="text-[#7F52FF] font-semibold">String</span> ={" "}
            <span className="text-[#E6D3A1]">&quot;Ali&quot;</span>
          </pre>
        </div>

        <p className="mt-3 text-[15.5px] text-soft">
          এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&#39;A&#39;</code> হলো <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Char</code>, আর <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;Ali&quot;</code> হলো <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">String</code>।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Char-এর কিছু সাধারণ ব্যবহার */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Char-এর কিছু সাধারণ ব্যবহার
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Char</code> বিভিন্ন জায়গায় ব্যবহার করা যায়। যেমন—
          </p>

          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <ul className="space-y-2 text-[15.5px]">
              <li className="flex items-start gap-2">
                <span className="text-terra-deep font-bold">•</span>
                <span>Grade বা একটি অক্ষর সংরক্ষণ করতে</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terra-deep font-bold">•</span>
                <span>কোনো একটি character নিয়ে কাজ করতে</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terra-deep font-bold">•</span>
                <span>Text-এর নির্দিষ্ট character নিয়ে কাজ করতে</span>
              </li>
            </ul>
          </div>

          <p className="text-[14.5px] italic text-soft">
            «Char নিয়ে character-এর অবস্থান, তুলনা এবং অন্যান্য কাজও করা যায়। এগুলো পরবর্তী Lesson-এ বিস্তারিতভাবে শেখা হবে।»
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
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code> একটি মাত্র character সংরক্ষণ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code> লেখার জন্য single quotation (<span className="whitespace-nowrap"><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">&#39;&nbsp;&#39;</code></span>) ব্যবহার করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক character-এর জন্য <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">String</code> ব্যবহার করতে হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code> এবং <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">String</code> আলাদা Data Type।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">&#39;A&#39;</code> হলো <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Char</code>, আর <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">&quot;A&quot;</code> হলো <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">String</code>।&raquo;
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
