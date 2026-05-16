export type Project = {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: 'hoc-bong',
    name: 'Học bổng Tự Lực Vì Chính Tôi',
    description: 'Đồng hành, tiếp sức học tập cho trẻ mồ côi và con em của người hiến tạng nhân đạo.',
    url: 'https://quykhoisututam.com/hoc-bong-tu-luc-vi-chinh-toi/',
    image: '/images/img-du-an-1-updated.webp',
    accent: 'var(--color-primary)',
  },
  {
    id: 'song-chua-lanh',
    name: 'Sóng Chữa Lành',
    description: 'Tầm soát sức khoẻ và hỗ trợ trẻ em, người có hoàn cảnh khó khăn điều trị tại các bệnh viện trên toàn quốc.',
    url: 'https://quykhoisututam.com/du-an-song-chua-lanh/',
    image: '/images/img-du-an-2-updated.webp',
    accent: 'var(--color-teal)',
  },
  {
    id: 'chap-canh',
    name: 'Chắp Cánh Vươn Xa',
    description: 'Hỗ trợ trẻ em vi phạm pháp luật phát triển thân — tâm — trí, tự tin đứng dậy sau những lỗi lầm và tái hoà nhập cộng đồng.',
    url: 'https://quykhoisututam.com/du-an-chap-canh-vuon-xa/',
    image: '/images/img-du-an-3-updated.webp',
    accent: 'var(--color-blue)',
  },
  {
    id: 'an-sinh',
    name: 'An Sinh Xã Hội',
    description: 'Chuỗi hoạt động an sinh xã hội, từ thiện vì cộng đồng như cứu trợ khẩn cấp, xây dựng trường học, cầu đường,...',
    url: 'https://quykhoisututam.com/',
    image: '/images/img-du-an-4-updated.webp',
    accent: 'var(--color-pink)',
  },
];
