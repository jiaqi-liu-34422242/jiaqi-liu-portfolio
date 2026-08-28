"use client";

import { useState } from "react";
import { RecordWall } from "../record-wall";

export default function ArchivePage() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const zh = language === "zh";

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

      <RecordWall language={language} />
    </main>
  );
}
