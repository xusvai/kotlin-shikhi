import { useState } from "react";

interface WhenExpressionLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function WhenExpressionLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: WhenExpressionLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [day, setDay] = useState<number>(5);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  const dayNames: Record<number, string> = {
    1: "শনিবার",
    2: "রবিবার",
    3: "সোমবার",
    4: "মঙ্গলবার",
    5: "বুধবার",
    6: "বৃহস্পতিবার",
    7: "শুক্রবার",
  };

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Kotlin <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> Expression
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: "when" কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি value বা একাধিক condition-এর ভিত্তিতে বিভিন্ন সম্ভাবনার মধ্যে থেকে একটি নির্বাচন করার জন্য Kotlin-এ <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> ব্যবহার করা হয়।
          </p>

          <p className="font-semibold text-ink">সহজভাবে বললে:</p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «অনেকগুলো সম্ভাবনার মধ্যে কোনটি প্রযোজ্য, তা নির্ধারণ করতে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px] not-italic">when</code> ব্যবহার করা হয়।»
          </div>

          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code> অনেক ক্ষেত্রে একাধিক <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> ও <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code>-এর পরিবর্তে code-কে আরও পরিষ্কারভাবে লিখতে সাহায্য করে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: "when"-এর Basic Structure */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code>-এর Basic Structure
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">when</span> (value) &#123;
              {"\n"}
              {"    "}condition1 -&gt; &#123;
              {"\n"}
              {"        "}<span className="text-soft">&#47;&#47; condition1 মিললে এই code চলবে</span>
              {"\n"}
              {"    "}&#125;
              {"\n"}
              {"    "}condition2 -&gt; &#123;
              {"\n"}
              {"        "}<span className="text-soft">&#47;&#47; condition2 মিললে এই code চলবে</span>
              {"\n"}
              {"    "}&#125;
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; &#123;
              {"\n"}
              {"        "}<span className="text-soft">&#47;&#47; কোনো condition না মিললে</span>
              {"\n"}
              {"    "}&#125;
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            Kotlin উপরের দিক থেকে প্রতিটি case পরীক্ষা করে। যে প্রথম case মিলে যায়, তার code চালানো হয়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: একটি সহজ উদাহরণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          একটি সহজ উদাহরণ
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>ধরা যাক, একটি সংখ্যার ভিত্তিতে দিনের নাম দেখাতে হবে:</p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>WhenDemo.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val day = 5\n\nwhen (day) {\n    1 -> println(\"শনিবার\")\n    2 -> println(\"রবিবার\")\n    3 -> println(\"সোমবার\")\n    4 -> println(\"মঙ্গলবার\")\n    5 -> println(\"বুধবার\")\n    6 -> println(\"বৃহস্পতিবার\")\n    7 -> println(\"শুক্রবার\")\n    else -> println(\"অবৈধ দিন\")\n}",
                    "code-when"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-when" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> day = 5
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">when</span> (day) &#123;
              {"\n"}
              {"    "}1 -&gt; println(<span className="text-[#98C379]">&quot;শনিবার&quot;</span>)
              {"\n"}
              {"    "}2 -&gt; println(<span className="text-[#98C379]">&quot;রবিবার&quot;</span>)
              {"\n"}
              {"    "}3 -&gt; println(<span className="text-[#98C379]">&quot;সোমবার&quot;</span>)
              {"\n"}
              {"    "}4 -&gt; println(<span className="text-[#98C379]">&quot;মঙ্গলবার&quot;</span>)
              {"\n"}
              {"    "}5 -&gt; println(<span className="text-[#98C379]">&quot;বুধবার&quot;</span>)
              {"\n"}
              {"    "}6 -&gt; println(<span className="text-[#98C379]">&quot;বৃহস্পতিবার&quot;</span>)
              {"\n"}
              {"    "}7 -&gt; println(<span className="text-[#98C379]">&quot;শুক্রবার&quot;</span>)
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; println(<span className="text-[#98C379]">&quot;অবৈধ দিন&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">day</code>-এর মান <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">5</code>।
          </p>

          <p>
            তাই <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">5 -&gt;</code> এর code চলবে।
          </p>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            বুধবার
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: "when"-এ "else" */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code>-এ <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else</code>
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            কোনো case-এর সঙ্গে value না মিললে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">else</code> ব্যবহার করা যায়।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#F0B48A] font-bold">val</span> day = 8
              {"\n\n"}
              <span className="text-[#E06C75] font-bold">when</span> (day) &#123;
              {"\n"}
              {"    "}1 -&gt; println(<span className="text-[#98C379]">&quot;Saturday&quot;</span>)
              {"\n"}
              {"    "}2 -&gt; println(<span className="text-[#98C379]">&quot;Sunday&quot;</span>)
              {"\n"}
              {"    "}3 -&gt; println(<span className="text-[#98C379]">&quot;Monday&quot;</span>)
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; println(<span className="text-[#98C379]">&quot;Invalid day&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">8</code> কোনো case-এর সঙ্গে মিলছে না। তাই <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code>-এর code চলবে।
          </p>

          <p className="font-semibold text-soft text-[15px]">Output:</p>
          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            Invalid day
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: "when" কেন ব্যবহার করা হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> কেন ব্যবহার করা হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একাধিক সম্ভাবনা পরীক্ষা করার সময় অনেকগুলো <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code> ও <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code> ব্যবহার করলে code বড় হয়ে যেতে পারে।
          </p>

          <p>
            <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">when</code> একই ধরনের সিদ্ধান্তকে অনেক সময় আরও পরিষ্কার ও গোছানোভাবে প্রকাশ করতে পারে।
          </p>

          <h3 className="text-[18px] font-bold text-ink pt-1">উদাহরণ:</h3>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-[#E06C75] font-bold">when</span> (number) &#123;
              {"\n"}
              {"    "}1 -&gt; println(<span className="text-[#98C379]">&quot;One&quot;</span>)
              {"\n"}
              {"    "}2 -&gt; println(<span className="text-[#98C379]">&quot;Two&quot;</span>)
              {"\n"}
              {"    "}3 -&gt; println(<span className="text-[#98C379]">&quot;Three&quot;</span>)
              {"\n"}
              {"    "}<span className="text-[#E06C75] font-bold">else</span> -&gt; println(<span className="text-[#98C379]">&quot;Other&quot;</span>)
              {"\n"}
              &#125;
            </pre>
          </div>

          <p>
            এখানে একটি <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">number</code>-এর বিভিন্ন সম্ভাবনা এক জায়গায় দেখা যাচ্ছে।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: Day Selector */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            🗓️
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ইন্টারঅ্যাক্টিভ সিমুলেটর: যখন (when) যে মান পাবে
            </h2>
            <p className="text-[13px] text-soft">
              নিচে ১ থেকে ৭ পর্যন্ত যেকোনো দিনের নম্বরে ক্লিক করে দেখুন
            </p>
          </div>
        </div>

        {/* Day selection buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setDay(num)}
              className={`flex-1 min-w-[36px] py-2 rounded-[8px] font-mono text-[15px] font-bold border transition-all ${
                day === num
                  ? "bg-terra text-white border-terra scale-105 shadow-xs"
                  : "bg-card text-ink border-line hover:bg-sand"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Live Code Matching Display */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[13.5px] text-[#F6F1EA] shadow-xs">
          <div className="space-y-1">
            <p><span className="text-[#F0B48A] font-bold">val</span> day = {day}</p>
            <p className="pt-2"><span className="text-[#E06C75] font-bold">when</span> ({day}) &#123;</p>
            <p className="pl-6 py-1">
              <span className="bg-white/10 text-white font-bold px-2 py-0.5 rounded">
                {day} -&gt; println(&quot;{dayNames[day]}&quot;)
              </span>{" "}
              <span className="text-[#98C379] font-sans font-semibold ml-1">✓ মিলে গেছে!</span>
            </p>
            <p className="pl-6 text-white/30">else -&gt; ...</p>
            <p>&#125;</p>
          </div>
        </div>

        {/* Output */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3 border border-line flex items-center justify-between text-[14.5px]">
          <span className="font-semibold text-soft">স্ক্রিনে প্রদর্শিত আউটপুট:</span>
          <span className="font-mono font-bold text-[15.5px] px-3 py-1 rounded-[6px] bg-leaf-soft text-leaf-deep border border-leaf/40">
            {dayNames[day]}
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
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code> বিভিন্ন সম্ভাবনার মধ্যে থেকে সিদ্ধান্ত নিতে ব্যবহার করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code> একটি value পরীক্ষা করতে পারে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>প্রতিটি সম্ভাবনার জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">-&gt;</code> ব্যবহার করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>কোনো case মিললে সেই case-এর code চলে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else</code> ব্যবহার করে কোনো case না মিললে কী হবে তা নির্ধারণ করা যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একাধিক <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">if</code>/<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">else if</code>-এর পরিবর্তে অনেক ক্ষেত্রে <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code> code-কে পরিষ্কার করতে পারে।</span>
          </li>
        </ul>

        <p className="mt-3 text-[14.5px] text-soft">
          পরবর্তী Lesson-এ <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-1.5 py-0.2 rounded-[5px]">when</code>-এর একাধিক condition এবং বিভিন্ন ধরনের ব্যবহার আরও বিস্তারিতভাবে শেখা হবে।
        </p>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «<code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px] not-italic">when</code> = অনেক সম্ভাবনার মধ্যে কোনটি প্রযোজ্য তা নির্ধারণ করা।»
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
