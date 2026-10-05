interface BlankLessonProps {
  title: string;
  moduleName: string;
  lessonNumber: string;
  tag: string;
  description: string;
  onBack: () => void;
  onOpenMenu: () => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
}

export function BlankLesson({
  title,
  moduleName,
  lessonNumber,
  tag,
  description,
  onBack,
  onOpenMenu,
  onPrevLesson,
  onNextLesson,
}: BlankLessonProps) {
  return (
    <article className="mx-auto w-full max-w-2xl px-5 pt-6 pb-20 text-ink">
      {/* Lesson Header */}
      <header className="mt-1">
        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.25] tracking-tight text-ink">
          {title}
        </h1>
        <span
          className="mt-3 block h-[3px] w-12 rounded-full bg-terra"
          aria-hidden="true"
        />
        <p className="mt-3 text-[17px] text-soft">
          {description}
        </p>
      </header>

      {/* Placeholder / Coming Soon Container */}
      <section className="mt-8 rounded-[16px] border-2 border-dashed border-line bg-card p-8 text-center shadow-xs">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terra-soft text-terra-deep">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
        </div>

        <h2 className="mt-4 text-[20px] font-bold text-ink">
          লেসনটি শীঘ্রই আসছে
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-soft max-w-md mx-auto">
          এই পাঠের বিস্তারিত কন্টেন্ট, বাংলা ব্যাখ্যা ও ইন্টারেক্টিভ কোড উদাহরণ খুব শীঘ্রই যুক্ত করা হবে।
        </p>

        <button
          type="button"
          onClick={onOpenMenu}
          className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-sand px-4 py-2 text-[14px] font-semibold text-ink border border-line hover:bg-paper transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          রোডম্যাপ দেখুন
        </button>
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
