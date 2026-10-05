import { useState } from "react";

interface WhenAdvancedLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function WhenAdvancedLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: WhenAdvancedLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedNum, setSelectedNum] = useState<number>(2);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  const getWord = (n: number) => {
    if (n === 1) return "One";
    if (n === 2) return "Two";
    if (n === 3) return "Three";
    return "Other";
  };

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Kotlin <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code>-এর আরও ব্যবহার
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Intro section */}
      <section className="mt-8">
        <div className="space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> শুধু একটি value-এর সঙ্গে একটি নির্দিষ্ট value মিলিয়ে দেখার জন্য নয়। বিভিন্নভাবে ব্যবহার করে একই সিদ্ধান্তকে আরও পরিষ্কারভাবে লেখা যায়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 1: একাধিক Value একসঙ্গে */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একাধিক Value একসঙ্গে
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একই কাজের জন্য একাধিক value থাকলে সেগুলোকে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">&quot;,&quot;</code> দিয়ে একসঙ্গে লেখা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> day = 1
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">when</span> (day) &#123;
              {"\n"}
              {"    "}1, 7 -&gt; println(<span className="text-[#98C379]">&quot;Weekend&quot;</span>)
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; println(<span className="text-[#98C379]">&quot;Weekday&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">day</code>-এর মান <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">1</code> অথবা <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">7</code> হলে <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">Weekend</code> দেখাবে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Condition ব্যবহার করে "when" */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Condition ব্যবহার করে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code>
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code>-এর সঙ্গে কোনো নির্দিষ্ট value না দিয়েও condition পরীক্ষা করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> age = 20
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">when</span> &#123;
              {"\n"}
              {"    "}age &gt;= 18 -&gt; println(<span className="text-[#98C379]">&quot;Adult&quot;</span>)
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; println(<span className="text-[#98C379]">&quot;Minor&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>এখানে প্রতিটি branch-এর condition পরীক্ষা করা হচ্ছে।</p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: একাধিক Condition */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একাধিক Condition
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একাধিক condition থাকলে Kotlin উপর থেকে নিচে সেগুলো পরীক্ষা করে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> marks = 75
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">when</span> &#123;
              {"\n"}
              {"    "}marks &gt;= 80 -&gt; println(<span className="text-[#98C379]">&quot;A+&quot;</span>)
              {"\n"}
              {"    "}marks &gt;= 70 -&gt; println(<span className="text-[#98C379]">&quot;A&quot;</span>)
              {"\n"}
              {"    "}marks &gt;= 60 -&gt; println(<span className="text-[#98C379]">&quot;B&quot;</span>)
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; println(<span className="text-[#98C379]">&quot;C&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">marks &gt;= 80</code> false, কিন্তু <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">marks &gt;= 70</code> true।
          </p>

          <p className="font-semibold text-soft text-[15px]">তাই output হবে:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            A
          </div>

          <p>
            প্রথম <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> condition পাওয়ার পর পরবর্তী condition আর পরীক্ষা করা হয় না।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: "when" থেকে Value নেওয়া */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> থেকে Value নেওয়া
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> একটি value return করতে পারে। সেই value Variable-এ রাখা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>WhenValueReturn.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val number = 2\n\nval result = when (number) {\n    1 -> \"One\"\n    2 -> \"Two\"\n    3 -> \"Three\"\n    else -> \"Other\"\n}\n\nprintln(result)",
                    "code-return-val"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-return-val" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> number = 2
              {"\n\n"}
              <span className="text-[#F0B48A] font-bold">val</span> result = <span className="text-[#E06C75] font-bold">when</span> (number) &#123;
              {"\n"}
              {"    "}1 -&gt; <span className="text-[#98C379]">&quot;One&quot;</span>
              {"\n"}
              {"    "}2 -&gt; <span className="text-[#98C379]">&quot;Two&quot;</span>
              {"\n"}
              {"    "}3 -&gt; <span className="text-[#98C379]">&quot;Three&quot;</span>
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; <span className="text-[#98C379]">&quot;Other&quot;</span>
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">result</code>-এর মান হবে:
          </p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            Two
          </div>

          <p className="rounded-[10px] bg-card p-3 border border-line text-[15.5px]">
            💡 অর্থাৎ <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code> শুধু কোনো code চালানোর জন্য নয়, একটি value নির্ধারণ করার জন্যও ব্যবহার করা যায়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: Value Return Simulator */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            ⚡
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ইন্টারঅ্যাক্টিভ ল্যাব: when থেকে ভ্যালু রিটার্ন
            </h2>
            <p className="text-[13px] text-soft">
              number নির্বাচন করে দেখুন result ভ্যারিয়েবলে কোন মান জমা হয়
            </p>
          </div>
        </div>

        {/* Number buttons */}
        <div className="mt-4 flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setSelectedNum(n)}
              className={`flex-1 py-2 rounded-[8px] font-mono text-[15px] font-bold border transition-all ${
                selectedNum === n
                  ? "bg-terra text-white border-terra scale-105 shadow-xs"
                  : "bg-card text-ink border-line hover:bg-sand"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Live Code Matching */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[13.5px] text-[#F6F1EA] shadow-xs space-y-1">
          <p><span className="text-[#F0B48A] font-bold">val</span> result = <span className="text-[#E06C75] font-bold">when</span> ({selectedNum}) &#123;</p>
          <p className="pl-6 py-0.5">
            <span className="bg-white/10 text-white font-bold px-2 py-0.5 rounded">
              ➔ &quot;{getWord(selectedNum)}&quot;
            </span>
          </p>
          <p>&#125;</p>
        </div>

        {/* Live Output Card */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3 border border-line flex items-center justify-between text-[14.5px]">
          <span className="font-semibold text-soft">result ভ্যারিয়েবলের মান:</span>
          <span className="font-mono font-bold text-[15.5px] px-3 py-1 rounded-[6px] bg-leaf-soft text-leaf-deep border border-leaf/40">
            &quot;{getWord(selectedNum)}&quot;
          </span>
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
            <span>একাধিক value একই branch-এ দেওয়া যায়।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>নির্দিষ্ট value ছাড়াও condition ব্যবহার করে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code> লেখা যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক condition থাকলে সেগুলো উপর থেকে নিচে পরীক্ষা করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>প্রথম <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> condition-এর code চলে।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code> থেকে একটি value নিয়ে Variable-এ রাখা যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> ব্যবহার করে কোনো condition বা value match না করলে বিকল্প নির্ধারণ করা যায়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px] not-italic">when</code> বিভিন্ন value বা condition অনুযায়ী সিদ্ধান্ত নেওয়ার একটি পরিষ্কার উপায়।»
          </p>
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
          পরবর্তী মডিউল →
        </button>
      </footer>
    </article>
  );
}
