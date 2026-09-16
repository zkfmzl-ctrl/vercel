import './style.css';
import { projects, type Project } from './projects';

const app = document.querySelector<HTMLElement>('#app');
if (!app) throw new Error('Missing app root');

const contactEmail = 'sooj3040@gmail.com';
const instagramUrl = 'https://www.instagram.com/i_want.job/';
const assetRoot = '/images/no-rules/ki';
const pinkCharacterSrc = `${assetRoot}/KI01.png?v=20260915-edge-clean`;

function mediaAspectClass(project: Project) {
  return typeof project.mediaAspect === 'number' && project.mediaAspect < 0.8 ? 'portrait' : 'landscape';
}

function mediaAspectRatio(project: Project) {
  if (project.mediaAspect === '9:16') return '9 / 16';
  if (project.mediaAspect === '16:9') return '16 / 9';
  if (typeof project.mediaAspect === 'number' && project.mediaAspect > 0) return String(project.mediaAspect);
  return '16 / 9';
}

function mediaMarkup(project: Project) {
  const aspectClass = mediaAspectClass(project) === 'portrait' ? 'is-portrait' : 'is-landscape';
  if (project.mediaType === 'video') {
    return `<video class="project-media ${aspectClass}" autoplay muted loop playsinline preload="metadata" poster="${project.poster ?? ''}" aria-label="${project.title}"><source src="${project.media}" type="video/mp4" /></video>`;
  }
  const characterClass = project.media.startsWith('/images/no-rules/ki/') ? 'is-character-media' : '';
  return `<img class="project-media ${aspectClass} ${characterClass}" src="${project.media}" alt="${project.title}" loading="lazy" />`;
}

function posterMarkup(project: Project) {
  const aspectClass = mediaAspectClass(project) === 'portrait' ? 'is-portrait' : 'is-landscape';
  const source = project.poster ?? project.media;
  return `<img class="project-media ${aspectClass}" src="${source}" alt="${project.title}" loading="lazy" />`;
}

function motionMarkup(project: Project) {
  if (project.mediaType !== 'video') return '';
  return `
    <div class="case-study-motion-media">
      <video controls playsinline preload="metadata" poster="${project.poster ?? ''}" aria-label="${project.title} motion result">
        <source src="${project.media}" type="video/mp4" />
      </video>
    </div>
    <p class="case-study-motion-note">${project.role?.join(' · ') ?? 'Motion Direction'} · 실제 프로젝트 결과 영상</p>
  `;
}

function projectTags(project: Project) {
  return (project.tech ?? ['SVG', 'Visual System']).slice(0, 3).map((tag) => `<span>${tag}</span>`).join('');
}

function projectSection(project: Project, index: number) {
  const aspectClass = mediaAspectClass(project);
  return `
    <article class="project-section tile-${aspectClass} depth-${(index % 4) + 1}" id="${project.id}" data-project style="--tile-aspect: ${mediaAspectRatio(project)}">
      <div class="project-card-graffiti" aria-hidden="true">${index % 2 ? '✦' : '×'}</div>
      <div class="media-stage">${mediaMarkup(project)}</div>
      <div class="project-copy">
        <p class="eyebrow">${project.category} · <span class="project-year">${project.year}</span></p>
        <h2>${project.title}</h2>
        <p class="description">${project.description}</p>
        <div class="project-tags" aria-label="Project tags">${projectTags(project)}</div>
        <a class="project-link" href="/work/${project.slug}">VIEW PROJECT <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  `;
}

const varcoImage = (name: string) => `/images/varco-sound/${name}`;
const varcoVideo = (name: string) => `/videos/varco-sound/${name}`;

