import { useState } from "react";

interface HelloWorldOutputLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function HelloWorldOutputLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: HelloWorldOutputLessonProps) {
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
          Hello World &amp; Output
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: প্রথম Output */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          প্রথম Output
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming শেখার সময় প্রথম যে কাজটি আমরা সাধারণত করি, সেটি হলো স্ক্রিনে একটি লেখা দেখানো। এর মাধ্যমে আমরা বুঝতে পারি যে আমাদের program ঠিকভাবে চলছে এবং আমরা Kotlin-এর সঙ্গে কাজ শুরু করতে পেরেছি।
          </p>
          <p>
            Programming-এর জগতে এই প্রথম সাধারণ লেখাটিকে প্রচলিতভাবে <strong>&ldquo;Hello World&rdquo;</strong> বলা হয়।
          </p>
          <div className="rounded-[12px] border-l-4 border-kotlin bg-sand/60 p-4 text-[16px] text-ink leading-relaxed">
            Kotlin-এ কোনো লেখা screen-এ দেখানোর জন্য আমরা <code className="font-mono font-bold text-kotlin-deep bg-card px-1.5 py-0.5 rounded border border-line">println()</code> ব্যবহার করি।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: println() কী? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-kotlin bg-sand/80 px-2 py-0.5 rounded-[6px] border border-line">println()</code> কী?
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-semibold text-kotlin bg-sand px-1.5 py-0.5 rounded border border-line">println()</code> হলো Kotlin-এর একটি function, যার মাধ্যমে আমরা কোনো লেখা বা value output হিসেবে দেখাতে পারি।
          </p>
          <p>
            এর ভিতরে যে লেখা দেওয়া হয়, program চলার সময় সেটি output হিসেবে দেখা যায়।
          </p>
        </div>

