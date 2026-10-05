import { useState } from "react";

interface NestedIfLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function NestedIfLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: NestedIfLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [age, setAge] = useState<number>(20);
  const [hasTicket, setHasTicket] = useState<boolean>(true);

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
          Kotlin Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code>
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Nested if কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> Statement-এর ভেতরে আরেকটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> Statement ব্যবহার করাকে Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> বলা হয়।
          </p>

          <p>
            বাস্তবে এমন অনেক পরিস্থিতি আসে যেখানে ১ম শর্ত সত্য হওয়ার পরই কেবল ২য় শর্তটি চেক করার প্রয়োজন পড়ে।
          </p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «যেমন: স্টেডিয়ামে ঢুকার অনুমতি তখনই পাবেন—যদি বয়স ১৮ বা তার বেশি হয় (১ম শর্ত) এবং বৈধ টিকেট থাকে (২য় শর্ত)।»
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: একটি সহজ উদাহরণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একটি সহজ উদাহরণ
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>StadiumEntry.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val age = 20\nval hasTicket = true\n\nif (age >= 18) {\n    if (hasTicket) {\n        println(\"আপনি প্রবেশ করতে পারবেন\")\n    }\n}",
                    "code-stadium"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-stadium" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> age = 20
              {"\n"}
              <span className="text-[#F0B48A] font-bold">val</span> hasTicket = <span className="text-[#E5C07B] font-bold">true</span>
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">if</span> (age &gt;= 18) &#123;
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">if</span> (hasTicket) &#123;
              {"\n"}
              {"        "}println(<span className="text-[#98C379]">&quot;আপনি প্রবেশ করতে পারবেন&quot;</span>)
              {"\n"}
              {"    "}&#125;
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে প্রথমে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">age &gt;= 18</code> পরীক্ষা হবে।
          </p>

          <p>
            এটি <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> হলে ভেতরের <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>:
          </p>

          <div className="rounded-[8px] bg-sand/80 px-3.5 py-1.5 font-mono text-[14px] text-ink border border-line inline-block">
            hasTicket
          </div>

          <p>পরীক্ষা করবে।</p>

          <p>
            দুটো condition-ই <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> হওয়ায় output হবে:
          </p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            আপনি প্রবেশ করতে পারবেন
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Nested "if" কীভাবে কাজ করে? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> কীভাবে কাজ করে?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এ বাইরের <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর condition আগে পরীক্ষা হয়।
          </p>

          <div className="rounded-[14px] border border-line bg-card p-4">
            <div className="rounded-[10px] bg-code p-3.5 font-mono text-[13.5px] text-[#F6F1EA] space-y-1">
              <p>Outer if</p>
              <p>{"   "}↓</p>
              <p>{" "}true?</p>
              <p>{"   "}↓</p>
              <p>Inner if</p>
              <p>{"   "}↓</p>
              <p>{" "}true?</p>
              <p>{"   "}↓</p>
              <p><span className="text-[#98C379]">Code চলবে</span></p>
            </div>
          </div>

          <p>
            অর্থাৎ, ভেতরের <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এ পৌঁছানোর জন্য আগে বাইরের <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর condition <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> হতে হবে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: একাধিক Level-এর Nested if */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একাধিক Level-এর Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code>
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            প্রয়োজন হলে একটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর ভিতরে আরও একটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> থাকতে পারে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">if</span> (condition1) &#123;
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">if</span> (condition2) &#123;
              {"\n"}
              {"        "}<span className="text-[#E06C75] font-bold">if</span> (condition3) &#123;
              {"\n"}
              {"            "}println(<span className="text-[#98C379]">&quot;সব condition true&quot;</span>)
              {"\n"}
              {"        "}&#125;
              {"\n"}
              {"    "}&#125;
              {"\n"}
              &#125;
            </pre>
          </div>

          <p className="rounded-[10px] bg-card p-3 border border-line text-[15.5px]">
            ⚠️ তবে অনেক বেশি Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> ব্যবহার করলে code জটিল ও পড়তে কঠিন হয়ে যেতে পারে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Nested "if" কখন ব্যবহার করা হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">if</code> কখন ব্যবহার করা হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            যখন একটি condition সত্য হওয়ার পর আরেকটি আলাদা condition পরীক্ষা করার প্রয়োজন হয়, তখন Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> ব্যবহার করা যেতে পারে।
          </p>

          <p className="font-semibold text-ink">যেমন:</p>

          <div className="rounded-[14px] border border-line bg-card p-4">
            <div className="rounded-[10px] bg-code p-3.5 font-mono text-[13.5px] text-[#F6F1EA] space-y-1">
              <p>বয়স ১৮ বা তার বেশি?</p>
              <p>{"        "}↓</p>
              <p>{"      "}হ্যাঁ</p>
              <p>{"        "}↓</p>
              <p>Ticket আছে?</p>
              <p>{"        "}↓</p>
              <p>{"      "}হ্যাঁ</p>
              <p>{"        "}↓</p>
              <p><span className="text-[#98C379]">প্রবেশের অনুমতি</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: স্টেডিয়াম এন্ট্রি টেস্ট */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            🎟️
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ইন্টারঅ্যাক্টিভ ল্যাব: স্টেডিয়ামে প্রবেশের শর্ত যাচাই
            </h2>
            <p className="text-[13px] text-soft">
              বয়স এবং টিকেট পরিবর্তন করে ভেতরের if ব্লকের আচরণ দেখুন
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[15px] text-ink">১ম শর্ত (বয়স):</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setAge((prev) => Math.max(14, prev - 2))}
                className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
              >
                -
              </button>
              <span className="min-w-[40px] text-center font-mono text-[17px] font-bold text-terra-deep">
                {age}
              </span>
              <button
                type="button"
                onClick={() => setAge((prev) => Math.min(26, prev + 2))}
                className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line/60 pt-2.5">
            <span className="font-semibold text-[15px] text-ink">২য় শর্ত (Ticket আছে?):</span>
            <button
              type="button"
              onClick={() => setHasTicket((prev) => !prev)}
              className={`rounded-[8px] px-3.5 py-1 text-[13.5px] font-bold border transition-colors ${
                hasTicket
                  ? "bg-leaf text-white border-leaf"
                  : "bg-terra text-white border-terra"
              }`}
            >
              {hasTicket ? "✓ হ্যাঁ (true)" : "✕ না (false)"}
            </button>
          </div>
        </div>

        {/* Live Result Display */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[13.5px] text-[#F6F1EA] shadow-xs space-y-1.5">
          <p className="text-soft text-[12.5px] font-sans">
            {age >= 18 ? "✓ ১ম শর্ত সত্য (বয়স ১৮ বা তার বেশি)" : "✕ ১ম শর্ত মিথ্যা (বয়স ১৮ এর কম)"}
          </p>
          {age >= 18 && (
            <p className="text-soft text-[12.5px] font-sans">
              {hasTicket ? "✓ ২য় শর্ত সত্য (Ticket আছে)" : "✕ ২য় শর্ত মিথ্যা (Ticket নেই)"}
            </p>
          )}
          <div className="mt-2 pt-2 border-t border-white/10 text-[14.5px]">
            <span className="text-soft font-sans">Output ➔ </span>
            <span className={age >= 18 && hasTicket ? "text-[#98C379] font-bold" : "text-white/40 italic"}>
              {age >= 18 && hasTicket ? "\"আপনি প্রবেশ করতে পারবেন\"" : "(কোনো output নেই)"}
            </span>
          </div>
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
            <span>একটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>-এর ভিতরে আরেকটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> থাকলে তাকে Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> বলে।</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>বাইরের <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> <code className="font-mono font-bold text-leaf-deep bg-leaf-soft/50 border border-leaf/30 px-1.5 py-0.2 rounded-[5px]">true</code> না হলে ভেতরের <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> পরীক্ষা করা হয় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক level-এর Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> ব্যবহার করা সম্ভব।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>অতিরিক্ত Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> code-কে জটিল করে তুলতে পারে।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «Nested <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px] not-italic">if</code> = একটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">if</code>-এর ভিতরে আরেকটি <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">if</code>।»
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
