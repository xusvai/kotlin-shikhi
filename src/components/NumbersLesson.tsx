import { useState } from "react";

interface NumbersLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function NumbersLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: NumbersLessonProps) {
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
          Kotlin Numbers
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Numbers কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Numbers কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ হিসাব-নিকাশ, বয়স, রান, টাকা বা পরিমাপ বোঝাতে সংখ্যা নিয়ে কাজ করতে হয়।
          </p>
          <p>
            Kotlin-এ সংখ্যা মূলত <strong>দুই ভাগে</strong> বিভক্ত:
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-terra/30 bg-terra-soft/30 p-3.5">
              <span className="font-bold text-terra-deep">১. পূর্ণ সংখ্যা (Integers)</span>
              <p className="mt-1 text-[14.5px] text-ink/90">যেমন: 10, 25, -5 (দশমিক ছাড়া)</p>
            </div>
            <div className="rounded-[12px] border border-kotlin/30 bg-kotlin-soft/30 p-3.5">
              <span className="font-bold text-kotlin-deep">২. ভগ্নাংশ বা দশমিক সংখ্যা (Floating-Point)</span>
              <p className="mt-1 text-[14.5px] text-ink/90">যেমন: 3.14, 99.5, -0.75 (দশমিক সহ)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: পূর্ণ সংখ্যার প্রকারভেদ (Integer Types) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          ১. পূর্ণ সংখ্যার প্রকারভেদ (Integers)
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          Kotlin-এ পূর্ণ সংখ্যা সংরক্ষণের জন্য ৪টি ডেটা টাইপ রয়েছে। মেমোরিতে তাদের সাইজের ওপর ভিত্তি করে পার্থক্য তৈরি হয়:
        </p>