function varcoProjectPageMarkup(project: Project) {
  const motionClips = [
    ['2.mp4', '꽃봉오리 · 빛의 접촉', 'bud.png'],
    ['6.mp4', '요정의 각성 · 첫 비행', 'flight.png'],
    ['9.mp4', '세계의 확장 · 줌아웃', 'tree-reveal.png'],
    ['11.mp4', '엔딩 · 흰 버드나무', 'ending.png'],
  ];

  return `
    <div class="varco-page" role="main" aria-labelledby="varco-title">
      <header class="varco-header">
        <a class="varco-brand" href="/#home">NO RULES<span>.</span></a>
        <a class="varco-back" href="/#works">← BACK TO WORKS</a>
      </header>

      <div class="varco-progress" aria-hidden="true"><span></span></div>

      <section class="varco-hero" id="overview">
        <div class="varco-hero-image-wrap">
          <img class="varco-hero-image" src="${varcoImage('hero.png')}" alt="빛의 들판을 날아가는 요정" />
          <span class="varco-hero-orbit orbit-one"></span>
          <span class="varco-hero-orbit orbit-two"></span>
        </div>
        <div class="varco-hero-copy">
          <p class="varco-kicker">AI FILM · VISUAL DEVELOPMENT · 2026</p>
          <h1 id="varco-title">FAIRY<br /><em>OF DAWN</em></h1>
          <p class="varco-lede">꽃봉오리 안에서 깨어난 작은 생명이 빛의 세계를 발견하는 순간을, 이미지와 모션으로 연결했습니다.</p>
          <div class="varco-hero-meta"><span>01 / 08</span><span>VARCO SOUND</span><span>58 SEC. STORY</span></div>
        </div>
      </section>

      <div class="varco-layout">
        <aside class="varco-index" aria-label="Case study navigation">
          <span>CASE STUDY</span>
          <a href="#overview">01 OVERVIEW</a>
          <a href="#concept">02 CONCEPT</a>
          <a href="#process">03 PROCESS</a>
          <a href="#character">04 CHARACTER</a>
          <a href="#storyboard">05 CONTI</a>
          <a href="#motion">06 MOTION</a>
          <a href="#final">07 FINAL</a>
          <a href="#result">08 RESULT</a>
        </aside>

        <div class="varco-content">
          <section class="varco-section varco-overview-section" aria-labelledby="varco-overview-title">
            <div class="varco-section-head"><span>01</span><div><p class="varco-kicker">OVERVIEW</p><h2 id="varco-overview-title">빛이 닿는 순간,<br /><em>세계가 태어난다.</em></h2></div></div>
            <div class="varco-overview-grid">
              <div><p class="varco-section-copy">투명한 꽃봉오리에서 시작해 두 요정이 손을 잡고 날아오르는 58초의 탄생 서사입니다. 초반에는 작은 질감과 숨결에 집중하고, 후반으로 갈수록 거대한 세계를 열어 보이도록 스케일의 변화를 설계했습니다.</p><p class="varco-section-copy muted">빛 · 투명성 · 탄생 · 확장</p></div>
              <dl class="varco-meta-list"><div><dt>ROLE</dt><dd>Visual Direction<br />Character Design<br />Motion Editing</dd></div><div><dt>TOOLS</dt><dd>AI Image · AI Video<br />Premiere Pro</dd></div><div><dt>DELIVERABLE</dt><dd>Character / World / Storyboard<br />Motion Assets / Final Film</dd></div></dl>
            </div>
          </section>

          <section class="varco-section" id="concept" aria-labelledby="varco-concept-title">
            <div class="varco-section-head"><span>02</span><div><p class="varco-kicker">CONCEPT</p><h2 id="varco-concept-title">A sacred meadow<br /><em>above the clouds.</em></h2></div></div>
            <div class="varco-image-frame wide-frame"><img src="${varcoImage('environment-sheet.png')}" alt="Celestial Meadow 환경 디자인 시트" loading="lazy" /></div>
            <div class="varco-note-row"><p>어두운 판타지가 아닌, 아침의 흰빛으로 가득한 신성한 들판을 핵심 태도로 설정했습니다.</p><div class="varco-swatches" aria-label="컬러 팔레트"><i></i><i></i><i></i><i></i><i></i></div></div>
          </section>

          <section class="varco-section" id="process" aria-labelledby="varco-process-title">
            <div class="varco-section-head"><span>03</span><div><p class="varco-kicker">PROCESS / DEVELOPMENT</p><h2 id="varco-process-title">작은 디테일에서<br /><em>큰 장면으로.</em></h2></div></div>
            <div class="varco-process-grid">
              <article><span>01</span><img src="${varcoImage('bud.png')}" alt="투명한 꽃봉오리 초기 장면" loading="lazy" /><h3>SEED</h3><p>꽃봉오리의 재질과 빛의 방향을 먼저 고정했습니다.</p></article>
              <article><span>02</span><img src="${varcoImage('birth.png')}" alt="꽃 안에서 잠든 요정" loading="lazy" /><h3>AWAKEN</h3><p>머리카락, 날개, 손끝을 순서대로 노출해 탄생의 긴장감을 만들었습니다.</p></article>
              <article><span>03</span><img src="${varcoImage('awakening.png')}" alt="꽃 위에서 깨어난 요정" loading="lazy" /><h3>REVEAL</h3><p>클로즈업에서 와이드로 전환하며 세계의 크기를 확장했습니다.</p></article>
            </div>
          </section>

          <section class="varco-section" id="character" aria-labelledby="varco-character-title">
            <div class="varco-section-head"><span>04</span><div><p class="varco-kicker">CHARACTER / VISUAL</p><h2 id="varco-character-title">빛을 입은<br /><em>작은 주인공.</em></h2></div></div>
            <div class="varco-character-grid"><div class="varco-image-frame"><img src="${varcoImage('character-sheet.png')}" alt="Fairy of Dawn 캐릭터 디자인 시트" loading="lazy" /></div><div><div class="varco-image-frame portrait-frame"><img src="${varcoImage('portrait.png')}" alt="요정 얼굴 클로즈업" loading="lazy" /></div><p class="varco-caption">투명한 날개와 아이보리 드레스, 골드 라인과 꽃 장식을 캐릭터의 고정 언어로 삼았습니다.</p></div></div>
          </section>

          <section class="varco-section" id="storyboard" aria-labelledby="varco-storyboard-title">
            <div class="varco-section-head"><span>05</span><div><p class="varco-kicker">STORYBOARD / CONTI</p><h2 id="varco-storyboard-title">가까이서 시작해<br /><em>멀리 열린다.</em></h2></div></div>
            <div class="varco-image-frame wide-frame"><img src="${varcoImage('storyboard.png')}" alt="요정 탄생 스토리보드와 콘티" loading="lazy" /></div>
            <div class="varco-beat-list"><div><b>01—03</b><span>꽃봉오리 / 햇빛 / 빛 입자</span></div><div><b>04—06</b><span>각성 / 머리카락 / 날개 끝</span></div><div><b>07—08</b><span>탄생 / 핑크빛 요정의 등장</span></div><div><b>09—10</b><span>비행 / 흰 버드나무 리빌</span></div></div>
          </section>

          <section class="varco-section varco-motion-section" id="motion" aria-labelledby="varco-motion-title">
            <div class="varco-section-head"><span>06</span><div><p class="varco-kicker">MOTION</p><h2 id="varco-motion-title">Still images,<br /><em>softly in motion.</em></h2></div></div>
            <div class="varco-main-video"><video controls playsinline preload="metadata" poster="${varcoImage('hero.png')}" aria-label="Fairy of Dawn 메인 모션"><source src="${project.media}" type="video/mp4" /></video><span>MAIN MOTION RESULT · 01</span></div>
            <div class="varco-motion-grid">${motionClips.map(([file, label, poster]) => `<figure><video controls playsinline preload="metadata" poster="${varcoImage(poster)}" aria-label="${label}"><source src="${varcoVideo(file)}" type="video/mp4" /></video><figcaption>${label}</figcaption></figure>`).join('')}</div>
          </section>

          <section class="varco-section" id="final" aria-labelledby="varco-final-title">
            <div class="varco-section-head"><span>07</span><div><p class="varco-kicker">FINAL</p><h2 id="varco-final-title">The world<br /><em>opens with light.</em></h2></div></div>
            <div class="varco-final-hero"><img src="${varcoImage('ending.png')}" alt="흰 버드나무 앞에 선 요정" loading="lazy" /><div><p>FINAL KEY VISUAL</p><strong>사라지는 장면이 아니라,<br />기억에 남는 장면으로.</strong></div></div>
            <div class="varco-final-grid"><img src="${varcoImage('world.png')}" alt="하늘 위 빛의 들판" loading="lazy" /><img src="${varcoImage('tree-reveal.png')}" alt="거대한 흰 버드나무" loading="lazy" /><img src="${varcoImage('detail.png')}" alt="꽃잎과 이슬 디테일" loading="lazy" /></div>
          </section>

          <section class="varco-section varco-result-section" id="result" aria-labelledby="varco-result-title">
            <div class="varco-section-head"><span>08</span><div><p class="varco-kicker">RESULT</p><h2 id="varco-result-title">A complete visual<br /><em>language for wonder.</em></h2></div></div>
            <p class="varco-result-copy">캐릭터, 세계관, 스토리와 사운드를 하나의 경험으로 묶었습니다. 작은 꽃의 질감에서 시작해 거대한 세계의 리빌로 끝나는 흐름을 통해, AI 이미지와 모션을 연결하는 시각적 문법을 구축했습니다.</p>
            <div class="varco-result-tags"><span>CHARACTER CONSISTENCY</span><span>WORLD BUILDING</span><span>AI VISUAL DEVELOPMENT</span><span>CINEMATIC MOTION</span></div>
            <a class="varco-next-link" href="/#works">BACK TO SELECTED WORKS <span>↗</span></a>
          </section>
        </div>
      </div>
    </div>
  `;
}

