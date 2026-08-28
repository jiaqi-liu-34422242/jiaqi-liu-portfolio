"use client";

import { useState } from "react";
import { RecordWall } from "./record-wall";

const words = {
  en: {
    nav: ["Archive", "Profile", "Contact"],
    discipline: "Computer Science Student",
    base: "Melbourne / Australia",
    intro: "Computer science student at Monash University. Selected work spans LLM agents, high-concurrency backend systems, mathematical modelling and Android development.",
    enter: "Enter project index",
    guide: ["STATUS / ONLINE", "DIRECTION / INDEX", "INPUT / AGAIN"],
    archive: "Project / Archive",
    archiveNote: "Four selected projects, pressed as individual records. Enter the record room to browse and load a case study.",
    caseStudy: "Case Study",
    pending: "Project data pending",
    format: "Introduction / Key work / Repository",
    profile: "Profile",
    profileTitle: "Engineering reliable systems without losing sight of the person using them.",
    profileBody: "Jiaqi Liu studies Advanced Computer Science at Monash University in Melbourne. His work moves between Android infrastructure, high-concurrency backend design, LLM-agent evaluation and mathematical modelling. In 2026, he joined Shopee / SeaBank as an Android Software Engineering Intern, contributing to multi-market client infrastructure and AI-assisted engineering tooling.",
    labels: ["EDUCATION", "MONASH UNIVERSITY / BCS", "FOCUS", "SOFTWARE SYSTEMS / AI", "EXPERIENCE", "SHOPEE / SEABANK — ANDROID SWE INTERN"],
    contact: "Contact / Documents",
    contactTitle: "Continue the conversation.",
    contactBody: "Available for software engineering opportunities, research conversations and project collaborations.",
  },
  zh: {
    nav: ["档案", "简介", "联系"],
    discipline: "计算机专业学生",
    base: "澳大利亚 / 墨尔本",
    intro: "Monash University 计算机专业学生，作品涉及 LLM Agent、高并发后端系统、数学建模与 Android 开发。",
    enter: "进入项目索引",
    guide: ["状态 / 在线", "方向 / 索引", "输入 / 再次点击"],
    archive: "项目 / 档案",
    archiveNote: "四个精选项目以独立唱片呈现。进入作品唱片室，浏览并装载对应案例。",
    caseStudy: "案例项目",
    pending: "等待加入项目资料",
    format: "简介 / 关键工作 / 代码仓库",
    profile: "个人简介",
    profileTitle: "构建可靠的系统，同时不忽略真正使用它的人。",
    profileBody: "Jiaqi Liu 就读于墨尔本 Monash University Advanced Computer Science 专业，实践覆盖 Android 基础设施、高并发后端、LLM Agent 评测和数学建模。2026 年，他在 Shopee / SeaBank 担任 Android 软件工程实习生，参与多市场客户端基础设施和 AI 辅助工程工具开发。",
    labels: ["教育", "MONASH UNIVERSITY / 计算机本科", "方向", "软件系统 / 人工智能", "经历", "SHOPEE / SEABANK — ANDROID 软件工程实习"],
    contact: "联系 / 文件",
    contactTitle: "继续交流。",
    contactBody: "欢迎联系软件工程机会、研究交流与项目合作。",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [guideState, setGuideState] = useState(0);
  const t = words[language];

  const interact = () => {
    setGuideState((current) => (current + 1) % t.guide.length);
  };

  return (
    <main id="top">
      <header className="masthead">
        <a className="identity-mark" href="#top"><span>JIAQI</span><b>LIU</b></a>
        <div className="edition">PORTFOLIO — EDITION 01 / 2026</div>
        <nav aria-label="Primary navigation">
          <a href="#work">{t.nav[0]}</a>
          <a href="#profile">{t.nav[1]}</a>
          <a href="#contact">{t.nav[2]}</a>
        </nav>
        <button className="language-switch" onClick={() => setLanguage(language === "en" ? "zh" : "en")}>
          [{language === "en" ? "中文" : "EN"}]
        </button>
      </header>

      <section className="editorial-hero" aria-labelledby="hero-title">
        <div className="registration registration-a">+</div>
        <div className="registration registration-b">+</div>
        <div className="hero-number">NO. 000</div>
        <h1 id="hero-title"><span>JIAQI</span><span>LIU</span></h1>
        <div className="constructivist-bar" aria-hidden="true" />

        <div className="portrait-block">
          <button className="portrait-raw" onClick={interact} aria-label="Interact with Jiaqi's navigation character">
            <img src="/jiaqi-avatar.png" alt="Cartoon portrait of Jiaqi Liu" />
          </button>
          <div className="portrait-data"><span>FIG. 001</span><span aria-live="polite">{t.guide[guideState]}</span></div>
        </div>

        <div className="hero-information">
          <div className="hero-meta"><span>{t.discipline}</span><span>{t.base}</span></div>
          <p>{t.intro}</p>
          <a href="#work">{t.enter}<span>→</span></a>
        </div>
        <div className="vertical-caption" aria-hidden="true">SELECTED WORKS — SYSTEMS / SOFTWARE / INTERACTION</div>
      </section>

      <section className="archive" id="work">
        <div className="archive-heading">
          <div className="index-tag">[ 01—04 ]</div>
          <h2>{t.archive}</h2>
          <p>{t.archiveNote}</p>
        </div>
      </section>

      <RecordWall language={language} />

      <section className="profile" id="profile">
        <div className="profile-rail"><span>[ 04 ]</span><span>{t.profile}</span></div>
        <div className="profile-content">
          <h2>{t.profileTitle}</h2>
          <div className="profile-body">
            <p>{t.profileBody}</p>
            <dl>
              {[0, 2, 4].map((index) => (
                <div key={index}><dt>{t.labels[index]}</dt><dd>{t.labels[index + 1]}</dd></div>
              ))}
            </dl>
          </div>
        </div>
        <div className="profile-block" aria-hidden="true" />
      </section>

      <section className="contact" id="contact">
        <div className="contact-code">[ 05 ]</div>
        <p className="contact-label">{t.contact}</p>
        <h2>{t.contactTitle}</h2>
        <div className="contact-aside">
          <p>{t.contactBody}</p>
          <div className="document-list">
            <a href="/Jiaqi_Liu_Resume.pdf" target="_blank" rel="noreferrer">RÉSUMÉ <b>↗</b></a>
            <a href="https://github.com/jiaqi-liu-34422242" target="_blank" rel="noreferrer">GITHUB <b>↗</b></a>
            <a href="mailto:1429504052@qq.com">EMAIL <b>↗</b></a>
          </div>
        </div>
      </section>

      <footer><span>JIAQI LIU © 2026</span><span>COMPUTER SCIENCE / PORTFOLIO</span><a href="#top">TOP ↑</a></footer>
    </main>
  );
}
