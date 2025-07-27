// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>인천광역시 계양구 효성동 오피스텔 신축공사</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
          인천광역시 계양구 효성동 604번지 일원
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
          지하3층~ 지상18층 총 2개동
          </span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>
            40A·B / 59A·B·C·D
          </span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>
          오피스텔84실(총408실), 근린생활시설49개, 판매시설1개
          </span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="인천계양 유탑유블레스 입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="인천계양 유탑유블레스 입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            계양의 중심으로 사는<br />
            최고의 브랜드 오피스텔
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "미래가치를 높여주는 메머드급 배후수요",
      desc:
        "루원시티, 효성구역도시개발, 부평스마트산단 (국가산업단지) 등 <br /> 풍부한 배후수요",
    },
    {
      img: slide2,
      title: "의세권을 누리릴 수 있는 프리미엄",
      desc:
        "오래된 의료경력을 갖고 있는<br />국제 성모병원 반경 3km이내",
    },
    {
      img: slide3,
      title: "광역으로 통하는 특급 교통",
      desc:
        "경인고속도로 지하화, 서울2호선연장(예정)등 <br /> 교통환경 개선 최대 수혜지<br />서울7호선, 인천1ㆍ2호선등 초역세권<br /> 획기적인 대중교통 개선으로 광역교통망  형성",
    },
    {
      img: slide4,
      title: "학교, 쇼핑,병원, 문화를 더 가깝게 <br /> 한걸음에 SMART 인프라",
      desc: "아이즈빌아울렛, 홈플러스, 롯데마트, 국제성모병원 등 <br /> 반경3km 이내 다양한 편의시설 위치",
    },
    {
      img: slide5,
      title: "입주지원금 및 회사보유분 특별 선착순 분양",
      desc:
        "1천만원으로 계약서 발행 및 즉시입주가능 <br /> 입주지원금 및 회사보유분 특별 선착순 분양",
    },
    {
      img: slide6,
      title: "자연친화적 쾌적한 주거환경 프리미엄",
      desc: "인천나비공원, 원적산공원, 갈산근린공원, <br />  트럼발트슐레, 루원시티문화공원등 공원인접, <br />  자연친화적 쾌적한 주거환경",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="인천계양 유탑유블레스 프리미엄 이미지" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>U-Top-Ubless BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="인천계양 유탑유블레스 단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
