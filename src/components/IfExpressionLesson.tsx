import { useState } from "react";

interface IfExpressionLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function IfExpressionLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: IfExpressionLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Interactive Simulator State: Age tester
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
          Kotlin if Expression
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: if কী এবং কেন লাগে? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          if কী এবং কেন ব্যবহার করা হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            বাস্তব জীবনে আমরা শর্তের ওপর ভিত্তি করে অনেক সিদ্ধান্ত নিই। যেমন: <em>&quot;যদি বৃষ্টি হয়, তবে আমি ছাতা নেব।&quot;</em>
          </p>
          <p>
            প্রোগ্রামিংয়েও কোনো নির্দিষ্ট শর্ত <strong>সত্য (true)</strong> হলে কোনো কোড এক্সিকিউট করার জন্য <strong>if</strong> ব্যবহার করা হয়।
          </p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «if মানে হলো: যদি শর্তটি সত্য হয়, তবেই এর ভেতরের কাজটি করো; মিথ্যা হলে এড়িয়ে যাও।»
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: if-এর সাধারণ গঠন (Syntax) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          if-এর সাধারণ গঠন (Syntax)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ <code className="font-mono font-bold text-kotlin bg-sand px-1.5 py-0.5 rounded">if</code> লেখার নিয়ম খুবই সহজ:
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#E06C75]">if</span> (শর্ত বা condition) &#123;
              {"\n"}
              {"    "}<span className="text-[#98C379]">&#47;&#47; শর্ত সত্য (true) হলে এই কোডটি চলবে</span>
              {"\n"}
              &#125;
            </pre>
          </div>

          <ul className="space-y-1.5 text-[16px] pl-1">
            <li className="flex items-start gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold">( )</code> প্রথম বন্ধনীর ভেতরে একটি <strong>Boolean শর্ত</strong> (যেমন <code className="font-mono">age &gt;= 18</code>) থাকে।</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span><code className="font-mono font-bold">&#123; &#125;</code> দ্বিতীয় বন্ধনীকে বলা হয় <strong>if block</strong> বা বডি। শর্ত সত্য হলেই কেবল এর ভেতরের লাইনগুলো চলে।</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: বাস্তব উদাহরণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          বাস্তব কোড উদাহরণ
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            ধরা যাক, কারও বয়স ১৮ বা তার বেশি হলে আমরা তাকে ভোট দেওয়ার যোগ্য বলব:
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>IfDemo.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val age = 20\n\nif (age >= 18) {\n    println(\"আপনি ভোট দেওয়ার যোগ্য!\")\n}",
                    "code-if"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-if" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> age = 20
              {"\n\n"}
              <span className="text-[#E06C75]">if</span> (age &gt;= 18) &#123;
              {"\n"}
              {"    "}println(<span className="text-[#98C379]">&quot;আপনি ভোট দেওয়ার যোগ্য!&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            আপনি ভোট দেওয়ার যোগ্য!
          </div>

          <p>
            যেহেতু <code className="font-mono font-bold text-ink">age = 20</code>, তাই <code className="font-mono font-bold text-leaf-deep">age &gt;= 18</code> শর্তটি <strong>true</strong> হয়েছে এবং প্রিন্ট স্টেটমেন্টটি সফলভাবে চলেছে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: শর্ত যাচাই ল্যাব */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            🧪
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ইন্টারঅ্যাক্টিভ ল্যাব: শর্ত পরিবর্তন করে দেখুন
            </h2>
            <p className="text-[13px] text-soft">
              নিচে বয়স বাড়িয়ে বা কমিয়ে দেখুন if ব্লক কখন চলে আর কখন বাদ পড়ে
            </p>
          </div>
        </div>

        {/* Live Age Controls */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-[15px] text-ink">ভ্যারিয়েবল age-এর মান:</span>
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

        {/* Dynamic Code Box */}
        <div className="mt-4 rounded-[12px] bg-code p-4 font-mono text-[14.5px] text-[#F6F1EA] shadow-xs">
          <span className="text-[#F0B48A]">val</span> age = {age}
          {"\n\n"}
          <span className="text-[#E06C75]">if</span> ({age} &gt;= 18) &#123;{" "}
          <span className="text-[12px] font-sans text-soft">
            ➔ {age >= 18 ? "শর্ত সত্য (true)" : "শর্ত মিথ্যা (false)"}
          </span>
          {"\n"}
          {"    "}println(<span className="text-[#98C379]">&quot;ভোট দিতে পারবেন&quot;</span>)
          {"\n"}
          &#125;
        </div>

        {/* Visual Result Box */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3.5 border border-line text-[15px] leading-relaxed">
          {age >= 18 ? (
            <p className="text-leaf-deep font-semibold">
              ✓ <strong>if ব্লক চলবে:</strong> আউটপুট আসবে &quot;ভোট দিতে পারবেন&quot;।
            </p>
          ) : (
            <p className="text-terra-deep font-semibold">
              ✕ <strong>if ব্লক চলবে না:</strong> শর্ত মিথ্যা (false) হওয়ায় কম্পিউটার বন্ধনীর ভেতরের লাইনে না ঢুকেই নিচে চলে যাবে (কোনো আউটপুট আসবে না)।
            </p>
          )}
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: মনে রাখার সহজ বিষয় */}
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
            মনে রাখার বিষয়
          </h2>
        </div>

        <ul className="mt-3.5 space-y-2 text-[16px] leading-[1.7] text-ink">
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-sand px-1.5 py-0.5 rounded">if</code>-এর শর্ত সবসময় <code className="font-mono font-bold text-leaf-deep bg-sand px-1.5 py-0.5 rounded">Boolean</code> (true বা false) হতে হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>শর্ত সত্য হলে <code className="font-mono font-bold">&#123; &#125;</code> বডির কোড এক্সিকিউট হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>শর্ত মিথ্যা হলে if ব্লক সম্পূর্ণ বাদ পড়ে এবং পরের লাইনে চলে যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>শর্ত মিথ্যা হলে বিকল্প কিছু করতে চাইলে আমরা ব্যবহার করি <code className="font-mono font-bold text-kotlin bg-sand px-1.5 py-0.5 rounded">else</code> (যা পরবর্তী পাঠে শিখব)।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;মনে রাখুন: if মানে যদি শর্ত মেলে তবেই ভেতরে ঢোকো, নইলে এড়িয়ে যাও!&raquo;
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
