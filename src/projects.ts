export type ProjectType = 'app' | 'web';
export type ProjectMediaType = 'image' | 'video';

export type CaseStudyImage = {
  src: string;
  alt: string;
};

export type CaseStudyCopy = Partial<Record<'overview' | 'concept' | 'process' | 'character' | 'storyboard' | 'motion' | 'final' | 'result', string>>;

export type Project = {
  id: string;
  slug: string;
  type: ProjectType;
  media: string;
  mediaType: ProjectMediaType;
  poster?: string;
  mediaAspect?: '16:9' | '9:16' | number;
  featured?: boolean;
  title: string;
  category: string;
  year: string;
  duration?: string;
  description: string;
  tech?: string[];
  role?: string[];
  caseStudy?: {
    copy?: CaseStudyCopy;
    concept?: CaseStudyImage;
    process?: CaseStudyImage[];
    character?: CaseStudyImage[];
    storyboard?: CaseStudyImage | CaseStudyImage[];
    motionClips?: CaseStudyImage[];
    final?: CaseStudyImage[];
    result?: CaseStudyImage;
  };
};

export const projects: Project[] = [
  {
    id: 'work-01',
    slug: 'pink-noise',
    type: 'web',
    title: 'NC WALL FAIRY',
    category: 'AI FILM / VISUAL DEVELOPMENT',
    year: '01',
    media: '/videos/fairy/motion-01.mp4',
    mediaType: 'video',
    poster: '/images/fairy/scene-01.png',
    mediaAspect: '16:9',
    description: '투명한 꽃봉오리에서 태어난 요정이 빛의 들판을 지나 신성한 흰 버드나무를 만나는 탄생의 서사를 만들었습니다.',
    tech: ['CHARACTER DESIGN', 'VISUAL DIRECTION', 'MOTION'],
    role: ['Visual Direction', 'Character Design', 'Motion Editing'],
    caseStudy: {
      copy: {
        overview: '투명한 꽃봉오리에서 태어난 요정이 빛의 들판을 지나 흰 버드나무를 만나는 41초의 탄생 서사입니다.',
        concept: '어두운 판타지가 아닌, 아침의 흰빛으로 가득한 신성한 들판을 핵심 태도로 설정했습니다.',
        process: '환경과 꽃의 질감을 먼저 고정한 뒤, 각성·비행·세계의 확장으로 장면을 단계적으로 발전시켰습니다.',
        character: '투명한 날개, 아이보리 드레스, 골드 라인과 꽃 장식을 캐릭터의 고정 언어로 삼았습니다.',
        storyboard: '꽃봉오리의 클로즈업에서 시작해 각성, 비행, 흰 버드나무 리빌로 이어지는 카메라 리듬을 설계했습니다.',
        motion: '정지된 비주얼을 장면별 움직임과 사운드로 확장한 실제 프로젝트 결과입니다.',
        final: '꽃봉오리의 미세한 빛부터 광활한 하늘의 엔딩까지, 최종 이미지와 모션 에셋을 하나의 흐름으로 확장했습니다.',
        result: '캐릭터, 세계관, 스토리와 사운드를 하나의 경험으로 묶어 AI 이미지에서 영상으로 이어지는 시각적 문법을 구축했습니다.'
      },
      concept: { src: '/images/fairy/environment-sheet.png', alt: 'Celestial Meadow 환경 디자인 시트' },
      process: [
        { src: '/images/fairy/scene-01.png', alt: '빛의 들판 환경 키비주얼' },
        { src: '/images/fairy/scene-02.png', alt: '투명한 꽃봉오리 장면' },
        { src: '/images/fairy/scene-03.png', alt: '꽃 안에서 잠든 요정 장면' },
        { src: '/images/fairy/scene-04.png', alt: '꽃 위에서 깨어난 요정 장면' }
      ],
      character: [
        { src: '/images/fairy/character-sheet.png', alt: 'Fairy of Dawn 캐릭터 디자인 시트' },
        { src: '/images/fairy/flower-sheet.png', alt: 'Luminous Blossom 꽃 디자인 시트' },
        { src: '/images/fairy/willow-sheet.png', alt: 'Sacred White Willow 나무 디자인 시트' }
      ],
      storyboard: { src: '/images/fairy/storyboard.png', alt: '요정 탄생 스토리보드와 콘티' },
      motionClips: [
        { src: '/videos/fairy/transition-02.mp4', alt: '꽃봉오리가 빛을 받으며 열리는 연결 영상' },
        { src: '/videos/fairy/transition-03.mp4', alt: '꽃 안에서 요정이 깨어나는 연결 영상' },
        { src: '/videos/fairy/transition-04.mp4', alt: '요정이 꽃 위에서 일어나는 연결 영상' },
        { src: '/videos/fairy/transition-05.mp4', alt: '요정이 빛의 들판에 서는 연결 영상' },
        { src: '/videos/fairy/transition-06.mp4', alt: '요정이 들판 위를 비행하는 연결 영상' },
        { src: '/videos/fairy/transition-07.mp4', alt: '요정이 흰 버드나무에 도착하는 연결 영상' }
      ],
      final: [
        { src: '/images/fairy/scene-05.png', alt: '빛의 들판을 비행하는 요정' },
        { src: '/images/fairy/scene-06.png', alt: '확장된 천상의 들판' },
        { src: '/images/fairy/scene-07.png', alt: '흰 버드나무를 향해 가는 요정' },
        { src: '/images/fairy/scene-08.png', alt: '흰 버드나무 앞의 요정 엔딩 장면' }
      ]
    }
  },
  {
    id: 'work-02',
    slug: 'neon-city',
    type: 'web',
    title: '비렉스 공모전',
    category: '3D / AI',
    year: '02',
    media: '/videos/source-02.mp4',
    mediaType: 'video',
    poster: '/images/video-posters/source-02.jpg',
    mediaAspect: '16:9',
    description: 'AI와 3D 공간을 엮어 네온으로 가득한 세계관을 설계했습니다.',
    tech: ['3D', 'AI VISUAL'],
    role: ['Scene Direction', 'Graphic System'],
    caseStudy: {
      copy: {
        overview: 'BEREX Pebble Chair의 형태와 사용 장면을 중심으로 제품 영상을 구성했습니다.',
        concept: '고양이의 이동, 인물의 휴식, 제품의 곡선이 하나의 생활 장면으로 이어지는 따뜻한 공간을 핵심 태도로 설정했습니다.',
        process: '스토리보드 장면 이미지를 기준으로 인물·고양이·안마의자의 동선과 장면별 빛의 변화를 좁혔습니다.',
        character: '제품의 곡선, 컬러, 리클라이닝 실루엣을 일관된 비주얼 언어로 정리했습니다.',
        storyboard: '제품 소개, 사용 장면, 브랜드 메시지로 이어지는 컷의 순서와 카메라 흐름을 설계했습니다.',
        motion: '비슷한 장면의 반복을 피하고, 1·4·6·8·14·22번 영상의 서로 다른 움직임을 짧은 연결 클립으로 구성했습니다.',
        final: 'BEREX Pebble Chair의 제품 영상과 주요 비주얼을 하나의 브랜드 경험으로 확장했습니다.',
        result: '제품 정보와 감성적 장면을 결합해 편안함과 기능성이 함께 기억되는 영상 언어를 구축했습니다.'
      },
      concept: { src: '/images/berex/storyboard-08.png', alt: 'BEREX 스토리보드 장면 기반 콘셉트 이미지' },
      process: [
        { src: '/images/berex/story-01.png', alt: 'BEREX 스토리보드 장면 01' },
        { src: '/images/berex/storyboard-14.png', alt: 'BEREX 스토리보드 장면 14' },
        { src: '/images/berex/storyboard-19.png', alt: 'BEREX 스토리보드 장면 19' },
        { src: '/images/berex/storyboard-26.png', alt: 'BEREX 스토리보드 장면 26' }
      ],
      character: [
        { src: '/images/berex/character-male.png', alt: 'BEREX 민준 캐릭터 디자인 시트' },
        { src: '/images/berex/character-female.png', alt: 'BEREX 서연 캐릭터 디자인 시트' },
        { src: '/images/berex/character-cat.png', alt: 'BEREX 모카 고양이 캐릭터 디자인 시트' }
      ],
      storyboard: { src: '/images/berex/story-02.png', alt: 'BEREX 제품 영상 스토리보드 장면' },
      motionClips: [
        { src: '/videos/berex/clip-01.mp4', alt: 'BEREX 영상 1번 연결 클립' },
        { src: '/videos/berex/clip-02.mp4', alt: 'BEREX 영상 4번 연결 클립' },
        { src: '/videos/berex/clip-03.mp4', alt: 'BEREX 영상 6번 연결 클립' },
        { src: '/videos/berex/clip-04.mp4', alt: 'BEREX 영상 8번 연결 클립' },
        { src: '/videos/berex/clip-05.mp4', alt: 'BEREX 영상 14번 연결 클립' },
        { src: '/videos/berex/clip-06.mp4', alt: 'BEREX 영상 22번 연결 클립' }
      ],
      final: [
        { src: '/images/berex/story-01.png', alt: 'BEREX 최종 장면 · 현관 배경' },
        { src: '/images/berex/storyboard-08.png', alt: 'BEREX 최종 장면 · 햇빛 드는 거실 배경' },
        { src: '/images/berex/storyboard-14.png', alt: 'BEREX 최종 장면 · 책장 앞 배경' },
        { src: '/images/berex/storyboard-19.png', alt: 'BEREX 최종 장면 · 침실 배경' }
      ]
    }
  },
  {
    id: 'work-03',
    slug: 'lilo-character',
    type: 'web',
    title: '구미호',
    category: 'AI / CHARACTER',
    year: '03',
    media: '/videos/source-03.mp4',
    mediaType: 'video',
    poster: '/images/video-posters/source-03.jpg',
    mediaAspect: '16:9',
    description: 'AI 비주얼과 캐릭터 디자인으로 LILO의 표정과 세계를 확장했습니다.',
    tech: ['AI VISUAL', 'CHARACTER DESIGN'],
    role: ['Character Direction', 'Asset Curation'],
    caseStudy: {
      copy: {
        overview: '푸른 여우와 붉은 여우 자매의 운명과 관계를 중심으로 구미호 이야기를 영상화했습니다.',
        concept: '달빛, 구슬, 한복의 색을 중심으로 동양 판타지의 정서와 자매의 대비를 설정했습니다.',
        process: '캐릭터 시트와 장면 이미지를 반복 조정하며 긴 서사의 핵심 장면을 선별했습니다.',
        character: '푸른 자매와 붉은 자매의 의상, 꼬리, 장신구와 표정을 시트로 고정했습니다.',
        storyboard: '달빛 아래의 만남에서 인간 세계와 재회로 이어지는 주요 사건의 컷 흐름을 설계했습니다.',
        motion: '구미호의 변신과 관계의 변화를 장면별 모션 클립으로 연결했습니다.',
        final: '구미호 자매의 세계관과 주요 사건을 장편 영상의 최종 장면으로 정리했습니다.',
        result: '색으로 구분되는 두 자매의 캐릭터 시스템과 30개 장면의 서사적 연결을 구축했습니다.'
      },
      concept: { src: '/images/gumiho/concept-sisters.png', alt: '구미호 자매 콘셉트 비주얼' },
      process: [
        { src: '/images/gumiho/process-01.png', alt: '구미호 이야기 초기 장면 01' },
        { src: '/images/gumiho/process-02.png', alt: '구미호 이야기 초기 장면 02' },
        { src: '/images/gumiho/process-03.png', alt: '구미호 이야기 초기 장면 03' },
        { src: '/images/gumiho/process-04.png', alt: '구미호 이야기 초기 장면 04' }
      ],
      character: [
        { src: '/images/gumiho/blue-gumiho-sheet.png', alt: '푸른 치마 구미호 캐릭터 디자인 시트' },
        { src: '/images/gumiho/red-gumiho-sheet.png', alt: '붉은 치마 구미호 캐릭터 디자인 시트' },
        { src: '/images/gumiho/male-lead-sheet.png', alt: '남자 주인공 캐릭터 디자인 시트' }
      ],
      storyboard: { src: '/images/gumiho/storyboard-01-04.png', alt: '구미호 이야기 스토리보드 장면 01-04' },
      motionClips: [
        { src: '/videos/gumiho/clip-01.mp4', alt: '구미호 이야기 연결 영상 01' },
        { src: '/videos/gumiho/clip-02.mp4', alt: '구미호 이야기 연결 영상 02' },
        { src: '/videos/gumiho/clip-03.mp4', alt: '구미호 이야기 연결 영상 03' },
        { src: '/videos/gumiho/clip-04.mp4', alt: '구미호 이야기 연결 영상 04' },
        { src: '/videos/gumiho/clip-05.mp4', alt: '구미호 이야기 연결 영상 05' },
        { src: '/videos/gumiho/clip-06.mp4', alt: '구미호 이야기 연결 영상 06' }
      ],
      final: [
        { src: '/images/gumiho/final-human-forms.png', alt: '구미호 자매 인간형 최종 장면' },
        { src: '/images/gumiho/final-night-market.png', alt: '구미호 자매 밤 시장 최종 장면' },
        { src: '/images/gumiho/final-reunion.png', alt: '구미호 자매 재회 최종 장면' },
        { src: '/images/gumiho/final-ending.png', alt: '구미호 이야기 엔딩 장면' }
      ]
    }
  },
  {
    id: 'work-04',
    slug: 'no-rules-mv',
    type: 'web',
    title: '커피한잔사이',
    category: 'ANIMATION',
    year: '04',
    media: '/videos/source-04.mp4',
    mediaType: 'video',
    poster: '/images/video-posters/source-04.jpg',
    mediaAspect: '16:9',
    description: '캐릭터, 스토리보드, 그래픽을 하나의 움직이는 장면으로 묶었습니다.',
    tech: ['MOTION', 'STORYBOARD'],
    role: ['Motion Direction', 'Interaction Styling'],
    caseStudy: {
      copy: {
        overview: '커피 한 잔을 사이에 둔 일상의 감정과 관계를 장면과 음악으로 연결했습니다.',
        concept: '따뜻한 카페의 빛과 서로 다른 인물의 시선을 통해 잠시 멈춘 시간을 표현했습니다.',
        process: '장면 이미지와 캐릭터 시트를 기준으로 인물의 시선과 공간의 리듬을 조율했습니다.',
        character: '엄마, 아빠, 여성 캐릭터의 표정과 의상을 시트로 정리해 장면의 일관성을 유지했습니다.',
        storyboard: '카페의 도입에서 인물의 감정 변화와 생활 장면으로 이어지는 컷 구성을 설계했습니다.',
        motion: '카페의 빛, 인물의 행동, 화면 전환을 짧은 모션 클립으로 연결했습니다.',
        final: '커피 한 잔 사이에 흐르는 일상의 순간을 최종 영상과 장면 이미지로 확장했습니다.',
        result: '음악과 장면 전환을 결합해 짧은 일상 서사가 자연스럽게 이어지는 영상 경험을 완성했습니다.'
      },
      concept: { src: '/images/coffee/concept-intro.png', alt: '커피 한잔 사이 콘셉트 장면' },
      process: [
        { src: '/images/coffee/process-s1.jpeg', alt: '커피 한잔 사이 장면 개발 01' },
        { src: '/images/coffee/process-s2.jpeg', alt: '커피 한잔 사이 장면 개발 02' },
        { src: '/images/coffee/process-s3.jpeg', alt: '커피 한잔 사이 장면 개발 03' },
        { src: '/images/coffee/process-s4.jpeg', alt: '커피 한잔 사이 장면 개발 04' }
      ],
      character: [
        { src: '/images/coffee/dad-sheet.png', alt: '아빠 캐릭터 디자인 시트' },
        { src: '/images/coffee/mom-sheet.png', alt: '엄마 캐릭터 디자인 시트' },
        { src: '/images/coffee/woman-sheet.png', alt: '여성 캐릭터 디자인 시트' }
      ],
      storyboard: { src: '/images/coffee/storyboard.png', alt: '커피 한잔 사이 스토리보드 장면' },
      motionClips: [
        { src: '/videos/coffee/clip-01.mp4', alt: '커피 한잔 사이 연결 영상 01' },
        { src: '/videos/coffee/clip-02.mp4', alt: '커피 한잔 사이 연결 영상 02' },
        { src: '/videos/coffee/alt-nature-transition.mp4', alt: '커피 한잔 사이 자연으로 전환되는 연결 영상 03' },
        { src: '/videos/coffee/clip-04.mp4', alt: '커피 한잔 사이 연결 영상 04' },
        { src: '/videos/coffee/alt-window-portrait.mp4', alt: '커피 한잔 사이 창 너머 인물 연결 영상 05' },
        { src: '/videos/coffee/clip-06.mp4', alt: '커피 한잔 사이 연결 영상 06' }
      ],
      final: [
        { src: '/images/coffee/final-s13.jpeg', alt: '커피 한잔 사이 최종 장면 01' },
        { src: '/images/coffee/final-s17.jpeg', alt: '커피 한잔 사이 최종 장면 02' },
        { src: '/images/coffee/final-s21.jpeg', alt: '커피 한잔 사이 최종 장면 03' },
        { src: '/images/coffee/final-s25.jpeg', alt: '커피 한잔 사이 최종 장면 04' }
      ]
    }
  },
  {
    id: 'work-05',
    slug: 'motion-source-05',
    type: 'web',
    title: 'MOTION SOURCE 05',
    category: 'MOTION',
    year: '05',
    media: '/videos/pet/chuncheon-pet-festival.mp4',
    mediaType: 'video',
    poster: '/images/pet/chuncheon/poster.png',
    mediaAspect: '9:16',
    duration: '01:59',
    description: '보호시설에서 춘천의 호수와 숲을 지나 다시 함께 걷는 과정을 담은 세로형 AI 리얼리티 영상입니다.',
    tech: ['MOTION', 'EDITING'],
    role: ['Visual Direction', 'Storyboarding', 'Motion Editing'],
    caseStudy: {
      copy: {
        overview: '보호시설에서 시작해 춘천의 호수와 숲, 산책길을 함께 지나며 다시 신뢰를 쌓는 9:16 감성 숏필름입니다.',
        concept: '붙잡는 대신 기다리는 태도와, 함께 걷는 거리의 변화로 ‘새로운 시작’을 시각화했습니다.',
        process: '보호시설의 흑백 장면에서 춘천의 자연과 노을로 이어지는 키이미지를 순서화하고 보호자와 강아지의 거리·시선·접촉 변화를 정리했습니다.',
        character: '보호자와 강아지의 턴어라운드와 외형을 하나의 캐릭터 시트로 고정해 장면 간 정체성을 유지했습니다.',
        storyboard: '보호시설에서 춘천의 산책길까지 49개 쇼트의 거리·카메라·행동 변화를 설계했습니다.',
        motion: '초반의 경계와 후반의 동행이 세로 프레임 안에서 자연스럽게 이어지도록 이동·시선·색 변화를 편집했습니다.',
        final: '춘천의 풍경과 보호자·강아지의 신뢰 회복 서사를 119초 세로 영상과 키이미지로 확장했습니다.',
        result: '신뢰가 회복될수록 줄어드는 물리적 거리를 시각 장치로 삼아 ‘다시, 함께 걷는 춘천’의 메시지를 완성했습니다.'
      },
      concept: { src: '/images/pet/chuncheon/concept.jpg', alt: '춘천 호수와 산의 콘셉트 이미지' },
      process: [
        { src: '/images/pet/chuncheon/process-01.jpg', alt: '보호시설에서 시작하는 키이미지' },
        { src: '/images/pet/chuncheon/process-02.jpg', alt: '케이블카로 춘천을 향하는 키이미지' },
        { src: '/images/pet/chuncheon/process-03.jpg', alt: '숲과 산책으로 확장되는 키이미지' },
        { src: '/images/pet/chuncheon/process-04.jpg', alt: '노을빛 장면으로 전환되는 키이미지' }
      ],
      character: [{ src: '/images/pet/chuncheon/character-sheet.png', alt: '보호자와 강아지 턴어라운드 캐릭터 시트' }],
      storyboard: [
        { src: '/images/pet/chuncheon/storyboard-01.jpg', alt: '보호시설에서 보호자와 마주하는 스토리보드 프레임' },
        { src: '/images/pet/chuncheon/storyboard-02.jpg', alt: '차 안에서 춘천으로 이동하는 스토리보드 프레임' },
        { src: '/images/pet/chuncheon/storyboard-03.jpg', alt: '춘천 반려견 숲에 도착하는 스토리보드 프레임' },
        { src: '/images/pet/chuncheon/storyboard-04.jpg', alt: '노을 속에서 손을 맞대는 스토리보드 프레임' }
      ],
      motionClips: [
        { src: '/videos/pet/chuncheon/tr-01.mp4', alt: '보호시설에서 다가가는 연결 영상' },
        { src: '/videos/pet/chuncheon/tr-06.mp4', alt: '차창 밖 춘천 풍경을 바라보는 연결 영상' },
        { src: '/videos/pet/chuncheon/tr-09.mp4', alt: '케이블카 안에서 풍경을 바라보는 연결 영상' },
        { src: '/videos/pet/chuncheon/tr-16.mp4', alt: '초원에서 보호자에게 달려오는 연결 영상' },
        { src: '/videos/pet/chuncheon/tr-18.mp4', alt: '노을빛 호숫가를 함께 걷는 연결 영상' },
        { src: '/videos/pet/chuncheon/tr-21.mp4', alt: '노을 속에서 손을 맞대는 연결 영상' }
      ],
      final: [
        { src: '/images/pet/chuncheon/final-01.jpg', alt: '춘천 반려견 숲 최종 장면' },
        { src: '/images/pet/chuncheon/final-02.jpg', alt: '호숫가 산책 최종 장면' },
        { src: '/images/pet/chuncheon/final-03.jpg', alt: '노을 속 교감 최종 장면' },
        { src: '/images/pet/chuncheon/final-04.jpg', alt: '기억으로 남는 엔딩 최종 장면' }
      ]
    }
  },
  {
    id: 'work-07',
    slug: 'motion-source-07',
    type: 'web',
    title: 'MOTION SOURCE 07',
    category: 'MOTION',
    year: '07',
    media: '/videos/source-07.mp4',
    mediaType: 'video',
    poster: '/images/video-posters/source-07.jpg',
    mediaAspect: '9:16',
    description: '전달받은 세로형 모션 소스를 중복 없이 카드에 연결했습니다.',
    tech: ['MOTION', 'STORY'],
    role: ['Motion Direction', 'Story Editing'],
    caseStudy: {
      copy: {
        overview: '작은 물범 캐릭터가 바다와 여행을 경험하는 장면을 세로형 모션으로 구성했습니다.',
        concept: '포근한 봉제 인형의 질감과 바다 풍경의 대비를 프로젝트의 핵심 태도로 설정했습니다.',
        process: '캐릭터 포즈와 에피소드별 장면을 비교하며 물범의 행동과 화면 리듬을 정리했습니다.',
        character: '물범의 정면·측면·후면과 표정을 하나의 캐릭터 시트로 고정했습니다.',
        storyboard: '실내에서 해변으로 이동하는 물범의 에피소드 흐름을 장면 순서로 설계했습니다.',
        motion: '각 에피소드의 짧은 클립을 연결해 캐릭터의 움직임과 공간 변화를 보여줍니다.',
        final: '물범 캐릭터와 바다 에피소드의 최종 장면을 세로형 모션 결과로 확장했습니다.',
        result: '캐릭터의 반복 가능한 포즈와 장면별 배경 변화를 묶어 짧은 에피소드형 모션 시스템을 구축했습니다.'
      },
      concept: { src: '/images/seal/concept-diorama.jpg', alt: '물범 프로젝트 바닷가 디오라마 콘셉트' },
      process: [
        { src: '/images/seal/process-1.png', alt: '물범 프로젝트 장면 개발 01' },
        { src: '/images/seal/process-2.png', alt: '물범 프로젝트 장면 개발 02' },
        { src: '/images/seal/process-3.png', alt: '물범 프로젝트 장면 개발 03' },
        { src: '/images/seal/process-4.png', alt: '물범 프로젝트 장면 개발 04' }
      ],
      character: [{ src: '/images/seal/character-sheet.webp', alt: '물범 캐릭터 디자인 시트' }],
      storyboard: { src: '/images/seal/storyboard.png', alt: '물범 프로젝트 스토리보드' },
      motionClips: [
        { src: '/videos/seal/clip-01.mp4', alt: '물범 에피소드 연결 영상 01' },
        { src: '/videos/seal/clip-02.mp4', alt: '물범 에피소드 연결 영상 02' },
        { src: '/videos/seal/alt-open-mouth.mp4', alt: '물범 에피소드 입을 벌리고 반응하는 연결 영상 03' },
        { src: '/videos/seal/clip-04.mp4', alt: '물범 에피소드 연결 영상 04' },
        { src: '/videos/seal/clip-05.mp4', alt: '물범 에피소드 연결 영상 05' },
        { src: '/videos/seal/clip-06.mp4', alt: '물범 에피소드 연결 영상 06' }
      ],
      final: [
        { src: '/images/seal/final-1.jpg', alt: '물범 프로젝트 최종 장면 01' },
        { src: '/images/seal/final-2.jpg', alt: '물범 프로젝트 최종 장면 02' },
        { src: '/images/seal/final-3.jpg', alt: '물범 프로젝트 최종 장면 03' },
        { src: '/images/seal/final-4.jpg', alt: '물범 프로젝트 최종 장면 04' }
      ]
    }
  },
  {
    id: 'work-08',
    slug: 'motion-source-08',
    type: 'web',
    title: '할로윈',
    category: 'MOTION',
    year: '08',
    media: '/videos/source-08.mp4',
    mediaType: 'video',
    poster: '/images/video-posters/source-08.jpg',
    mediaAspect: '16:9',
    featured: false,
    description: '새로 전달받은 가로형 모션 소스를 SELECTED PROJECTS에 반영했습니다.',
    tech: ['MOTION', 'VISUAL DIRECTION'],
    role: ['Motion Direction', 'Visual Direction']
  }
];
