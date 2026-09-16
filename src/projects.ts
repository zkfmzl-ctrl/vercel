export type ProjectType = 'app' | 'web';
export type ProjectMediaType = 'image' | 'video';

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
};

export const projects: Project[] = [
  {
    id: 'work-01',
    slug: 'pink-noise',
    type: 'web',
    title: 'NC WALL',
    category: 'ILLUSTRATION',
    year: '01',
    media: '/videos/source-01.mp4',
    mediaType: 'video',
    poster: '/images/video-posters/source-01.jpg',
    mediaAspect: '16:9',
    description: '캐릭터 콘셉트부터 시트, 키비주얼까지 제작한 핑크 캐릭터 프로젝트입니다.',
    tech: ['CHARACTER DESIGN', 'VISUAL DIRECTION'],
    role: ['Character Design', 'Visual Direction']
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