function featuredWorkMarkup() {
  return projects.filter((project) => project.featured !== false).map((project, index) => `
    <a class="featured-work-card featured-work-card-${index + 1}" href="/work/${project.slug}" data-work-category="${project.category}" data-featured-card hidden>
      <span class="featured-work-index">0${index + 1}</span>
      <span class="featured-work-image">${mediaMarkup(project)}</span>
      <span class="featured-work-meta">
        <strong>${project.title}</strong>
        <small>${project.category}</small>
      </span>
      <span class="featured-work-arrow" aria-hidden="true">↗</span>
    </a>
  `).join('');
}

function projectPageMarkup(project: Project, index: number) {
  const role = project.role?.join(' · ') ?? 'Visual Direction';
  const tools = 'ChatGPT · Grok · Premiere Pro';
  return `
    <div class="project-page" role="main" aria-labelledby="${project.id}-detail-title">
      <header class="project-page-header">
        <a href="/#home" class="brand"><img class="brand-logo" src="/images/logos/no-rules-logo.png" alt="NO RULES." /></a>
        <a class="project-page-back" href="/#works">← BACK TO WORKS</a>
      </header>
      <div class="project-detail-shell">
        <div class="project-detail-intro">
          <div>
            <p class="eyebrow">PROJECT 0${index + 1} · ${project.category}</p>
            <h2 id="${project.id}-detail-title">${project.title}</h2>
            <p class="project-detail-overview">${project.description}</p>
          </div>
          <dl class="project-detail-meta">
            <div><dt>ROLE</dt><dd>${role}</dd></div>
            <div><dt>TOOLS</dt><dd>${tools}</dd></div>
            <div><dt>DURATION</dt><dd>2026 · SELECTED WORK</dd></div>
          </dl>
        </div>
        <div class="project-detail-media">${posterMarkup(project)}</div>
        <div class="case-study-flow">
          <article><span>01</span><div><h3>OVERVIEW</h3><p>Problem을 선명하게 정의하고 프로젝트의 목표와 방향을 정리했습니다.</p></div></article>
          <article><span>02</span><div><h3>CONCEPT</h3><p>캐릭터와 장면의 핵심 태도를 정해 시각적 기준을 세웠습니다.</p></div></article>
          <article><span>03</span><div><h3>PROCESS / DEVELOPMENT</h3><p>AI와 2D/3D 그래픽을 조합해 Process를 빠르게 반복하고 Solution을 좁혔습니다.</p></div></article>
          <article><span>04</span><div><h3>CHARACTER / VISUAL</h3><p>컬러, 표정, 소품을 조율해 일관된 비주얼 언어를 만들었습니다.</p><div class="case-study-section-media">${posterMarkup(project)}</div></div></article>
          <article><span>05</span><div><h3>STORYBOARD / CONTI</h3><p>움직임과 화면 전환을 설계해 장면 사이의 리듬을 정리했습니다.</p></div></article>
          <article class="case-study-motion"><span>06</span><div><h3>MOTION</h3><p>정지된 비주얼을 움직임으로 확장한 실제 프로젝트 결과입니다.</p>${motionMarkup(project)}</div></article>
          <article><span>07</span><div><h3>FINAL</h3><p>Solution을 최종 이미지와 모션 에셋으로 확장했습니다.</p><div class="case-study-section-media">${posterMarkup(project)}</div></div></article>
          <article><span>08</span><div><h3>RESULT</h3><p>캐릭터, 세계관, 스토리가 하나의 경험으로 기억되도록 완성했습니다.</p></div></article>
        </div>
      </div>
      <a class="project-page-footer-back" href="/#works">← BACK TO WORKS</a>
    </div>
  `;
}

