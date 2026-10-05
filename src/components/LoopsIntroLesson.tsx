import { useState } from "react";

interface LoopsIntroLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function LoopsIntroLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: LoopsIntroLessonProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [repeatCount, setRepeatCount] = useState<number>(3);

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
          Kotlin Loops পরিচিতি
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Loop কী এবং কেন প্রয়োজন? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Loop কী এবং কেন প্রয়োজন?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            প্রোগ্রামিংয়ে কোনো একটি নির্দিষ্ট কাজ বা একগুচ্ছ কোড বারবার (পুনরাবৃত্তি বা repeat) চালানোর পদ্ধতিকে <strong>Loop</strong> বলা হয়।
          </p>

          <p className="font-semibold text-ink">সহজ উদাহরণ:</p>
          <p>
            ধরা যাক, আপনাকে স্ক্রিনে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">&quot;Hello Kotlin&quot;</code> লেখাটি ১০০ বার প্রিন্ট করতে হবে।
          </p>
          <p>
            যদি লুপ না থাকে, তবে আপনাকে ১০০ বার <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[5px]">println(&quot;Hello Kotlin&quot;)</code> লিখতে হবে! এটি সময়সাপেক্ষ এবং ক্লান্তিকর।
          </p>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[16px] text-ink font-semibold italic">
            «কিন্তু Loop ব্যবহার করলে মাত্র ২-৩ লাইনের কোড দিয়েই কম্পিউটারকে ১০০ বার কেন, ১ লক্ষ বারও কাজটি করিয়ে নেওয়া যায়!»
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: লুপ ছাড়া বনাম লুপ দিয়ে */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          তুলনা: Loop ছাড়া বনাম Loop দিয়ে
        </h2>

        <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
          {/* Without Loop */}
          <div className="rounded-[16px] border border-line bg-card p-4 shadow-2xs">
            <span className="text-[12px] font-bold uppercase tracking-wider text-terra-deep block mb-2">
              ✕ লুপ ছাড়া (অদক্ষ কোড)
            </span>
            <div className="rounded-[10px] bg-code p-3 font-mono text-[13px] text-[#F6F1EA] space-y-0.5">
              <p>println(&quot;Hello&quot;)</p>
              <p>println(&quot;Hello&quot;)</p>
              <p>println(&quot;Hello&quot;)</p>
              <p className="text-soft">&#47;&#47; এভাবে ১০০ বার...</p>
            </div>
          </div>

          {/* With Loop */}
          <div className="rounded-[16px] border border-leaf/40 bg-leaf-soft/20 p-4 shadow-2xs">
            <span className="text-[12px] font-bold uppercase tracking-wider text-leaf-deep block mb-2">
              ✓ লুপ দিয়ে (স্মার্ট কোড)
            </span>
            <div className="rounded-[10px] bg-code p-3 font-mono text-[13px] text-[#F6F1EA] space-y-0.5">
              <p><span className="text-[#E06C75] font-bold">repeat</span>(100) &#123;</p>
              <p className="pl-4">println(&quot;Hello&quot;)</p>
              <p>&#125;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Kotlin-এর প্রধান Loops */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এর প্রধান Loops
        </h2>
        <div className="mt-3 space-y-3 text-[16.5px] leading-relaxed text-ink/90">
          <p>Kotlin-এ পুনরাবৃত্তিমূলক কাজের জন্য মূলত নিচের লুপগুলো ব্যবহার করা হয়:</p>

          <div className="overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs mt-3">
            <table className="w-full text-left border-collapse min-w-[300px]">
              <thead>
                <tr className="border-b border-line bg-sand/60">
                  <th className="px-4 py-3 text-[14px] font-bold text-ink">Loop</th>
                  <th className="px-4 py-3 text-[14px] font-bold text-ink">ব্যবহারের ক্ষেত্র</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[14.5px]">
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">for</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">নির্দিষ্ট রেঞ্জ বা সংখ্যার সীমার মধ্যে এক এক করে ঘুরতে</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">while</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">যতক্ষণ কোনো শর্ত সত্য (true) থাকবে ততক্ষণ চলতে</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-terra-soft/50 border border-terra/30 px-2 py-0.5 rounded-[6px]">do-while</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">শর্ত যাই হোক, কমপক্ষে একবার কোড চালানো নিশ্চিত করতে</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Interactive Visual Simulator: Repeat Lab */}
      <section className="rounded-[18px] border-2 border-terra/70 bg-gradient-to-b from-sand/80 to-card p-5 shadow-sm">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terra text-white text-[14px]">
            🔄
          </span>
          <div>
            <h2 className="text-[18px] font-bold text-ink">
              ইন্টারঅ্যাক্টিভ ল্যাব: লুপের পুনরাবৃত্তি দেখুন
            </h2>
            <p className="text-[13px] text-soft">
              লুপ কতবার ঘুরবে তা পরিবর্তন করে আউটপুট পর্যবেক্ষণ করুন
            </p>
          </div>
        </div>

        {/* Counter controls */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-[15px] text-ink">লুপ ঘোরার সংখ্যা (Count):</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setRepeatCount((prev) => Math.max(1, prev - 1))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              -
            </button>
            <span className="min-w-[40px] text-center font-mono text-[18px] font-bold text-terra-deep">
              {repeatCount}
            </span>
            <button
              type="button"
              onClick={() => setRepeatCount((prev) => Math.min(8, prev + 1))}
              className="h-8 w-8 rounded-[8px] border border-line bg-card font-bold text-ink hover:bg-sand transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Dynamic code box */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-code p-4 font-mono text-[14px] text-[#F6F1EA] shadow-xs">
          <p><span className="text-[#E06C75] font-bold">repeat</span>({repeatCount}) &#123;</p>
          <p className="pl-6">println(<span className="text-[#98C379]">&quot;Kotlin শিখছি...&quot;</span>)</p>
          <p>&#125;</p>
        </div>

        {/* Output Box */}
        <div className="mt-3.5 rounded-[12px] bg-card p-3.5 border border-line">
          <span className="text-[13px] font-bold text-soft block mb-1.5">স্ক্রিনে প্রদর্শিত আউটপুট ({repeatCount} বার):</span>
          <div className="space-y-1 font-mono text-[13.5px] text-ink">
            {Array.from({ length: repeatCount }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-soft text-[12px]">#{i + 1}</span>
                <span className="text-leaf-deep font-semibold">Kotlin শিখছি...</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: মনে রাখার বিষয় */}
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
            <span>Loop একই কোড বারবার চালানোর জন্য সময় ও লাইনের অপচয় রোধ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>লুপ চালাতে সাধারণত একটি সীমা বা রেঞ্জ প্রয়োজন হয়—পরবর্তী পাঠেই আমরা শিখব <strong>Range Operators</strong>!</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          মনে রাখুন
          <p className="mt-1 italic text-terra-deep">
            «Loop = একই কাজ বারবার করার স্বয়ংক্রিয় চক্র।»
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
