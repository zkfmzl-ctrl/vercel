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
  description: string;
  tech?: string[];
  role?: string[];
  caseStudy?: {
    copy?: CaseStudyCopy;
    concept?: CaseStudyImage;
    process?: CaseStudyImage[];
    character?: CaseStudyImage[];
    storyboard?: CaseStudyImage;
    final?: CaseStudyImage[];
    result?: CaseStudyImage;
  };
};

export const projects: Project[] = [
  {
    id: 'work-01',
    slug: 'pink-noise',
    type: 'web',
    title: 'FAIRY OF DAWN',
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
        overview: '투명한 꽃봉오리에서 태어난 요정이 빛의 들판을 지나 흰 버드나무를 만나는 58초의 탄생 서사입니다.',
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
        { src: '/images/fairy/scene-10.png', alt: '요정 얼굴과 눈 디테일' },
        { src: '/images/fairy/flower-sheet.png', alt: 'Luminous Blossom 꽃 디자인 시트' },
        { src: '/images/fairy/willow-sheet.png', alt: 'Sacred White Willow 나무 디자인 시트' }
      ],
      storyboard: { src: '/images/fairy/storyboard.png', alt: '요정 탄생 스토리보드와 콘티' },
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
    role: ['Scene Direction', 'Graphic System']
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
    role: ['Character Direction', 'Asset Curation']
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
    role: ['Motion Direction', 'Interaction Styling']
  },
  {
    id: 'work-05',
    slug: 'motion-source-05',
    type: 'web',
    title: 'MOTION SOURCE 05',
    category: 'MOTION',
    year: '05',
    media: '/videos/source-05.mp4',
    mediaType: 'video',
    poster: '/images/video-posters/source-05.jpg',
    mediaAspect: '9:16',
    description: '전달받은 세로형 모션 소스를 독립 프로젝트 카드로 구성했습니다.',
    tech: ['MOTION', 'EDITING'],
    role: ['Motion Direction', 'Editing']
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
    role: ['Motion Direction', 'Story Editing']
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
