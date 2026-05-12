export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  year: number;
  cover: string;
  shortDesc: string;
  longDesc: string;
  preview: string;
  reviews: { name: string; role: string; quote: string }[];
  paperPrice: number;
  ebookTiers: number[];
};

export const ebookTiers = [20000, 50000, 70000, 100000];

export const books: Book[] = [
  {
    id: 'tu-thien-dong-chay',
    title: 'Từ thiện trong dòng chảy văn hóa xã hội',
    author: 'Quỹ Khởi Sự Từ Tâm',
    category: 'Sách chuyên khảo',
    year: 2024,
    cover: '/images/books/img-book-1.jpeg',
    shortDesc: 'Nhìn lại lịch sử và đặt nền móng học thuật cho hoạt động từ thiện hiện đại tại Việt Nam.',
    longDesc:
      'Sách chuyên khảo nghiên cứu sự hình thành và phát triển của hoạt động từ thiện trong dòng chảy văn hoá – xã hội Việt Nam, từ truyền thống nhân nghĩa của ông cha đến mô hình thiện nguyện hiện đại. Tác phẩm là tài liệu tham khảo cho các nhà nghiên cứu, người làm công tác xã hội và những ai quan tâm đến lĩnh vực phi lợi nhuận.',
    preview:
      'Lòng nhân ái không phải là một đức tính mới mẻ. Trên dải đất hình chữ S, từ thuở "lá lành đùm lá rách", người Việt đã biết rằng cho đi là một cách sống chứ không phải một sự ban ơn.',
    reviews: [
      {
        name: 'TS. Nguyễn Văn An',
        role: 'Viện Nghiên cứu Xã hội học',
        quote: 'Một công trình khoa học công phu, đặt nền tảng cho việc nghiên cứu nghiêm túc về từ thiện tại Việt Nam.',
      },
    ],
    paperPrice: 180000,
    ebookTiers,
  },
  {
    id: 'tac-dong-tinh-gon',
    title: 'Tác động tinh gọn',
    author: 'Mark Graban & Joseph E. Swartz',
    category: 'Sách dịch',
    year: 2025,
    cover: '/images/books/img-book-2.jpg',
    shortDesc: 'Áp dụng tư duy Lean để các tổ chức thiện nguyện tạo ra tác động lớn hơn với nguồn lực ít hơn.',
    longDesc:
      'Cuốn sách giới thiệu phương pháp Lean — vốn đã thay đổi cách vận hành của các doanh nghiệp hàng đầu thế giới — và cách áp dụng vào lĩnh vực phi lợi nhuận. Bằng những ví dụ thực tế, Mark Graban và Joseph Swartz chỉ ra cách loại bỏ lãng phí, tối ưu quy trình và tạo ra tác động xã hội bền vững.',
    preview:
      'Tổ chức thiện nguyện cũng cần được vận hành chuyên nghiệp. Mỗi đồng quyên góp lãng phí là một câu chuyện đáng lẽ đã được thay đổi mà đã không xảy ra.',
    reviews: [
      {
        name: 'Bà Lê Thị Hồng',
        role: 'Giám đốc một tổ chức NGO',
        quote: 'Cuốn sách bắt buộc đối với bất kỳ ai đang điều hành tổ chức phi lợi nhuận tại Việt Nam.',
      },
    ],
    paperPrice: 220000,
    ebookTiers,
  },
  {
    id: 'to-chuc-phi-loi-nhuan-kieu-moi',
    title: 'Tổ chức phi lợi nhuận kiểu mới',
    author: 'Walter W. Powell & Richard Steinberg',
    category: 'Sách dịch',
    year: 2026,
    cover: '/images/books/img-book-3.webp',
    shortDesc: 'Bản đồ toàn cảnh khu vực phi lợi nhuận thế kỷ 21 — từ lý thuyết, lịch sử đến thực hành.',
    longDesc:
      '"The Nonprofit Sector: A Research Handbook" là công trình kinh điển của Walter Powell và Richard Steinberg, tập hợp các nghiên cứu hàng đầu về khu vực phi lợi nhuận toàn cầu. Bản dịch tiếng Việt mang đến góc nhìn đa chiều: từ kinh tế học, xã hội học, luật học đến quản trị tổ chức.',
    preview:
      'Khu vực phi lợi nhuận không phải là "khoảng trống" giữa nhà nước và thị trường. Nó là một thể chế độc lập, có logic vận hành riêng và đóng vai trò không thể thay thế trong xã hội hiện đại.',
    reviews: [
      {
        name: 'GS. Trần Quốc Việt',
        role: 'Đại học Kinh tế Quốc dân',
        quote: 'Tài liệu nền tảng cho mọi nghiên cứu sinh, giảng viên và nhà quản lý NGO tại Việt Nam.',
      },
    ],
    paperPrice: 280000,
    ebookTiers,
  },
  {
    id: 'to-chuc-phi-loi-nhuan-thong-minh',
    title: 'Tổ chức phi lợi nhuận thông minh',
    author: 'Peter F. Drucker',
    category: 'Sách dịch',
    year: 2026,
    cover: '/images/books/img-book-4.jpg',
    shortDesc: 'Tư duy quản trị Drucker dành riêng cho lãnh đạo các tổ chức thiện nguyện và xã hội dân sự.',
    longDesc:
      '"Managing the Nonprofit Organization" của bậc thầy quản trị Peter F. Drucker là cẩm nang gối đầu giường cho các nhà lãnh đạo phi lợi nhuận. Cuốn sách bàn về sứ mệnh, lãnh đạo, phát triển nguồn lực con người và đo lường hiệu quả — những vấn đề mà bất kỳ tổ chức thiện nguyện nào cũng phải đối mặt.',
    preview:
      'Tổ chức phi lợi nhuận không tồn tại vì bản thân nó. Nó tồn tại để tạo ra một sự thay đổi cụ thể trong cuộc đời của những con người cụ thể.',
    reviews: [
      {
        name: 'Ông Phạm Minh Đức',
        role: 'Chủ tịch một quỹ thiện nguyện',
        quote: 'Drucker viết về NGO chính xác như cách ông viết về doanh nghiệp — sắc bén và đầy tính nhân văn.',
      },
    ],
    paperPrice: 260000,
    ebookTiers,
  },
  {
    id: 'thien-nguyen-chuyen-bien',
    title: 'Thiện nguyện tạo chuyển biến xã hội',
    author: 'Leslie R. Crutchfield & Heather McLeod Grant',
    category: 'Sách dịch',
    year: 2026,
    cover: '/images/books/img-book-5.png',
    shortDesc: 'Sáu nguyên tắc giúp các tổ chức phi lợi nhuận tạo ra thay đổi xã hội thực sự, ở quy mô lớn.',
    longDesc:
      'Dựa trên nghiên cứu 12 tổ chức phi lợi nhuận có tác động lớn nhất Hoa Kỳ, "Forces for Good" rút ra sáu nguyên tắc chung — không phải về quy mô hay nguồn lực, mà về cách tổ chức kết nối với cộng đồng, vận động chính sách và lan tỏa tác động.',
    preview:
      'Những tổ chức tạo ra thay đổi xã hội thực sự không phải là những tổ chức lớn nhất, mà là những tổ chức biết cách khiến người khác hành động cùng họ.',
    reviews: [
      {
        name: 'Ông Trần Quang Hưng',
        role: 'Đại diện Tập đoàn Kim Oanh',
        quote: 'Đọc xong, tôi nhìn lại tất cả các chương trình thiện nguyện của Tập đoàn với một lăng kính khác.',
      },
    ],
    paperPrice: 240000,
    ebookTiers,
  },
  {
    id: 'di-de-thuong',
    title: 'Đi để thương',
    author: 'Nhiều tác giả',
    category: 'Tùy bút',
    year: 2026,
    cover: '/images/books/img-book-6.webp',
    shortDesc: 'Tùy bút về những hành trình thiện nguyện — nơi mỗi bước đi là một câu chuyện thương.',
    longDesc:
      'Tập tùy bút "Đi Để Thương" là tập hợp những lát cắt cảm xúc trong hành trình của các tác giả khi đi qua các vùng miền, gặp gỡ những phận đời, những em nhỏ. Mỗi trang viết là một lời nhắn nhẹ nhàng về lòng trắc ẩn, về việc cho đi và nhận lại.',
    preview:
      'Có những chuyến đi không phải để khám phá một vùng đất, mà để khám phá lại chính mình. Khi ta dừng lại bên một mái lá, nắm tay một đứa trẻ, ta nhận ra: đi, là để thương.',
    reviews: [
      {
        name: 'Nhà báo Nguyễn An',
        role: 'Báo Tuổi Trẻ',
        quote: 'Một tập tùy bút mỏng nhẹ nhưng đủ sức làm người đọc lặng lại giữa nhịp sống ồn ào.',
      },
      {
        name: 'TS. Lê Thị Hồng',
        role: 'Nhà nghiên cứu văn hóa',
        quote: 'Các tác giả viết bằng cả trái tim của những người đã đi nhiều, thương nhiều.',
      },
    ],
    paperPrice: 150000,
    ebookTiers,
  },
];
