export type Partner = {
  id: string;
  name: string;
  logo: string;
  url?: string;
};

export const partners: Partner[] = [
  { id: 'kim-oanh', name: 'Tập đoàn Kim Oanh', logo: '/images/partners/kim-oanh.png' },
  { id: 'mb-bank', name: 'MB Bank', logo: '/images/partners/mb-bank.png' },
  { id: 'nxb-tre', name: 'NXB Trẻ', logo: '/images/partners/nxb-tre.png' },
  { id: 'nxb-kim-dong', name: 'NXB Kim Đồng', logo: '/images/partners/nxb-kim-dong.png' },
  { id: 'tuoi-tre', name: 'Báo Tuổi Trẻ', logo: '/images/partners/tuoi-tre.png' },
  { id: 'thanh-nien', name: 'Báo Thanh Niên', logo: '/images/partners/thanh-nien.png' },
  { id: 'vtv', name: 'VTV', logo: '/images/partners/vtv.png' },
  { id: 'vnexpress', name: 'VnExpress', logo: '/images/partners/vnexpress.png' },
];
