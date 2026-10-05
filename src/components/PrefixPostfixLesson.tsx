import { useState } from "react";

interface PrefixPostfixLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function PrefixPostfixLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: PrefixPostfixLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Interactive Visual Simulation State
  const [activeMode, setActiveMode] = useState<"postfix" | "prefix">("postfix");
  const [step, setStep] = useState<number>(0);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 1800);
  };

  const handleNextStep = () => {
    setStep((prev) => (prev < 2 ? prev + 1 : 2));
  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          Kotlin Prefix &amp; Postfix
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Prefix ও Postfix কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Prefix ও Postfix কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            আমরা জানি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++</code> মান ১ বাড়ায় এবং <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code> মান ১ কমায়।
          </p>
          <p>
            কিন্তু এই চিহ্নটি variable-এর আগে বসেছে নাকি পরে বসেছে—তার ওপর ভিত্তি করে হিসাবের সময় অনেক বড় পার্থক্য তৈরি হয়!
          </p>

          <ul className="space-y-2 text-[16px] pl-1">
            <li className="flex items-start gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span>Operator Variable-এর আগে বসলে তাকে <strong>Prefix</strong> বলা হয়। যেমন: <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++number</code> // Prefix</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-terra-deep">•</span>
              <span>Operator Variable-এর পরে বসলে তাকে <strong>Postfix</strong> বলা হয়। যেমন: <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number++</code> // Postfix</span>
            </li>
          </ul>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              ++number  <span className="text-[#98C379]">&#47;&#47; Prefix</span>
              {"\n"}
              number++  <span className="text-[#98C379]">&#47;&#47; Postfix</span>
            </pre>
          </div>

          <p className="font-medium text-ink">
            Prefix ও Postfix-এর মূল পার্থক্য হলো—<strong>value কখন পরিবর্তন হবে এবং কখন ব্যবহার হবে</strong>।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Prefix Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Prefix Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Prefix-এর ক্ষেত্রে Operator Variable-এর আগে থাকে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> number = 5
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = ++number
            </pre>
          </div>

          <p>
            এখানে প্রথমে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর মান ১ বাড়বে।
          </p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14.5px] text-ink border border-line inline-block">
            number: 5 → 6
          </div>

          <p>
            তারপর নতুন মান <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এ যাবে।
          </p>

          <p className="font-semibold text-ink">তাই:</p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>result = 6</p>
            <p>number = 6</p>
          </div>

          <p className="font-semibold text-leaf-deep">
            অর্থাৎ, Prefix → আগে পরিবর্তন, পরে ব্যবহার।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Postfix Operator */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Postfix Operator
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Postfix-এর ক্ষেত্রে Operator Variable-এর পরে থাকে।
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">var</span> number = 5
              {"\n"}
              <span className="text-[#F0B48A]">val</span> result = number++
            </pre>
          </div>

          <p>
            এখানে প্রথমে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর বর্তমান মান <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এ যাবে।
          </p>
          <p>
            তারপর <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">number</code>-এর মান ১ বাড়বে।
          </p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>result = 5</p>
            <p>number: 5 → 6</p>
          </div>

          <p className="font-semibold text-ink">তাই:</p>

          <div className="rounded-[10px] bg-sand/80 px-4 py-2.5 font-mono text-[14.5px] text-ink border border-line space-y-1">
            <p>result = 5</p>
            <p>number = 6</p>
          </div>

          <p className="font-semibold text-leaf-deep">
            অর্থাৎ, Postfix → আগে ব্যবহার, পরে পরিবর্তন।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Prefix ও Postfix-এর পার্থক্য Table */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Prefix ও Postfix-এর পার্থক্য
        </h2>

        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[320px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">Operator</th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">কী হয় আগে?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14.5px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">++number</code>
                </td>
                <td className="px-4 py-3 text-ink/90">আগে value বাড়ে, তারপর ব্যবহার হয়</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">number++</code>
                </td>
                <td className="px-4 py-3 text-ink/90">আগে বর্তমান value ব্যবহার হয়, তারপর বাড়ে</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">--number</code>
                </td>
                <td className="px-4 py-3 text-ink/90">আগে value কমে, তারপর ব্যবহার হয়</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-2.5 py-0.5 rounded-[6px]">number--</code>
                </td>
                <td className="px-4 py-3 text-ink/90">আগে বর্তমান value ব্যবহার হয়, তারপর কমে</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: সহজে বুঝার ভিজ্যুয়াল ল্যাব */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
              🎬
            </span>
            <div>
              <h2 className="text-[18px] font-bold text-ink">
                ভিজ্যুয়াল সিমুলেটর: মেমোরিতে কী ঘটে?
              </h2>
              <p className="text-[13px] text-soft">
                বোতাম চেপে ধাপে ধাপে দেখুন মান কখন পরিবর্তন হয় ও কখন ব্যবহার হয়
              </p>
            </div>
          </div>

          {/* Mode Switch: Postfix vs Prefix */}
          <div className="flex rounded-[10px] border border-line bg-sand/70 p-1">
            <button
              type="button"
              onClick={() => {
                setActiveMode("postfix");
                setStep(0);
              }}
              className={`rounded-[7px] px-3 py-1 text-[13px] font-bold transition-all ${
                activeMode === "postfix"
                  ? "bg-terra text-white shadow-2xs"
                  : "text-soft hover:text-ink"
              }`}
            >
              Postfix (a++)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode("prefix");
                setStep(0);
              }}
              className={`rounded-[7px] px-3 py-1 text-[13px] font-bold transition-all ${
                activeMode === "prefix"
                  ? "bg-terra text-white shadow-2xs"
                  : "text-soft hover:text-ink"
              }`}
            >
              Prefix (++a)
            </button>
          </div>
        </div>

        {/* Code line being simulated */}
        <div className="mt-4 rounded-[12px] bg-code p-3.5 font-mono text-[14.5px] text-[#F6F1EA] shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[#F0B48A]">var</span> a = 5
            <br />
            <span className="text-[#F0B48A]">val</span> result ={" "}
            {activeMode === "postfix" ? (
              <span>
                <span className={step >= 1 ? "bg-amber-500/30 text-[#E5C07B] px-1 rounded" : ""}>a</span>
                <span className={step === 2 ? "bg-terra/40 text-terra px-1 rounded" : ""}>++</span>
              </span>
            ) : (
              <span>
                <span className={step >= 1 ? "bg-terra/40 text-terra px-1 rounded" : ""}>++</span>
                <span className={step >= 2 ? "bg-amber-500/30 text-[#E5C07B] px-1 rounded" : ""}>a</span>
              </span>
            )}
          </div>
          <span className="text-[12px] font-sans px-2.5 py-1 rounded-full bg-white/10 text-white/80">
            ধাপ {step + 1} / ৩
          </span>
        </div>

        {/* Visual Memory Boxes */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Memory Box A */}
          <div className="rounded-[14px] border-2 border-line bg-card p-4 text-center shadow-xs">
            <span className="text-[12px] font-bold uppercase tracking-wider text-soft block">
              Variable a (মেমোরি)
            </span>
            <div className="mt-2 flex items-center justify-center">
              <span
                className={`font-mono text-[34px] font-extrabold transition-all duration-300 ${
                  activeMode === "postfix"
                    ? step === 2
                      ? "text-leaf-deep scale-110"
                      : "text-ink"
                    : step >= 1
                    ? "text-leaf-deep scale-110"
                    : "text-ink"
                }`}
              >
                {activeMode === "postfix"
                  ? step === 2
                    ? "6"
                    : "5"
                  : step >= 1
                  ? "6"
                  : "5"}
              </span>
            </div>
            <span className="text-[12px] text-soft mt-1 block">
              {activeMode === "postfix"
                ? step === 2
                  ? "✓ ১ বৃদ্ধি পেয়ে ৬ হলো"
                  : "প্রাথমিক মান ৫"
                : step >= 1
                ? "✓ শুরুতেই বেড়ে ৬ হলো"
                : "প্রাথমিক মান ৫"}
            </span>
          </div>

          {/* Memory Box Result */}
          <div className="rounded-[14px] border-2 border-line bg-card p-4 text-center shadow-xs">
            <span className="text-[12px] font-bold uppercase tracking-wider text-soft block">
              Variable result
            </span>
            <div className="mt-2 flex items-center justify-center">
              <span
                className={`font-mono text-[34px] font-extrabold transition-all duration-300 ${
                  step === 0
                    ? "text-soft/40"
                    : "text-terra-deep scale-110"
                }`}
              >
                {step === 0
                  ? "?"
                  : activeMode === "postfix"
                  ? "5"
                  : "6"}
              </span>
            </div>
            <span className="text-[12px] text-soft mt-1 block">
              {step === 0
                ? "এখনও মান যায়নি"
                : activeMode === "postfix"
                ? "✓ পুরোনো মান ৫ গ্রহণ করল"
                : "✓ নতুন বর্ধিত মান ৬ নিল"}
            </span>
          </div>
        </div>

        {/* Dynamic Explanation Card */}
        <div className="mt-4 rounded-[12px] border border-line bg-sand/90 p-3.5 text-[15px] leading-relaxed text-ink">
          {activeMode === "postfix" ? (
            step === 0 ? (
              <p>
                <strong>১ম অবস্থা:</strong> <code className="font-mono font-bold text-ink">a = 5</code>। এবার <code className="font-mono font-bold text-terra-deep">result = a++</code> লাইনে Postfix অপারেটর থাকায় <em>আগে ব্যবহারের</em> প্রস্তুতি চলছে।
              </p>
            ) : step === 1 ? (
              <p>
                <strong>ধাপ ১ (আগে ব্যবহার):</strong> <code className="font-mono font-bold text-ink">a</code>-এর বর্তমান মান <code className="font-mono font-bold text-terra-deep">5</code> সরাসরি <code className="font-mono font-bold text-ink">result</code>-এ বসে গেছে! (মেমোরিতে এখনও মান বাড়েনি)।
              </p>
            ) : (
              <p>
                <strong>ধাপ ২ (পরে পরিবর্তন):</strong> অ্যাসাইনমেন্ট শেষ হওয়ার পর <code className="font-mono font-bold text-ink">a</code>-এর মান মেমোরিতে ১ বেড়ে <code className="font-mono font-bold text-leaf-deep">6</code> হয়ে গেল। তাই <code className="font-mono font-bold">result = 5</code> কিন্তু <code className="font-mono font-bold">a = 6</code>!
              </p>
            )
          ) : (
            step === 0 ? (
              <p>
                <strong>১ম অবস্থা:</strong> <code className="font-mono font-bold text-ink">a = 5</code>। এবার <code className="font-mono font-bold text-terra-deep">result = ++a</code> লাইনে Prefix অপারেটর থাকায় <em>আগে পরিবর্তনের</em> প্রস্তুতি চলছে।
              </p>
            ) : step === 1 ? (
              <p>
                <strong>ধাপ ১ (আগে পরিবর্তন):</strong> মান কোনোখানে যাওয়ার আগেই মেমোরিতে <code className="font-mono font-bold text-ink">a</code>-এর মান সাথে সাথে ১ বাড়িয়ে <code className="font-mono font-bold text-leaf-deep">6</code> করে ফেলা হলো!
              </p>
            ) : (
              <p>
                <strong>ধাপ ২ (পরে ব্যবহার):</strong> এবার সেই নতুন বর্ধিত মান <code className="font-mono font-bold text-leaf-deep">6</code> গিয়ে <code className="font-mono font-bold text-ink">result</code>-এ জমা হলো। তাই উভয়ের মানই এখন <code className="font-mono font-bold">6</code>!
              </p>
            )
          )}
        </div>

        {/* Step Buttons */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            disabled={step === 0}
            className="rounded-[10px] border border-line bg-card px-4 py-2 text-[14px] font-semibold text-soft hover:text-ink disabled:opacity-40 transition-colors"
          >
            ↻ শুরু থেকে
          </button>

          <button
            type="button"
            onClick={handleNextStep}
            disabled={step === 2}
            className="flex-1 rounded-[10px] bg-terra px-4 py-2 text-[14px] font-bold text-white shadow-xs hover:bg-terra-deep disabled:opacity-50 transition-colors"
          >
            {step === 0
              ? "পরবর্তী ধাপ দেখুন ➔"
              : step === 1
              ? "শেষ ধাপ দেখুন ➔"
              : "✓ সিমুলেশন সম্পন্ন"}
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-[22px] font-bold text-ink">
          &quot;++&quot; দিয়ে উদাহরণ
        </h2>

        <div className="mt-4 space-y-5 text-[17px] leading-[1.8] text-ink/90">
          <div>
            <h3 className="text-[18px] font-bold text-ink mb-2">Prefix</h3>
            <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
              <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">var</span> a = 5
                {"\n"}
                <span className="text-[#F0B48A]">val</span> result = ++a
                {"\n\n"}
                println(result)
                {"\n"}
                println(a)
              </pre>
            </div>
            <p className="mt-2 text-[15px] font-semibold text-soft">Output:</p>
            <div className="mt-1 rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14px] text-ink border border-line inline-block">
              6
              <br />
              6
            </div>
            <p className="mt-2 text-[15.5px] text-ink/90">
              কারণ <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++a</code> প্রথমে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">a</code>-কে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code> থেকে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">6</code> করেছে। এরপর সেই <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">6</code> <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code>-এ গেছে।
            </p>
          </div>

          <div className="border-t border-line/60 pt-4">
            <h3 className="text-[18px] font-bold text-ink mb-2">Postfix</h3>
            <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
              <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">var</span> b = 5
                {"\n"}
                <span className="text-[#F0B48A]">val</span> result = b++
                {"\n\n"}
                println(result)
                {"\n"}
                println(b)
              </pre>
            </div>
            <p className="mt-2 text-[15px] font-semibold text-soft">Output:</p>
            <div className="mt-1 rounded-[10px] bg-sand/80 px-4 py-2 font-mono text-[14px] text-ink border border-line inline-block">
              5
              <br />
              6
            </div>
            <p className="mt-2 text-[15.5px] text-ink/90">
              কারণ <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">b++</code> প্রথমে পুরোনো মান <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code> ব্যবহার করেছে। এরপর <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">b</code>-এর মান <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">6</code> হয়েছে।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 6: "--" দিয়েও একই নিয়ম */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          &quot;--&quot; দিয়েও একই নিয়ম
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code> ব্যবহার করলেও Prefix ও Postfix-এর একই নিয়ম প্রযোজ্য।
          </p>

          <div>
            <h3 className="text-[17px] font-bold text-ink mb-1.5">Prefix</h3>
            <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
              <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">var</span> a = 5
                {"\n"}
                <span className="text-[#F0B48A]">val</span> result = --a
              </pre>
            </div>
            <p className="mt-2 text-[15.5px] text-ink/90">
              প্রথমে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">a</code> হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">4</code>, তারপর <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code> হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">4</code>।
            </p>
          </div>

          <div className="pt-2">
            <h3 className="text-[17px] font-bold text-ink mb-1.5">Postfix</h3>
            <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
              <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
                <span className="text-[#F0B48A]">var</span> b = 5
                {"\n"}
                <span className="text-[#F0B48A]">val</span> result = b--
              </pre>
            </div>
            <p className="mt-2 text-[15.5px] text-ink/90">
              প্রথমে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">result</code> হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">5</code>, তারপর <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">b</code> হবে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">4</code>।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 7: একটি গুরুত্বপূর্ণ বিষয় */}
      <section className="rounded-[14px] border border-line bg-card p-5 shadow-xs">
        <h2 className="text-[19px] font-bold text-ink">
          একটি গুরুত্বপূর্ণ বিষয় 💡
        </h2>
        <div className="mt-3 space-y-3 text-[16px] leading-[1.8] text-ink/90">
          <p>
            যদি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++</code> বা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code> শুধু Variable-এর সঙ্গে আলাদাভাবে ব্যবহার করা হয়, তাহলে Prefix ও Postfix-এর শেষ ফল একই।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[14px]">
            <div className="rounded-[10px] bg-code p-3 text-[#F6F1EA]">
              <span className="text-[#F0B48A]">var</span> a = 5
              <br />
              a++
            </div>
            <div className="rounded-[10px] bg-code p-3 text-[#F6F1EA]">
              <span className="text-[#F0B48A]">var</span> a = 5
              <br />
              ++a
            </div>
          </div>

          <p>
            দুই ক্ষেত্রেই শেষে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">a</code>-এর মান হবে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">6</code>।
          </p>

          <p>
            পার্থক্য দেখা যায় যখন <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++</code> বা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--</code>-এর result একই expression-এ ব্যবহার করা হয়, যেমন:
          </p>

          <div className="space-y-1.5 font-mono text-[14px]">
            <div className="rounded-[8px] bg-sand/80 px-3 py-1.5 text-ink border border-line">
              <span className="text-[#C15B38] font-bold">val</span> result = ++a
            </div>
            <p className="text-[14px] text-soft font-sans pl-1">বা</p>
            <div className="rounded-[8px] bg-sand/80 px-3 py-1.5 text-ink border border-line">
              <span className="text-[#C15B38] font-bold">val</span> result = a++
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 8: মনে রাখার সহজ নিয়ম */}
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
            মনে রাখার সহজ নিয়ম
          </h2>
        </div>

        <div className="mt-3.5 space-y-3 text-[16px] leading-[1.7] text-ink">
          <div>
            <p className="font-bold text-leaf-deep">
              Prefix → আগে পরিবর্তন, পরে ব্যবহার
            </p>
            <ul className="mt-1 space-y-1 pl-4 list-disc text-[15px]">
              <li><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">++x</code> → আগে বাড়ে</li>
              <li><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">--x</code> → আগে কমে</li>
            </ul>
          </div>

          <div className="border-t border-line/60 pt-2.5">
            <p className="font-bold text-terra-deep">
              Postfix → আগে ব্যবহার, পরে পরিবর্তন
            </p>
            <ul className="mt-1 space-y-1 pl-4 list-disc text-[15px]">
              <li><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">x++</code> → আগে ব্যবহার হয়, পরে বাড়ে</li>
              <li><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">x--</code> → আগে ব্যবহার হয়, পরে কমে</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «Prefix = Operator আগে → পরিবর্তন আগে<br />
            Postfix = Operator পরে → পরিবর্তন পরে»
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
          পরবর্তী →
        </button>
      </footer>
    </article>
  );
}
