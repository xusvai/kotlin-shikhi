import { useState } from "react";

interface CommentLessonProps {
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function CommentLesson({
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: CommentLessonProps) {
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
          Kotlin Comments
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
      </header>

      {/* Section 1: Comment কী? */}
      <section className="mt-8">
        <h2 className="text-[22px] font-bold text-ink">
          Comment কী?
        </h2>
        <div className="mt-3 space-y-3.5 text-[17px] leading-[1.8] text-ink/90">
          <p>
            Programming-এ code-এর মধ্যে এমন কিছু লেখা হয়, যা program-এর কাজের অংশ নয়, কিন্তু code বুঝতে developer-কে সাহায্য করে। এগুলোকে <strong>Comment</strong> বলা হয়।
          </p>
          <p>
            Comment সাধারণত code-এর কোনো অংশের কাজ বোঝাতে, গুরুত্বপূর্ণ তথ্য লিখে রাখতে বা পরে code বুঝতে সুবিধা করার জন্য ব্যবহার করা হয়।
          </p>
          <div className="rounded-[12px] border-l-4 border-kotlin bg-sand/60 p-4 text-[16px] text-ink leading-relaxed">
            Kotlin-এর compiler comment-কে execute করে না, তাই comment program-এর output বা মূল কাজের ওপর কোনো প্রভাব ফেলে না।
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 2: কমেন্টের প্রকারভেদ */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          কমেন্টের প্রকারভেদ
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          Kotlin-এ প্রধানত ২ ধরণের কমেন্ট ব্যবহার করা হয়:
        </p>

        {/* 1. Single-line Comment */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[11px] font-bold text-terra-deep">
              ১
            </span>
            <h3 className="text-[18px] font-bold text-ink">
              Single-line Comment (<code className="font-mono text-terra font-bold bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">//</code>)
            </h3>
          </div>
          <p className="mt-2 text-[16px] leading-[1.7] text-soft">
            এক লাইনের কোনো নোট লিখতে লাইনের শুরুতে দুটি স্ল্যাশ (<code className="font-mono font-bold text-terra">//</code>) ব্যবহার করা হয়।
          </p>

          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Single-line Example</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    '// এটি একটি সিঙ্গেল-লাইন কমেন্ট\nprintln("Hello World") // কোডের পাশেও কমেন্ট লেখা যায়',
                    "comment-single"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "comment-single" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#8FA1B3] italic">&#47;&#47; এটি একটি সিঙ্গেল-লাইন কমেন্ট</span>
              {"\n"}
              <span className="text-[#F0B48A]">println</span>(
              <span className="text-[#E6D3A1]">&quot;Hello World&quot;</span>){" "}
              <span className="text-[#8FA1B3] italic">&#47;&#47; কোডের পাশেও কমেন্ট লেখা যায়</span>
            </pre>
          </div>
        </div>

        {/* 2. Multi-line Comment */}
        <div className="mt-7">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-kotlin-soft font-mono text-[11px] font-bold text-kotlin-deep">
              ২
            </span>
            <h3 className="text-[18px] font-bold text-ink">
              Multi-line Comment (<code className="font-mono text-kotlin font-bold bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">/* ... */</code>)
            </h3>
          </div>
          <p className="mt-2 text-[16px] leading-[1.7] text-soft">
            একাধিক লাইনের বড় কোনো বিবরণ লিখতে <code className="font-mono font-bold text-kotlin">/*</code> দিয়ে শুরু করে <code className="font-mono font-bold text-kotlin">*/</code> দিয়ে শেষ করতে হয়।
          </p>

          <div className="mt-3 overflow-hidden rounded-[14px] border border-line bg-code text-[#F6F1EA]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px] font-mono text-[#E6D3A1]">
              <span>Multi-line Example</span>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard(
                    '/*\n  এখানে একাধিক লাইনে\n  বড় কোনো ব্যাখ্যা বা নোট\n  সহজে লিখে রাখা যায়।\n*/\nprintln("Kotlin")',
                    "comment-multi"
                  )
                }
                className="rounded px-2 py-0.5 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                {copiedCode === "comment-multi" ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 font-mono text-[14.5px] leading-relaxed overflow-x-auto">
              <span className="text-[#8FA1B3] italic">
                &#47;*
                {"\n"}
                {"  "}এখানে একাধিক লাইনে
                {"\n"}
                {"  "}বড় কোনো ব্যাখ্যা বা নোট
                {"\n"}
                {"  "}সহজে লিখে রাখা যায়।
                {"\n"}
                *&#47;
              </span>
              {"\n"}
              <span className="text-[#F0B48A]">println</span>(
              <span className="text-[#E6D3A1]">&quot;Kotlin&quot;</span>)
            </pre>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 3: Comment কেন ব্যবহার করব? */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Comment কেন ব্যবহার করব?
        </h2>
        <p className="mt-3 text-[17px] leading-[1.8] text-ink/90">
          Comment code-এর কাজ পরিবর্তন করে না, তবে code বোঝা অনেক সহজ করে।
        </p>
        <p className="mt-3 text-[16px] font-semibold text-soft">
          এগুলো ব্যবহার করা যায়—
        </p>

        <ul className="mt-3 space-y-2 text-[16px] leading-[1.7] text-ink">
          {[
            "কোনো code-এর কাজ বোঝাতে",
            "গুরুত্বপূর্ণ তথ্য মনে রাখতে",
            "অন্য developer-কে code বুঝতে সাহায্য করতে",
            "বড় code-এর বিভিন্ন অংশ আলাদা করে বোঝাতে",
            "সাময়িকভাবে কোনো code-এর অংশ বাদ দিতে",
          ].map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-[12px] border border-line bg-card p-3 shadow-2xs"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-terra" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <hr className="my-8 border-line" />

      {/* Section 4: Comment-এর দুই ধরনের Syntax (Table) */}
      <section>
        <h2 className="text-[22px] font-bold text-ink">
          Comment-এর দুই ধরনের Syntax
        </h2>

        <div className="mt-4 overflow-hidden rounded-[14px] border border-line bg-card shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line bg-sand/60">
                <th className="px-4 py-3 text-[14px] font-bold text-ink">
                  Comment-এর ধরন
                </th>
                <th className="px-4 py-3 text-[14px] font-bold text-ink">
                  Syntax
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-[15px]">
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-medium text-ink">
                  Single-line
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-terra bg-terra-soft px-2 py-0.5 rounded border border-terra/30">
                    //
                  </code>
                </td>
              </tr>
              <tr className="hover:bg-sand/30 transition-colors">
                <td className="px-4 py-3 font-medium text-ink">
                  Multi-line
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-2 py-0.5 rounded border border-kotlin/30">
                    /* ... */
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
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

        <ul className="mt-4 space-y-2 text-[16px] leading-[1.7] text-ink">
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>
              <code className="font-mono font-bold text-terra bg-terra-soft px-1.5 py-0.5 rounded border border-terra/30">
                //
              </code>{" "}
              → Single-line Comment
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>
              <code className="font-mono font-bold text-kotlin bg-kotlin-soft px-1.5 py-0.5 rounded border border-kotlin/30">
                /* ... */
              </code>{" "}
              → Multi-line Comment
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>Comment program-এর মূল কাজের অংশ নয়।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>Comment-এর ভেতরের লেখা program execute করে না।</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-terra font-bold">•</span>
            <span>Comment code পড়া এবং বোঝাকে সহজ করে।</span>
          </li>
        </ul>

        {/* Final Quote Callout */}
        <div className="mt-5 rounded-[12px] bg-card p-4 border border-line shadow-2xs">
          <p className="text-[16.5px] sm:text-[17px] font-semibold italic text-terra-deep leading-[1.7]">
            «সহজভাবে বললে, Comment হলো code-এর পাশে রাখা এমন একটি নোট, যা programmer-এর জন্য, program-এর জন্য নয়।»
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
