import { useState } from "react";

interface OperatorIntroLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function OperatorIntroLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: OperatorIntroLessonProps) {
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
          Kotlin Operators পরিচিতি
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Operator কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Operator কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ বিভিন্ন Variable বা মানের ওপর গাণিতিক হিসাব, তুলনা কিংবা কোনো অপারেশন সম্পন্ন করার জন্য ব্যবহৃত বিশেষ প্রতীক বা চিহ্নকে <strong>Operator</strong> (অপারেটর) বলা হয়।
          </p>
          <p>
            যেমন—দুটি সংখ্যা যোগ করার জন্য আমরা <span className="whitespace-nowrap"><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">+</code></span> চিহ্ন ব্যবহার করি। এখানে <span className="whitespace-nowrap"><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">+</code></span> হলো একটি Operator।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            <strong>সহজভাবে মনে রাখো:</strong> যে চিহ্ন দিয়ে কোনো গাণিতিক বা যুক্তিমূলক কাজ করানো হয়, তাকে <strong>Operator</strong> বলে।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Operand কী? (Visual Anatomy) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Operand এবং Operator-এর সম্পর্ক
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            যে মান বা ভ্যারিয়েবলগুলোর ওপর Operator কাজ করে, সেগুলোকে বলা হয় <strong>Operand</strong> (অপারেন্ড)।
          </p>

          {/* Visual Anatomy Card */}
          <div className="mt-2 rounded-[16px] border border-line bg-card p-3 sm:p-5 shadow-xs">
            <p className="text-[14px] font-semibold text-soft text-center mb-3">
              একটি অপারেশনের গঠন:
            </p>
            <div className="overflow-x-auto pb-1">
              <div className="inline-flex min-w-full items-center justify-center gap-2 sm:gap-4 rounded-[12px] bg-sand/60 px-3 py-4 border border-line font-mono text-[18px] sm:text-[22px] whitespace-nowrap">
                {/* Operand 1 */}
                <div className="flex flex-col items-center">
                  <span className="rounded-[8px] bg-card px-3 py-1 font-bold text-ink border border-line text-[16px] sm:text-[20px]">
                    10
                  </span>
                  <span className="mt-1 font-sans text-[11px] sm:text-[12px] font-bold text-soft uppercase">
                    Operand
                  </span>
                </div>

                {/* Operator (+) */}
                <div className="flex flex-col items-center">
                  <span className="rounded-[8px] bg-terra-soft px-3 py-1 font-bold text-terra-deep border border-terra/30 text-[18px] sm:text-[22px]">
                    +
                  </span>
                  <span className="mt-1 font-sans text-[11px] sm:text-[12px] font-bold text-terra-deep uppercase">
                    Operator
                  </span>
                </div>

                {/* Operand 2 */}
                <div className="flex flex-col items-center">
                  <span className="rounded-[8px] bg-card px-3 py-1 font-bold text-ink border border-line text-[16px] sm:text-[20px]">
                    20
                  </span>
                  <span className="mt-1 font-sans text-[11px] sm:text-[12px] font-bold text-soft uppercase">
                    Operand
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[14.5px] text-soft">
              এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1 py-0.5 rounded">10</code> এবং <code className="font-mono font-bold text-ink bg-sand border border-line px-1 py-0.5 rounded">20</code> হলো Operands, আর <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1 py-0.5 rounded">+</code> হলো Operator।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Kotlin-এ Operator-এর প্রকারভেদ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এ Operator-এর প্রকারভেদ
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          কাজের ধরন অনুযায়ী Kotlin-এ মূলত নিচের প্রধান ধরনের Operator-গুলো বহুল ব্যবহৃত হয়:
        </p>

