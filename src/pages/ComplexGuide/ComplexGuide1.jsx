import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";

const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		// { title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	// 이미지가 로드되면 호출되는 함수
	const handleImageLoad = () => {
		setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
	};

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
		{/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
		<meta charSet="utf-8" />
		<meta
		  name="viewport"
		  content="width=device-width, initial-scale=1, maximum-scale=1"
		/>
		<meta name="theme-color" content="#ffffff" />
		<meta name="robots" content="index, follow" />

		{/* SEO 최적화를 위한 메타 태그 */}
		<title>인천계양 유탑유블레스- 단지배치도</title>
		<meta
		  name="description"
		  content="인천계양 유탑유블레스의 단지 배치도를 통해 각 동의 위치와 편의시설의 배치를 확인하세요. 효율적인 동선 설계와 조경 공간, 입주민의 생활 편의를 고려한 배치를 상세히 안내합니다.
"
		/>
  		<meta name="keywords" content="인천계양 유탑유블레스, 인천계양 유탑유블레스, 인천계양 유탑유블레스모델하우스" />	
		<link
		  rel="canonical"
		  href="https://www.a7lashare.com/ComplexGuide/intro"
		/>

		{/* Open Graph - 소셜 미디어 공유 최적화 */}
		<meta
		  property="og:title"
		  content="인천계양 유탑유블레스- 단지배치도"
		/>
		<meta
		  property="og:description"
		  content="인천계양 유탑유블레스의 단지 배치도를 통해 각 동의 위치와 편의시설의 배치를 확인하세요. 효율적인 동선 설계와 조경 공간, 입주민의 생활 편의를 고려한 배치를 상세히 안내합니다.
"
		/>
		<meta
		  property="og:image"
		  content="https://www.a7lashare.com/Main1.png"
		/>
		<meta
		  property="og:url"
		  content="https://www.a7lashare.com/ComplexGuide/intro"
		/>
		<meta property="og:site_name" content="인천계양 유탑유블레스" />

		{/* Twitter 카드 설정 */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta
		  name="twitter:title"
		  content="인천계양 유탑유블레스- 단지배치도"
		/>
		<meta
		  name="twitter:description"
		  content="인천계양 유탑유블레스의 단지 배치도를 통해 각 동의 위치와 편의시설의 배치를 확인하세요. 효율적인 동선 설계와 조경 공간, 입주민의 생활 편의를 고려한 배치를 상세히 안내합니다.
"
		/>
		<meta
		  name="twitter:image"
		  content="https://www.a7lashare.com/Main1.png"
		/>
		<meta
		  name="twitter:url"
		  content="https://www.a7lashare.com/ComplexGuide/intro"
		/>

		{/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
		<script type="application/ld+json">
		  {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "인천계양 유탑유블레스- 단지배치도",
											"description": "인천계양 유탑유블레스의 단지 배치도를 통해 각 동의 위치와 편의시설의 배치를 확인하세요. 효율적인 동선 설계와 조경 공간, 입주민의 생활 편의를 고려한 배치를 상세히 안내합니다.
",
											"url": "https://www.a7lashare.com/ComplexGuide/intro"
										}
										`}
		</script>
	  </Helmet> 

			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="단지안내" />
			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>인천계양 유탑유블레스- 단지배치도</h1>
			<p className={styles.screenReaderOnly}>단지 배치도 페이지는 인천계양 유탑유블레스의 전체 단지 구성도를 제공합니다. 아파트 단지 내 세대 배치, 공용 시설, 주차 공간 등을 시각적으로 보여주어 입주자들이 공간 배치에 대해 명확하게 이해할 수 있도록 돕습니다. 이 배치도를 통해 단지 내 생활을 더 쉽게 계획할 수 있습니다.
			</p>



			<div className={styles.textBox}>
				<div>인천계양의 눈부신 가치 위에</div>
				<div>새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* 이미지에 애니메이션 효과 추가 */}
			<img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="인천계양 유탑유블레스 단지배치도-image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>
			



			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 단지배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide1;
