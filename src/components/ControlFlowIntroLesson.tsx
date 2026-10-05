import { useState } from "react";

interface ControlFlowIntroLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function ControlFlowIntroLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: ControlFlowIntroLessonProps) {
  // Interactive Simulator for Age Decision
  const [age, setAge] = useState<number>(20);

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Control Flow &amp; Decision Making
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Control Flow কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Control Flow কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Program-এর code কোন ক্রমে, কোন শর্তে, এবং কতবার চলবে—তা নিয়ন্ত্রণ করার পদ্ধতিকে <strong>Control Flow</strong> বলা হয়।
          </p>
          <p>
            সাধারণভাবে program-এর code একের পর এক চলতে থাকে। কিন্তু অনেক সময় আমাদের সিদ্ধান্ত নিতে হয়—
          </p>

          <ul className="space-y-2 text-[16px] pl-1">
            <li className="flex items-start gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span>কোনো শর্ত সত্য হলে একটি কাজ করব।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span>শর্ত মিথ্যা হলে অন্য কাজ করব।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span>একাধিক শর্তের মধ্যে কোনটি সত্য তা অনুযায়ী কাজ করব।</span>
            </li>
          </ul>

          <p>
            এই ধরনের সিদ্ধান্ত নেওয়ার জন্য Kotlin-এ বিভিন্ন Control Flow ব্যবহার করা হয়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Decision Making কী? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Decision Making কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Program-এর কোনো condition-এর ফলাফল অনুযায়ী কোন code চলবে তা নির্ধারণ করাকে <strong>Decision Making</strong> বলা হয়।
          </p>

          <p className="font-semibold text-ink">যেমন:</p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> age = 20
            </pre>
          </div>

          <p>এখন program-কে বলা যেতে পারে:</p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>age 18 বা তার বেশি হলে → &quot;Adult&quot;</p>
            <p>অন্যথায় → &quot;Not Adult&quot;</p>
          </div>

          <p>
            এ ধরনের সিদ্ধান্ত নেওয়ার জন্য Kotlin-এ প্রধানত <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code>, <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else</code>, <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else if</code> এবং <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> ব্যবহার করা হয়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Kotlin-এর প্রধান Decision Making Statements */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এর প্রধান Decision Making Statements
        </h2>

        {/* Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Statement</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">ব্যবহার</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2.5 py-0.5 rounded-[6px]">if</code>
                </td>
                <td className="px-4 py-3 text-ink/90">একটি condition পরীক্ষা করতে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2.5 py-0.5 rounded-[6px]">else</code>
                </td>
                <td className="px-4 py-3 text-ink/90"><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> false হলে বিকল্প code চালাতে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2.5 py-0.5 rounded-[6px]">else if</code>
                </td>
                <td className="px-4 py-3 text-ink/90">একাধিক condition পরীক্ষা করতে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2.5 py-0.5 rounded-[6px]">when</code>
                </td>
                <td className="px-4 py-3 text-ink/90">একাধিক সম্ভাবনার মধ্যে সিদ্ধান্ত নিতে</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: Decision Making Demo */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            🧠
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ভিজ্যুয়াল ল্যাব: Decision Making কীভাবে ঘটে?
            </h2>
            <p className="text-[13px] text-soft">
              নিচের age পরিবর্তন করে দেখুন প্রোগ্রাম কীভাবে ভিন্ন ভিন্ন সিদ্ধান্ত নেয়
            </p>
          </div>
        </div>

        {/* Age Controller */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-[15px] text-ink">Variable age-এর মান:</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAge((prev) => Math.max(10, prev - 2))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              -
            </button>
            <span className="min-w-[40px] text-center font-mono text-[18px] font-bold text-terra-deep">
              {age}
            </span>
            <button
              type="button"
              onClick={() => setAge((prev) => Math.min(30, prev + 2))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Polished Code Structure */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[14px] text-[#F6F1EA] shadow-xs">
          <div className="space-y-1">
            <p><span className="text-[#F0B48A] font-bold">val</span> age = {age}</p>
            <p className="pt-2">
              <span className="text-[#E06C75] font-bold">if</span> ({age} &gt;= 18) &#123;
            </p>
            <p className={`pl-6 ${age >= 18 ? "text-[#98C379] font-bold bg-white/10 rounded px-1.5 py-0.5 w-fit" : "text-white/30 line-through"}`}>
              println(&quot;Adult&quot;)
            </p>
            <p>
              &#125; <span className="text-[#E06C75] font-bold">else</span> &#123;
            </p>
            <p className={`pl-6 ${age < 18 ? "text-[#E06C75] font-bold bg-white/10 rounded px-1.5 py-0.5 w-fit" : "text-white/30 line-through"}`}>
              println(&quot;Not Adult&quot;)
            </p>
            <p>&#125;</p>
          </div>
        </div>

        {/* Live Output */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3 border border-line flex items-center justify-between text-[14.5px]">
          <span className="font-semibold text-soft">চূড়ান্ত আউটপুট:</span>
          <span className={`font-mono font-bold text-[16px] px-3 py-1 rounded-[6px] border ${
            age >= 18 
              ? "bg-leaf-soft text-leaf-deep border-leaf/40" 
              : "bg-terra-soft text-terra-deep border-terra/40"
          }`}>
            &quot;{age >= 18 ? "Adult" : "Not Adult"}&quot;
          </span>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: মনে রাখার বিষয় */}
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
            <span>Control Flow program-এর execution-এর flow নিয়ন্ত্রণ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Decision Making condition-এর ভিত্তিতে সিদ্ধান্ত নিতে সাহায্য করে।</span>
          </li>
          <li className="flex items-center flex-wrap gap-1.5">
            <span className="text-terra-deep font-bold">•</span>
            <span>Kotlin-এ Decision Making-এর জন্য</span>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>,
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code>,
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code>
            <span>এবং</span>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code>
            <span>ব্যবহার করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>পরবর্তী Lesson-গুলোতে এগুলো একে একে বিস্তারিতভাবে শেখা হবে।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «Control Flow = Program কীভাবে চলবে তা নিয়ন্ত্রণ করা।<br />
            Decision Making = Condition অনুযায়ী সিদ্ধান্ত নেওয়া।»
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
