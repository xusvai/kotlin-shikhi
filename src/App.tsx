import { useState } from "react";
import { RoadmapMenu } from "./components/RoadmapMenu";
import { IntroLesson } from "./components/IntroLesson";
import { HelloWorldOutputLesson } from "./components/HelloWorldOutputLesson";
import { SyntaxLesson } from "./components/SyntaxLesson";
import { CommentLesson } from "./components/CommentLesson";
import { VariableKiLesson } from "./components/VariableKiLesson";
import { ValOVarLesson } from "./components/ValOVarLesson";
import { NamingRulesLesson } from "./components/NamingRulesLesson";
import { ValueChangeLesson } from "./components/ValueChangeLesson";
import { TypeInferenceLesson } from "./components/TypeInferenceLesson";
import { TypeAnnotationLesson } from "./components/TypeAnnotationLesson";
import { DataTypesOverviewLesson } from "./components/DataTypesOverviewLesson";
import { NumbersLesson } from "./components/NumbersLesson";
import { StringLesson } from "./components/StringLesson";
import { CharLesson } from "./components/CharLesson";
import { BooleanLesson } from "./components/BooleanLesson";
import { TypeConversionLesson } from "./components/TypeConversionLesson";
import { OperatorIntroLesson } from "./components/OperatorIntroLesson";
import { ArithmeticOperatorsLesson } from "./components/ArithmeticOperatorsLesson";
import { AssignmentOperatorsLesson } from "./components/AssignmentOperatorsLesson";
import { ComparisonOperatorsLesson } from "./components/ComparisonOperatorsLesson";
import { LogicalOperatorsLesson } from "./components/LogicalOperatorsLesson";
import { UnaryOperatorsLesson } from "./components/UnaryOperatorsLesson";
import { PrefixPostfixLesson } from "./components/PrefixPostfixLesson";
import { OperatorPrecedenceLesson } from "./components/OperatorPrecedenceLesson";
import { ControlFlowIntroLesson } from "./components/ControlFlowIntroLesson";
import { IfStatementLesson } from "./components/IfStatementLesson";
import { ElseAndElseIfLesson } from "./components/ElseAndElseIfLesson";
import { NestedIfLesson } from "./components/NestedIfLesson";
import { WhenExpressionLesson } from "./components/WhenExpressionLesson";
import { WhenAdvancedLesson } from "./components/WhenAdvancedLesson";
import { LoopsIntroLesson } from "./components/LoopsIntroLesson";
import { RangeOperatorsLesson } from "./components/RangeOperatorsLesson";
import { BlankLesson } from "./components/BlankLesson";

