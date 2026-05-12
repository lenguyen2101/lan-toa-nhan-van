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
    description: 'Đồng hành, tiếp sức học tập cho trẻ em có hoàn cảnh đặc biệt.',
    url: 'https://quykhoisututam.com/hoc-bong-tu-luc-vi-chinh-toi/',
    image: '/images/img-du-an-1.webp',
    accent: 'var(--color-primary)',
  },
  {
    id: 'song-chua-lanh',
    name: 'Sóng Chữa Lành',
    description: 'Hỗ trợ trẻ em điều trị tại 7 bệnh viện lớn trên toàn quốc.',
    url: 'https://quykhoisututam.com/du-an-song-chua-lanh/',
    image: '/images/img-du-an-2.webp',
    accent: 'var(--color-teal)',
  },
  {
    id: 'an-sinh',
    name: 'An Sinh Xã Hội',
    description: 'Chuỗi hoạt động an sinh xã hội, từ thiện vì cộng đồng.',
    url: 'https://quykhoisututam.com/',
    image: '/images/img-du-an-3.png',
    accent: 'var(--color-pink)',
  },
  {
    id: 'chap-canh',
    name: 'Chắp Cánh Vươn Xa',
    description: 'Đồng hành cùng các bạn trẻ tại Trường Giáo dưỡng Long Thành.',
    url: 'https://quykhoisututam.com/du-an-chap-canh-vuon-xa/',
    image: '/images/img-du-an-4.webp',
    accent: 'var(--color-blue)',
  },
];
