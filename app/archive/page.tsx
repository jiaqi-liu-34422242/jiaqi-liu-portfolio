"use client";

import { useState } from "react";
import { projects } from "../project-data";

export default function ArchivePage() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [selected, setSelected] = useState(projects[0].slug);
  const [playing, setPlaying] = useState(false);
  const [guide, setGuide] = useState(0);
  const active = projects.find((project) => project.slug === selected) ?? projects[0];
  const zh = language === "zh";

  const loadRecord = (slug: string) => {
    setSelected(slug);
    setPlaying(true);
    window.setTimeout(() => { window.location.href = `/projects/${slug}`; }, 900);
  };

  return (
    <main className="record-room">
      <header className="archive-masthead">
        <a href="/" className="back-home">← JIAQI LIU</a>
        <div>PROJECT ARCHIVE / RECORD ROOM</div>
        <button onClick={() => setLanguage(zh ? "en" : "zh")}>[{zh ? "EN" : "中文"}]</button>
      </header>

      <section className="record-intro">
        <span className="record-code">[ PAGE / 02 ]</span>
        <h1>{zh ? "作品唱片室" : <>THE PROJECT<br /><i>RECORD ROOM</i></>}</h1>
        <p>{zh ? "横向划动选择一个项目。拖到留声机上，或点选后装载，即可进入项目档案。" : "Slide through the sleeves. Drag one onto the player—or select and load it—to enter the project file."}</p>
      </section>

      <section className="sleeve-stage" aria-label="Project covers">
        <div className="sleeve-track">
          {projects.map((project) => (
            <button
              key={project.slug}
              className={`record-sleeve ${project.coverClass} ${selected === project.slug ? "is-selected" : ""}`}
              draggable
              onDragStart={(event) => event.dataTransfer.setData("text/project", project.slug)}
              onClick={() => { setSelected(project.slug); setGuide(1); }}
              aria-label={`Select ${project.title}`}
            >
              <span className="sleeve-index">JQL / {project.number}</span>
              <span className="sleeve-window"><b>{project.number}</b></span>
              <span className="sleeve-title">{zh ? project.zhTitle : project.title}</span>
              <span className="sleeve-meta">{project.category}<br />{project.period}</span>
            </button>
          ))}
          <div className="future-sleeve"><span>+</span><small>{zh ? "未来档案" : "FUTURE PRESSING"}</small></div>
        </div>
        <div className="swipe-note">← {zh ? "划动浏览" : "SWIPE / DRAG TO BROWSE"} →</div>
      </section>

      <section className="player-zone">
        <div className="pet-guide pet-guide-archive" onClick={() => setGuide((guide + 1) % 3)}>
          <div className="guide-bubble" aria-live="polite">
            {[zh ? "先选一张唱片" : "Choose a record first", zh ? "现在放进留声机" : "Now load the player", zh ? "我会带你进入项目" : "I’ll guide you inside"][guide]}
          </div>
          <img src="/jiaqi-avatar.png" alt="Jiaqi's animated guide character" />
          <span>{zh ? "点击我" : "CLICK ME"}</span>
        </div>

        <div
          className={`gramophone ${playing ? "is-playing" : ""}`}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => { event.preventDefault(); loadRecord(event.dataTransfer.getData("text/project") || selected); }}
        >
          <div className="player-label"><span>JQL—PLAYER</span><b>{active.number}</b></div>
          <div className="turntable">
            <div className="vinyl"><span>{active.number}</span></div>
            <div className="tonearm"><i /></div>
          </div>
          <button onClick={() => loadRecord(selected)}>{playing ? (zh ? "正在打开…" : "OPENING…") : (zh ? `装载 ${active.number}` : `LOAD ${active.number}`)}</button>
        </div>

        <div className="now-selected">
          <span>{zh ? "当前选择" : "NOW SELECTED"}</span>
          <h2>{zh ? active.zhTitle : active.title}</h2>
          <p>{zh ? active.zhSummary : active.summary}</p>
        </div>
      </section>
    </main>
  );
}
