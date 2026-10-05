import { useState } from "react";

interface RangeOperatorsLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function RangeOperatorsLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: RangeOperatorsLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"standard" | "until" | "downto" | "step">("standard");

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
          Kotlin Range Operators
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Range Operator কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Range Operator কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ Range Operator ব্যবহার করে একটি নির্দিষ্ট শুরু (start) থেকে শেষ (end) পর্যন্ত ধারাবাহিক value-এর range তৈরি করা যায়।
          </p>

          <p className="font-semibold text-ink">সহজভাবে বললে, Range হলো—</p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «একটি নির্দিষ্ট সীমার মধ্যে থাকা ধারাবাহিক value-এর পরিসর।»
          </div>

          <h3 className="text-[18px] font-bold text-ink pt-1">উদাহরণ:</h3>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>RangeExample.kt</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> numbers = 1..5
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">1..5</code> একটি range, যার মধ্যে রয়েছে:
          </p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[15px] font-bold text-ink border border-line inline-block">
            1, 2, 3, 4, 5
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: ".." Range Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">..</code> Range Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">..</code> হলো Kotlin-এর সবচেয়ে সাধারণ Range Operator।
          </p>

          <p>এটি শুরু থেকে শেষ পর্যন্ত উভয় সীমা অন্তর্ভুক্ত করে।</p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> numbers = 1..5
            </pre>
          </div>

          <p>এখানে range হবে:</p>
          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            1, 2, 3, 4, 5
          </div>

          <p>
            অর্থাৎ <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">1</code> এবং <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">5</code>—দুটিই range-এর মধ্যে রয়েছে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Range দিয়ে "for" Loop */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Range দিয়ে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">for</code> Loop
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Range সাধারণত <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">for</code> loop-এর সঙ্গে বেশি ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>ForLoopRange.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "for (number in 1..5) {\n    println(number)\n}",
                    "code-for-range"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-for-range" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">for</span> (number <span className="text-[#E06C75] font-bold">in</span> 1..5) &#123;
              {"\n"}
              {"    "}println(number)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14px] text-ink border border-line inline-block space-y-0.5">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">1..5</code> ব্যবহার করে <code className="font-mono font-bold text-ink">1</code> থেকে <code className="font-mono font-bold text-ink">5</code> পর্যন্ত প্রতিটি সংখ্যা একে একে পাওয়া যাচ্ছে।
          </p>

          <p className="text-[14.5px] text-soft">
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">for</code> loop সম্পর্কে পরে বিস্তারিতভাবে শেখা হবে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: ".." এবং "..<"-এর পার্থক্য */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">..</code> এবং <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">&lt;</code>-এর পার্থক্য
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">..</code> ব্যবহার করলে শেষের value-টিও অন্তর্ভুক্ত হয়।
          </p>

          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            1..5
          </div>
          <p className="text-[15px] font-medium text-leaf-deep">
            এর মধ্যে <code className="font-mono font-bold">5</code> আছে।
          </p>

          <p className="pt-2">
            অন্যদিকে, শেষ value বাদ দিতে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">&lt;</code> (বা <code className="font-mono font-bold text-terra-deep">..&lt;</code>) ব্যবহার করা হয়:
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              1..&lt;5
            </pre>
          </div>

          <p>এখানে range হবে:</p>
          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            1, 2, 3, 4
          </div>

          <p>
            অর্থাৎ <code className="font-mono font-bold text-ink">5</code> অন্তর্ভুক্ত হবে না।
          </p>

          <div className="rounded-[10px] bg-card p-3 border border-line text-[15.5px]">
            💡 এটিকে <strong>Half-Open Range</strong> বলা হয়।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: "downTo" দিয়ে উল্টো Range */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">downTo</code> দিয়ে উল্টো Range
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            ছোট value থেকে বড় value-এর দিকে যাওয়ার পাশাপাশি বড় value থেকে ছোট value-এর দিকেও range তৈরি করা যায়।
          </p>
          <p>
            এর জন্য <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">downTo</code> ব্যবহার করা হয়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>DownToDemo.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "for (number in 5 downTo 1) {\n    println(number)\n}",
                    "code-downto"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-downto" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">for</span> (number <span className="text-[#E06C75] font-bold">in</span> 5 <span className="text-[#E06C75] font-bold">downTo</span> 1) &#123;
              {"\n"}
              {"    "}println(number)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14px] text-ink border border-line inline-block space-y-0.5">
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>

          <p>
            অর্থাৎ <code className="font-mono font-bold text-ink">5</code> থেকে শুরু করে <code className="font-mono font-bold text-ink">1</code> পর্যন্ত ধাপে ধাপে কমে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: "step" দিয়ে ধাপ নির্ধারণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">step</code> দিয়ে ধাপ নির্ধারণ
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Range-এর value কত করে পরিবর্তিত হবে, তা নির্ধারণ করতে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">step</code> ব্যবহার করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">for</span> (number <span className="text-[#E06C75] font-bold">in</span> 1..10 <span className="text-[#E06C75] font-bold">step</span> 2) &#123;
              {"\n"}
              {"    "}println(number)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14px] text-ink border border-line inline-block space-y-0.5">
            <p>1</p>
            <p>3</p>
            <p>5</p>
            <p>7</p>
            <p>9</p>
          </div>

          <p>এখানে প্রতিবার <code className="font-mono font-bold text-ink">2</code> করে বাড়ছে।</p>

          <p className="pt-2">
            একইভাবে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">downTo</code>-এর সঙ্গেও <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">step</code> ব্যবহার করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">for</span> (number <span className="text-[#E06C75] font-bold">in</span> 10 <span className="text-[#E06C75] font-bold">downTo</span> 1 <span className="text-[#E06C75] font-bold">step</span> 2) &#123;
              {"\n"}
              {"    "}println(number)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14px] text-ink border border-line inline-block space-y-0.5">
            <p>10</p>
            <p>8</p>
            <p>6</p>
            <p>4</p>
            <p>2</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: Range Visualizer */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            📏
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ইন্টারঅ্যাক্টিভ ল্যাব: Range Operators লাইভ টেস্ট
            </h2>
            <p className="text-[13px] text-soft">
              বিভিন্ন Range Operator নির্বাচন করে রেঞ্জের উপাদানগুলো দেখুন
            </p>
          </div>
        </div>

        {/* Tab selection */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("standard")}
            className={`py-2 px-3 rounded-[8px] font-mono text-[13.5px] font-bold border transition-all ${
              activeTab === "standard"
                ? "bg-terra text-white border-terra shadow-xs"
                : "bg-card text-ink border-line hover:bg-sand"
            }`}
          >
            1..5
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("until")}
            className={`py-2 px-3 rounded-[8px] font-mono text-[13.5px] font-bold border transition-all ${
              activeTab === "until"
                ? "bg-terra text-white border-terra shadow-xs"
                : "bg-card text-ink border-line hover:bg-sand"
            }`}
          >
            1..&lt;5
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("downto")}
            className={`py-2 px-3 rounded-[8px] font-mono text-[13.5px] font-bold border transition-all ${
              activeTab === "downto"
                ? "bg-terra text-white border-terra shadow-xs"
                : "bg-card text-ink border-line hover:bg-sand"
            }`}
          >
            5 downTo 1
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("step")}
            className={`py-2 px-3 rounded-[8px] font-mono text-[13.5px] font-bold border transition-all ${
              activeTab === "step"
                ? "bg-terra text-white border-terra shadow-xs"
                : "bg-card text-ink border-line hover:bg-sand"
            }`}
          >
            1..10 step 2
          </button>
        </div>

        {/* Live Code Box */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[14px] text-[#F6F1EA] shadow-xs">
          {activeTab === "standard" && (
            <div>
              <p><span className="text-[#F0B48A] font-bold">val</span> range = 1..5</p>
              <p className="text-soft text-[12.5px] pt-1">&#47;&#47; ১ থেকে ৫ পর্যন্ত সব সংখ্যা</p>
            </div>
          )}
          {activeTab === "until" && (
            <div>
              <p><span className="text-[#F0B48A] font-bold">val</span> range = 1..&lt;5</p>
              <p className="text-soft text-[12.5px] pt-1">&#47;&#47; ১ থেকে ৫-এর আগ পর্যন্ত (৫ বাদ)</p>
            </div>
          )}
          {activeTab === "downto" && (
            <div>
              <p><span className="text-[#F0B48A] font-bold">val</span> range = 5 <span className="text-[#E06C75] font-bold">downTo</span> 1</p>
              <p className="text-soft text-[12.5px] pt-1">&#47;&#47; ৫ থেকে ১ পর্যন্ত উল্টো ক্রমে</p>
            </div>
          )}
          {activeTab === "step" && (
            <div>
              <p><span className="text-[#F0B48A] font-bold">val</span> range = 1..10 <span className="text-[#E06C75] font-bold">step</span> 2</p>
              <p className="text-soft text-[12.5px] pt-1">&#47;&#47; ১ থেকে ১০ পর্যন্ত ২ করে ধাপে</p>
            </div>
          )}
        </div>

        {/* Visual Elements List */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3.5 border border-line">
          <span className="text-[13px] font-bold text-soft block mb-2">রেঞ্জের উপাদানসমূহ:</span>
          <div className="flex flex-wrap gap-2">
            {activeTab === "standard" &&
              [1, 2, 3, 4, 5].map((n) => (
                <span key={n} className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-leaf-soft text-leaf-deep font-mono font-bold border border-leaf/40">
                  {n}
                </span>
              ))}
            {activeTab === "until" &&
              [1, 2, 3, 4].map((n) => (
                <span key={n} className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-sand font-mono font-bold text-ink border border-line">
                  {n}
                </span>
              ))}
            {activeTab === "downto" &&
              [5, 4, 3, 2, 1].map((n) => (
                <span key={n} className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-terra-soft text-terra-deep font-mono font-bold border border-terra/40">
                  {n}
                </span>
              ))}
            {activeTab === "step" &&
              [1, 3, 5, 7, 9].map((n) => (
                <span key={n} className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-kotlin-soft text-kotlin font-mono font-bold border border-kotlin/40">
                  {n}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: Range Operators এক নজরে Table */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Range Operators এক নজরে
        </h2>

        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[320px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Syntax</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">কাজ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">1..5</code>
                </td>
                <td className="px-4 py-3 text-ink/90"><code className="font-mono font-bold">1</code> থেকে <code className="font-mono font-bold">5</code>, উভয়ই অন্তর্ভুক্ত</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">1..&lt;5</code>
                </td>
                <td className="px-4 py-3 text-ink/90"><code className="font-mono font-bold">1</code> থেকে <code className="font-mono font-bold">5</code>, কিন্তু <code className="font-mono font-bold">5</code> বাদ</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">5 downTo 1</code>
                </td>
                <td className="px-4 py-3 text-ink/90"><code className="font-mono font-bold">5</code> থেকে <code className="font-mono font-bold">1</code> পর্যন্ত উল্টো দিকে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">1..10 step 2</code>
                </td>
                <td className="px-4 py-3 text-ink/90"><code className="font-mono font-bold">1</code> থেকে <code className="font-mono font-bold">10</code>, ২ করে বৃদ্ধি</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">10 downTo 1 step 2</code>
                </td>
                <td className="px-4 py-3 text-ink/90"><code className="font-mono font-bold">10</code> থেকে <code className="font-mono font-bold">1</code>, ২ করে হ্রাস</td>
              </tr>
            </tbody>
          </table>
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
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">..</code> দিয়ে একটি range তৈরি করা যায়।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">..</code> ব্যবহার করলে শেষের value অন্তর্ভুক্ত হয়।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">..&lt;</code> ব্যবহার করলে শেষের value বাদ যায়।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">downTo</code> বড় value থেকে ছোট value-এর দিকে range তৈরি করে।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">step</code> দিয়ে প্রতিটি ধাপে কত করে পরিবর্তন হবে তা নির্ধারণ করা যায়।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Range সাধারণত <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">for</code> loop-এর সঙ্গে বেশি ব্যবহার করা হয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">..</code> = শুরু থেকে শেষ পর্যন্ত<br />
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">..&lt;</code> = শেষ বাদ দিয়ে<br />
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">downTo</code> = উল্টো দিকে<br />
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">step</code> = কত করে এগোবে»
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
          পরবর্তী পাঠ →
        </button>
      </footer>
    </article>
  );
}
