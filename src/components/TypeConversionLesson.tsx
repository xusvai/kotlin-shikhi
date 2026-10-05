import { useState } from "react";

interface TypeConversionLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function TypeConversionLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: TypeConversionLessonProps) {
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
          Kotlin Type Conversion
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Type Conversion কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Type Conversion কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            একটি Data Type-এর মানকে অন্য কোনো Data Type-এ রূপান্তর বা পরিবর্তন করার প্রক্রিয়াকে <strong>Type Conversion</strong> (বা Type Casting) বলা হয়।
          </p>
          <p>
            যেমন—একটি পূর্ণ সংখ্যা (<code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Int</code>)-কে দশমিক সংখ্যা (<code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Double</code>)-এ পরিবর্তন করা, কিংবা একটি সংখ্যাকে লেখায় (<code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">String</code>)-এ রূপান্তর করা।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            <strong>সহজভাবে মনে রাখো:</strong> এক টাইপের ডেটাকে অন্য টাইপে রূপান্তর করার নামই হলো <strong>Type Conversion</strong>।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Kotlin-এ কি স্বয়ংক্রিয় (Automatic) রূপান্তর হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin-এ কি স্বয়ংক্রিয় রূপান্তর হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <strong>না!</strong> Java বা C-এর মতো কিছু ভাষায় ছোট টাইপ থেকে বড় টাইপে স্বয়ংক্রিয়ভাবে রূপান্তর হলেও Kotlin-এ কোনো Implicit (স্বয়ংক্রিয়) কনভার্শন হয় না।
          </p>
          <p>
            যেমন, একটি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Int</code> সংখ্যাকে সরাসরি <code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Long</code> বা <code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">Double</code>-এ রাখা যায় না:
          </p>

          {/* IDE Error Box */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>TypeErrorDemo.kt</span>
              <span className="text-[#E06C75] font-semibold">Compile Error</span>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> x:{" "}
              <span className="text-[#7F52FF] font-semibold">Int</span> = 10
              {"\n"}
              <span className="text-[#F0B48A]">val</span> y:{" "}
              <span className="text-[#7F52FF] font-semibold">Long</span> = x{" "}
              <span className="text-[#E06C75] font-semibold">&#47;&#47; ❌ ভুল! Type mismatch error</span>
            </pre>
          </div>

          <p className="text-[15.5px] text-soft">
            Kotlin-এ টাইপ সুরক্ষার (Type Safety) জন্য সব রূপান্তর স্পষ্ট ও ম্যানুয়ালি করতে হয়।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: কীভাবে Type Conversion করতে হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          কীভাবে Type Conversion করতে হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এর প্রতিটি মৌলিক ডেটা টাইপের সাথে রূপান্তরের জন্য কিছু বিশেষ বিল্ট-ইন ফাংশন রয়েছে। যেমন—<code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">.toType()</code>।
          </p>

          {/* Conversion Table */}
          <div className="mt-3 overflow-x-auto rounded-[14px] border border-line bg-card shadow-xs">
            <table className="w-full text-left border-collapse min-w-[340px]">
              <thead>
                <tr className="border-b border-line bg-sand/60">
                  <th className="px-4 py-3 text-[14px] font-bold text-ink">ফাংশন</th>
                  <th className="px-4 py-3 text-[14px] font-bold text-ink">কোন টাইপে রূপান্তর করে</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[14.5px]">
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toByte()</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">Byte-এ রূপান্তর</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toShort()</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">Short-এ রূপান্তর</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toInt()</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">Int (পূর্ণ সংখ্যা)-এ রূপান্তর</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toLong()</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">Long-এ রূপান্তর</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toFloat()</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">Float দশমিক-এ রূপান্তর</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toDouble()</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">Double দশমিক-এ রূপান্তর</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-4 py-3">
                    <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toString()</code>
                  </td>
                  <td className="px-4 py-3 text-ink/90">String (লেখা)-এ রূপান্তর</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: বাস্তব কোড উদাহরণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          বাস্তব কোড উদাহরণ
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            আসুন সাধারণ সংখ্যা ও স্ট্রিং কনভার্শনের দুটি জনপ্রিয় উদাহরণ দেখে নিই:
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>ConversionExamples.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val count = 25\nval doubleCount = count.toDouble() // 25.0 হয়ে গেল\n\nval strAge = \"20\"\nval age = strAge.toInt() // Text থেকে সংখ্যায় রূপান্তর",
                    "code-conv-demo"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-conv-demo" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#8FA1B3] italic">&#47;&#47; ১. Int থেকে Double-এ রূপান্তর</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> count:{" "}
              <span className="text-[#7F52FF] font-semibold">Int</span> = 25
              {"\n"}
              <span className="text-[#F0B48A]">val</span> doubleCount = count.
              <span className="text-[#61AFEF]">toDouble</span>()  <span className="text-[#98C379]">&#47;&#47; মান হলো: 25.0</span>
              {"\n\n"}
              <span className="text-[#8FA1B3] italic">&#47;&#47; ২. String (লেখা) থেকে Int-এ রূপান্তর</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> textNumber ={" "}
              <span className="text-[#E6D3A1]">&quot;50&quot;</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> realNumber = textNumber.
              <span className="text-[#61AFEF]">toInt</span>()  <span className="text-[#98C379]">&#47;&#47; মান হলো: 50 (হিসাবযোগ্য সংখ্যা)</span>
            </pre>
          </div>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[15.5px] text-ink leading-relaxed">
            <strong>সতর্কতা:</strong> String-কে সংখ্যায় রূপান্তর করতে চাইলে String-এর ভেতর শুধুমাত্র সংখ্যাই থাকতে হবে। যেমন: <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;50&quot;</code> কনভার্ট হবে, কিন্তু <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;Hello&quot;</code>-কে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">.toInt()</code> করতে গেলে ত্রুটি (Crash) ঘটবে!
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
            <span>Kotlin-এ ছোট থেকে বড় টাইপেও কোনো স্বয়ংক্রিয় (Automatic) রূপান্তর হয় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>রূপান্তরের জন্য সর্বদা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">.toType()</code> ফাংশন ব্যবহার করতে হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>যেমন: <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">.toInt()</code>, <code className="font-mono font-bold text-kotlin bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">.toDouble()</code>, <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">.toString()</code>।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>সরাসরি ভিন্ন টাইপের ভ্যারিয়েবল অ্যাসাইন করলে Kotlin কম্পাইলার এরর দেয়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: এক টাইপ থেকে অন্য টাইপে রূপান্তর করতে সংশ্লিষ্ট <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">.toType()</code> ফাংশন কল করতে হয়!&raquo;
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
