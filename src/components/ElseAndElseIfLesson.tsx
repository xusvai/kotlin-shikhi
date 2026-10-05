import { useState } from "react";

interface ElseAndElseIfLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function ElseAndElseIfLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: ElseAndElseIfLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [marks, setMarks] = useState<number>(75);

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
          Kotlin <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else</code> ও <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else if</code>
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: else Statement কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else</code> Statement কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            আগের পাঠে আমরা দেখেছি, <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর শর্ত মিথ্যা (<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">false</code>) হলে কোনো কোড চলে না।
          </p>
          <p>
            কিন্তু শর্ত মিথ্যা হলে যদি আমরা বিকল্প কোনো কাজ করাতে চাই, তখন <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else</code> ব্যবহার করা হয়।
          </p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">if</code> শর্ত সত্য হলে ১ম কোড চলবে, অন্যথায় (<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">else</code>) বিকল্প কোডটি চলবে।»
          </div>

          <h3 className="text-[18px] font-bold text-ink pt-2">উদাহরণ:</h3>

          {/* Polished Code example */}
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>IfElseDemo.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val age = 15\n\nif (age >= 18) {\n    println(\"প্রাপ্তবয়স্ক\")\n} else {\n    println(\"অপ্রাপ্তবয়স্ক\")\n}",
                    "code-ifelse"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-ifelse" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> age = 15
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">if</span> (age &gt;= 18) &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;প্রাপ্তবয়স্ক&quot;</span>)
              {"\n"}
              &#125; <span className="text-[#E06C75] font-bold">else</span> &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;অপ্রাপ্তবয়স্ক&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">age &gt;= 18</code> মিথ্যা হওয়ায় <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code>-এর code চলবে।
          </p>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            অপ্রাপ্তবয়স্ক
          </div>

          {/* Flow Diagram */}
          <div className="mt-4 rounded-[14px] border border-line bg-card p-4">
            <h4 className="text-[15px] font-bold text-ink mb-2">
              <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> ও <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code>-এর Flow
            </h4>
            <div className="rounded-[10px] bg-code p-3 font-mono text-[13.5px] text-[#F6F1EA] space-y-1">
              <p>Condition</p>
              <p>{"    "}↓</p>
              <p>{" "}true ──→ <span className="text-[#98C379]">if-এর code</span></p>
              <p>{"    "}↓</p>
              <p>false ──→ <span className="text-[#E06C75]">else-এর code</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: "else if" কী? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else if</code> কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            যখন একটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর পাশাপাশি একাধিক condition পরীক্ষা করতে হয়, তখন <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else if</code> ব্যবহার করা হয়।
          </p>

          <h3 className="text-[18px] font-bold text-ink pt-1">উদাহরণ:</h3>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>MarksLadder.kt</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> marks = 75
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">if</span> (marks &gt;= 80) &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;A+&quot;</span>)
              {"\n"}
              &#125; <span className="text-[#E06C75] font-bold">else if</span> (marks &gt;= 70) &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;A&quot;</span>)
              {"\n"}
              &#125; <span className="text-[#E06C75] font-bold">else</span> &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;B&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>এখানে Kotlin উপর থেকে নিচে condition পরীক্ষা করবে।</p>

          <ul className="space-y-1.5 text-[16px] pl-1">
            <li className="flex items-center gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">marks &gt;= 80</code> → <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">false</code></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-leaf-deep">•</span>
              <span><code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">marks &gt;= 70</code> → <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code></span>
            </li>
          </ul>

          <p className="font-semibold text-soft text-[15px]">তাই output হবে:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            A
          </div>

          <p className="rounded-[10px] bg-card p-3 border border-line text-[15.5px]">
            💡 <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">marks &gt;= 70</code> সত্য হওয়ার পর নিচের <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> আর পরীক্ষা করা হবে না।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: "else if" একাধিক হতে পারে */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else if</code> একাধিক হতে পারে
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            প্রয়োজন অনুযায়ী একাধিক <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else if</code> ব্যবহার করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">if</span> (condition1) &#123;
              {"\n"}
              {"    "}<span className="text-soft">&#47;&#47; প্রথম condition</span>
              {"\n"}
              &#125; <span className="text-[#E06C75] font-bold">else if</span> (condition2) &#123;
              {"\n"}
              {"    "}<span className="text-soft">&#47;&#47; দ্বিতীয় condition</span>
              {"\n"}
              &#125; <span className="text-[#E06C75] font-bold">else if</span> (condition3) &#123;
              {"\n"}
              {"    "}<span className="text-soft">&#47;&#47; তৃতীয় condition</span>
              {"\n"}
              &#125; <span className="text-[#E06C75] font-bold">else</span> &#123;
              {"\n"}
              {"    "}<span className="text-soft">&#47;&#47; কোনো condition সত্য না হলে</span>
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            Kotlin উপর থেকে নিচে condition পরীক্ষা করে এবং প্রথম যে condition <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> হয়, তার code চালায়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: "if", "else if" ও "else" একসঙ্গে */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>, <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code> ও <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> একসঙ্গে
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <div className="rounded-[14px] border border-line bg-card p-4">
            <div className="rounded-[10px] bg-code p-3 font-mono text-[13.5px] text-[#F6F1EA] space-y-1">
              <p>if</p>
              <p> ↓</p>
              <p>false?</p>
              <p> ↓</p>
              <p>else if</p>
              <p> ↓</p>
              <p>false?</p>
              <p> ↓</p>
              <p>else if</p>
              <p> ↓</p>
              <p><span className="text-[#98C379]">true → এই code চলবে</span></p>
            </div>
          </div>

          <p>
            আর যদি কোনো condition-ই <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> না হয়, তাহলে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> থাকলে তার code চলবে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: "else" ও "else if"-এর পার্থক্য Table */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> ও <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code>-এর পার্থক্য
        </h2>

        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Keyword</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">কাজ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else</code>
                </td>
                <td className="px-4 py-3 text-ink/90">আগের কোনো condition <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> না হলে চলে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else if</code>
                </td>
                <td className="px-4 py-3 text-ink/90">নতুন একটি condition পরীক্ষা করে</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: গ্রেড ল্যাব */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            📊
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ইন্টারঅ্যাক্টিভ গ্রেড ল্যাব: else if এর সিঁড়ি
            </h2>
            <p className="text-[13px] text-soft">
              নিচে মার্কস পরিবর্তন করে দেখুন কোন শর্তটি সত্য হয়ে কোড এক্সিকিউট হয়
            </p>
          </div>
        </div>

        {/* Controller */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-[15px] text-ink">পরীক্ষার নম্বর (score):</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMarks((prev) => Math.max(30, prev - 5))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              -
            </button>
            <span className="min-w-[45px] text-center font-mono text-[18px] font-bold text-terra-deep">
              {marks}
            </span>
            <button
              type="button"
              onClick={() => setMarks((prev) => Math.min(100, prev + 5))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Live Code Walkthrough - Pristine Multi-line */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[13.5px] text-[#F6F1EA] shadow-xs space-y-1">
          <p><span className="text-[#F0B48A] font-bold">val</span> score = {marks}</p>
          <p className="pt-2">
            <span className="text-[#E06C75] font-bold">if</span> ({marks} &gt;= 80) &#123;
            {marks >= 80 && <span className="text-[#98C379] font-sans font-semibold ml-2">✓ True</span>}
          </p>
          <p className={`pl-6 ${marks >= 80 ? "text-[#98C379] font-bold bg-white/10 rounded px-1.5 py-0.5 w-fit" : "text-white/30"}`}>
            println(&quot;Grade: A+&quot;)
          </p>
          <p>
            &#125; <span className="text-[#E06C75] font-bold">else if</span> ({marks} &gt;= 70) &#123;
            {marks >= 70 && marks < 80 && <span className="text-[#98C379] font-sans font-semibold ml-2">✓ True</span>}
          </p>
          <p className={`pl-6 ${marks >= 70 && marks < 80 ? "text-[#98C379] font-bold bg-white/10 rounded px-1.5 py-0.5 w-fit" : "text-white/30"}`}>
            println(&quot;Grade: A&quot;)
          </p>
          <p>
            &#125; <span className="text-[#E06C75] font-bold">else if</span> ({marks} &gt;= 60) &#123;
            {marks >= 60 && marks < 70 && <span className="text-[#98C379] font-sans font-semibold ml-2">✓ True</span>}
          </p>
          <p className={`pl-6 ${marks >= 60 && marks < 70 ? "text-[#98C379] font-bold bg-white/10 rounded px-1.5 py-0.5 w-fit" : "text-white/30"}`}>
            println(&quot;Grade: B&quot;)
          </p>
          <p>
            &#125; <span className="text-[#E06C75] font-bold">else</span> &#123;
            {marks < 60 && <span className="text-[#E06C75] font-sans font-semibold ml-2">✓ বিকল্প পথ</span>}
          </p>
          <p className={`pl-6 ${marks < 60 ? "text-[#E06C75] font-bold bg-white/10 rounded px-1.5 py-0.5 w-fit" : "text-white/30"}`}>
            println(&quot;Grade: Fail&quot;)
          </p>
          <p>&#125;</p>
        </div>

        {/* Live Output Banner */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3 border border-line flex items-center justify-between text-[14.5px]">
          <span className="font-semibold text-soft">চূড়ান্ত ফলাফল:</span>
          <span className="font-mono font-bold text-[16px] px-3 py-1 rounded-[6px] bg-leaf-soft text-leaf-deep border border-leaf/40">
            {marks >= 80 ? "Grade: A+" : marks >= 70 ? "Grade: A" : marks >= 60 ? "Grade: B" : "Grade: Fail"}
          </span>
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
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> ব্যবহার করা হয় <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর বিকল্প হিসেবে।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code> ব্যবহার করা হয় একাধিক condition পরীক্ষা করতে।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code> ব্যবহার করা যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Condition উপর থেকে নিচে পরীক্ষা করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>প্রথম <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> condition-এর code চলার পর পরবর্তী condition আর পরীক্ষা করা হয় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>সব condition <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">false</code> হলে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> থাকলে সেটি চলবে।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">if</code> → প্রথম শর্ত<br />
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">else if</code> → পরের শর্ত<br />
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">else</code> → কোনো শর্তই সত্য না হলে»
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