app.innerHTML = `
  <main class="scroll-pages" id="top">
    <section class="hero-section" id="home" aria-label="Portfolio introduction">
      <header class="site-header">
        <span class="nav-bg" aria-hidden="true"></span>
        <div class="nav-inner page-container">
          <a href="#home" class="brand"><img class="brand-logo" src="/images/logos/no-rules-logo.png" alt="NO RULES." /></a>
          <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="메뉴 열기">
            <span></span><span></span><span></span>
          </button>
          <nav id="site-nav" aria-label="Portfolio sections">
            <a href="#home">HOME</a>
            <a href="#works">WORKS</a>
            <a href="#about">ABOUT</a>
            <a href="#playground">PLAYGROUND</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <a class="header-cta" href="#contact">LET'S TALK <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <div class="hero-visual" aria-hidden="true">
        <span class="hero-stage-backdrop"></span>
        <img class="hero-texture hero-texture-grunge" src="${assetRoot}/KI11.png" alt="" />
        <img class="hero-texture hero-texture-chain" src="${assetRoot}/KI12.png" alt="" />
      </div>
      <div class="hero-deco" aria-hidden="true">
        <img class="hero-graffiti hero-graffiti-crown" src="${assetRoot}/KI13.png" alt="" />
        <img class="hero-graffiti hero-graffiti-star" src="${assetRoot}/KI14.png" alt="" />
        <img class="hero-graffiti hero-graffiti-spray" src="${assetRoot}/KI15.png" alt="" />
        <span class="hero-graffiti hero-graffiti-cross" aria-hidden="true">×</span>
        <span class="hero-side-note hero-side-note-pink">SAME CHAOS.<br />DIFFERENT DAY.</span>
        <span class="hero-side-note hero-side-note-blue">GOOD VIBES?<br />NAH.</span>
      </div>
      <img class="hero-character hero-character-pink" src="${pinkCharacterSrc}" alt="" />
      <img class="hero-character hero-character-blue" src="${assetRoot}/KI02.png" alt="" />
      <div class="hero-center" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow">CREATIVE STUDIO · 2026</p>
        <h1><span>NO</span><span>RULES.</span></h1>
        <p class="hero-tagline">CREATIVE MIND,<br />PLAYFUL LIFE.</p>
        <p class="hero-korean">좋아하는 걸로, 더 멀리.</p>
        <p class="hero-role">Character · Visual · Motion Designer</p>
        <p class="hero-description">AI와 2D/3D 비주얼을 활용해 캐릭터, 세계관, 스토리와 움직임을 설계합니다.</p>
        <div class="hero-actions">
          <a class="section-link" href="#works">VIEW WORK <span aria-hidden="true">↗</span></a>
          <a class="hero-secondary-link" href="#about">ABOUT ME <span aria-hidden="true">↗</span></a>
        </div>
        <span class="hero-scroll-note">SCROLL TO EXPLORE ↓</span>
      </div>
    </section>

    <section class="press-play-section page-container" id="works" aria-label="Featured works and selected projects">
          <div class="featured-works" id="featured-works">
            <div class="featured-works-heading">
              <p class="eyebrow">FEATURED WORKS</p>
              <a href="#works">SEE ALL <span aria-hidden="true">→</span></a>
            </div>
            <div class="featured-filters" role="tablist" aria-label="작품 필터">
              <button type="button" class="featured-filter is-active" data-work-filter="ALL" aria-pressed="true">ALL</button>
              <button type="button" class="featured-filter" data-work-filter="ILLUSTRATION" aria-pressed="false">ILLUSTRATION</button>
              <button type="button" class="featured-filter" data-work-filter="ANIMATION" aria-pressed="false">ANIMATION</button>
              <button type="button" class="featured-filter" data-work-filter="MUSIC VIDEO" aria-pressed="false">MUSIC VIDEO</button>
            </div>
            <div class="featured-works-grid">${featuredWorkMarkup()}</div>
          </div>
          <div class="press-play-heading">
            <p class="eyebrow">SELECTED PROJECTS</p>
            <h2>CHARACTERS, MARKS,<br /><em>NO RULES.</em></h2>
          </div>
          <div class="press-play-grid">${projects.map(projectSection).join('')}</div>
    </section>

    <section class="about-experience-section page-container" aria-label="About and experience">
          <div class="about-section depth-2" id="about">
            <div class="section-heading">
              <p class="eyebrow">ABOUT ME</p>
              <h2 id="about-modal-title">좋아하는 걸로,<br />더 멀리.</h2>
              <p class="about-focus">VISUAL DESIGNER FOCUSED ON<br />CHARACTER, AI &amp; MOTION.</p>
              <p>캐릭터 디자인부터 이미지 생성, 스토리보드, 영상 연출까지 하나의 비주얼 세계를 구축합니다.</p>
              <a class="section-link" href="#contact">ABOUT ME <span aria-hidden="true">↗</span></a>
            </div>
            <div class="about-details">
              <div class="about-face-card">
                <img class="about-face-banner" src="${assetRoot}/KI07.png" alt="핑크 캐릭터 얼굴 중심 배너" loading="lazy" />
                <span class="about-sticker">SAME CHAOS<br />DIFFERENT DAY.</span>
              </div>
              <div class="detail-block">
                <span class="detail-label">WHAT I DO</span>
                <div class="skill-list" aria-label="핵심 역량">
                  <span>CHARACTER DESIGN</span><span>AI VISUAL</span><span>ILLUSTRATION</span><span>STORYBOARD</span><span>MOTION / ANIMATION</span><span>3D</span><span>INTERACTIVE WEB</span>
                </div>
              </div>
            </div>
          </div>
          <div class="experience-section depth-3" id="experience" role="region" aria-labelledby="experience-title">
            <div class="section-heading">
              <p class="eyebrow">WORKS / SECTION PREVIEW</p>
              <h2 id="experience-title">실험하고, 기록하고,<br />또 만들기.</h2>
            </div>
            <div class="timeline">
              <article class="timeline-item"><span class="timeline-year">01</span><div><h3>CHARACTER ASSETS</h3><p>핑크와 블루의 서로 다른 포즈를 하나의 세계관으로 연결합니다.</p></div></article>
              <article class="timeline-item"><span class="timeline-year">02</span><div><h3>GRAPHIC LANGUAGE</h3><p>왕관, 별, X, 스프레이를 UI 위에 가볍게 겹쳐 리듬을 만듭니다.</p></div></article>
              <article class="timeline-item"><span class="timeline-year">03</span><div><h3>PLAYFUL INTERACTION</h3><p>포인터와 스크롤에 반응하는 작은 움직임으로 화면을 살아 있게 합니다.</p></div></article>
            </div>
          </div>
    </section>

    <section class="playground-section page-container" id="playground" aria-labelledby="playground-title">
          <div class="playground-heading">
            <p class="eyebrow">PLAYGROUND</p>
            <h2 id="playground-title">IDEAS DON'T<br /><em>SLEEP.</em></h2>
            <p>아직 이름 붙지 않은 장면을 빠르게 시험하는 공간입니다.</p>
          </div>
          <div class="playground-cards">
            <article class="playground-card playground-card-pink"><span class="playground-number">01</span><h3>SCROLL LAB</h3><p>스크롤과 포인터를 따라 움직이는 그래픽을 탐색합니다.</p><a href="#home">EXPLORE <span aria-hidden="true">↗</span></a></article>
            <article class="playground-card playground-card-blue"><span class="playground-number">02</span><h3>COLOR MIX</h3><p>HOT PINK와 ELECTRIC BLUE의 균형을 실험합니다.</p><a href="#works">VIEW WORKS <span aria-hidden="true">↗</span></a></article>
            <article class="playground-card playground-card-black"><span class="playground-number">03</span><h3>NEW IDEAS</h3><p>다음 장면의 형태와 태도를 빠르게 프로토타이핑합니다.</p><a href="#contact">START A PROJECT <span aria-hidden="true">↗</span></a></article>
          </div>
    </section>

    <section class="contact-section page-container" id="contact">
          <div class="contact-inner">
            <p class="eyebrow">CONTACT</p>
            <h2 id="contact-modal-title">LET'S MAKE<br /><em>SOMETHING COOL.</em></h2>
            <p>Have a project or collaboration in mind?</p>
            <div class="contact-actions">
              <a class="contact-icon-link contact-email" href="mailto:${contactEmail}" aria-label="이메일 보내기" title="이메일 보내기"><span>EMAIL</span><span aria-hidden="true">↗</span></a>
              <a class="contact-icon-link contact-social" href="${instagramUrl}" target="_blank" rel="noreferrer" aria-label="Instagram 열기" title="Instagram 열기"><span>INSTAGRAM</span><span aria-hidden="true">↗</span></a>
              <span class="contact-icon-link contact-platform" aria-label="Behance 링크 준비 중"><span>BEHANCE</span><span aria-hidden="true">↗</span></span>
              <span class="contact-icon-link contact-platform" aria-label="GitHub 링크 준비 중"><span>GITHUB</span><span aria-hidden="true">↗</span></span>
            </div>
          </div>
          <img class="contact-character" src="${assetRoot}/KI02.png" alt="블루 캐릭터" loading="lazy" />
          <img class="contact-graffiti" src="${assetRoot}/KI14.png" alt="" aria-hidden="true" />
    </section>
  </main>
`;

