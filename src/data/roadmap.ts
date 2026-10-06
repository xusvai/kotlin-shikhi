export interface RoadmapTopic {
  id: string;
  title: string;
  tag: string;
  detail: string;
}

export interface RoadmapModule {
  id: string;
  number: string;
  title: string;
  topics: RoadmapTopic[];
}

export const KOTLIN_ROADMAP: RoadmapModule[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    topics: [
      {
        id: "intro",
        title: "Intro",
        tag: "Kotlin",
        detail: "Overview & Features",
      },
      {
        id: "program-structure",
        title: "Program Structure",
        tag: "main()",
        detail: "Kotlin প্রোগ্রামের গঠন",
      },
      {
        id: "hello-world-output",
        title: "Hello World & Output",
        tag: "println()",
        detail: "print vs println",
      },
      {
        id: "syntax",
        title: "Syntax",
        tag: "Structure",
        detail: "Rules & Statements",
      },
      {
        id: "comment",
        title: "Comment",
        tag: "// /* */",
        detail: "Single & Multi-line",
      },
    ],
  },
  {
    id: "variables-data-types",
    number: "02",
    title: "Variables & Data Types",
    topics: [
      {
        id: "variable-ki",
        title: "Variable কী?",
        tag: "Container",
        detail: "মেমোরি ও ভ্যারিয়েবলের ধারণা",
      },
      {
        id: "val-o-var",
        title: "val ও var",
        tag: "Immutable",
        detail: "মান পরিবর্তনযোগ্যতা",
      },
      {
        id: "variable-naming-rules",
        title: "Variable-এর Naming Rules",
        tag: "camelCase",
        detail: "নামকরণের সঠিক নিয়ম",
      },
      {
        id: "variable-value-change",
        title: "Variable-এ Value পরিবর্তন",
        tag: "Reassign",
        detail: "মান পুনরায় নির্ধারণ",
      },
      {
        id: "type-inference",
        title: "Type Inference",
        tag: "Auto Type",
        detail: "টাইপ স্বয়ংক্রিয় অনুমান",
      },
      {
        id: "type-annotation",
        title: "Type Annotation",
        tag: "Explicit",
        detail: "স্পষ্টভাবে টাইপ নির্ধারণ",
      },
      {
        id: "data-type-ki",
        title: "Data Types পরিচিতি",
        tag: "Concept",
        detail: "তথ্যের প্রকারভেদ",
      },
      {
        id: "numbers",
        title: "Numbers",
        tag: "Int / Double",
        detail: "সংখ্যা বিষয়ক টাইপ",
      },
      {
        id: "string",
        title: "String",
        tag: "Text",
        detail: "টেক্সট ও স্ট্রিং টেমপ্লেট",
      },
      {
        id: "char",
        title: "Char",
        tag: "'A'",
        detail: "একক অক্ষর বা বর্ণ",
      },
      {
        id: "boolean",
        title: "Boolean",
        tag: "true/false",
        detail: "সত্য বা মিথ্যা যাচাই",
      },
      {
        id: "type-conversion",
        title: "Type Conversion",
        tag: "toType()",
        detail: "এক টাইপ থেকে অন্য টাইপ",
      },
    ],
  },
  {
    id: "operators",
    number: "03",
    title: "Operators",
    topics: [
      {
        id: "operator-intro",
        title: "Operators পরিচিতি",
        tag: "Concept",
        detail: "অপারেটর কী ও প্রকারভেদ",
      },
      {
        id: "arithmetic-operators",
        title: "Arithmetic Operators",
        tag: "+ - * / %",
        detail: "গাণিতিক হিসাব-নিকাশ",
      },
      {
        id: "assignment-operators",
        title: "Assignment Operators",
        tag: "= += -=",
        detail: "মান নির্ধারণ ও অ্যাসাইন",
      },
      {
        id: "comparison-operators",
        title: "Comparison Operators",
        tag: "== != > <",
        detail: "তুলনা বা রিলেশনাল অপারেটর",
      },
      {
        id: "logical-operators",
        title: "Logical Operators",
        tag: "&& || !",
        detail: "যৌক্তিক শর্ত যাচাই",
      },
      {
        id: "unary-operators",
        title: "Unary Operators",
        tag: "+ - ++ -- !",
        detail: "একটি মাত্র Operand নিয়ে কাজ",
      },
      {
        id: "prefix-postfix-operators",
        title: "Prefix & Postfix",
        tag: "++x vs x++",
        detail: "আগে নাকি পরে মান পরিবর্তন",
      },
      {
        id: "operator-precedence",
        title: "Operator Precedence",
        tag: "BODMAS & ( )",
        detail: "অগ্রাধিকার ক্রম ও সংযোগের নিয়ম",
      },
    ],
  },
  {
    id: "control-flow",
    number: "04",
    title: "Control Flow & Decision Making",
    topics: [
      {
        id: "control-flow-intro",
        title: "Control Flow পরিচিতি",
        tag: "Concept",
        detail: "প্রোগ্রামের গতিপথ ও সিদ্ধান্ত গ্রহণ",
      },
      {
        id: "if-statement",
        title: "if Statement",
        tag: "Condition",
        detail: "শর্ত সাপেক্ষে সিদ্ধান্ত গ্রহণ",
      },
      {
        id: "else-and-else-if",
        title: "else ও else if",
        tag: "Branching",
        detail: "বিকল্প কোড ও একাধিক শর্ত যাচাই",
      },
      {
        id: "nested-if",
        title: "Nested if",
        tag: "if inside if",
        detail: "শর্তের ভেতর আরও শর্ত যাচাই",
      },
      {
        id: "when-expression",
        title: "when Expression",
        tag: "Switch Alternative",
        detail: "আধুনিক ও শক্তিশালী শর্ত ব্লক",
      },
      {
        id: "when-advanced",
        title: "when-এর আরও ব্যবহার",
        tag: "Multiple cases",
        detail: "রেঞ্জ, টাইপ ও কমা দিয়ে একাধিক কেস",
      },
    ],
  },
  {
    id: "loops-ranges",
    number: "05",
    title: "Loops & Ranges",
    topics: [
      {
        id: "loops-intro",
        title: "Loops পরিচিতি",
        tag: "Concept",
        detail: "পুনরাবৃত্তি ও লুপের প্রয়োজনীয়তা",
      },
      {
        id: "range-operators",
        title: "Range & Range Operators",
        tag: ".. / downTo / step",
        detail: "রেঞ্জ তৈরি ও সীমার ব্যবহার",
      },
      {
        id: "for-loop",
        title: "for Loop",
        tag: "Iteration",
        detail: "রেঞ্জ ও কালেকশনের পুনরাবৃত্তি",
      },
      {
        id: "in-operator",
        title: "in ও !in",
        tag: "Membership",
        detail: "মান উপস্থিত আছে কি না যাচাই",
      },
      {
        id: "while-loop",
        title: "while Loop",
        tag: "Condition Loop",
        detail: "শর্ত সাপেক্ষে পুনরাবৃত্তি",
      },
      {
        id: "do-while-loop",
        title: "do-while Loop",
        tag: "Post-check",
        detail: "কমপক্ষে একবার চলা লুপ",
      },
      {
        id: "break-continue",
        title: "break ও continue",
        tag: "Control Jump",
        detail: "লুপ থামানো বা স্কিপ করা",
      },
    ],
  },
];
