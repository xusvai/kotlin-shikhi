import { useState } from "react";

interface DataTypesOverviewLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function DataTypesOverviewLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: DataTypesOverviewLessonProps) {
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
          Data Types পরিচিতি
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Data Type কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Data Type কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ বিভিন্ন ধরনের data নিয়ে কাজ করতে হয়। যেমন—নাম, বয়স, দাম, কোনো অক্ষর বা সত্য-মিথ্যার তথ্য।
          </p>
          <p>
            প্রতিটি data একই ধরনের নয়। তাই Kotlin-এ data-এর ধরন বোঝানোর জন্য Data Type ব্যবহার করা হয়।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            সহজভাবে বললে, Data Type বলে দেয় একটি Variable-এ কী ধরনের data রাখা হয়েছে বা রাখা যাবে।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Data Type কেন গুরুত্বপূর্ণ? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Data Type কেন গুরুত্বপূর্ণ?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি program-এ data নিয়ে বিভিন্ন ধরনের কাজ করতে হয়। কোন data কীভাবে ব্যবহার করা যাবে, তা তার Data Type-এর ওপর নির্ভর করে।
          </p>
          <p>
            যেমন, একটি সংখ্যার সঙ্গে গাণিতিক হিসাব করা যায়। আবার একটি Text-এর সঙ্গে সেইভাবে গাণিতিক হিসাব করা যায় না।
          </p>
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <span className="font-semibold text-terra-deep">সুতরাং:</span>
            <p className="mt-1 text-[15.5px] leading-relaxed text-soft">
              কম্পিউটার যেন প্রতিটি ডেটাকে সঠিকভাবে প্রসেস করতে পারে, সেজন্য Kotlin-এর কাছে Data-এর সঠিক ধরন জানা অত্যন্ত গুরুত্বপূর্ণ।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Kotlin-এর কিছু সাধারণ Data Type */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এর কিছু সাধারণ Data Type
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          Kotlin-এ বিভিন্ন ধরনের Data Type রয়েছে। Beginner হিসেবে প্রথমে আমরা কয়েকটি মৌলিক Data Type-এর সঙ্গে পরিচিত হব।
        </p>

        {/* Comparison Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[340px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Data Type</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">কী ধরনের data রাখে</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-terra-deep">Int</td>
                <td className="px-4 py-3 text-ink/90">পূর্ণ সংখ্যা</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-kotlin">Double</td>
                <td className="px-4 py-3 text-ink/90">দশমিক সংখ্যা</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-leaf-deep">String</td>
                <td className="px-4 py-3 text-ink/90">Text বা একাধিক অক্ষরের লেখা</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-ink">Char</td>
                <td className="px-4 py-3 text-ink/90">একটি মাত্র অক্ষর</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-terra-deep">Boolean</td>
                <td className="px-4 py-3 font-mono text-ink/90">true বা false</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-[12px] bg-sand/50 p-3.5 border border-line text-[15px] leading-relaxed text-soft">
          এগুলো Kotlin-এ সবচেয়ে বেশি ব্যবহৃত মৌলিক Data Type-এর মধ্যে রয়েছে। পরবর্তী Lesson-গুলোতে আমরা প্রতিটি Data Type আলাদাভাবে এবং উদাহরণসহ শিখব।
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Variable এবং Data Type-এর সম্পর্ক */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Variable এবং Data Type-এর সম্পর্ক
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable-এর মধ্যে একটি value রাখা হয়, আর Data Type সেই value-এর ধরন নির্ধারণ করে।
          </p>

          {/* IDE Style Code Box with Type Annotation */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Relation1.kt</span>
              <span className="text-white/60">Type Annotation</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> age:{" "}
              <span className="text-[#7F52FF] font-semibold">Int</span> = 24
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono text-ink font-semibold">age</code> হলো Variable এবং <code className="font-mono text-kotlin font-semibold">Int</code> হলো তার Data Type।
          </p>

          <p>
            তবে Kotlin অনেক সময় value দেখে নিজেই Data Type বুঝে নিতে পারে। এটিই আমরা আগের Type Inference Lesson-এ শিখেছি।
          </p>

          {/* IDE Style Code Box with Type Inference */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Relation2.kt</span>
              <span className="text-white/60">Type Inference</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> age = 24
            </pre>
          </div>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[15.5px] text-ink leading-relaxed">
            এখানে <code className="font-mono text-kotlin font-semibold">Int</code> আলাদাভাবে না লিখলেও Kotlin বুঝতে পারে <code className="font-mono text-ink font-semibold">age</code> একটি পূর্ণ সংখ্যা।
          </div>
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
            <span>Data Type data-এর ধরন নির্ধারণ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>বিভিন্ন ধরনের data-এর জন্য বিভিন্ন Data Type রয়েছে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Variable-এর value কীভাবে ব্যবহার করা যাবে, তার সঙ্গে Data Type-এর সম্পর্ক রয়েছে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Kotlin অনেক ক্ষেত্রে value দেখে নিজেই Data Type নির্ধারণ করতে পারে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>
              <code className="font-mono font-bold text-terra-deep">Int</code>,{" "}
              <code className="font-mono font-bold text-kotlin">Double</code>,{" "}
              <code className="font-mono font-bold text-leaf-deep">String</code>,{" "}
              <code className="font-mono font-bold text-ink">Char</code> এবং{" "}
              <code className="font-mono font-bold text-terra-deep">Boolean</code> হলো Kotlin-এর কিছু গুরুত্বপূর্ণ Data Type।
            </span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: Data Type হলো data-এর পরিচয়—এটি বলে দেয় data-টি আসলে কী ধরনের।&raquo;
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
