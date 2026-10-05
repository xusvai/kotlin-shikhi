import { useState } from "react";

interface IfStatementLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function IfStatementLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: IfStatementLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [age, setAge] = useState<number>(20);

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
          Kotlin if Statement
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: "if" Statement কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> Statement কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Program-এর কোনো condition সত্য (<code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-2 py-0.5 rounded-[6px]">true</code>) হলে নির্দিষ্ট code চালানোর জন্য Kotlin-এ <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> Statement ব্যবহার করা হয়।
          </p>

          <p className="font-semibold text-ink">সহজভাবে:</p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «Condition <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px] not-italic">true</code> হলে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">if</code>-এর ভিতরের code চলবে।»
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: "if" কীভাবে কাজ করে? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> কীভাবে কাজ করে?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code>-এর মধ্যে একটি condition দেওয়া হয়।
          </p>

          {/* Polished Code Box */}
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>IfStructure.kt</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">if</span> (condition) &#123;
              {"\n"}
              {"    "}<span className="text-soft">&#47;&#47; condition true হলে এই code চলবে</span>
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>Kotlin প্রথমে condition পরীক্ষা করবে।</p>

          <ul className="space-y-2 text-[16px] pl-1">
            <li className="flex items-center gap-2">
              <span className="font-bold text-leaf-deep">•</span>
              <span><code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-2 py-0.5 rounded-[6px]">true</code> হলে → <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর ভিতরের code চলবে।</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">false</code> হলে → <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর ভিতরের code চলবে না।</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: একটি সহজ উদাহরণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একটি সহজ উদাহরণ
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>IfDemo.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val age = 20\n\nif (age >= 18) {\n    println(\"আপনি প্রাপ্তবয়স্ক\")\n}",
                    "code-if-demo"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-if-demo" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> age = 20
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">if</span> (age &gt;= 18) &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;আপনি প্রাপ্তবয়স্ক&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">age &gt;= 18</code> একটি condition।
          </p>

          <p>
            <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">age</code>-এর মান <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">20</code>, তাই condition-এর ফলাফল <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-2 py-0.5 rounded-[6px]">true</code>।
          </p>

          <p className="font-semibold text-soft text-[15px]">ফলে output হবে:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            আপনি প্রাপ্তবয়স্ক
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: "if"-এর Condition */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code>-এর Condition
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code>-এর condition এমন একটি expression হতে হবে যার ফলাফল Boolean, অর্থাৎ <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-2 py-0.5 rounded-[6px]">true</code> অথবা <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">false</code>।
          </p>

          <p className="font-semibold text-ink">যেমন:</p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> number = 10
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">if</span> (number &gt; 5) &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;Number বড়&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>এখানে:</p>
          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            10 &gt; 5 → true
          </div>

          <p>
            তাই <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">println()</code> চলবে।
          </p>

          <p className="rounded-[10px] bg-card p-3 border border-line text-[15.5px]">
            💡 <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.5 rounded-[5px]">if</code>-এর condition তৈরি করতে আমরা <strong>Comparison Operator</strong> এবং <strong>Logical Operator</strong> ব্যবহার করতে পারি।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Condition "false" হলে */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Condition <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">false</code> হলে
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Condition <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">false</code> হলে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর ভিতরের code চলবে না।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> age = 15
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">if</span> (age &gt;= 18) &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;আপনি প্রাপ্তবয়স্ক&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>এখানে:</p>
          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-terra-deep border border-line inline-block">
            15 &gt;= 18 → false
          </div>

          <p className="font-semibold text-terra-deep">
            তাই কোনো output হবে না।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: শর্ত পরিবর্তন টেস্ট (Clean Multi-line Format) */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            🧪
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ভিজ্যুয়াল টেস্ট: বয়স পরিবর্তন করে শর্ত পরীক্ষা
            </h2>
            <p className="text-[13px] text-soft">
              নিচে মান বদলে দেখুন কখন if কোড চালায় আর কখন বাদ দেয়
            </p>
          </div>
        </div>

        {/* Age Controller */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-[15px] text-ink">Variable age:</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAge((prev) => Math.max(10, prev - 1))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              -
            </button>
            <span className="min-w-[40px] text-center font-mono text-[18px] font-bold text-terra-deep">
              {age}
            </span>
            <button
              type="button"
              onClick={() => setAge((prev) => Math.min(30, prev + 1))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Pristine, Multi-line Formatted Code Snippet */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[14px] text-[#F6F1EA] shadow-xs">
          <div className="space-y-1">
            <p>
              <span className="text-[#F0B48A] font-bold">val</span> age = {age}
            </p>
            <p className="pt-2">
              <span className="text-[#E06C75] font-bold">if</span> ({age} &gt;= 18) &#123;
              {" "}
              <span className={`text-[12px] font-sans font-semibold px-2 py-0.5 rounded-[4px] ml-1 ${
                age >= 18 ? "bg-[#98C379]/20 text-[#98C379]" : "bg-[#E06C75]/20 text-[#E06C75]"
              }`}>
                ➔ {age >= 18 ? "true (শর্ত সত্য)" : "false (শর্ত মিথ্যা)"}
              </span>
            </p>
            <p className="pl-6">
              println(<span className="text-[#98C379]">&quot;আপনি প্রাপ্তবয়স্ক&quot;</span>)
            </p>
            <p>&#125;</p>
          </div>
        </div>

        {/* Visual Result Box */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3.5 border border-line text-[15px]">
          {age >= 18 ? (
            <p className="text-leaf-deep font-semibold flex items-center gap-1.5">
              <span>✓</span>
              <span><strong>Output:</strong> &quot;আপনি প্রাপ্তবয়স্ক&quot;</span>
            </p>
          ) : (
            <p className="text-soft font-semibold italic flex items-center gap-1.5">
              <span>✕</span>
              <span><strong>কোনো Output নেই</strong> (condition false হওয়ায় if-এর ভিতরের কোড চলেনি)।</span>
            </p>
          )}
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: "if"-এর Basic Structure */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> এর Basic Structure
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">if</span> (condition) &#123;
              {"\n"}
              {"    "}<span className="text-soft">&#47;&#47; condition true হলে যে code চলবে</span>
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>এখানে:</p>

          <ul className="space-y-2 text-[16px] pl-1">
            <li className="flex items-center gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> → condition পরীক্ষা করার Keyword</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">condition</code> → যে শর্ত পরীক্ষা করা হবে</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2 py-0.5 rounded-[6px]">&#123; &#125;</code> → condition <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> হলে যে code চলবে, তা এখানে থাকে</span>
            </li>
          </ul>
        </div>
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
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> একটি condition পরীক্ষা করে।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Condition <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> হলে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর ভিতরের code চলে।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Condition <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">false</code> হলে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর ভিতরের code চলে না।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর condition-এর ফলাফল <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> অথবা <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">false</code> হতে হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Comparison ও Logical Operator ব্যবহার করে condition তৈরি করা যায়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px] not-italic">if</code> = শর্ত সত্য হলে কাজ করো।»
          </p>
        </div>

        <p className="mt-3 text-[14.5px] text-soft">
          পরের Lesson-এ শিখব, condition <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">false</code> হলে কীভাবে অন্য code চালানো যায়—<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> দিয়ে।
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
          পরবর্তী পাঠ →
        </button>
      </footer>
    </article>
  );
}
