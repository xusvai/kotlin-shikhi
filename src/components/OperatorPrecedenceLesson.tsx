import { useState } from "react";

interface OperatorPrecedenceLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function OperatorPrecedenceLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: OperatorPrecedenceLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Interactive Calculator State
  const [selectedExample, setSelectedExample] = useState<"without-paren" | "with-paren">("without-paren");

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
          Kotlin Operator Precedence
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Operator Precedence কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Operator Precedence কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি expression-এর মধ্যে একাধিক Operator থাকলে কোন Operator-এর কাজ আগে হবে, সেই নিয়মকে <strong>Operator Precedence</strong> বলা হয়।
          </p>

          <p className="font-semibold text-ink">
            সহজভাবে বললে:
          </p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «Operator Precedence নির্ধারণ করে—একাধিক Operator থাকলে কোনটি আগে কাজ করবে।»
          </div>

          <div>
            <h3 className="text-[17px] font-bold text-ink mb-1.5">উদাহরণ:</h3>
            <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
              <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">val</span> result = 10 + 5 * 2
              </pre>
            </div>
            <p className="mt-2.5">
              এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">+</code> এবং <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">*</code>—দুইটি Operator আছে।
            </p>

            <div className="mt-2 space-y-1 text-[16px]">
              <p>প্রথমে <code className="font-mono font-bold text-leaf-deep">*</code> কাজ করবে:</p>
              <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14.5px] text-ink border border-line inline-block">
                5 × 2 = 10
              </div>

              <p className="pt-2">তারপর <code className="font-mono font-bold text-leaf-deep">+</code> কাজ করবে:</p>
              <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14.5px] text-ink border border-line inline-block">
                10 + 10 = 20
              </div>
            </div>

            <p className="mt-3 font-semibold text-leaf-deep">
              তাই &quot;result&quot; হবে &quot;20&quot;।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: কেন Precedence দরকার? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          কেন Precedence দরকার?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি expression-এ একাধিক Operator থাকলে সবগুলোকে একই সময়ে হিসাব করা হয় না।
          </p>
          <p>
            Kotlin নির্দিষ্ট নিয়ম অনুসরণ করে ঠিক করে কোন Operator আগে এবং কোনটি পরে কাজ করবে।
          </p>

          <p className="font-semibold text-ink">যেমন:</p>
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 10 + 5 * 2
            </pre>
          </div>

          <p>
            এটি যদি বাম থেকে ডানে হিসাব করা হতো, তাহলে:
          </p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>10 + 5 = 15</p>
            <p>15 × 2 = 30</p>
          </div>

          <p>হতো।</p>

          <p>
            কিন্তু Operator Precedence-এর কারণে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">*</code> আগে হওয়ায় সঠিক ফল:
          </p>

          <div className="rounded-[10px] bg-leaf-soft/50 border border-leaf/40 px-4 py-2 font-mono text-[16px] text-leaf-deep font-bold inline-block">
            20
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: সাধারণ Arithmetic Operator-এর Precedence */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          সাধারণ Arithmetic Operator-এর Precedence
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          Beginner হিসেবে আপাতত এই নিয়মগুলো মনে রাখলেই যথেষ্ট:
        </p>

        {/* Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Operator</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">অগ্রাধিকার</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-terra-deep">&quot;*&quot;</td>
                <td className="px-4 py-3 font-semibold text-leaf-deep">বেশি</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-terra-deep">&quot;/&quot;</td>
                <td className="px-4 py-3 font-semibold text-leaf-deep">বেশি</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-terra-deep">&quot;%&quot;</td>
                <td className="px-4 py-3 font-semibold text-leaf-deep">বেশি</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-soft">&quot;+&quot;</td>
                <td className="px-4 py-3 text-soft">কম</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-mono font-bold text-soft">&quot;-&quot;</td>
                <td className="px-4 py-3 text-soft">কম</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-semibold text-ink text-[16.5px]">
          অর্থাৎ সাধারণভাবে:
        </p>

        <div className="mt-2 rounded-[12px] bg-sand/70 p-3.5 border border-line text-[16px] font-mono text-ink">
          &quot;*&quot;, &quot;/&quot;, &quot;%&quot; আগে → &quot;+&quot;, &quot;-&quot; পরে
        </div>

        <div className="mt-5 space-y-2 text-[16.5px]">
          <h3 className="text-[17px] font-bold text-ink">উদাহরণ:</h3>
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 20 - 6 / 2
            </pre>
          </div>

          <p className="pt-1">প্রথমে:</p>
          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            6 ÷ 2 = 3
          </div>

          <p className="pt-2">তারপর:</p>
          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            20 - 3 = 17
          </div>

          <p className="pt-2 font-semibold text-leaf-deep">
            তাই &quot;result&quot; হবে &quot;17&quot;।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: একই Precedence হলে কী হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একই Precedence হলে কী হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            যদি একই ধরনের Precedence-এর একাধিক Operator থাকে, সাধারণ Arithmetic expression-এ সেগুলো <strong>বাম থেকে ডানে</strong> কাজ করে।
          </p>

          <h3 className="text-[17px] font-bold text-ink">উদাহরণ:</h3>
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = 20 / 5 * 2
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;/&quot;</code> এবং <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;*&quot;</code>-এর Precedence একই।
          </p>

          <p>তাই বাম থেকে শুরু হবে:</p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>20 ÷ 5 = 4</p>
            <p>4 × 2 = 8</p>
          </div>

          <p className="font-semibold text-leaf-deep">
            তাই &quot;result&quot; হবে &quot;8&quot;।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Parentheses "()" ব্যবহার */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Parentheses &quot;()&quot; ব্যবহার
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            কোনো হিসাবকে আগে করাতে চাইলে Parentheses <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;()&quot;</code> ব্যবহার করা যায়।
          </p>

          <h3 className="text-[17px] font-bold text-ink">উদাহরণ:</h3>
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> result = (10 + 5) * 2
            </pre>
          </div>

          <p>
            এখানে প্রথমে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;()&quot;</code>-এর ভেতরের হিসাব হবে:
          </p>

          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            10 + 5 = 15
          </div>

          <p className="pt-1">তারপর:</p>
          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            15 × 2 = 30
          </div>

          <p className="font-semibold text-leaf-deep">
            তাই &quot;result&quot; হবে &quot;30&quot;।
          </p>

          <p className="rounded-[10px] bg-card p-3 border border-line text-[15.5px]">
            অর্থাৎ Parentheses ব্যবহার করে কোন অংশের কাজ আগে হবে তা স্পষ্টভাবে নির্ধারণ করা যায়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Playground: BODMAS ও প্যারেন্থেসিসের শক্তি */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            ⚡
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ভিজ্যুয়াল টেস্ট: বন্ধনী () দিলে কীভাবে ফলাফল বদলে যায়?
            </h2>
            <p className="text-[13px] text-soft">
              নিচে ক্লিক করে দেখুন বন্ধনী দিলে ফলাফলের কি পরিবর্তন ঘটে
            </p>
          </div>
        </div>

        {/* Toggle options */}
        <div className="mt-4 flex rounded-[10px] border border-line bg-sand/70 p-1">
          <button
            type="button"
            onClick={() => setSelectedExample("without-paren")}
            className={`flex-1 rounded-[7px] py-1.5 text-[13px] font-bold transition-all ${
              selectedExample === "without-paren"
                ? "bg-terra text-white shadow-2xs"
                : "text-soft hover:text-ink"
            }`}
          >
            বন্ধনী ছাড়া: 10 + 5 * 2
          </button>
          <button
            type="button"
            onClick={() => setSelectedExample("with-paren")}
            className={`flex-1 rounded-[7px] py-1.5 text-[13px] font-bold transition-all ${
              selectedExample === "with-paren"
                ? "bg-terra text-white shadow-2xs"
                : "text-soft hover:text-ink"
            }`}
          >
            বন্ধনী সহ: (10 + 5) * 2
          </button>
        </div>

        {/* Dynamic code & calculation */}
        <div className="mt-4 rounded-[12px] bg-code p-4 font-mono text-[14.5px] text-[#F6F1EA] shadow-xs">
          {selectedExample === "without-paren" ? (
            <div>
              <span className="text-[#F0B48A]">val</span> result = 10 + <span className="text-[#E5C07B] font-bold bg-white/10 px-1 rounded">5 * 2</span>
              {"\n"}
              <span className="text-soft text-[12px] font-sans">
                {`// ধাপ ১: 5 * 2 = 10 (* এর অগ্রাধিকার আগে)`}
              </span>
              {"\n"}
              <span className="text-soft text-[12px] font-sans">
                {`// ধাপ ২: 10 + 10 = 20`}
              </span>
              {"\n\n"}
              <span className="text-[#98C379] font-bold">println(result) // আউটপুট: 20</span>
            </div>
          ) : (
            <div>
              <span className="text-[#F0B48A]">val</span> result = <span className="text-[#98C379] font-bold bg-white/10 px-1 rounded">(10 + 5)</span> * 2
              {"\n"}
              <span className="text-soft text-[12px] font-sans">
                {`// ধাপ ১: (10 + 5) = 15 (বন্ধনীর কাজ সবার আগে!)`}
              </span>
              {"\n"}
              <span className="text-soft text-[12px] font-sans">
                {`// ধাপ ২: 15 * 2 = 30`}
              </span>
              {"\n\n"}
              <span className="text-[#98C379] font-bold">println(result) // আউটপুট: 30</span>
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: Precedence মনে রাখার সহজ নিয়ম */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Precedence মনে রাখার সহজ নিয়ম
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>সাধারণ Arithmetic expression-এর ক্ষেত্রে:</p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>() → আগে</p>
            <p>* / % → এরপর</p>
            <p>+ - → শেষে</p>
          </div>

          <p className="font-semibold text-ink pt-1">অর্থাৎ:</p>

          <div className="rounded-[12px] border-l-4 border-leaf bg-leaf-soft/40 p-3.5 text-[16px] text-leaf-deep font-semibold">
            «Parentheses আগে → গুণ/ভাগ/ভাগশেষ → যোগ/বিয়োগ»
          </div>
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
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক Operator থাকলে কোনটি আগে কাজ করবে, সেটিই Operator Precedence।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>&quot;*&quot;, &quot;/&quot;, &quot;%&quot; সাধারণত &quot;+&quot;, &quot;-&quot;-এর আগে কাজ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একই Precedence হলে সাধারণ Arithmetic expression-এ বাম থেকে ডানে কাজ হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>&quot;()&quot; ব্যবহার করে কোনো অংশকে আগে হিসাব করানো যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Precedence বুঝলে expression-এর ফলাফল সঠিকভাবে নির্ধারণ করা সহজ হয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «Operator Precedence = কোন Operator আগে কাজ করবে তার নিয়ম।»
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