        {/* Integer Comparison Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[360px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-3.5 py-2.5 text-[13.5px] font-bold text-ink">টাইপ</th>
                <th className="px-3.5 py-2.5 text-[13.5px] font-bold text-ink">সাইজ</th>
                <th className="px-3.5 py-2.5 text-[13.5px] font-bold text-ink">ধারণক্ষমতা (Range)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-3.5 py-2.5 font-mono font-bold text-terra-deep">Byte</td>
                <td className="px-3.5 py-2.5 text-soft">8-bit</td>
                <td className="px-3.5 py-2.5 font-mono text-[13px] text-ink/90">-128 থেকে 127</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-3.5 py-2.5 font-mono font-bold text-terra-deep">Short</td>
                <td className="px-3.5 py-2.5 text-soft">16-bit</td>
                <td className="px-3.5 py-2.5 font-mono text-[13px] text-ink/90">-32,768 থেকে 32,767</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors bg-terra-soft/20">
                <td className="px-3.5 py-2.5 font-mono font-bold text-terra-deep">
                  Int <span className="text-[11px] font-sans font-normal text-terra">(ডিফল্ট)</span>
                </td>
                <td className="px-3.5 py-2.5 text-soft">32-bit</td>
                <td className="px-3.5 py-2.5 font-mono text-[13px] text-ink/90">প্রায় -২১০ কোটি থেকে +২১০ কোটি</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-3.5 py-2.5 font-mono font-bold text-terra-deep">Long</td>
                <td className="px-3.5 py-2.5 text-soft">64-bit</td>
                <td className="px-3.5 py-2.5 font-mono text-[13px] text-ink/90">বিশাল সংখ্যার জন্য (L যুক্ত হয়)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IDE Style Code Box for Integers */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>IntegersDemo.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'val age: Byte = 25\nval year: Short = 2026\nval population: Int = 180000000\nval nationalId: Long = 758923489234L // শেষে L দেওয়া হয়',
                  "code-integers"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-integers" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">val</span> age:{" "}
            <span className="text-[#7F52FF] font-semibold">Byte</span> = 25
            {"\n"}
            <span className="text-[#F0B48A]">val</span> year:{" "}
            <span className="text-[#7F52FF] font-semibold">Short</span> = 2026
            {"\n"}
            <span className="text-[#F0B48A]">val</span> population:{" "}
            <span className="text-[#7F52FF] font-semibold">Int</span> = 180000000{" "}
            <span className="text-[#98C379] font-semibold">&#47;&#47; সাধারণ পূর্ণ সংখ্যা</span>
            {"\n"}
            <span className="text-[#F0B48A]">val</span> nationalId:{" "}
            <span className="text-[#7F52FF] font-semibold">Long</span> = 758923489234L{" "}
            <span className="text-[#E6D3A1]">&#47;&#47; Long বোঝাতে শেষে &#39;L&#39;</span>
          </pre>
        </div>

        <div className="mt-3 rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[15.5px] text-ink leading-relaxed">
          <strong>টিপস:</strong> দৈনন্দিন কাজে প্রায় সব পূর্ণ সংখ্যার জন্য <code className="font-mono font-bold text-terra-deep">Int</code> ব্যবহার করাই যথেষ্ট। সংখ্যাটি যদি ২১০ কোটির চেয়ে বড় হয়, তখন <code className="font-mono font-bold text-terra-deep">Long</code> ব্যবহার করতে হয়।
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: দশমিক সংখ্যার প্রকারভেদ (Floating-Point Types) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          ২. দশমিক সংখ্যার প্রকারভেদ (Floating-Point)
        </h2>
        <p className="mt-2 text-[16px] text-soft">
          দশমিক সংখ্যা বা ভগ্নাংশ সংরক্ষণের জন্য Kotlin-এ ২টি ডেটা টাইপ রয়েছে:
        </p>

        {/* Float & Double Table */}
        <div className="mt-4 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse min-w-[340px]">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-3.5 py-2.5 text-[13.5px] font-bold text-ink">টাইপ</th>
                <th className="px-3.5 py-2.5 text-[13.5px] font-bold text-ink">সাইজ</th>
                <th className="px-3.5 py-2.5 text-[13.5px] font-bold text-ink">নির্ভুলতা (Precision)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[14px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-3.5 py-2.5 font-mono font-bold text-kotlin">Float</td>
                <td className="px-3.5 py-2.5 text-soft">32-bit</td>
                <td className="px-3.5 py-2.5 text-ink/90">দশমিকের পর ৬-৭ ঘর (শেষে F বা f দিতে হয়)</td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors bg-kotlin-soft/20">
                <td className="px-3.5 py-2.5 font-mono font-bold text-kotlin">
                  Double <span className="text-[11px] font-sans font-normal text-kotlin-deep">(ডিফল্ট)</span>
                </td>
                <td className="px-3.5 py-2.5 text-soft">64-bit</td>
                <td className="px-3.5 py-2.5 text-ink/90">দশমিকের পর ১৫-১৬ ঘর (বেশি নিখুঁত)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* IDE Style Code Box for Floating-Points */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>FloatDoubleDemo.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'val weight: Float = 65.5f   // Float হলে শেষে F বা f লিখতে হয়\nval pi: Double = 3.1415926535 // Double বেশি নিখুঁত',
                  "code-floating"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-floating" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">val</span> weight:{" "}
            <span className="text-[#7F52FF] font-semibold">Float</span> = 65.5f{" "}
            <span className="text-[#E6D3A1]">&#47;&#47; Float হলে শেষে &#39;f&#39; বা &#39;F&#39; আবশ্যক</span>
            {"\n"}
            <span className="text-[#F0B48A]">val</span> pi:{" "}
            <span className="text-[#7F52FF] font-semibold">Double</span> = 3.1415926535{" "}
            <span className="text-[#98C379] font-semibold">&#47;&#47; সাধারণ দশমিকের ডিফল্ট টাইপ</span>
          </pre>
        </div>

        <div className="mt-3 rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[15.5px] text-ink leading-relaxed">
          <strong>ডিফল্ট নিয়ম:</strong> আপনি যখন কোনো সংখ্যায় দশমিক দেন (যেমন: <code className="font-mono text-ink font-semibold">val price = 99.99</code>), Kotlin নিজে থেকেই সেটিকে <code className="font-mono font-bold text-kotlin">Double</code> হিসেবে বিবেচনা করে।
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: আন্ডারস্কোর (_) দিয়ে বড় সংখ্যা সহজে পড়া */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          বড় সংখ্যা সহজে পড়তে Underscore (<code className="font-mono text-terra-deep font-semibold">_</code>)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            অনেক বড় সংখ্যা (যেমন ১ কোটি বা ১০ লাখ) লেখার সময় শূন্য গুনতে ঝামেলা হতে পারে। Kotlin-এ সংখ্যার মাঝে কমা না দিয়ে <code className="font-mono font-bold text-terra-deep bg-sand px-1.5 py-0.5 rounded border border-line">_</code> (underscore) ব্যবহার করা যায়। এতে মানের কোনো পরিবর্তন হয় না:
          </p>

          <div className="overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>ReadableNumbers.kt</span>
              <span className="text-white/60">Readability</span>
            </div>
            <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> oneMillion = 1_000_000{" "}
              <span className="text-[#98C379] font-semibold">&#47;&#47; ১০ লাখ (পড়তে অনেক সহজ!)</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> creditCard = 1234_5678_9012_3456L{" "}
              <span className="text-[#98C379] font-semibold">&#47;&#47; কার্ড নম্বর</span>
            </pre>
          </div>
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
            <span>পূর্ণ সংখ্যার ডিফল্ট টাইপ হলো <code className="font-mono font-bold text-terra-deep">Int</code>।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>দশমিক সংখ্যার ডিফল্ট টাইপ হলো <code className="font-mono font-bold text-kotlin">Double</code>।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>খুব বড় সংখ্যার জন্য <code className="font-mono font-bold text-terra-deep">Long</code> ব্যবহার করতে হয় এবং শেষে <code className="font-mono font-bold text-ink">L</code> লিখতে হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-kotlin">Float</code> টাইপ ব্যবহার করলে সংখ্যার শেষে <code className="font-mono font-bold text-ink">f</code> বা <code className="font-mono font-bold text-ink">F</code> দিতে হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>বড় সংখ্যা পড়তে সুবিধার জন্য আন্ডারস্কোর (<code className="font-mono font-bold text-terra-deep">_</code>) ব্যবহার করা যায়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: পূর্ণ সংখ্যা হলে <span className="font-mono font-bold text-terra-deep">Int</span>, আর দশমিক বা ভগ্নাংশ হলে <span className="font-mono font-bold text-kotlin">Double</span>!&raquo;
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
