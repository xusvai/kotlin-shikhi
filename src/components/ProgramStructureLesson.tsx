import { useState } from "react";

interface ProgramStructureLessonProps {
  onBack: () => void;
  onOpenMenu?: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function ProgramStructureLesson({
  onBack,
  onPrevLesson,
  onNextLesson,
}: ProgramStructureLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[32px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Kotlin Program Structure
        </h1>
        <span
          className="mt-3 block h-[3.5px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
        <p className="mt-3 text-[16px] text-soft">
          একটি Kotlin program-এর ভেতরের গঠন বুঝি
        </p>
      </header>

      {/* Introduction */}
      <section className="mt-7 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
        <p>
          আগের lesson-এ আমরা জেনেছি Kotlin কী এবং{" "}
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 text-[14.5px]">
            println()
          </code>{" "}
          দিয়ে কীভাবে output দেখানো যায়।
        </p>
        <p>
          এবার আমরা একটু গভীরে যাব। একটি Kotlin program যখন দেখবে, তখন যেন code
          দেখে অচেনা না লাগে—এই lesson-এর মূল লক্ষ্য সেটাই।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 1: একটি সাধারণ Kotlin program */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একটি সাধারণ Kotlin program
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          প্রথমে একটি ছোট program দেখি:
        </p>

        {/* Code Snippet 1 */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>Kotlin</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'fun main() {\n    println("Hello, Kotlin!")\n}',
                  "code-sample-1"
                )
              }
              className="rounded px-2.5 py-1 text-[11px] font-medium text-white/75 hover:bg-white/15 hover:text-white transition-colors"
            >
              {copiedCode === "code-sample-1" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[15px] sm:text-[16px] leading-relaxed overflow-x-auto">
            <span className="text-[#E5C07B]">fun</span>{" "}
            <span className="text-[#61AFEF]">main</span>() &#123;{"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(
            <span className="text-[#98C379]">&quot;Hello, Kotlin!&quot;</span>
            ){"\n"}
            &#125;
          </pre>
        </div>

        <p className="mt-3.5 text-[16px] leading-relaxed text-soft">
          দেখতে কয়েকটি অংশ মনে হচ্ছে। এখন আমরা একে একটি একটি করে বুঝব।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: 1. main() — program-এর শুরু */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          1.{" "}
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 text-[18px]">
            main()
          </code>{" "}
          — program-এর শুরু
        </h2>

        <div className="mt-3.5 overflow-hidden rounded-[12px] border border-line bg-code px-4 py-2.5 font-mono text-[15px] text-[#F6F1EA]">
          <span className="text-[#E5C07B]">fun</span>{" "}
          <span className="text-[#61AFEF]">main</span>() &#123;
        </div>

        <div className="mt-4 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin program চালু হলে সাধারণত{" "}
            <code className="font-mono font-bold text-terra-deep bg-sand/70 px-1.5 py-0.5 rounded-[5px] border border-line text-[14px]">
              main()
            </code>{" "}
            function থেকেই execution শুরু হয়।
          </p>
          <p className="text-soft">সহজভাবে ভাবতে পারো:</p>
          <div className="pl-3.5 border-l-2 border-terra/70 py-0.5 font-semibold text-ink">
            “<code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-1.5 py-0.5 rounded-[5px] border border-terra/30 text-[14px]">main()</code> হলো program-এর starting point।”
          </div>
          <p className="text-soft">
            যেমন একটি বই পড়া শুরু করার জন্য প্রথম পৃষ্ঠা থাকে, তেমনি program-এর
            execution শুরু করার জন্য{" "}
            <code className="font-mono font-bold text-terra-deep bg-sand/70 px-1.5 py-0.5 rounded-[5px] border border-line text-[14px]">
              main()
            </code>{" "}
            থাকে।
          </p>
        </div>

        {/* Tip on fun */}
        <div className="mt-4 rounded-[14px] border border-amber-500/35 bg-amber-500/10 p-3.5 text-[14.5px] leading-relaxed text-ink/90 flex items-start gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-800 mt-0.5 text-[12px] font-bold">
            i
          </span>
          <p>
            এখন{" "}
            <code className="font-mono font-bold text-amber-900 bg-white/60 px-1.5 py-0.5 rounded border border-amber-500/30">
              fun
            </code>{" "}
            শব্দটি নিয়ে চিন্তা করার দরকার নেই। আমরা পরে function শেখার সময় এটি
            বিস্তারিতভাবে বুঝব।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: 2. { } — code-এর একটি অংশের সীমা */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          2.{" "}
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 text-[18px]">
            &#123; &#125;
          </code>{" "}
          — code-এর একটি অংশের সীমা
        </h2>

        <div className="mt-3.5 overflow-hidden rounded-[12px] border border-line bg-code px-4 py-3 font-mono text-[15px] leading-relaxed text-[#F6F1EA]">
          <span className="text-[#E5C07B]">fun</span>{" "}
          <span className="text-[#61AFEF]">main</span>() &#123;
          <br />
          {"    "}
          <span className="text-[#F0B48A]">println</span>(
          <span className="text-[#98C379]">&quot;Hello, Kotlin!&quot;</span>)
          <br />
          &#125;
        </div>

        <div className="mt-4 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            এখানে{" "}
            <code className="font-mono font-bold text-terra-deep bg-sand/70 px-2 py-0.5 rounded-[5px] border border-line">
              &#123;
            </code>{" "}
            দিয়ে একটি অংশ শুরু হয়েছে এবং{" "}
            <code className="font-mono font-bold text-terra-deep bg-sand/70 px-2 py-0.5 rounded-[5px] border border-line">
              &#125;
            </code>{" "}
            দিয়ে সেই অংশ শেষ হয়েছে।
          </p>
          <p>
            এই{" "}
            <code className="font-mono font-bold text-terra-deep bg-sand/70 px-1.5 py-0.5 rounded-[5px] border border-line">
              &#123; &#125;
            </code>
            -এর ভেতরের code-কে{" "}
            <code className="font-mono font-semibold text-ink bg-sand/50 px-1.5 py-0.5 rounded">
              main()
            </code>
            -এর অংশ হিসেবে ধরা হয়।
          </p>
          <p className="text-soft">এখন শুধু এই ধারণাটুকু মনে রাখো:</p>
          <div className="pl-3.5 border-l-2 border-terra/70 py-0.5 font-semibold text-ink">
            “<code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-1.5 py-0.5 rounded-[5px] border border-terra/30 text-[14px]">&#123; &#125;</code> দিয়ে code-এর একটি block-এর শুরু এবং শেষ বোঝানো হয়।”
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: 3. println() — output দেখানো */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          3.{" "}
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 text-[18px]">
            println()
          </code>{" "}
          — output দেখানো
        </h2>

        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          আমরা আগের lesson-এ{" "}
          <code className="font-mono font-bold text-terra-deep bg-sand/70 px-1.5 py-0.5 rounded-[5px] border border-line text-[14px]">
            println()
          </code>{" "}
          দেখেছি।
        </p>

        <div className="mt-3.5 overflow-hidden rounded-[12px] border border-line bg-code px-4 py-2.5 font-mono text-[15px] text-[#F6F1EA]">
          <span className="text-[#F0B48A]">println</span>(
          <span className="text-[#98C379]">&quot;Hello, Kotlin!&quot;</span>)
        </div>

        {/* Output */}
        <div className="mt-3 flex items-center gap-3 rounded-[12px] border border-line bg-card px-4 py-2.5">
          <span className="text-[13px] font-semibold text-soft shrink-0">
            Console-এ দেখাবে:
          </span>
          <code className="font-mono text-[15px] font-semibold text-leaf-deep">
            Hello, Kotlin!
          </code>
        </div>

        {/* Step-by-step Flow Card */}
        <div className="mt-5 rounded-[16px] border border-line bg-card p-4.5 shadow-2xs">
          <p className="text-[14px] font-bold uppercase tracking-wider text-soft">
            পুরো program-টাকে সহজভাবে পড়লে দাঁড়ায়:
          </p>

          <div className="mt-3.5 flex flex-col items-center gap-1.5 text-center sm:flex-row sm:justify-between sm:gap-2 font-medium">
            <span className="w-full sm:w-auto rounded-[8px] bg-sand px-3 py-1.5 text-[14px] text-ink border border-line">
              Program শুরু
            </span>
            <span className="text-terra text-[16px] rotate-90 sm:rotate-0">
              →
            </span>
            <span className="w-full sm:w-auto rounded-[8px] bg-terra-soft/60 px-3 py-1.5 text-[14px] font-bold font-mono text-terra-deep border border-terra/30">
              main()
            </span>
            <span className="text-terra text-[16px] rotate-90 sm:rotate-0">
              →
            </span>
            <span className="w-full sm:w-auto rounded-[8px] bg-sand px-3 py-1.5 text-[14px] text-ink border border-line">
              ভেতরের code চালানো
            </span>
            <span className="text-terra text-[16px] rotate-90 sm:rotate-0">
              →
            </span>
            <span className="w-full sm:w-auto rounded-[8px] bg-leaf-soft/50 px-3 py-1.5 text-[14px] font-semibold text-leaf-deep border border-leaf/30">
              Hello, Kotlin!
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: 4. পুরো program একসাথে বুঝি - Grouped List */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          4. পুরো program একসাথে বুঝি
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          আবার code-টা দেখি:
        </p>

        <div className="mt-3.5 overflow-hidden rounded-[14px] border border-line bg-code px-4 py-3 font-mono text-[15px] sm:text-[16px] leading-relaxed text-[#F6F1EA]">
          <span className="text-[#E5C07B]">fun</span>{" "}
          <span className="text-[#61AFEF]">main</span>() &#123;
          <br />
          {"    "}
          <span className="text-[#F0B48A]">println</span>(
          <span className="text-[#98C379]">&quot;Hello, Kotlin!&quot;</span>)
          <br />
          &#125;
        </div>

        <p className="mt-4 text-[15px] font-semibold text-soft">
          এখন আমরা জানি:
        </p>

        {/* Grouped list with rounded top/bottom and divider */}
        <div className="mt-3 overflow-hidden rounded-[18px] border border-line divide-y divide-line bg-card shadow-2xs">
          <div className="flex items-center gap-3.5 px-4.5 py-3.5 transition-colors hover:bg-sand/35">
            <span className="font-mono text-[14px] font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 shrink-0">
              fun main()
            </span>
            <p className="text-[15px] text-ink">
              Program-এর starting point।
            </p>
          </div>

          <div className="flex items-center gap-3.5 px-4.5 py-3.5 transition-colors hover:bg-sand/35">
            <span className="font-mono text-[14px] font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 shrink-0">
              &#123; &#125;
            </span>
            <p className="text-[15px] text-ink">
              <code className="font-mono font-semibold">main()</code>-এর code block।
            </p>
          </div>

          <div className="flex items-center gap-3.5 px-4.5 py-3.5 transition-colors hover:bg-sand/35">
            <span className="font-mono text-[14px] font-bold text-terra-deep bg-terra-soft/60 px-2 py-0.5 rounded-[6px] border border-terra/30 shrink-0">
              println()
            </span>
            <p className="text-[15px] text-ink">
              Console-এ output দেখায়।
            </p>
          </div>
        </div>

        <p className="mt-4 text-[16px] leading-relaxed text-ink/90">
          তাই code-টা আর শুধু কিছু অচেনা symbol মনে হচ্ছে না। আমরা এর basic
          structure বুঝতে পারছি।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: একটি গুরুত্বপূর্ণ বিষয় (Execution Order) */}
      <section className="rounded-[16px] border border-amber-500/35 bg-card p-5 sm:p-6 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-amber-500/15 text-amber-800">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </span>
          <h2 className="text-[19px] font-bold text-ink">
            একটি গুরুত্বপূর্ণ বিষয়
          </h2>
        </div>

