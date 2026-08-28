export type ProjectRecord = {
  slug: string;
  number: string;
  title: string;
  zhTitle: string;
  period: string;
  category: string;
  role: string;
  stack: string;
  summary: string;
  zhSummary: string;
  highlights: string[];
  coverClass: string;
};

export const projects: ProjectRecord[] = [
  {
    slug: "conversational-heifa",
    number: "001",
    title: "Conversational HEIFA",
    zhTitle: "对话式 HEIFA 饮食记录 Agent",
    period: "AUG 2026 — PRESENT",
    category: "LLM AGENT / EVALUATION",
    role: "Agent Architecture & Evaluation",
    stack: "TypeScript / Next.js / DeepSeek API",
    summary: "A tool-calling LLM agent that converts natural-language meals into structured dietary servings while keeping scoring deterministic and every stored field attributable to the user's words.",
    zhSummary: "一个将自然语言饮食描述转化为结构化摄入数据的工具调用 Agent；评分由确定性引擎完成，所有入库字段都必须能回溯到用户原话。",
    highlights: [
      "Separated semantic extraction from deterministic score computation so the model cannot self-report scores.",
      "Built a 48-fixture deterministic evaluation harness; raised recall from 50% to 83.3% while holding fabrication at 0%.",
      "Demonstrated 34.65 points of arithmetic error in model-computed scores versus zero in the tool-computed path, and achieved 100% resistance across targeted indirect-prompt-injection fixtures.",
    ],
    coverClass: "cover-one",
  },
  {
    slug: "lablink",
    number: "002",
    title: "LabLink",
    zhTitle: "高并发实验室资源预约平台",
    period: "APR — JUL 2026",
    category: "BACKEND / DISTRIBUTED SYSTEMS",
    role: "Backend Design & Development",
    stack: "Spring Boot / MySQL / Redis / RabbitMQ / Caffeine",
    summary: "A high-concurrency laboratory equipment and time-slot booking platform designed around stock consistency, asynchronous reliability and observability.",
    zhSummary: "围绕库存一致性、异步可靠性与可观测性构建的高并发实验室设备及时间段预约平台。",
    highlights: [
      "Combined Redis Lua pre-deduction, Redisson locks, MySQL conditional updates and a unique constraint to prevent overselling and duplicate bookings.",
      "Built a RabbitMQ persistence pipeline with delayed retry, dead-letter recording and stock compensation, plus a two-level Caffeine and Redis cache.",
      "Verified approximately 102 QPS with zero errors, a 99.9% cache hit rate, and correct stock under 50 concurrent booking requests.",
    ],
    coverClass: "cover-two",
  },
  {
    slug: "tibetan-antelope-modelling",
    number: "003",
    title: "Tibetan Antelope Conservation",
    zhTitle: "藏羚羊保护的随机与博弈建模",
    period: "MAR — JUN 2026",
    category: "MODELLING / SIMULATION",
    role: "Modelling & Simulation",
    stack: "Python / NumPy / SciPy / Matplotlib",
    summary: "A deterministic, stochastic and game-theoretic framework for studying Tibetan antelope conservation under predation, poaching and adaptive intervention.",
    zhSummary: "结合确定性、随机过程与博弈论，研究捕食、盗猎和自适应保护干预下的藏羚羊种群变化。",
    highlights: [
      "Extended a Lotka–Volterra model with poaching and adaptive conservation feedback.",
      "Reformulated the system as a continuous-time Markov jump process and ran about 4,000 Gillespie trajectories.",
      "Computed mixed-strategy Nash equilibria for patrol allocation and fed equilibrium poaching pressure back into the stochastic model.",
    ],
    coverClass: "cover-three",
  },
  {
    slug: "smart-health-android",
    number: "004",
    title: "Smart Health Android",
    zhTitle: "智能健康管理 Android 应用",
    period: "FEB — OCT 2025",
    category: "ANDROID / USER EXPERIENCE",
    role: "Android Development Lead",
    stack: "Kotlin / Jetpack Compose / Room / Retrofit",
    summary: "A multi-screen health-management application covering nutrition scoring, visualisation, local persistence, networking and clinician workflows.",
    zhSummary: "覆盖营养评分、健康数据可视化、本地持久化、网络请求和临床端工作流的多页面健康管理应用。",
    highlights: [
      "Built an MVVM application with HEIFA score parsing and calculation, interactive visualisation, Room persistence and Retrofit networking.",
      "Implemented registration, authentication and multi-user account management with a separate clinician dashboard role.",
      "Delivered an end-to-end flow from data collection and scoring to DeepSeek-generated personalised recommendations.",
    ],
    coverClass: "cover-four",
  },
];
