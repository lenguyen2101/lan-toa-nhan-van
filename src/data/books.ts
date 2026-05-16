export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  year: number;
  cover: string;
  shortDesc: string;
  longDesc: string;
  preview?: string;
  quotes?: string[];
  previewUrl?: string;
  reviews: { name: string; role: string; quote: string }[];
  paperPrice: number;
  ebookTiers: number[];
};

export const ebookTiers = [20000, 50000, 70000, 100000];

export const books: Book[] = [
  {
    id: 'di-de-thuong',
    title: 'Đi để thương',
    author: 'Đức Liên',
    category: 'Tuỳ bút',
    year: 2026,
    cover: '/images/books/di-de-thuong.jpg',
    shortDesc: 'Tuỳ bút về những hành trình thiện nguyện — nơi mỗi bước đi là một câu chuyện thương.',
    longDesc:
      '"Đi để thương" không chỉ là cuốn sách ghi lại những cuộc đồng hành hơn 5 năm qua của tác giả — nhà báo Đức Liên cùng đồng đội trong các hoạt động thiện nguyện, mà còn là những tâm tư chia sẻ đầy tính nhân văn và trách nhiệm cộng đồng khiến bạn đọc rưng rưng xúc động, muốn tự thắp lên ngọn lửa từ tâm trong trái tim mình.',
    previewUrl: 'https://drive.google.com/file/d/1aI8NJs7x8VzPKz6AY7Li4ZDRF6wRvyjf/view?usp=sharing',
    reviews: [],
    paperPrice: 135000,
    ebookTiers,
  },
  {
    id: 'tac-dong-tinh-gon',
    title: 'Tác động tinh gọn',
    author: 'Ann Mei Chang',
    category: 'Sách dịch',
    year: 2025,
    cover: '/images/books/tac-dong-tinh-gon.jpg',
    shortDesc: 'Cách đổi mới để mang lại lợi ích xã hội lớn hơn.',
    longDesc:
      'Cuốn sách đặt trọng tâm vào tư duy đổi mới trong giải quyết các vấn đề xã hội. Thay vì bắt đầu bằng những kế hoạch lớn nhưng thiếu kiểm chứng, sách đề xuất cách tiếp cận: bắt đầu nhỏ, học nhanh, tầm nhìn lớn.\n\n' +
      'Thông điệp chính của cuốn sách là: muốn tạo tác động xã hội lớn hơn, các tổ chức cần hiểu đúng vấn đề, thử nghiệm nhanh, học hỏi liên tục và cải tiến cách tiếp cận. Đây là tư duy rất gần với khởi nghiệp tinh gọn, nhưng được ứng dụng vào lĩnh vực xã hội và thiện nguyện.\n\n' +
      'Giá trị truyền thông có thể khai thác: Cuốn sách giúp người đọc hiểu rằng thiện nguyện hiệu quả không bắt đầu từ việc làm thật nhiều, mà từ việc làm đúng vấn đề, đúng cách và liên tục học hỏi để cải thiện tác động.\n\n' +
      'Thông điệp rút ra: Muốn tạo thay đổi lớn, hãy bắt đầu bằng cách học đúng từ những bước nhỏ.',
    quotes: [
      'Hãy trung thành với vấn đề bạn muốn giải quyết, chứ đừng trung thành với một giải pháp cụ thể được đưa ra.',
      'Không ai có thể một mình thay đổi thế giới, nhưng một thế giới thay đổi cần sự chung tay của tất cả mọi người.',
      'Thành công cuối cùng không được đo bằng số tiền huy động được, mà bằng tác động bền vững bạn tạo ra.',
    ],
    previewUrl: 'https://drive.google.com/file/d/1ZrnFr2la5U6H-NXL8zyozTRhiBDpH1Bv/view?usp=sharing',
    reviews: [
      {
        name: 'Jacqueline Novogratz',
        role: 'CEO, Acumen',
        quote:
          'Hãy chạy, đừng đi bộ, để mua cuốn sách này nếu bạn quan tâm đến đổi mới hoặc đơn giản là tìm kiếm giải pháp cho những vấn đề hiện nay của thế giới. "Tác động tinh gọn" thông minh và sâu sắc, kết hợp giữa lý trí và trái tim, thực tiễn nhưng vẫn đầy hy vọng.',
      },
    ],
    paperPrice: 239000,
    ebookTiers,
  },
  {
    id: 'thien-nguyen-chuyen-bien',
    title: 'Thiện nguyện tạo chuyển biến xã hội',
    author: 'Leslie R. Crutchfield & Heather McLeod Grant',
    category: 'Sách dịch',
    year: 2026,
    cover: '/images/books/thien-nguyen-chuyen-bien.jpg',
    shortDesc: 'Cách các nhà tài trợ, hội đồng quản trị và tổ chức phi lợi nhuận có thể chuyển biến cộng đồng.',
    longDesc:
      'Cuốn sách mở rộng cách hiểu về thiện nguyện: thiện nguyện không chỉ là những khoản đóng góp đơn lẻ, mà có thể là một hình thức đầu tư chiến lược cho cộng đồng.\n\n' +
      'Điểm cốt lõi của sách là sự khác biệt giữa tài trợ giao dịch và tài trợ chuyển đổi. Nếu tài trợ giao dịch thường chỉ giải quyết nhu cầu trước mắt, thì tài trợ chuyển đổi hướng đến kết quả dài hạn: tăng năng lực tổ chức, nâng cao chất lượng phục vụ cộng đồng và giúp nhà tài trợ tham gia sâu hơn vào vấn đề họ quan tâm.\n\n' +
      'Giá trị truyền thông có thể khai thác: Cuốn sách đặc biệt phù hợp với nhà tài trợ, doanh nghiệp, người làm CSR, hội đồng quản trị và các tổ chức phi lợi nhuận đang muốn chuyển từ "cho đi" sang đồng hành tạo chuyển biến.\n\n' +
      'Thông điệp rút ra: Thiện nguyện không chỉ là cho đi, mà là cùng đầu tư cho một cộng đồng tốt đẹp hơn.',
    quotes: [
      'Thước đo của một tổ chức không nằm ở quy mô, mà ở tầm quan trọng của sứ mệnh.',
      'Các khoản tài trợ mang tính chuyển đổi cần được nhìn nhận như khởi đầu của một mối quan hệ mới, chứ không phải điểm kết thúc của giao dịch.',
      'Các nhà đầu tư đặt tiền của mình vào những tổ chức vững chắc, có kết quả. Các tổ chức gây quỹ không phải vì họ có nhu cầu, mà vì họ có khả năng đáp ứng nhu cầu.',
    ],
    previewUrl: 'https://drive.google.com/file/d/1uAqgETTFSaqJOZx6lBNEzXT7TG3rhb1U/view?usp=sharing',
    reviews: [
      {
        name: 'Claude Rosenberg',
        role: 'Nhà sáng lập, NewTithing Group',
        quote:
          'Cuốn sách là một cẩm nang hướng dẫn hiệu quả và mạch lạc cho việc lập kế hoạch chiến lược tài trợ chủ đạo, vận động các khoản tài trợ chủ đạo từ cá nhân một cách thân thiện và hiệu quả, và tích hợp nhiệm vụ thiết yếu này vào cấu trúc của một tổ chức phi lợi nhuận.',
      },
    ],
    paperPrice: 289000,
    ebookTiers,
  },
  {
    id: 'to-chuc-phi-loi-nhuan-kieu-moi',
    title: 'Tổ chức phi lợi nhuận kiểu mới',
    author: 'Walter W. Powell & Richard Steinberg',
    category: 'Sách dịch',
    year: 2026,
    cover: '/images/books/to-chuc-phi-loi-nhuan-kieu-moi.jpg',
    shortDesc: 'Vận dụng tư duy doanh nghiệp thành công trong lĩnh vực phi lợi nhuận.',
    longDesc:
      'Cuốn sách đưa tư duy quản trị doanh nghiệp vào khu vực phi lợi nhuận, nhưng không theo nghĩa thương mại hoá hoạt động xã hội. Thay vào đó, sách cho thấy các tổ chức vì lợi ích xã hội cũng cần mục tiêu rõ ràng, đo lường kết quả, trách nhiệm giải trình, định hướng người thụ hưởng và năng lực thực thi bền bỉ.\n\n' +
      'Điểm mạnh của cuốn sách là đặt câu hỏi về hiệu quả thực chất. Một chương trình xã hội không nên chỉ đo bằng số người tham gia hay số hoạt động được tổ chức, mà cần đo bằng kết quả thật sự: người thụ hưởng có cải thiện cuộc sống không, có việc làm ổn định không, có thoát nghèo bền vững không.\n\n' +
      'Giá trị truyền thông có thể khai thác: Cuốn sách giúp thay đổi nhận thức rằng tổ chức thiện nguyện không chỉ cần trái tim nhân ái, mà còn cần hệ thống vận hành nghiêm túc, thông minh và có trách nhiệm.\n\n' +
      'Thông điệp rút ra: Lòng tốt cần một hệ thống đủ hiệu quả để biến thiện chí thành kết quả.',
    quotes: [
      'Chúng ta không thể tiên đoán tương lai, nhưng nhất thiết phải sẵn sàng học hỏi từ những gì sẽ diễn ra.',
      'Điều người nghèo cần không phải là sự từ thiện mà là nguồn vốn; không phải là nhân viên công tác xã hội mà là những người cộng sự.',
    ],
    previewUrl: 'https://drive.google.com/file/d/1dn72r2kcM2fW1jG77KXXqQZ6Z1mn2aVM/view?usp=sharing',
    reviews: [
      {
        name: 'David Abrams',
        role: 'Phó Chủ tịch, North Memorial Health Care',
        quote:
          'Là một khách hàng của Twin Cities RISE!, tôi có thể khẳng định rằng bảy nguyên tắc trong "Tổ chức phi lợi nhuận kiểu mới" thực sự hiệu quả. RISE! cung cấp đúng mẫu nhân sự mà doanh nghiệp nào cũng cần để thành công: tự giác, tích cực, thạo việc, làm việc năng suất và trưởng thành về cảm xúc.',
      },
    ],
    paperPrice: 249000,
    ebookTiers,
  },
  {
    id: 'to-chuc-phi-loi-nhuan-thong-minh',
    title: 'Tổ chức phi lợi nhuận thông minh',
    author: 'Beth Kanter & Allison Fine',
    category: 'Sách dịch',
    year: 2026,
    cover: '/images/books/to-chuc-phi-loi-nhuan-thong-minh.jpg',
    shortDesc: 'Giữ con người làm trung tâm trong thế giới tự động hoá.',
    longDesc:
      'Cuốn sách bàn về vai trò của AI, tự động hoá và công nghệ trong khu vực phi lợi nhuận. Điểm đáng chú ý là sách không xem công nghệ như "phép màu", mà đặt câu hỏi: làm sao để sử dụng công nghệ một cách có chủ đích, có đạo đức và không đánh mất giá trị nhân văn?\n\n' +
      'Sách nhấn mạnh rằng công nghệ có thể giúp tổ chức vận hành hiệu quả hơn, tiết kiệm thời gian, cải thiện gây quỹ, quản trị dữ liệu và chăm sóc quan hệ với nhà tài trợ. Tuy nhiên, mục tiêu cuối cùng không phải là thay thế con người, mà là giải phóng thời gian để con người làm tốt hơn những việc con người làm tốt nhất: lắng nghe, thấu hiểu, sáng tạo, kết nối và chăm sóc cộng đồng.\n\n' +
      'Giá trị truyền thông có thể khai thác: Cuốn sách rất phù hợp với bối cảnh hiện nay, khi AI và chuyển đổi số đang trở thành thực tế. Nó giúp định vị thiện nguyện trong thời đại mới: hiệu quả hơn nhờ công nghệ, nhưng vẫn nhân văn vì con người là trung tâm.\n\n' +
      'Thông điệp rút ra: Công nghệ chỉ có ý nghĩa khi giúp con người tạo ra tác động nhân văn hơn.',
    quotes: [
      'Ứng dụng công nghệ thông minh không phải là giúp tổ chức vận hành nhanh hơn, mà là giúp tổ chức giải quyết vấn đề tốt hơn và chăm sóc con người một cách nhân văn hơn.',
      'Robot có thể mô phỏng sự đồng cảm, nhưng không bao giờ thực sự yêu thương. Đó là ranh giới cuối cùng của nhân tính.',
      'Công nghệ có thể học sau một đêm, nhưng con người cần được đồng hành, thấu cảm và thời gian, đó mới là nghệ thuật của lãnh đạo.',
    ],
    previewUrl: 'https://drive.google.com/file/d/1l6HXPQhwdd_IJ1zh8iU_IIgPGTZXqqiA/view?usp=sharing',
    reviews: [
      {
        name: 'Carlos Miranda',
        role: 'Đồng sáng lập và Chủ tịch, Lightful',
        quote:
          'AI và công nghệ thông minh hiện diện trong đời sống hằng ngày của chúng ta. Càng ngày, chúng càng trở thành yếu tố trung tâm của mọi lĩnh vực, bao gồm cả tổ chức phi lợi nhuận. Trong cuốn sách này, Beth và Allison làm sáng tỏ tiềm năng hiện tại và tương lai của công nghệ thông minh trong việc thúc đẩy mục tiêu xã hội và môi trường.',
      },
    ],
    paperPrice: 289000,
    ebookTiers,
  },
];
