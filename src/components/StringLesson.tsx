import { useState } from "react";

interface StringLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function StringLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: StringLessonProps) {
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
          Kotlin String
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: String কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          String কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ Text বা লেখা নিয়ে কাজ করার জন্য Kotlin-এ <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs whitespace-nowrap inline-block">String</code> Data Type ব্যবহার করা হয়।
          </p>
          <p>
            একটি String-এর মধ্যে একটি শব্দ, একাধিক শব্দ, বাক্য বা অনেকগুলো অক্ষরের সমন্বয়ে তৈরি লেখা থাকতে পারে।
          </p>
          <p>
            যেমন — একজনের নাম, কোনো বার্তা বা একটি ঠিকানা <code className="font-mono font-bold text-leaf-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] shadow-2xs whitespace-nowrap inline-block">String</code> হিসেবে সংরক্ষণ করা যায়।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            <strong>সহজভাবে মনে রাখো:</strong> String হলো এক বা একাধিক অক্ষর নিয়ে তৈরি Text, যা সাধারণত <span className="whitespace-nowrap"><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">&quot;&nbsp;&quot;</code></span> (double quotation)-এর মধ্যে লেখা হয়।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: String কীভাবে লেখা হয়? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          String কীভাবে লেখা হয়?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ String লেখার জন্য double quotation (<span className="whitespace-nowrap"><code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px] whitespace-nowrap inline-block">&quot;&nbsp;&quot;</code></span>) ব্যবহার করা হয়। Type Annotation দিয়ে অথবা Type Inference দিয়ে—উভয় পদ্ধতিতেই String Variable তৈরি করা যায়।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>StringSyntax.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    'val name: String = "Shihab"\nval city = "Dhaka"\nval message = "Welcome to Kotlin"',
                    "code-syntax"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-syntax" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> name:{" "}
              <span className="text-[#7F52FF] font-semibold">String</span> ={" "}
              <span className="text-[#E6D3A1]">&quot;Shihab&quot;</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> city ={" "}
              <span className="text-[#E6D3A1]">&quot;Dhaka&quot;</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> message ={" "}
              <span className="text-[#E6D3A1]">&quot;Welcome to Kotlin&quot;</span>
            </pre>
          </div>

          <p className="text-[15.5px] text-soft">
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;Shihab&quot;</code>, <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;Dhaka&quot;</code> এবং <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;Welcome to Kotlin&quot;</code>—সবই String value।
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: String Template ("$") */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          String Template (<code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;$ &quot;</code>)
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এর একটি গুরুত্বপূর্ণ সুবিধা হলো <strong>String Template</strong>। String-এর মধ্যে সরাসরি কোনো Variable-এর value যুক্ত করতে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">$</code> ব্যবহার করা যায়।
          </p>

          {/* IDE Style Code Box: Variable Template */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>TemplateVariable.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    'val name = "Shihab"\nval age = 24\n\nprintln("আমার নাম $name এবং বয়স $age বছর।")',
                    "code-template-var"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-template-var" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> name = <span className="text-[#E6D3A1]">&quot;Shihab&quot;</span>
              {"\n"}
              <span className="text-[#F0B48A]">val</span> age = 24
              {"\n\n"}
              println(<span className="text-[#E6D3A1]">&quot;আমার নাম </span><span className="text-[#7F52FF] font-bold">$name</span><span className="text-[#E6D3A1]"> এবং বয়স </span><span className="text-[#7F52FF] font-bold">$age</span><span className="text-[#E6D3A1]"> বছর।&quot;</span>)
            </pre>
          </div>

          <p className="text-[15.5px] text-soft">
            এখানে <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;$name&quot;</code> এবং <code className="font-mono font-bold text-ink bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;$age&quot;</code>-এর জায়গায় সংশ্লিষ্ট Variable-এর value বসবে।
          </p>

          <p className="pt-2">
            কোনো হিসাব বা অন্য Expression String-এর মধ্যে ব্যবহার করতে চাইলে <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;${"{"} &quot;</code> ব্যবহার করা হয়।
          </p>

          {/* IDE Style Code Box: Expression Template */}
          <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>TemplateExpression.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    'val price = 120\nval delivery = 50\n\nprintln("মোট খরচ: ${price + delivery} টাকা")',
                    "code-template-expr"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-template-expr" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> price = 120
              {"\n"}
              <span className="text-[#F0B48A]">val</span> delivery = 50
              {"\n\n"}
              println(<span className="text-[#E6D3A1]">&quot;মোট খরচ: </span><span className="text-[#7F52FF] font-bold">&#36;&#123;price + delivery&#125;</span><span className="text-[#E6D3A1]"> টাকা&quot;</span>)
            </pre>
          </div>

          <div className="rounded-[12px] border-l-4 border-terra bg-sand/60 p-3.5 text-[15.5px] text-ink leading-relaxed">
            <strong>মনে রাখো:</strong> শুধু Variable-এর জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;$name&quot;</code>, আর Expression-এর জন্য <code className="font-mono font-bold text-terra-deep bg-sand border border-line px-1.5 py-0.5 rounded-[6px]">&quot;${"{"}...{"}"}&quot;</code>।
          </div>

          <p className="text-[14.5px] italic text-soft">
            «String Template-এর আরও ব্যবহার আমরা পরবর্তী String-related Lesson-এ বিস্তারিতভাবে শিখব।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: দরকারী String Function ও Property */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          দরকারী String Function ও Property
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Kotlin-এ String নিয়ে কাজ করার জন্য বিভিন্ন property এবং function রয়েছে।
          </p>

          {/* IDE Style Code Box */}
          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>StringHelpers.kt</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    'val text = "Kotlin"\n\nprintln(text.length)\nprintln(text.uppercase())\nprintln(text.lowercase())',
                    "code-helpers"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "code-helpers" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#F0B48A]">val</span> text = <span className="text-[#E6D3A1]">&quot;Kotlin&quot;</span>
              {"\n\n"}
              println(text.length)
              {"\n"}
              println(text.uppercase())
              {"\n"}
              println(text.lowercase())
            </pre>
          </div>

          <p className="text-[15.5px] text-soft">
            এখানে <code className="font-mono text-ink font-semibold">&quot;length&quot;</code>, <code className="font-mono text-ink font-semibold">&quot;uppercase()&quot;</code> এবং <code className="font-mono text-ink font-semibold">&quot;lowercase()&quot;</code> String-এর সঙ্গে কাজ করার কয়েকটি উদাহরণ।
          </p>

          <p className="text-[14.5px] italic text-soft">
            «এগুলোর ব্যবহার এবং আরও String function ও property আমরা পরবর্তীতে বিস্তারিতভাবে শিখব।»
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: String-এর কিছু সাধারণ কাজ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          String-এর কিছু সাধারণ কাজ
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            String নিয়ে বিভিন্ন ধরনের কাজ করা যায়। যেমন—
          </p>

          <div className="rounded-[14px] border border-line bg-card p-4 shadow-2xs">
            <ul className="space-y-2 text-[15.5px]">
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>দুটি বা একাধিক Text একসঙ্গে যুক্ত করা</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>String-এর দৈর্ঘ্য জানা</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>নির্দিষ্ট অংশ বের করা</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>Text-এর মধ্যে কোনো শব্দ খুঁজে দেখা</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-leaf-deep font-bold">•</span>
                <span>Text পরিবর্তন বা সাজানো</span>
              </li>
            </ul>
          </div>

          <p className="text-[15.5px] text-soft">
            এগুলো Kotlin-এর বিভিন্ন String property ও function ব্যবহার করে করা যায়।
          </p>

          <p className="text-[14.5px] italic text-soft">
            «এই কাজগুলোর বিস্তারিত ব্যবহার পরবর্তী String-related Lesson-গুলোতে ধাপে ধাপে শেখানো হবে।»
          </p>
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
            <span>String Text বা লেখা সংরক্ষণ করে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>String লেখার জন্য double quotation (<code className="code-inline font-bold text-ink">&quot; &quot;</code>) ব্যবহার করা হয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>একটি String-এর মধ্যে একাধিক শব্দ বা সম্পূর্ণ বাক্য থাকতে পারে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="code-inline font-bold text-terra-deep">&quot;$variable&quot;</code> দিয়ে String-এর মধ্যে Variable-এর value বসানো যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span><code className="code-inline font-bold text-terra-deep">&quot;${"{"}expression{"}"}&quot;</code> দিয়ে String-এর মধ্যে Expression ব্যবহার করা যায়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>String-এর সঙ্গে কাজ করার জন্য বিভিন্ন property ও function রয়েছে।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink italic">
          &laquo;সহজভাবে মনে রাখো: ডাবল কোটেশনে লেখা Text হলো String, আর String-এর মধ্যে Variable-এর value বসাতে &ldquo;$&rdquo; ব্যবহার করা যায়।&raquo;
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
