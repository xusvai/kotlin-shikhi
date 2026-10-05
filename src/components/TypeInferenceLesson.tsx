import { useState } from "react";

interface TypeInferenceLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function TypeInferenceLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: TypeInferenceLessonProps) {
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
          Type Inference
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Type Inference কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Type Inference কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            <strong>Inference</strong> শব্দের অর্থ হলো &ldquo;অনুমান করা&rdquo;। Kotlin প্রোগ্রামিং ল্যাঙ্গুয়েজের সবচেয়ে চমৎকার ও আধুনিক বৈশিষ্ট্যগুলোর একটি হলো <strong>Type Inference</strong>।
          </p>
          <p>
            আমরা যখন কোনো ভ্যারিয়েবলে মান জমা রাখি, তখন Kotlin কম্পাইলার সেই মানের ধরন দেখে <strong>নিজে নিজেই স্বয়ংক্রিয়ভাবে অনুমান করে নেয়</strong> যে ভ্যারিয়েবলটি কোন ডাটা টাইপের হবে। এর ফলে প্রোগ্রামারকে বারবার টাইপ লিখে সময় নষ্ট করতে হয় না।
          </p>

          {/* Info Card with SVG */}
          <div className="rounded-[14px] border border-line bg-card p-4.5 shadow-2xs">
            <div className="flex items-center gap-2 text-terra-deep font-bold text-[16px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-terra"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span>সহজ উপমা</span>
            </div>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink/90">
              আপনি যদি একটি স্বচ্ছ জারে দুধ ঢালেন, তবে জারের ওপর বড় করে &ldquo;দুধ&rdquo; না লিখলেও যে কেউ দেখে বুঝতে পারবে যে ভেতরে দুধ আছে। Kotlin-ও একইভাবে কোনো ভ্যারিয়েবলে রাখা মান দেখেই তার সঠিক টাইপটি সাথে সাথে চিনে নেয়।
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: কীভাবে Kotlin টাইপ অনুমান করে? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Kotlin কীভাবে বিভিন্ন টাইপ অনুমান করে?
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          নিচের উদাহরণগুলোতে লক্ষ্য করুন, আমরা কোনো প্রকার ডাটা টাইপের নাম উল্লেখ করিনি, তবুও Kotlin প্রতিটি টাইপ নির্ভুলভাবে সনাক্ত করে:
        </p>

