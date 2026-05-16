export type Partner = {
  id: string;
  name: string;
  logo: string;
  url?: string;
};

export const partners: Partner[] = [
  { id: 'thuc-hien',    name: 'Đối tác thực hiện chương trình', logo: '/images/partners/doi-tac-thuc-hien.webp' },
  { id: 'nha-tai-tro',  name: 'Nhà tài trợ',                    logo: '/images/partners/nha-tai-tro.png' },
  { id: 'truyen-thong', name: 'Đối tác truyền thông',           logo: '/images/partners/doi-tac-truyen-thong.png' },
  { id: 'kiem-toan',    name: 'Đơn vị kiểm toán',               logo: '/images/partners/don-vi-kiem-toan.png' },
  { id: 'xuat-ban',     name: 'Đơn vị xuất bản và in ấn',       logo: '/images/partners/don-vi-xuat-ban.jpg' },
];