const requestedSlug = window.location.pathname.match(/^\/work\/([^/]+)\/?$/)?.[1];
const requestedProject = requestedSlug
  ? projects.find((project) => project.slug === decodeURIComponent(requestedSlug) || project.id === decodeURIComponent(requestedSlug))
  : undefined;

if (requestedProject) {
  const projectIndex = projects.indexOf(requestedProject);
  app.innerHTML = requestedProject.slug === 'varco-sound'
    ? varcoProjectPageMarkup(requestedProject)
    : projectPageMarkup(requestedProject, projectIndex);
  document.title = `${requestedProject.title} · NO RULES.`;
  document.querySelectorAll<HTMLVideoElement>('.project-page video').forEach((video) => {
    void video.play().catch(() => undefined);
  });
}

const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
const siteNav = document.querySelector<HTMLElement>('#site-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const featuredFilters = [...document.querySelectorAll<HTMLButtonElement>('[data-work-filter]')];
const featuredCards = [...document.querySelectorAll<HTMLElement>('[data-featured-card]')];

function matchesFeaturedFilter(card: HTMLElement, filter: string) {
  const category = card.dataset.workCategory ?? '';
  return filter === 'ALL'
    || (filter === 'MUSIC VIDEO' && (category.includes('MOTION') || category.includes('MUSIC VIDEO')))
    || category.includes(filter);
}

function applyFeaturedCardVisibility(card: HTMLElement, filter: string) {
  const isLandscape = card.dataset.featuredEligible === 'true';
  card.hidden = !isLandscape || !matchesFeaturedFilter(card, filter);
}

function readMediaRatio(media: HTMLImageElement | HTMLVideoElement) {
  const width = media instanceof HTMLImageElement ? media.naturalWidth : media.videoWidth;
  const height = media instanceof HTMLImageElement ? media.naturalHeight : media.videoHeight;
  return width > 0 && height > 0 ? width / height : 0;
}

function waitForMediaRatio(media: HTMLImageElement | HTMLVideoElement) {
  return new Promise<number>((resolve) => {
    const finish = () => {
      media.removeEventListener('load', finish);
      media.removeEventListener('loadedmetadata', finish);
      media.removeEventListener('error', finish);
      resolve(readMediaRatio(media));
    };

    if (readMediaRatio(media) > 0) {
      finish();
      return;
    }

    media.addEventListener('load', finish, { once: true });
    media.addEventListener('loadedmetadata', finish, { once: true });
    media.addEventListener('error', finish, { once: true });
  });
}

async function filterFeaturedCardsBySourceRatio() {
  const activeFilter = document.querySelector<HTMLButtonElement>('[data-work-filter].is-active')?.dataset.workFilter ?? 'ALL';
  await Promise.all(featuredCards.map(async (card) => {
    const media = card.querySelector<HTMLImageElement | HTMLVideoElement>('.project-media');
    const ratio = media ? await waitForMediaRatio(media) : 0;
    const isLandscape = ratio >= 1.5;
    card.dataset.featuredEligible = String(isLandscape);
    if (ratio > 0) card.dataset.mediaRatio = ratio.toFixed(3);
    applyFeaturedCardVisibility(card, activeFilter);
  }));

  document.querySelector<HTMLElement>('.featured-works-grid')?.toggleAttribute(
    'data-no-landscape-sources',
    featuredCards.every((card) => card.dataset.featuredEligible !== 'true'),
  );
}

featuredFilters.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    const filter = filterButton.dataset.workFilter ?? 'ALL';
    featuredFilters.forEach((button) => {
      const isActive = button === filterButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    featuredCards.forEach((card) => {
      applyFeaturedCardVisibility(card, filter);
    });
  });
});