type ViewState =
  | "home"
  | "intro"
  | "hello-world-output"
  | "syntax"
  | "comment"
  | "variable-ki"
  | "val-o-var"
  | "naming-rules"
  | "value-change"
  | "type-inference"
  | "type-annotation"
  | "datatypes-overview"
  | "numbers"
  | "string"
  | "char"
  | "boolean"
  | "type-conversion"
  | "operator-intro"
  | "arithmetic-operators"
  | "assignment-operators"
  | "comparison-operators"
  | "logical-operators"
  | "unary-operators"
  | "prefix-postfix-operators"
  | "operator-precedence"
  | "control-flow-intro"
  | "if-statement"
  | "else-and-else-if"
  | "nested-if"
  | "when-expression"
  | "when-advanced"
  | "loops-intro"
  | "range-operators"
  | "for-loop"
  | "in-operator"
  | "while-loop"
  | "do-while-loop"
  | "break-continue"
  | "type-check-operators";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>("home");
  const [selectedTopic, setSelectedTopic] = useState<string>("intro");

  const navigateToTopic = (topicId: string) => {
    setSelectedTopic(topicId);
    if (topicId === "intro") {
      setCurrentView("intro");
    } else if (
      topicId === "hello-world-output" ||
      topicId === "hello-world" ||
      topicId === "output"
    ) {
      setCurrentView("hello-world-output");
    } else if (topicId === "syntax") {
      setCurrentView("syntax");
    } else if (topicId === "comment") {
      setCurrentView("comment");
    } else if (
      topicId === "variables" ||
      topicId === "variable-ki" ||
      topicId === "var-intro"
    ) {
      setCurrentView("variable-ki");
    } else if (topicId === "val-o-var" || topicId === "val-vs-var") {
      setCurrentView("val-o-var");
    } else if (
      topicId === "variable-naming-rules" ||
      topicId === "naming-rules"
    ) {
      setCurrentView("naming-rules");
    } else if (
      topicId === "variable-value-change" ||
      topicId === "value-change"
    ) {
      setCurrentView("value-change");
    } else if (topicId === "type-inference") {
      setCurrentView("type-inference");
    } else if (topicId === "type-annotation") {
      setCurrentView("type-annotation");
    } else if (
      topicId === "datatypes" ||
      topicId === "datatypes-overview" ||
      topicId === "data-types" ||
      topicId === "data-type-ki" ||
      topicId === "data-types-overview"
    ) {
      setCurrentView("datatypes-overview");
    } else if (topicId === "numbers") {
      setCurrentView("numbers");
    } else if (topicId === "string" || topicId === "strings") {
      setCurrentView("string");
    } else if (topicId === "char" || topicId === "character") {
      setCurrentView("char");
    } else if (topicId === "boolean" || topicId === "booleans") {
      setCurrentView("boolean");
    } else if (
      topicId === "type-conversion" ||
      topicId === "typeconversion" ||
      topicId === "conversion"
    ) {
      setCurrentView("type-conversion");
    } else if (topicId === "operator-intro" || topicId === "operators") {
      setCurrentView("operator-intro");
    } else if (topicId === "arithmetic-operators") {
      setCurrentView("arithmetic-operators");
    } else if (topicId === "assignment-operators") {
      setCurrentView("assignment-operators");
    } else if (topicId === "comparison-operators") {
      setCurrentView("comparison-operators");
    } else if (topicId === "logical-operators") {
      setCurrentView("logical-operators");
    } else if (topicId === "unary-operators") {
      setCurrentView("unary-operators");
    } else if (
      topicId === "prefix-postfix-operators" ||
      topicId === "prefix-postfix"
    ) {
      setCurrentView("prefix-postfix-operators");
    } else if (
      topicId === "operator-precedence" ||
      topicId === "precedence"
    ) {
      setCurrentView("operator-precedence");
    } else if (
      topicId === "control-flow-intro" ||
      topicId === "control-flow"
    ) {
      setCurrentView("control-flow-intro");
    } else if (
      topicId === "if-statement" ||
      topicId === "if-expression"
    ) {
      setCurrentView("if-statement");
    } else if (
      topicId === "else-and-else-if" ||
      topicId === "else-if" ||
      topicId === "if-else" ||
      topicId === "if-else-ladder"
    ) {
      setCurrentView("else-and-else-if");
    } else if (topicId === "nested-if") {
      setCurrentView("nested-if");
    } else if (topicId === "when-expression") {
      setCurrentView("when-expression");
    } else if (topicId === "when-advanced") {
      setCurrentView("when-advanced");
    } else if (topicId === "loops-intro" || topicId === "loops") {
      setCurrentView("loops-intro");
    } else if (topicId === "range-operators" || topicId === "range") {
      setCurrentView("range-operators");
    } else if (topicId === "for-loop") {
      setCurrentView("for-loop");
    } else if (topicId === "in-operator") {
      setCurrentView("in-operator");
    } else if (topicId === "while-loop") {
      setCurrentView("while-loop");
    } else if (topicId === "do-while-loop") {
      setCurrentView("do-while-loop");
    } else if (topicId === "break-continue") {
      setCurrentView("break-continue");
    } else if (
      topicId === "type-check-operators" ||
      topicId === "is-operator"
    ) {
      setCurrentView("type-check-operators");
    }
  };

  return (
    <div className="paper-bg min-h-dvh text-ink antialiased">
      {/* Top Toolbar */}
      <header className="sticky top-0 z-20 flex h-[60px] w-full items-center border-b border-line bg-card/95 px-3 backdrop-blur-xs">
        <div className="mx-auto flex w-full max-w-2xl items-center justify-between">
          <div className="flex items-center gap-2">
            {/* If inside a lesson, show back button; otherwise menu button */}
            {currentView !== "home" ? (
              <button
                type="button"
                aria-label="হোমে ফিরুন"
                onClick={() => setCurrentView("home")}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] text-ink transition-colors hover:bg-sand active:scale-95"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                aria-label="কোটলিন রোডম্যাপ মেনু খুলুন"
                onClick={() => setMenuOpen(true)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] text-ink transition-colors hover:bg-sand active:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="14" y2="17" />
                </svg>
              </button>
            )}

            {/* App Name right beside the button */}
            <button
              type="button"
              onClick={() => setCurrentView("home")}
              className="flex items-baseline gap-1.5 text-[20px] leading-none"
            >
              <span className="font-bold tracking-tight text-ink">Kotlin</span>
              <span className="font-bold text-terra-deep">শিখি</span>
            </button>
          </div>

          {/* Right Menu Button when in lesson mode */}
          {currentView !== "home" && (
            <button
              type="button"
              aria-label="রোডম্যাপ মেনু খুলুন"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] text-soft transition-colors hover:bg-sand hover:text-ink active:scale-95"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="14" y2="17" />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* Kotlin Roadmap Menu Drawer */}
      <RoadmapMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeTopicId={selectedTopic}
        onSelectTopic={(topicId) => {
          navigateToTopic(topicId);
          setMenuOpen(false);
        }}
      />

      {/* Main Content Area */}
      {currentView === "intro" ? (
        <main>
          <IntroLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onNextLesson={() => {
              navigateToTopic("hello-world-output");
            }}
          />
        </main>
      ) : currentView === "hello-world-output" ? (
        <main>
          <HelloWorldOutputLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("intro");
            }}
            onNextLesson={() => {
              navigateToTopic("syntax");
            }}
          />
        </main>
      ) : currentView === "syntax" ? (
        <main>
          <SyntaxLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("hello-world-output");
            }}
            onNextLesson={() => {
              navigateToTopic("comment");
            }}
          />
        </main>
      ) : currentView === "comment" ? (
        <main>
          <CommentLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("syntax");
            }}
            onNextLesson={() => {
              navigateToTopic("variable-ki");
            }}
          />
        </main>
      ) : currentView === "variable-ki" ? (
        <main>
          <VariableKiLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("comment");
            }}
            onNextLesson={() => {
              navigateToTopic("val-o-var");
            }}
          />
        </main>
      ) : currentView === "val-o-var" ? (
        <main>
          <ValOVarLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("variable-ki");
            }}
            onNextLesson={() => {
              navigateToTopic("variable-naming-rules");
            }}
          />
        </main>
      ) : currentView === "naming-rules" ? (
        <main>
          <NamingRulesLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("val-o-var");
            }}
            onNextLesson={() => {
              navigateToTopic("variable-value-change");
            }}
          />
        </main>
      ) : currentView === "value-change" ? (
        <main>
          <ValueChangeLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("variable-naming-rules");
            }}
            onNextLesson={() => {
              navigateToTopic("type-inference");
            }}
          />
        </main>
      ) : currentView === "type-inference" ? (
        <main>
          <TypeInferenceLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("variable-value-change");
            }}
            onNextLesson={() => {
              navigateToTopic("type-annotation");
            }}
          />
        </main>
      ) : currentView === "type-annotation" ? (
        <main>
          <TypeAnnotationLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("type-inference");
            }}
            onNextLesson={() => {
              navigateToTopic("datatypes-overview");
            }}
          />
        </main>
      ) : currentView === "datatypes-overview" ? (
        <main>
          <DataTypesOverviewLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("type-annotation");
            }}
            onNextLesson={() => {
              navigateToTopic("numbers");
            }}
          />
        </main>
      ) : currentView === "numbers" ? (
        <main>
          <NumbersLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("datatypes-overview");
            }}
            onNextLesson={() => {
              navigateToTopic("string");
            }}
          />
        </main>
      ) : currentView === "string" ? (
        <main>
          <StringLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("numbers");
            }}
            onNextLesson={() => {
              navigateToTopic("char");
            }}
          />
        </main>
      ) : currentView === "char" ? (
        <main>
          <CharLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("string");
            }}
            onNextLesson={() => {
              navigateToTopic("boolean");
            }}
          />
        </main>
      ) : currentView === "boolean" ? (
        <main>
          <BooleanLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("char");
            }}
            onNextLesson={() => {
              navigateToTopic("type-conversion");
            }}
          />
        </main>
      ) : currentView === "type-conversion" ? (
        <main>
          <TypeConversionLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("boolean");
            }}
            onNextLesson={() => {
              navigateToTopic("operator-intro");
            }}
          />
        </main>
      ) : currentView === "operator-intro" ? (
        <main>
          <OperatorIntroLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("type-conversion");
            }}
            onNextLesson={() => {
              navigateToTopic("arithmetic-operators");
            }}
          />
        </main>
      ) : currentView === "arithmetic-operators" ? (
        <main>
          <ArithmeticOperatorsLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("operator-intro");
            }}
            onNextLesson={() => {
              navigateToTopic("assignment-operators");
            }}
          />
        </main>
      ) : currentView === "assignment-operators" ? (
        <main>
          <AssignmentOperatorsLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("arithmetic-operators");
            }}
            onNextLesson={() => {
              navigateToTopic("comparison-operators");
            }}
          />
        </main>
      ) : currentView === "comparison-operators" ? (
        <main>
          <ComparisonOperatorsLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("assignment-operators");
            }}
            onNextLesson={() => {
              navigateToTopic("logical-operators");
            }}
          />
        </main>
      ) : currentView === "logical-operators" ? (
        <main>
          <LogicalOperatorsLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("comparison-operators");
            }}
            onNextLesson={() => {
              navigateToTopic("unary-operators");
            }}
          />
        </main>
      ) : currentView === "unary-operators" ? (
        <main>
          <UnaryOperatorsLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("logical-operators");
            }}
            onNextLesson={() => {
              navigateToTopic("prefix-postfix-operators");
            }}
          />
        </main>
      ) : currentView === "prefix-postfix-operators" ? (
        <main>
          <PrefixPostfixLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("unary-operators");
            }}
            onNextLesson={() => {
              navigateToTopic("operator-precedence");
            }}
          />
        </main>
      ) : currentView === "operator-precedence" ? (
        <main>
          <OperatorPrecedenceLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("prefix-postfix-operators");
            }}
            onNextLesson={() => {
              navigateToTopic("control-flow-intro");
            }}
          />
        </main>
      ) : currentView === "control-flow-intro" ? (
        <main>
          <ControlFlowIntroLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("operator-precedence");
            }}
            onNextLesson={() => {
              navigateToTopic("if-statement");
            }}
          />
        </main>
      ) : currentView === "if-statement" ? (
        <main>
          <IfStatementLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("control-flow-intro");
            }}
            onNextLesson={() => {
              navigateToTopic("else-and-else-if");
            }}
          />
        </main>
      ) : currentView === "else-and-else-if" ? (
        <main>
          <ElseAndElseIfLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("if-statement");
            }}
            onNextLesson={() => {
              navigateToTopic("nested-if");
            }}
          />
        </main>
      ) : currentView === "nested-if" ? (
        <main>
          <NestedIfLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("else-and-else-if");
            }}
            onNextLesson={() => {
              navigateToTopic("when-expression");
            }}
          />
        </main>
      ) : currentView === "when-expression" ? (
        <main>
          <WhenExpressionLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("nested-if");
            }}
            onNextLesson={() => {
              navigateToTopic("when-advanced");
            }}
          />
        </main>
      ) : currentView === "when-advanced" ? (
        <main>
          <WhenAdvancedLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("when-expression");
            }}
            onNextLesson={() => {
              navigateToTopic("loops-intro");
            }}
          />
        </main>
      ) : currentView === "loops-intro" ? (
        <main>
          <LoopsIntroLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("when-advanced");
            }}
            onNextLesson={() => {
              navigateToTopic("range-operators");
            }}
          />
        </main>
      ) : currentView === "range-operators" ? (
        <main>
          <RangeOperatorsLesson
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("loops-intro");
            }}
            onNextLesson={() => {
              navigateToTopic("for-loop");
            }}
          />
        </main>
      ) : currentView === "for-loop" ? (
        <main>
          <BlankLesson
            title="for Loop"
            moduleName="Loops & Ranges"
            lessonNumber="২৯"
            tag="Iteration"
            description="রেঞ্জ ও কালেকশনের ওপর দিয়ে এক এক করে কোড বারবার এক্সিকিউট করা।"
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("range-operators");
            }}
            onNextLesson={() => {
              navigateToTopic("in-operator");
            }}
          />
        </main>
      ) : currentView === "in-operator" ? (
        <main>
          <BlankLesson
            title="in ও !in"
            moduleName="Loops & Ranges"
            lessonNumber="৩০"
            tag="Membership"
            description="কোনো মান রেঞ্জ বা লিস্টে উপস্থিত আছে কি না (in) অথবা নেই কি না (!in) যাচাই।"
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("for-loop");
            }}
            onNextLesson={() => {
              navigateToTopic("while-loop");
            }}
          />
        </main>
      ) : currentView === "while-loop" ? (
        <main>
          <BlankLesson
            title="while Loop"
            moduleName="Loops & Ranges"
            lessonNumber="৩১"
            tag="Condition Loop"
            description="যতক্ষণ শর্ত সত্য (true) থাকবে, ততক্ষণ লুপ চলতে থাকা।"
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("in-operator");
            }}
            onNextLesson={() => {
              navigateToTopic("do-while-loop");
            }}
          />
        </main>
      ) : currentView === "do-while-loop" ? (
        <main>
          <BlankLesson
            title="do-while Loop"
            moduleName="Loops & Ranges"
            lessonNumber="৩২"
            tag="Post-check"
            description="শর্ত যাচাইয়ের আগেই অন্তত একবার কোড চালানো নিশ্চিত করা।"
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("while-loop");
            }}
            onNextLesson={() => {
              navigateToTopic("break-continue");
            }}
          />
        </main>
      ) : currentView === "break-continue" ? (
        <main>
          <BlankLesson
            title="break ও continue"
            moduleName="Loops & Ranges"
            lessonNumber="৩৩"
            tag="Control Jump"
            description="চলমান লুপকে সাথে সাথে থামিয়ে দেওয়া (break) অথবা নির্দিষ্ট ধাপ স্কিপ করা (continue)।"
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("do-while-loop");
            }}
            onNextLesson={() => {
              setMenuOpen(true);
            }}
          />
        </main>
      ) : currentView === "type-check-operators" ? (
        <main>
          <BlankLesson
            title="Type Check Operators"
            moduleName="Control Flow & Decision Making"
            lessonNumber="২৫"
            tag="is / !is"
            description="যেকোনো অবজেক্ট বা ভ্যারিয়েবলের ডেটা টাইপ যাচাই (is / !is) এবং Kotlin-এর শক্তিশালী Smart Casting।"
            onBack={() => setCurrentView("home")}
            onOpenMenu={() => setMenuOpen(true)}
            onPrevLesson={() => {
              navigateToTopic("when-expression");
            }}
            onNextLesson={() => {
              navigateToTopic("range-operators");
            }}
          />
        </main>
      ) : (
        <main className="mx-auto w-full max-w-2xl px-5 pt-8 pb-16">
          <section aria-label="হিরো সেকশন" className="flex flex-col items-start">
            {/* Subtitle / Category Label */}
            <p className="text-[14px] font-semibold text-terra-deep">
              সহজ বাংলা পাঠ
            </p>

            {/* Main Hero Headline */}
            <h1 className="mt-2 text-[34px] sm:text-[40px] font-bold leading-[1.3] tracking-tight text-ink">
              স্মার্টফোন থেকেই
              <br />
              Kotlin শুরু হোক
            </h1>

            {/* Signature Terracotta Accent Bar */}
            <span
              className="mt-3.5 block h-[3.5px] w-12 rounded-full bg-terra"
              aria-hidden="true"
            />

            {/* Hero Subtitle Description */}
            <p className="mt-4 text-[17px] leading-[1.75] text-soft">
              ইংরেজি কঠিন পরিভাষা ছাড়া, বাস্তব উদাহরণ ও ধাপে ধাপে অনুশীলনে
              কোটলিন প্রোগ্রামিংয়ের মূল ভিত শক্ত করুন।
            </p>

            {/* Step Indicators matching Introduction */}
            <div className="mt-6 flex w-full gap-1.5" aria-hidden="true">
              <span className="h-2 flex-1 rounded-full bg-kotlin" />
              <span className="h-2 flex-1 rounded-full bg-line" />
              <span className="h-2 flex-1 rounded-full bg-line" />
              <span className="h-2 flex-1 rounded-full bg-line" />
            </div>
            <p className="mt-2 text-[14px] text-soft">
              Introduction • ৪টি মূল বিষয়
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigateToTopic("intro")}
                className="btn btn-primary w-full sm:w-auto sm:px-8"
              >
                শেখা শুরু করুন
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="btn btn-secondary w-full sm:w-auto sm:px-8"
              >
                সিলেবাস দেখুন
              </button>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}