        {/* Visual Mapping Cards */}
        <div className="mt-4 space-y-2.5">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
            <div className="font-mono text-[14.5px] text-ink">
              <span className="text-terra-deep font-bold">val</span> age = 22
            </div>
            <div className="flex items-center gap-2">
              <span className="text-soft text-[13px]">➔ Kotlin ধরে নেয়:</span>
              <span className="rounded bg-sand px-2.5 py-1 font-mono text-[12.5px] font-bold text-terra-deep border border-line">
                Int (পূর্ণসংখ্যা)
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
            <div className="font-mono text-[14.5px] text-ink">
              <span className="text-terra-deep font-bold">val</span> price = 99.50
            </div>
            <div className="flex items-center gap-2">
              <span className="text-soft text-[13px]">➔ Kotlin ধরে নেয়:</span>
              <span className="rounded bg-sand px-2.5 py-1 font-mono text-[12.5px] font-bold text-kotlin border border-line">
                Double (দশমিক সংখ্যা)
              </span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
            <div className="font-mono text-[14.5px] text-ink">
              <span className="text-terra-deep font-bold">val</span> name = &quot;Kotlin&quot;
            </div>
            <div className="flex items-center gap-2">
              <span className="text-soft text-[13px]">➔ Kotlin ধরে নেয়:</span>
              <span className="rounded bg-sand px-2.5 py-1 font-mono text-[12.5px] font-bold text-leaf-deep border border-line">
                String (টেক্সট)
              </span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
            <div className="font-mono text-[14.5px] text-ink">
              <span className="text-terra-deep font-bold">val</span> letter = &apos;K&apos;
            </div>
            <div className="flex items-center gap-2">
              <span className="text-soft text-[13px]">➔ Kotlin ধরে নেয়:</span>
              <span className="rounded bg-sand px-2.5 py-1 font-mono text-[12.5px] font-bold text-soft border border-line">
                Char (একক বর্ণ)
              </span>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-[12px] border border-line bg-card p-3.5 shadow-2xs">
            <div className="font-mono text-[14.5px] text-ink">
              <span className="text-terra-deep font-bold">val</span> isPassed = true
            </div>
            <div className="flex items-center gap-2">
              <span className="text-soft text-[13px]">➔ Kotlin ধরে নেয়:</span>
              <span className="rounded bg-sand px-2.5 py-1 font-mono text-[12.5px] font-bold text-terra-deep border border-line">
                Boolean (সত্য/মিথ্যা)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: কোড উদাহরণ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          কোড উদাহরণ
        </h2>

        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>TypeInference.kt</span>
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  'fun main() {\n    // টাইপ না লিখেও কোটলিন নিজে বুঝে নেয়\n    val title = "Android Developer"\n    val experienceYears = 3\n    val rating = 4.8\n    val isAvailable = true\n    \n    println(title)\n    println(experienceYears)\n}',
                  "code-inference"
                )
              }
              className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              {copiedCode === "code-inference" ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">fun</span>{" "}
            <span className="text-[#D4C4F5]">main</span>() &#123;
            {"\n"}
            {"    "}
            <span className="text-[#8FA1B3] italic">&#47;&#47; টাইপ স্পষ্ট করে না লিখলেও কোটলিন নিজে বুঝে নেয়</span>
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">val</span> title ={" "}
            <span className="text-[#E6D3A1]">&quot;Android Developer&quot;</span>
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">val</span> experienceYears = 3
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">val</span> rating = 4.8
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">val</span> isAvailable ={" "}
            <span className="text-[#D4C4F5]">true</span>
            {"\n\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(title)
            {"\n"}
            {"    "}
            <span className="text-[#F0B48A]">println</span>(experienceYears)
            {"\n"}
            &#125;
          </pre>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Type Inference-এর একটি সীমাবদ্ধতা */}
      <section className="rounded-[16px] border-2 border-terra/60 bg-terra-soft/40 p-5 shadow-xs">
        <div className="flex items-center gap-2 text-terra-deep">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <h2 className="text-[16px] font-bold uppercase tracking-wider">
            কখন Type Inference কাজ করে না?
          </h2>
        </div>

        <p className="mt-3 text-[16px] leading-[1.7] text-ink">
          আপনি যদি ভ্যারিয়েবল ডিক্লেয়ার করার সময় কোনো মান <strong>(Value) প্রদান না করেন</strong>, তখন Kotlin অনুমান করতে পারে না। তখন বাধ্য হয়ে আপনাকে টাইপ লিখে দিতে হয় (যাকে Type Annotation বলে, যা পরের পাঠে শিখব):
        </p>

        {/* IDE Terminal Style Code Block */}
        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA] shadow-xs">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
            <span>TypeInferenceError.kt</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-white/70">
              Compiler Check
            </span>
          </div>
          <pre className="p-4 font-mono text-[14px] leading-relaxed overflow-x-auto">
            <span className="text-[#F0B48A]">var</span> score{" "}
            <span className="text-[#E06C75] font-semibold">
              &#47;&#47; ❌ Error: This variable must either have a type annotation or be initialized
            </span>
            {"\n\n"}
            <span className="text-[#F0B48A]">var</span> score:{" "}
            <span className="text-[#7F52FF] font-semibold">Int</span>{" "}
            <span className="text-[#98C379] font-semibold">
              &#47;&#47; ✅ সঠিক (Type Annotation উল্লেখ করা হয়েছে)
            </span>
          </pre>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 5: Type Inference-এর সুবিধা */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Type Inference-এর সুবিধা
        </h2>
        <div className="mt-3 space-y-3 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Type Inference ব্যবহার করলে code সাধারণত আরও ছোট, পরিষ্কার এবং সহজে পড়া যায়।
          </p>
          <div className="rounded-[12px] border-l-4 border-leaf bg-sand/60 p-3.5 text-[16px] text-ink leading-relaxed">
            যেখানে Kotlin value দেখে Data Type নিশ্চিতভাবে বুঝতে পারে, সেখানে আলাদাভাবে Type Annotation না লিখেও কাজ করা যায়।
          </div>
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
            <span>Type Inference হলো Kotlin-এর Data Type নিজে থেকে নির্ধারণ করার ক্ষমতা।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Kotlin সাধারণত Variable-এর value দেখে তার Data Type বুঝতে পারে।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>সব সময় Data Type লিখে দেওয়া প্রয়োজন হয় না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra-deep font-bold">•</span>
            <span>Type Inference code-কে আরও concise ও readable করতে সাহায্য করে।</span>
          </li>
        </ul>

        <div className="mt-4 rounded-[12px] bg-card p-3.5 border border-line text-[15.5px] leading-relaxed font-semibold text-ink">
          সহজভাবে মনে রাখো: Type Inference মানে—&ldquo;Data Type তুমি না লিখলেও Kotlin value দেখে বুঝে নেবে।&rdquo;
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
