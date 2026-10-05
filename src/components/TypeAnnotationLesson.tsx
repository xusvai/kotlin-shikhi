import { useState } from "react";

interface TypeAnnotationLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function TypeAnnotationLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: TypeAnnotationLessonProps) {
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
          Kotlin Type Annotation
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Type Annotation কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Type Annotation কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Variable তৈরি করার সময় Variable-এর Data Type সরাসরি উল্লেখ করে দেওয়াকে <strong>Type Annotation</strong> বলা হয়।
          </p>
          <p>
            Kotlin-এ Variable-এর Name-এর পরে colon (<code className="font-mono font-bold text-terra-deep bg-sand px-1.5 py-0.5 rounded border border-line">:</code>) দিয়ে Data Type লেখা হয়।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            সহজভাবে বললে, Variable-এ কী ধরনের data থাকবে, সেটা আমরা নিজেরাই Kotlin-কে বলে দিই।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Type Annotation-এর Syntax */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Type Annotation-এর Syntax
        </h2>

        {/* Visual Anatomy Card (Strictly 1 line on mobile) */}
        <div className="mt-4 rounded-[16px] border border-line bg-card p-3 sm:p-5 shadow-xs">
          <div className="overflow-x-auto pb-1">
            <div className="inline-flex min-w-full items-center justify-center gap-1.5 sm:gap-2.5 rounded-[12px] bg-sand/60 px-3 py-3.5 sm:px-4 sm:py-4 border border-line font-mono text-[16px] sm:text-[20px] whitespace-nowrap">
              {/* Keyword */}
              <div className="flex flex-col items-center">
                <span className="rounded-[7px] bg-terra-soft px-2.5 py-0.5 sm:px-3 sm:py-1 font-bold text-terra-deep border border-terra/30 text-[14px] sm:text-[18px]">
                  val
                </span>
                <span className="mt-1 font-sans text-[10px] sm:text-[11px] font-bold text-terra-deep uppercase">
                  Keyword
                </span>
              </div>

              {/* Variable Name */}
              <div className="flex flex-col items-center">
                <span className="rounded-[7px] bg-sand px-2.5 py-0.5 sm:px-3 sm:py-1 font-bold text-ink border border-line text-[14px] sm:text-[18px]">
                  age
                </span>
                <span className="mt-1 font-sans text-[10px] sm:text-[11px] font-bold text-soft uppercase">
                  Name
                </span>
              </div>

              {/* Colon */}
              <div className="flex flex-col items-center px-0.5">
                <span className="text-terra-deep font-bold text-[17px] sm:text-[20px]">:</span>
                <span className="mt-1 font-sans text-[10px] sm:text-[11px] text-faint">কোলন</span>
              </div>

              {/* Data Type */}
              <div className="flex flex-col items-center">
                <span className="rounded-[7px] bg-kotlin-soft px-2.5 py-0.5 sm:px-3.5 sm:py-1 font-bold text-kotlin border border-kotlin/30 text-[14px] sm:text-[18px]">
                  Int
                </span>
                <span className="mt-1 font-sans text-[10px] sm:text-[11px] font-bold text-kotlin uppercase">
                  Data Type
                </span>
              </div>

              {/* Equal */}
              <div className="flex flex-col items-center px-0.5">
                <span className="text-soft font-bold text-[17px] sm:text-[20px]">=</span>
                <span className="mt-1 font-sans text-[10px] sm:text-[11px] text-faint">সমান</span>
              </div>

              {/* Value */}
              <div className="flex flex-col items-center">
                <span className="rounded-[7px] bg-leaf-soft px-2.5 py-0.5 sm:px-3.5 sm:py-1 font-bold text-leaf-deep border border-leaf/30 text-[14px] sm:text-[18px]">
                  24
                </span>
                <span className="mt-1 font-sans text-[10px] sm:text-[11px] font-bold text-leaf-deep uppercase">
                  Value
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3.5 rounded-[10px] bg-sand/40 p-3 border border-line text-[14.5px] leading-relaxed text-ink/90">
            <span className="font-bold text-ink">এখানে—</span>
            <ul className="mt-1.5 space-y-1 font-sans text-[14.5px]">
              <li>• <code className="font-mono font-bold text-terra-deep">val</code> → Variable তৈরির keyword</li>
              <li>• <code className="font-mono font-bold text-ink">age</code> → Variable-এর Name</li>
              <li>• <code className="font-mono font-bold text-terra-deep">:</code> → Type Annotation-এর চিহ্ন</li>
              <li>• <code className="font-mono font-bold text-kotlin">Int</code> → Data Type</li>
              <li>• <code className="font-mono font-bold text-leaf-deep">24</code> → Value</li>
            </ul>
            <p className="mt-2 text-[14.5px] font-medium text-ink/90">
              অর্থাৎ, <code className="font-mono text-ink font-semibold">age</code> Variable-এ <code className="font-mono text-kotlin font-semibold">Int</code> ধরনের data রাখা হবে।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Type Annotation-এর আরও উদাহরণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Type Annotation-এর আরও উদাহরণ
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          বিভিন্ন ধরনের Data Type-এর সঙ্গে Type Annotation ব্যবহার করা যায়।
        </p>