        <p className="mt-3 text-[16.5px] font-semibold text-ink leading-[1.7]">
          Code সাধারণত উপরে থেকে নিচের দিকে পড়া এবং execute করা হয়।
        </p>

        {/* Code Snippet 2 */}
        <div className="mt-3.5 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>Kotlin</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'fun main() {\n    println("First")\n    println("Second")\n}',
                  "code-sample-2"
                )
              }
              className="rounded px-2.5 py-1 text-[11px] font-medium text-white/75 hover:bg-white/15 hover:text-white transition-colors"
            >
              {copiedCode === "code-sample-2" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[15px] sm:text-[16px] leading-relaxed overflow-x-auto">
            <span className="text-[#E5C07B]">fun</span>{" "}
            <span className="text-[#61AFEF]">main</span>() &#123;{"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(
            <span className="text-[#98C379]">&quot;First&quot;</span>){"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(
            <span className="text-[#98C379]">&quot;Second&quot;</span>){"\n"}
            &#125;
          </pre>
        </div>

        {/* Output */}
        <div className="mt-3 rounded-[12px] border border-line bg-paper px-4 py-2.5">
          <p className="text-[12px] font-bold uppercase tracking-wider text-soft">
            Output হবে:
          </p>
          <pre className="mt-1 font-mono text-[15px] font-semibold text-leaf-deep leading-relaxed">
            First{"\n"}Second
          </pre>
        </div>

        <p className="mt-3 text-[15px] text-soft leading-relaxed">
          কারণ &quot;First&quot; আগে লেখা হয়েছে এবং &quot;Second&quot; পরে।
        </p>
        <p className="mt-2 text-[14.5px] text-soft/90">
          এখন আমরা variables বা অন্য কোনো নতুন concept ব্যবহার করছি না। তাই এই
          উদাহরণটুকুই যথেষ্ট।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: নিজে চিন্তা করো (Interactive Quiz) */}
      <section className="rounded-[16px] border border-line bg-card p-5 sm:p-6 shadow-2xs">
        <h2 className="text-[20px] font-bold text-ink flex items-center gap-2">
          <span>নিজে চিন্তা করো</span>
        </h2>

        <p className="mt-2.5 text-[16px] text-ink/90 font-medium">
          নিচের code-এর output কী হবে?
        </p>

        {/* Quiz Code */}
        <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code px-4 py-3 font-mono text-[15px] leading-relaxed text-[#F6F1EA]">
          <span className="text-[#E5C07B]">fun</span>{" "}
          <span className="text-[#61AFEF]">main</span>() &#123;
          <br />
          {"    "}
          <span className="text-[#F0B48A]">println</span>(
          <span className="text-[#98C379]">&quot;Kotlin&quot;</span>)
          <br />
          {"    "}
          <span className="text-[#F0B48A]">println</span>(
          <span className="text-[#98C379]">&quot;is&quot;</span>)
          <br />
          {"    "}
          <span className="text-[#F0B48A]">println</span>(
          <span className="text-[#98C379]">&quot;fun!&quot;</span>)
          <br />
          &#125;
        </div>

        {/* Answer Toggle */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowAnswer(!showAnswer)}
            className="rounded-[10px] bg-sand px-3.5 py-1.5 text-[13.5px] font-semibold text-ink border border-line hover:bg-paper transition-colors"
          >
            {showAnswer ? "উত্তর লুকান" : "উত্তর দেখুন"}
          </button>

          {showAnswer && (
            <div className="mt-3 rounded-[12px] border border-line bg-sand/40 p-4 transition-all">
              <p className="text-[13px] font-bold uppercase tracking-wider text-terra-deep">
                উত্তর:
              </p>
              <pre className="mt-1 font-mono text-[15px] font-semibold text-leaf-deep leading-relaxed">
                Kotlin{"\n"}is{"\n"}fun!
              </pre>
              <p className="mt-2 text-[14.5px] text-soft">
                কারণ তিনটি{" "}
                <code className="font-mono font-bold text-terra-deep bg-sand px-1.5 py-0.5 rounded text-[13px]">
                  println()
                </code>{" "}
                উপরে থেকে নিচের ক্রমে execute হয়েছে।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 8: আজকের Structure (Visual Diagram) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          আজকের Structure
        </h2>
        <p className="mt-2.5 text-[16px] text-soft">
          একটি সাধারণ Kotlin program-কে আপাতত এভাবে মনে রাখতে পারো:
        </p>

        <div className="mt-4 rounded-[14px] border border-line bg-card p-4.5 font-mono text-[15px] leading-relaxed text-ink shadow-2xs">
          <div className="text-terra-deep font-bold">main()</div>
          <div className="pl-3 text-soft">│</div>
          <div className="pl-3 text-ink">
            └── <span className="font-bold text-ink">&#123; code &#125;</span>
          </div>
          <div className="pl-9 text-soft">│</div>
          <div className="pl-9 text-leaf-deep font-semibold">
            └── println()
          </div>
        </div>

        <p className="mt-3.5 text-[15.5px] text-soft leading-relaxed">
          এটাই Kotlin program-এর basic structure-এর প্রথম ধারণা।
        </p>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 9: আজকের Recap */}
      <section className="rounded-[16px] border border-leaf/40 bg-leaf-soft/20 p-5 shadow-xs">
        <div className="flex items-center gap-2 text-leaf-deep">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h2 className="text-[20px] font-bold text-ink">
            আজকের Recap
          </h2>
        </div>

        <p className="mt-3 text-[16px] text-soft">আজ তুমি শিখেছ:</p>

        <ul className="mt-3.5 space-y-2.5">
          <li className="flex items-center gap-2.5 text-[16px] text-ink font-medium">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white text-[12px] font-bold">
              ✓
            </span>
            <span>
              <code className="font-mono font-bold text-leaf-deep bg-white/70 px-1.5 py-0.5 rounded-[5px] border border-leaf/30 text-[14.5px]">
                main()
              </code>{" "}
              হলো program-এর starting point।
            </span>
          </li>
          <li className="flex items-center gap-2.5 text-[16px] text-ink font-medium">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white text-[12px] font-bold">
              ✓
            </span>
            <span>
              <code className="font-mono font-bold text-leaf-deep bg-white/70 px-1.5 py-0.5 rounded-[5px] border border-leaf/30 text-[14.5px]">
                &#123; &#125;
              </code>{" "}
              code block নির্ধারণ করে।
            </span>
          </li>
          <li className="flex items-center gap-2.5 text-[16px] text-ink font-medium">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white text-[12px] font-bold">
              ✓
            </span>
            <span>
              <code className="font-mono font-bold text-leaf-deep bg-white/70 px-1.5 py-0.5 rounded-[5px] border border-leaf/30 text-[14.5px]">
                println()
              </code>{" "}
              console-এ output দেখায়।
            </span>
          </li>
          <li className="flex items-center gap-2.5 text-[16px] text-ink font-medium">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf text-white text-[12px] font-bold">
              ✓
            </span>
            <span>
              একই block-এর code সাধারণত উপরের দিক থেকে নিচের দিকে execute হয়।
            </span>
          </li>
        </ul>

        <div className="mt-5 pt-3 border-t border-line/60">
          <p className="text-[14.5px] text-soft leading-relaxed">
            এখনও{" "}
            <code className="font-mono font-semibold text-ink bg-white/60 px-1 rounded">
              fun
            </code>
            , function, parameter ইত্যাদি বিস্তারিত শেখার দরকার নেই। সেগুলো যখন
            course-এ আসবে, তখন আলাদাভাবে শেখা হবে।
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
          ← পূর্ববর্তী পাঠ
        </button>

        <button
          type="button"
          onClick={onNextLesson}
          className="btn btn-primary flex-1"
        >
          পরবর্তী পাঠ →
        </button>
      </footer>
    </article>
  );
}
