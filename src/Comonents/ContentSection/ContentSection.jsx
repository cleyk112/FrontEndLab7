import { useState } from "react";
import styles from "./ContentSection.module.css";

function ContentSection() {
  const [color, setColor] = useState([false, false]);

  function HandleColor(id) {
    if (id === 0) {
      setColor([!color[0], color[1]]);
    }
    if (id === 1) {
      setColor([color[0], !color[1]]);
    }
  }

  return (
    <div className={styles.content}>
      <h2>Федоренко Ярослав Сергійович</h2>
      <p>Дата народження: 01.09.2004. Місце народження: м. Вишгород.</p>
      <p>Середня освіта: "Вишгородський ліцей НТУУ КПІ" Університет: Київський Політехнічний Інститут</p>
      <h4>Хоббі:</h4>
      <ul>
        <li>Музичні інструменти</li>
        <li>Відео-ігри</li>
        <li>Кіно</li>
      </ul>
      <h4
        onClick={() => HandleColor(0)}
        className={color[0] ? styles.blue : styles.pointer}
      >
        Улюблені фільми:
      </h4>
      <ol>
        <li
        onClick={() => HandleColor(1)}
          className={color[1] ? styles.green : styles.pointer}
        >
          The Departed, 2006, Directed by Martin Scorsese
        </li>
        <li>Apocalypse Now, 1979, Directed by Francis Ford Coppola</li>
        <li>GoodFellas, 1990, Directed by Martin Scorsese</li>
      </ol>

      <div>
        <p>
        Мю́нхен (нім. München, бав. Minga, заст. Монахів) — місто на річці Ізар на півдні Німеччини, у федеральній землі Баварія.
        Вільне місто (нім. kreisfreie Stadt), яке одночасно є столицею Баварії та адміністративного округу Верхня Баварія.
        Назва міста походить від давньоверхньонім. Munichen — «у ченців». Населення Мюнхена — 1 402 455 осіб (станом на 30.09.2013).
        </p>
      </div>
    </div>
  );
}

export default ContentSection;