        {/* IDE Style Code Box */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>TypeAnnotationExamples.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'val name: String = "Shihab"\nval age: Int = 24\nval price: Double = 99.5\nval isOnline: Boolean = true',
                  "code-examples"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-examples" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">val</span> name:{" "}
            <span className="text-[#7F52FF] font-semibold">String</span> ={" "}
            <span className="text-[#E6D3A1]">&quot;Shihab&quot;</span>
            {"\n"}
            <span className="text-[#F0B48A]">val</span> age:{" "}
            <span className="text-[#7F52FF] font-semibold">Int</span> = 24
            {"\n"}
            <span className="text-[#F0B48A]">val</span> price:{" "}
            <span className="text-[#7F52FF] font-semibold">Double</span> = 99.5
            {"\n"}
            <span className="text-[#F0B48A]">val</span> isOnline:{" "}
            <span className="text-[#7F52FF] font-semibold">Boolean</span> ={" "}
            <span className="text-[#D4C4F5]">true</span>
          </pre>
        </div>

        <p className="mt-3 text-[15.5px] text-soft">
          এখানে প্রতিটি Variable-এর Data Type আমরা স্পষ্টভাবে নির্দিষ্ট করে দিয়েছি।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Type Annotation কেন ব্যবহার করব? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Type Annotation কেন ব্যবহার করব?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin অনেক সময় Variable-এর value দেখে নিজেই Data Type বুঝে নিতে পারে। এটিই <strong>Type Inference</strong>।
          </p>
          <p>
            তাই সব সময় Type Annotation লেখা বাধ্যতামূলক নয়।
          </p>
          <p>
            তবে কিছু ক্ষেত্রে Variable-এর Data Type স্পষ্টভাবে নির্দিষ্ট করে দেওয়ার প্রয়োজন হতে পারে। তখন Type Annotation ব্যবহার করা হয়।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            এটি code পড়ার সময়ও Variable-এ কী ধরনের data থাকবে তা বুঝতে সাহায্য করে।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Type Annotation বনাম Type Inference */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Type Annotation বনাম Type Inference
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          দুটির পার্থক্য খুব সহজ।
        </p>

        <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
          {/* Card 1: Type Inference */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <h3 className="text-[16px] font-bold text-terra-deep">
              Type Inference:
            </h3>
            <div className="mt-2.5 rounded-[10px] bg-sand/70 p-2.5 border border-line font-mono text-[14px] text-ink">
              <span className="text-terra-deep font-bold">val</span> age = 24
            </div>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-soft">
              এখানে Data Type আমরা লিখিনি। Kotlin value দেখে নিজেই Type নির্ধারণ করে।
            </p>
          </div>

          {/* Card 2: Type Annotation */}
          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <h3 className="text-[16px] font-bold text-kotlin">
              Type Annotation:
            </h3>
            <div className="mt-2.5 rounded-[10px] bg-sand/70 p-2.5 border border-line font-mono text-[14px] text-ink">
              <span className="text-terra-deep font-bold">val</span> age:{" "}
              <span className="text-kotlin font-bold">Int</span> = 24
            </div>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-soft">
              এখানে আমরা <code className="font-mono text-kotlin font-bold">Int</code> Type-টি স্পষ্টভাবে লিখে দিয়েছি।
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-[12px] bg-card p-3 border border-line text-center text-[15px] font-medium text-ink">
          দুটো ক্ষেত্রেই <code className="font-mono text-terra-deep font-semibold">age</code>-এর Type হলো <code className="font-mono text-kotlin font-semibold">Int</code>।
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
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Type Annotation দিয়ে Variable-এর Data Type স্পষ্টভাবে নির্দিষ্ট করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Variable-এর Name-এর পরে <code className="font-mono font-bold text-terra-deep">&quot;:&quot;</code> দিয়ে Type লেখা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Data Type এবং Value-এর মাঝে <code className="font-mono font-bold text-ink">&quot;=&quot;</code> থাকে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Type Annotation সব সময় বাধ্যতামূলক নয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Kotlin-এর Type Inference-এর কারণে অনেক ক্ষেত্রে Data Type না লিখেও কাজ করা যায়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: Type Annotation মানে—&ldquo;এই Variable-এ কোন ধরনের data থাকবে, সেটা আমি নিজেই বলে দিচ্ছি।&rdquo;&raquo;
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
