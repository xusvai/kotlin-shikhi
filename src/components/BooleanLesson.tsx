import { useState } from "react";

interface BooleanLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function BooleanLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: BooleanLessonProps) {
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
          Kotlin Boolean
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Boolean কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Boolean কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ সিদ্ধান্ত গ্রহণের জন্য বা কোনো শর্ত সত্য নাকি মিথ্যা তা যাচাই করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs">Boolean</code> Data Type ব্যবহার করা হয়।
          </p>
          <p>
            একটি Boolean Variable-এ শুধুমাত্র <strong>দুটি সম্ভাব্য মান (value)</strong> থাকতে পারে:
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-[12px] border border-leaf/40 bg-leaf-soft/30 p-3.5">
              <span className="font-mono font-bold text-leaf-deep text-[17px]">true</span>
              <p className="mt-1 text-[14.5px] text-ink/90">সত্য বা হ্যাঁ (Yes/True)</p>
            </div>
            <div className="rounded-[12px] border border-terra/40 bg-terra-soft/30 p-3.5">
              <span className="font-mono font-bold text-terra-deep text-[17px]">false</span>
              <p className="mt-1 text-[14.5px] text-ink/90">মিথ্যা বা না (No/False)</p>
            </div>
          </div>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            <strong>সহজভাবে মনে রাখো:</strong> যেকোনো হ্যাঁ/না বা সত্য/মিথ্যার তথ্য মানেই <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Boolean</code>।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: Boolean কীভাবে লেখা হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Boolean কীভাবে লেখা হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code> এবং <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code> হলো সংরক্ষিত কি-ওয়ার্ড। এগুলো লেখার সময় কোনো কোটেশন (<code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot; &quot;</code> বা <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&#39; &#39;</code>) ব্যবহার করা যাবে না।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>BooleanDeclaration.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val isOnline: Boolean = true   // Type Annotation সহ\nval hasPassed = false          // Type Inference দিয়ে",
                    "code-bool-decl"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-bool-decl" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> isOnline:{" "}
              <span className="text-[#7F52FF] font-semibold">Boolean</span> ={" "}
              <span className="text-[#98C379] font-semibold">true</span>{" "}
              <span className="text-[#8FA1B3] italic">&#47;&#47; স্পষ্ট টাইপ সহ</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> hasPassed ={" "}
              <span className="text-[#E06C75] font-semibold">false</span>{" "}
              <span className="text-[#8FA1B3] italic">&#47;&#47; Kotlin নিজে থেকেই Boolean বুঝে নেয়</span>
            </pre>
          </div>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[15.5px] text-ink leading-relaxed">
            <strong>সতর্কতা:</strong> যদি <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;true&quot;</code> কোটেশনের ভেতর লেখেন, তবে সেটি Boolean না হয়ে <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">String</code> হয়ে যাবে!
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Boolean Expression বা তুলনার মাধ্যমে Boolean */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Boolean Expression (তুলনা করা)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            দুটি সংখ্যার তুলনা বা কোনো শর্ত পরীক্ষা করলেও তার ফলাফল একটি <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Boolean</code> মান প্রদান করে:
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>BooleanExpression.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    "val x = 10\nval y = 20\n\nprintln(x > y)  // আউটপুট: false (১০ কি ২০-র চেয়ে বড়? না)\nprintln(x < y)  // আউটপুট: true  (১০ কি ২০-র চেয়ে ছোট? হ্যাঁ)\nprintln(x == 10) // আউটপুট: true  (x এর মান কি ১০ এর সমান? হ্যাঁ)",
                    "code-bool-expr"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-bool-expr" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> x = 10
              {"\n"}
              <span className="text-[#F0B48A]">val</span> y = 20
              {"\n\n"}
              println(x &gt; y)   <span className="text-[#E06C75] font-semibold">&#47;&#47; false (১০ কি ২০ এর চেয়ে বড়? না)</span>
              {"\n"}
              println(x &lt; y)   <span className="text-[#98C379] font-semibold">&#47;&#47; true  (১০ কি ২০ এর চেয়ে ছোট? হ্যাঁ)</span>
              {"\n"}
              println(x == 10)  <span className="text-[#98C379] font-semibold">&#47;&#47; true  (x এর মান কি ১০ এর সমান?)</span>
            </pre>
          </div>

          <p className="text-[14.5px] italic text-soft">
            «এই ধরনের তুলনা শর্তাধীন সিদ্ধান্ত (if-else) নেওয়ার সময় প্রচুর ব্যবহৃত হয়, যা আমরা পরবর্তী মডিউলে শিখব।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Boolean-এর সাধারণ ব্যবহার */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Boolean-এর কিছু বাস্তব ব্যবহার
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            বাস্তব জীবনের বিভিন্ন স্টেট বা অবস্থা প্রকাশে Boolean ব্যবহৃত হয়:
          </p>

          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <ul className="space-y-2 text-[15.5px]">
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>ব্যবহারকারী লগইন অবস্থায় আছে কি না (<code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">isLoggedIn</code>)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>অ্যাপের ডার্ক মোড অন আছে কি না (<code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">isDarkMode</code>)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>পেমেন্ট সফল হয়েছে কি না (<code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">isPaymentSuccess</code>)</span>
              </li>
            </ul>
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
            <span><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Boolean</code>-এর মান শুধুমাত্র দুটি হতে পারে: <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code> অথবা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code>।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</code> বা <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</code> লিখতে কোনো কোটেশন ব্যবহার করা হয় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>শর্ত ও তুলনা পরীক্ষার ফলাফল সবসময় Boolean প্রদান করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>কোটেশনের ভেতরে লিখলে সেটি <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">String</code> হয়ে যায়।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: সিদ্ধান্ত বা শর্তের সত্য-মিথ্যা যাচাইয়ে কেবল দুটি মান—<span className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">true</span> এবং <span className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">false</span> মানেই হলো <span className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">Boolean</span>!&raquo;
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