void filterFeaturedCardsBySourceRatio();

function closeMobileMenu() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', '메뉴 열기');
  siteNav?.classList.remove('is-open');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
  siteNav?.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector<HTMLElement>(targetId);
    if (!target) return;
    event.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', targetId);
  });
});

const hero = document.querySelector<HTMLElement>('.hero-section');
const root = document.documentElement;
let pointerX = 0;
let pointerY = 0;
let frame = 0;

function updateMotion() {
  frame = 0;
  const scroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
  root.style.setProperty('--scroll-progress', scroll.toFixed(3));
  root.style.setProperty('--pointer-x', pointerX.toFixed(3));
  root.style.setProperty('--pointer-y', pointerY.toFixed(3));
  hero?.style.setProperty('--hero-shift', `${scroll * -18}px`);
}

function requestMotion() {
  if (!frame) frame = window.requestAnimationFrame(updateMotion);
}

window.addEventListener('pointermove', (event) => {
  if (event.pointerType && event.pointerType !== 'mouse') return;
  pointerX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
  pointerY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
  requestMotion();
});
window.addEventListener('scroll', requestMotion, { passive: true });
window.addEventListener('resize', requestMotion);

const projectSections = [...document.querySelectorAll<HTMLElement>('[data-project]')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
}, { threshold: 0.12 });
projectSections.forEach((section) => observer.observe(section));

const cardVideos = [...document.querySelectorAll<HTMLVideoElement>('.featured-work-card video, .project-section video')];
const cardVideoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target as HTMLVideoElement;
    if (entry.isIntersecting) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  });
}, { rootMargin: '180px 0px', threshold: 0.01 });
cardVideos.forEach((video) => cardVideoObserver.observe(video));

requestMotion();
