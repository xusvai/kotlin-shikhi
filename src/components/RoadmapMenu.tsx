import { KOTLIN_ROADMAP } from "../data/roadmap";

interface RoadmapMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeTopicId?: string | null;
  onSelectTopic?: (topicId: string) => void;
}

export function RoadmapMenu({
  isOpen,
  onClose,
  activeTopicId,
  onSelectTopic,
}: RoadmapMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/40 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <aside
        className="relative z-10 flex h-full w-[88%] max-w-[370px] flex-col border-r border-line bg-card shadow-2xl transition-transform duration-200"
        aria-label="Kotlin Roadmap Menu"
      >
        {/* Drawer Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-line px-4 py-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-ink font-mono text-[13px] font-bold text-card">
              K
            </span>
            <div className="flex items-baseline gap-1 text-[18px] font-bold leading-none text-ink">
              <span>Kotlin</span>
              <span className="text-terra-deep">শিখি</span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-[8px] text-soft transition-colors hover:bg-sand hover:text-ink active:scale-95"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Modules List */}
        <div className="phone-scroll flex-1 overflow-y-auto p-4 space-y-5">
          {KOTLIN_ROADMAP.map((mod) => (
            <div
              key={mod.id}
              className="overflow-hidden rounded-[16px] border border-line bg-card shadow-xs"
            >
              {/* Module Header */}
              <div className="flex items-center justify-between border-b border-line bg-sand/50 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-terra-soft font-mono text-[11px] font-bold text-terra-deep">
                    {mod.number}
                  </span>
                  <h2 className="text-[16px] font-bold tracking-tight text-ink">
                    {mod.title}
                  </h2>
                </div>
                <span className="rounded-full bg-sand px-2 py-0.5 text-[11px] font-semibold text-soft border border-line">
                  {mod.topics.length} Topics
                </span>
              </div>

              {/* Topics List */}
              <div className="p-2">
                <ul className="space-y-1.5" role="list">
                  {mod.topics.map((topic, index) => {
                    const isActive = activeTopicId === topic.id;

                    return (
                      <li key={topic.id}>
                        <button
                          type="button"
                          onClick={() => {
                            onSelectTopic?.(topic.id);
                            onClose();
                          }}
                          className={`group flex w-full items-center justify-between gap-3 rounded-[12px] border p-2.5 text-left transition-all duration-150 active:scale-[0.99] ${
                            isActive
                              ? "border-kotlin bg-kotlin-soft/70 shadow-xs"
                              : "border-transparent bg-transparent hover:border-line hover:bg-sand/60 hover:translate-x-0.5"
                          }`}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            {/* Step Number Badge */}
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] font-mono text-[12px] font-bold transition-colors ${
                                isActive
                                  ? "bg-kotlin text-white"
                                  : "bg-sand text-soft group-hover:bg-card group-hover:text-ink"
                              }`}
                            >
                              0{index + 1}
                            </span>

                            {/* Title and Short Detail */}
                            <div className="min-w-0">
                              <p
                                className={`truncate text-[14.5px] font-semibold leading-snug transition-colors ${
                                  isActive
                                    ? "text-kotlin-deep font-bold"
                                    : "text-ink group-hover:text-kotlin-deep"
                                }`}
                              >
                                {topic.title}
                              </p>
                              <p className="truncate text-[11.5px] text-soft">
                                {topic.detail}
                              </p>
                            </div>
                          </div>

                          {/* Right Tag & Icon */}
                          <div className="flex shrink-0 items-center gap-1.5">
                            <span
                              className={`rounded-[6px] border px-2 py-0.5 font-mono text-[11px] font-medium transition-colors ${
                                isActive
                                  ? "border-kotlin/40 bg-card text-kotlin-deep"
                                  : "border-line bg-card text-soft group-hover:border-line-strong group-hover:text-ink"
                              }`}
                            >
                              {topic.tag}
                            </span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`transition-transform duration-150 ${
                                isActive
                                  ? "text-kotlin-deep translate-x-0.5"
                                  : "text-faint group-hover:text-soft group-hover:translate-x-0.5"
                              }`}
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-line bg-sand/60 px-4 py-3 text-center">
          <p className="text-[12px] font-medium text-soft">
            কোটলিন প্রোগ্রামিংয়ের প্রাথমিক ধাপ
          </p>
        </div>
      </aside>
    </div>
  );
}