        {/* Categories List */}
        <div className="mt-4 space-y-3">
          {/* 1. Arithmetic */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-[17px] font-bold text-ink">
                ১. Arithmetic Operators (গাণিতিক)
              </h3>
              <div className="self-start sm:self-auto">
                <span className="inline-block font-mono text-[13px] font-bold text-terra-deep bg-sand px-2.5 py-1 rounded-[8px] border border-line whitespace-nowrap">
                  + &nbsp;- &nbsp;* &nbsp;/ &nbsp;%
                </span>
              </div>
            </div>
            <p className="mt-2 text-[15px] text-soft leading-relaxed">
              যোগ, বিয়োগ, গুণ, ভাগ ও ভাগশেষ বের করার মতো সাধারণ গাণিতিক হিসাব করতে ব্যবহৃত হয়।
            </p>
          </div>

          {/* 2. Assignment */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-[17px] font-bold text-ink">
                ২. Assignment Operators (মান নির্ধারণ)
              </h3>
              <div className="self-start sm:self-auto">
                <span className="inline-block font-mono text-[13px] font-bold text-terra-deep bg-sand px-2.5 py-1 rounded-[8px] border border-line whitespace-nowrap">
                  = &nbsp;+= &nbsp;-= &nbsp;*=
                </span>
              </div>
            </div>
            <p className="mt-2 text-[15px] text-soft leading-relaxed">
              কোনো Variable-এ সরাসরি মান জমা রাখতে বা আগের মানের সঙ্গে হিসাব করে সংরক্ষণ করতে ব্যবহৃত হয়।
            </p>
          </div>

          {/* 3. Comparison */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-[17px] font-bold text-ink">
                ৩. Comparison Operators (তুলনা)
              </h3>
              <div className="self-start sm:self-auto">
                <span className="inline-block font-mono text-[13px] font-bold text-terra-deep bg-sand px-2.5 py-1 rounded-[8px] border border-line whitespace-nowrap">
                  == &nbsp;!= &nbsp;&gt; &nbsp;&lt; &nbsp;&gt;= &nbsp;&lt;=
                </span>
              </div>
            </div>
            <p className="mt-2 text-[15px] text-soft leading-relaxed">
              দুটি মান ছোট, বড় বা সমান কি না তা তুলনা করতে ব্যবহৃত হয় (ফলাফল সবসময় <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">true</code> বা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">false</code> হয়)।
            </p>
          </div>

          {/* 4. Logical */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-[17px] font-bold text-ink">
                ৪. Logical Operators (যৌক্তিক)
              </h3>
              <div className="self-start sm:self-auto">
                <span className="inline-block font-mono text-[13px] font-bold text-terra-deep bg-sand px-2.5 py-1 rounded-[8px] border border-line whitespace-nowrap">
                  && &nbsp;|| &nbsp;!
                </span>
              </div>
            </div>
            <p className="mt-2 text-[15px] text-soft leading-relaxed">
              একাধিক শর্তকে যুক্ত করে সিদ্ধান্ত নিতে (AND, OR, NOT) ব্যবহৃত হয়।
            </p>
          </div>

          {/* 5. Unary */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-[17px] font-bold text-ink">
                ৫. Unary Operators (একক)
              </h3>
              <div className="self-start sm:self-auto">
                <span className="inline-block font-mono text-[13px] font-bold text-terra-deep bg-sand px-2.5 py-1 rounded-[8px] border border-line whitespace-nowrap">
                  ++ &nbsp;-- &nbsp;+ &nbsp;-
                </span>
              </div>
            </div>
            <p className="mt-2 text-[15px] text-soft leading-relaxed">
              একটিমাত্র অপারেন্ডের মান ১ বাড়ানো (Increment) বা ১ কমানো (Decrement) করতে ব্যবহৃত হয়।
            </p>
          </div>

          {/* 6. Range / Containment */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-[17px] font-bold text-ink">
                ৬. Range Operators (সীমা যাচাই)
              </h3>
              <div className="self-start sm:self-auto">
                <span className="inline-block font-mono text-[13px] font-bold text-kotlin bg-sand px-2.5 py-1 rounded-[8px] border border-line whitespace-nowrap">
                  in &nbsp;/ &nbsp;!in
                </span>
              </div>
            </div>
            <p className="mt-2 text-[15px] text-soft leading-relaxed">
              কোনো মান নির্দিষ্ট একটি রেঞ্জ বা সীমার ভেতরে আছে কি না (<code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">in</code>) অথবা নেই কি না (<code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">!in</code>) তা পরীক্ষা করতে ব্যবহৃত হয়।
            </p>
          </div>

          {/* 7. Type Check */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-[17px] font-bold text-ink">
                ৭. Type Check Operators (টাইপ যাচাই)
              </h3>
              <div className="self-start sm:self-auto">
                <span className="inline-block font-mono text-[13px] font-bold text-leaf-deep bg-sand px-2.5 py-1 rounded-[8px] border border-line whitespace-nowrap">
                  is &nbsp;/ &nbsp;!is
                </span>
              </div>
            </div>
            <p className="mt-2 text-[15px] text-soft leading-relaxed">
              কোনো Variable নির্দিষ্ট Data Type-এর কি না (<code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">is</code>) বা নয় কি না (<code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">!is</code>) তা যাচাই করে এবং স্বয়ংক্রিয় Smart Cast সুবিধা দেয়।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: দ্রুত কোড ঝলক */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          দ্রুত কোড ঝলক (Quick Preview)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ বিভিন্ন অপারেটর কীভাবে কাজ করে তার একটি সাধারণ উদাহরণ:
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>OperatorsDemo.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val a = 20\nval b = 5\n\nval sum = a + b       // Arithmetic: 25\nval isGreater = a > b // Comparison: true\nprintln(sum)\nprintln(isGreater)",
                    "code-op-demo"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-op-demo" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> a = 20
              {"\n"}
              <span className="text-[#F0B48A]">val</span> b = 5
              {"\n\n"}
              <span className="text-[#F0B48A]">val</span> sum = a + b        <span className="text-[#98C379]">&#47;&#47; যোগ হলো: 25</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> isGreater = a &gt; b  <span className="text-[#98C379]">&#47;&#47; তুলনা: true (২০ কি ৫ এর চেয়ে বড়?)</span>
              {"\n\n"}
              println(sum)
              {"\n"}
              println(isGreater)
            </pre>
          </div>

          <p className="text-[14.5px] italic text-soft">
            «পরবর্তী পাঠগুলোতে আমরা প্রতিটি অপারেটরের বাস্তব প্রয়োগ ও ট্রিকস বিস্তারিতভাবে শিখব।»
          </p>
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
            <span>মান বা ভ্যারিয়েবলের ওপর অপারেশন চালানোর বিশেষ চিহ্নই হলো <strong>Operator</strong>।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>যে মানের ওপর অপারেটর কাজ করে, তাকে <strong>Operand</strong> বলে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Kotlin-এর প্রধান অপারেটর: Arithmetic, Assignment, Comparison, Logical, Unary এবং স্পেশাল Range (<code className="font-mono font-bold text-kotlin">in</code>) ও Type Check (<code className="font-mono font-bold text-leaf-deep">is</code>)।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>তুলনামূলক (Comparison), Range ও Type Check অপারেটরের ফলাফল সর্বদা একটি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Boolean</code> মান প্রদান করে।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: অপারেটর হলো কাজের হাতিয়ার (যেমন: <span className="font-mono font-bold text-terra-deep">+</span>, <span className="font-mono font-bold text-terra-deep">&gt;</span>), আর অপারেন্ড হলো যে জিনিসের ওপর কাজ চালানো হয়!&raquo;
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