        {/* Code Snippet 1 */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>Kotlin</span>
            <button
              type="button"
              onClick={() => copyToClipboard('println("Hello World")', "code1")}
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code1" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[15px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">println</span>(
            <span className="text-[#E6D3A1]">&quot;Hello World&quot;</span>)
          </pre>
        </div>

        {/* Output Box */}
        <div className="mt-3 rounded-[12px] border border-line bg-card p-3.5">
          <p className="text-[13px] font-bold uppercase tracking-wider text-soft">
            এর output হবে:
          </p>
          <pre className="mt-1.5 font-mono text-[16px] font-semibold text-leaf-deep bg-sand/80 px-3 py-2 rounded-[8px] border border-line inline-block w-full">
            Hello World
          </pre>
        </div>

        <p className="mt-3.5 text-[16px] leading-[1.7] text-soft">
          এখানে <code className="font-mono font-semibold text-[#8E3F24] bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">&quot;Hello World&quot;</code> হলো আমরা যে লেখা দেখাতে চাই, আর <code className="font-mono font-semibold text-kotlin bg-sand px-1.5 py-0.5 rounded border border-line">println()</code> সেই লেখাটি output-এ দেখায়।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: print() এবং println() */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra bg-terra-soft/70 px-2 py-0.5 rounded-[6px] border border-terra/30">print()</code> এবং <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-2 py-0.5 rounded-[6px] border border-kotlin/30">println()</code>
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          Kotlin-এ output দেখানোর জন্য <code className="font-mono font-semibold text-terra bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">print()</code> এবং <code className="font-mono font-semibold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">println()</code>—দুটিই ব্যবহার করা যায়।
        </p>

        <p className="mt-4 text-[16px] font-semibold text-soft">
          পার্থক্যটি খুব সহজ:
        </p>

        {/* Key Difference Cards */}
        <div className="mt-3 space-y-2.5">
          <div className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terra" />
            <div className="text-[16px] leading-[1.7]">
              <code className="font-mono font-bold text-terra bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">print()</code> output দেখিয়ে একই লাইনে থাকে।
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-kotlin" />
            <div className="text-[16px] leading-[1.7]">
              <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">println()</code> output দেখানোর পর পরবর্তী output-এর জন্য নতুন লাইনে চলে যায়।
            </div>
          </div>
        </div>

        {/* Example: print() */}
        <div className="mt-6">
          <h3 className="text-[17px] font-bold text-ink">
            উদাহরণ ১: <code className="font-mono text-terra font-semibold bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">print()</code> এর ব্যবহার
          </h3>
          <div className="mt-2.5 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>print() Example</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard('print("Hello ")\nprint("Kotlin")', "code2")
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code2" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">print</span>(
              <span className="text-[#E6D3A1]">&quot;Hello &quot;</span>)
              {"\n"}
              <span className="text-[#F0B48A]">print</span>(
              <span className="text-[#E6D3A1]">&quot;Kotlin&quot;</span>)
            </pre>
          </div>

          <div className="mt-2.5 rounded-[12px] border border-line bg-card p-3">
            <span className="text-[12px] font-bold uppercase tracking-wider text-soft">
              Output:
            </span>
            <pre className="mt-1 font-mono text-[15px] font-semibold text-leaf-deep bg-sand/80 px-3 py-1.5 rounded-[6px] border border-line inline-block w-full">
              Hello Kotlin
            </pre>
          </div>
        </div>

        {/* Example: println() */}
        <div className="mt-6">
          <h3 className="text-[17px] font-bold text-ink">
            উদাহরণ ২: <code className="font-mono text-kotlin font-semibold bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">println()</code> এর ব্যবহার (নতুন লাইনে যায়)
          </h3>
          <div className="mt-2.5 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>println() Example</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard('println("Hello")\nprintln("Kotlin")', "code3")
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code3" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">println</span>(
              <span className="text-[#E6D3A1]">&quot;Hello&quot;</span>)
              {"\n"}
              <span className="text-[#F0B48A]">println</span>(
              <span className="text-[#E6D3A1]">&quot;Kotlin&quot;</span>)
            </pre>
          </div>

          <div className="mt-2.5 rounded-[12px] border border-line bg-card p-3">
            <span className="text-[12px] font-bold uppercase tracking-wider text-soft">
              Output:
            </span>
            <pre className="mt-1 font-mono text-[15px] font-semibold text-leaf-deep bg-sand/80 px-3 py-1.5 rounded-[6px] border border-line inline-block w-full">
              Hello{"\n"}Kotlin
            </pre>
          </div>
        </div>

        <p className="mt-5 rounded-[10px] bg-sand/70 p-3.5 text-[15.5px] leading-[1.7] text-ink">
          💡 শুরুতে <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">println()</code> বেশি ব্যবহার করলেই যথেষ্ট। পরে <code className="font-mono font-semibold text-terra bg-terra-soft px-1 py-0.5 rounded border border-terra/30">print()</code> এবং <code className="font-mono font-semibold text-kotlin bg-kotlin-soft px-1 py-0.5 rounded border border-kotlin/30">println()</code>-এর ব্যবহার আরও ভালোভাবে বোঝা যাবে।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: মনে রাখো */}
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
            মনে রাখো
          </h2>
        </div>
        <div className="mt-3 space-y-2.5 text-[16.5px] sm:text-[17px] leading-[1.7] text-ink">
          <p>
            <strong>Output</strong> মানে হলো program চালানোর পর যে ফলাফল আমরা দেখতে পাই।
          </p>
          <p className="font-medium text-soft">
            আর Kotlin-এ সাধারণভাবে output দেখানোর জন্য আমরা ব্যবহার করি:
          </p>
          <p className="rounded-[10px] bg-card p-3 font-semibold border border-line flex items-center gap-2 flex-wrap">
            <code className="font-mono text-kotlin font-bold bg-kotlin-soft px-2 py-0.5 rounded border border-kotlin/30">println()</code> → লেখা বা value দেখায় এবং নতুন লাইনে যায়।
          </p>
        </div>
      </section>

      {/* Bottom Navigation Buttons */}
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
          onClick={onNextLesson}
          className="btn btn-primary flex-1"
        >
          পরবর্তী →
        </button>
      </footer>
    </article>
  );
}
