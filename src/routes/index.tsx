import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ev1 from "@/assets/evidence/bai01.jpg.asset.json";
import ev2 from "@/assets/evidence/bai02.jpg.asset.json";
import ev3 from "@/assets/evidence/bai03.jpg.asset.json";
import ev4 from "@/assets/evidence/bai04.jpg.asset.json";
import ev5 from "@/assets/evidence/bai05.jpg.asset.json";

const EVIDENCE_IMG: Record<string, string> = {
  "01": ev1.url,
  "02": ev2.url,
  "03": ev3.url,
  "04": ev4.url,
  "05": ev5.url,
};

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

/* -------------------------- Data -------------------------- */

const NAV = [
  { id: "gioi-thieu", label: "Giới thiệu" },
  { id: "hanh-trinh", label: "Hành trình" },
  { id: "du-an", label: "Dự án" },
  { id: "minh-chung", label: "Minh chứng" },
  { id: "ky-nang", label: "Kỹ năng" },
  { id: "tong-ket", label: "Tổng kết" },
];

const MISSIONS = [
  { n: "01", title: "Quản lý tệp và thư mục", desc: "Tổ chức dữ liệu học tập khoa học, đặt tên tệp nhất quán.", icon: "📁" },
  { n: "02", title: "Tìm kiếm và đánh giá thông tin", desc: "Vận dụng toán tử nâng cao, đánh giá độ tin cậy của nguồn.", icon: "🔎" },
  { n: "03", title: "Viết Prompt hiệu quả", desc: "Thiết kế prompt có vai trò, bối cảnh và tiêu chí đầu ra.", icon: "✍️" },
  { n: "04", title: "Hợp tác trực tuyến", desc: "Lập kế hoạch, phân công và theo dõi tiến độ nhóm.", icon: "🤝" },
  { n: "05", title: "Sáng tạo nội dung với AI", desc: "Kết hợp AI tạo sinh với biên tập cá nhân.", icon: "🎨" },
  { n: "06", title: "AI có trách nhiệm", desc: "Xây dựng bộ nguyên tắc và tư duy phản biện khi dùng AI.", icon: "🛡️" },
];

const PROJECTS: {
  n: string;
  title: string;
  goal: string;
  steps: string[];
  tools: string[];
  evidence: string;
  analysis: string[];
  lesson: string[];
  tags: string[];
  progress: number;
}[] = [
  {
    n: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục trên File Explorer",
    goal: "Thực hành đầy đủ các thao tác quản lý tệp — tạo, đổi tên, sao chép, di chuyển, xoá và khôi phục — trên Windows File Explorer.",
    steps: [
      "Mở File Explorer (Windows + E) và truy cập ổ đĩa D: (hoặc thư mục Documents).",
      "Tạo thư mục ThucHanh_NguyenMinhNgoc và thư mục con TaiLieu bên trong.",
      "Tạo tệp GhiChu.txt rồi Rename thành GhiChuQuanTrong.txt.",
      "Copy tệp sang thư mục TaiLieu; tạo DiChuyen.txt rồi Cut & Paste sang TaiLieu.",
      "Xoá tệp vào Recycle Bin, xoá vĩnh viễn bằng Shift + Delete, và Restore lại tệp khi cần.",
    ],
    tools: ["Windows File Explorer", "Recycle Bin", "Phím tắt Ctrl+C / Ctrl+X / Ctrl+V"],
    evidence: "Ảnh chụp màn hình quá trình tạo thư mục ThucHanh_NguyenMinhNgoc, tệp GhiChuQuanTrong.txt và thao tác Copy – Cut – Delete – Restore trong File Explorer.",
    analysis: [
      "Phân biệt rõ Copy (giữ bản gốc) và Cut (chuyển hẳn) giúp tránh mất dữ liệu khi tổ chức thư mục.",
      "Recycle Bin là lớp bảo vệ; Shift + Delete xoá vĩnh viễn nên chỉ dùng khi chắc chắn.",
      "Đặt tên thư mục kèm họ tên (ThucHanh_NguyenMinhNgoc) giúp dễ nhận diện khi làm việc chung.",
    ],
    lesson: [
      "Nắm vững thao tác cơ bản với tệp là nền tảng cho mọi công việc số.",
      "Thói quen kiểm tra kỹ trước khi xoá vĩnh viễn tránh mất dữ liệu học tập.",
    ],
    tags: ["File Explorer", "Copy · Cut · Paste", "Recycle Bin"],
    progress: 100,
  },
  {
    n: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật về EVFTA",
    goal: "Tìm, tổng hợp và đánh giá độ tin cậy của các nguồn học thuật về tác động của Hiệp định EVFTA đến hoạt động xuất khẩu của Việt Nam.",
    steps: [
      "Chọn chủ đề: Tác động của EVFTA đến xuất khẩu của Việt Nam.",
      "Tìm nguồn trên Google Scholar, cơ sở dữ liệu thư viện, tạp chí khoa học, sách chuyên khảo và báo cáo của Bộ Công Thương, World Bank, WTO, OECD.",
      "Lập danh mục 10 tài liệu gồm bài báo khoa học, sách và báo cáo.",
      "Đánh giá từng nguồn theo 5 tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, số trích dẫn và tính cập nhật.",
    ],
    tools: ["Google Scholar", "Thư viện điện tử", "Báo cáo Bộ Công Thương", "World Bank", "WTO"],
    evidence: "Danh mục 10 tài liệu và bảng đánh giá độ tin cậy 10 nguồn theo 7 cột (tác giả, cơ quan, phương pháp, trích dẫn, cập nhật, đánh giá sao).",
    analysis: [
      "Tạp chí bình duyệt và tổ chức quốc tế (World Bank, WTO) đạt độ tin cậy cao nhất nhờ có kiểm định và phương pháp minh bạch.",
      "Sách chuyên khảo của Krugman và Salvatore cung cấp nền tảng lý thuyết vững cho phân tích thương mại quốc tế.",
      "Ưu tiên tài liệu 2020–2025 để phản ánh tác động mới nhất của EVFTA.",
    ],
    lesson: [
      "Kết hợp nhiều loại nguồn (bài báo, sách, báo cáo chính phủ) làm tăng tính khách quan.",
      "Đánh giá nguồn theo bộ tiêu chí giúp loại bỏ thông tin thiếu kiểm chứng trước khi trích dẫn.",
    ],
    tags: ["EVFTA", "10 nguồn học thuật", "5 tiêu chí đánh giá"],
    progress: 100,
  },
  {
    n: "03",
    title: "Thử nghiệm Prompt — Tóm tắt bài đọc học thuật",
    goal: "So sánh chất lượng ba mức prompt (cơ bản, cải tiến, nâng cao) khi yêu cầu AI tóm tắt bài báo khoa học dài về tác động của EVFTA đến thị trường chứng khoán Việt Nam.",
    steps: [
      "Chọn bài báo 13 trang: The Effects of Free Trade Agreements on the Stock Market — Evidence from Vietnam.",
      "Prompt cơ bản: “Tóm tắt bài báo này.” — nhận được bản tóm tắt ngắn, thiếu chiều sâu.",
      "Prompt cải tiến: yêu cầu chia theo phần, mỗi phần 3–5 ý, nhấn mạnh mục tiêu, cơ hội, thách thức, khuyến nghị; giới hạn 400 từ.",
      "Prompt nâng cao: gán vai trò “chuyên gia phân tích tài liệu học thuật”, mô tả các bước thực hiện và yêu cầu đầu ra rõ ràng.",
      "Lập bảng so sánh 5 tiêu chí và rút ra 10 nguyên tắc viết prompt cho bản thân.",
    ],
    tools: ["ChatGPT (đính kèm PDF)", "Prompt Engineering", "Role Prompting"],
    evidence: "Ảnh chụp ba lần chạy prompt, ba bản tóm tắt AI trả về và bảng so sánh 5 tiêu chí (rõ ràng, chi tiết, cấu trúc, chính xác, phù hợp học tập).",
    analysis: [
      "Prompt càng chi tiết và có cấu trúc, câu trả lời càng bám sát mục tiêu và ít bị lan man.",
      "Việc gán vai trò (role prompting) giúp AI chọn văn phong và mức độ chuyên môn phù hợp.",
      "Yêu cầu định dạng đầu ra (chia phần, số ý, độ dài) tăng tính có thể tái sử dụng của kết quả.",
    ],
    lesson: [
      "Prompt hiệu quả cần: mục tiêu — vai trò — bối cảnh — bước thực hiện — định dạng đầu ra.",
      "Nên chỉ rõ điều AI không được làm (không suy diễn, không thêm thông tin ngoài tài liệu).",
    ],
    tags: ["3 mức prompt", "Role prompting", "Bảng so sánh 5 tiêu chí"],
    progress: 100,
  },
  {
    n: "04",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    goal: "Với vai trò soạn thảo và biên tập nội dung, phối hợp cùng các thành viên nhóm 30 hoàn thiện báo cáo dự án bằng Google Docs, Google Drive và Zalo.",
    steps: [
      "Google Docs: soạn thảo nội dung được phân công, chỉnh sửa lỗi chính tả, tiếp nhận Comment và theo dõi Version History.",
      "Google Drive: tạo thư mục dự án, tải lên các phiên bản báo cáo, chia sẻ quyền truy cập cho toàn nhóm.",
      "Zalo (Nhóm 30): trao đổi công việc, gửi bản mới, phản hồi góp ý và thống nhất hạn hoàn thành.",
      "Sau mỗi lần chỉnh sửa lớn, lưu phiên bản mới lên Drive để nhóm dễ theo dõi.",
    ],
    tools: ["Google Docs", "Google Drive", "Zalo"],
    evidence: "Ảnh Google Drive hiển thị danh sách tệp dự án, ảnh Google Docs với Comment / Version History và ảnh nhóm Zalo trao đổi công việc.",
    analysis: [
      "Google Docs cho phép nhiều thành viên chỉnh sửa thời gian thực, giảm việc gửi qua lại nhiều phiên bản.",
      "Google Drive tập trung toàn bộ tài liệu, hạn chế thất lạc và nhầm phiên bản.",
      "Zalo giúp trao đổi nhanh vì cả nhóm đều dùng hằng ngày, tiến độ được cập nhật kịp thời.",
    ],
    lesson: [
      "Phân chia rõ phạm vi chỉnh sửa của từng thành viên tránh trùng lặp trên Docs.",
      "Kết hợp ba công cụ (soạn thảo — lưu trữ — giao tiếp) hiệu quả hơn dùng đơn lẻ.",
    ],
    tags: ["Google Docs", "Google Drive", "Zalo · Nhóm 30"],
    progress: 100,
  },
  {
    n: "05",
    title: "Ứng dụng AI tạo sinh — Infographic “Lợi ích và rủi ro của AI trong giáo dục”",
    goal: "Kết hợp ChatGPT, Google Gemini và Canva AI để hoàn thành một infographic hoàn chỉnh về lợi ích, rủi ro và nguyên tắc sử dụng AI trong giáo dục.",
    steps: [
      "ChatGPT — xây dựng nội dung: khái niệm, lợi ích, rủi ro, khuyến nghị dành cho sinh viên.",
      "Google Gemini — bổ sung, so sánh và rút gọn ý dưới dạng gạch đầu dòng phù hợp infographic.",
      "Canva AI — thiết kế infographic tông xanh dương – trắng, bố cục rõ ràng cho sinh viên.",
      "Tự chỉnh sửa: rút gọn câu, thay biểu tượng, cân đối màu sắc và bổ sung ví dụ thực tế.",
    ],
    tools: ["ChatGPT", "Google Gemini", "Canva AI"],
    evidence: "Ảnh kết quả nội dung từ ChatGPT, Gemini và bản thiết kế infographic “Blue and White Modern AI Technology” trong Canva.",
    analysis: [
      "ChatGPT tạo nội dung chi tiết, logic; Gemini bổ sung góc nhìn ngắn gọn theo bullet; Canva AI hỗ trợ bố cục và màu sắc.",
      "Kết hợp nhiều công cụ AI nâng cao chất lượng sản phẩm rõ rệt so với dùng một công cụ duy nhất.",
      "AI chỉ tạo bản nháp — chất lượng cuối cùng vẫn phụ thuộc vào khả năng biên tập, chọn lọc và sáng tạo của người dùng.",
    ],
    lesson: [
      "Trung thực về mức độ hỗ trợ của AI trong sản phẩm; luôn kiểm chứng thông tin trước khi công bố.",
      "Tôn trọng bản quyền hình ảnh, dữ liệu và không xem AI là nơi thay thế tư duy cá nhân.",
    ],
    tags: ["ChatGPT", "Gemini", "Canva AI", "Infographic"],
    progress: 100,
  },
  {
    n: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal: "Hiểu các vấn đề đạo đức khi dùng AI và xây dựng bộ nguyên tắc cá nhân.",
    steps: [
      "Đọc quy định của trường và tài liệu học thuật về đạo đức AI.",
      "Phân tích các rủi ro: đạo văn, thiên kiến thuật toán, quyền riêng tư, phụ thuộc AI.",
      "Đề xuất giải pháp giảm thiểu cho từng rủi ro.",
      "Đúc kết thành bộ 7 nguyên tắc cá nhân áp dụng trong suốt quá trình học.",
    ],
    tools: ["Tài liệu học thuật", "Quy định nhà trường", "Nguồn tham khảo chính thống"],
    evidence: "Trang \"Bộ nguyên tắc cá nhân\" và bảng phân tích 5 rủi ro đạo đức AI.",
    analysis: [
      "AI mang lại nhiều cơ hội nhưng cũng đặt ra rủi ro về đạo đức học thuật.",
      "Người học cần phát triển năng lực tự đánh giá, phản biện và kiểm chứng.",
      "Sử dụng AI có trách nhiệm bảo vệ tính trung thực, sáng tạo và chất lượng học tập.",
    ],
    lesson: [
      "Trách nhiệm số là kỹ năng cốt lõi trong thời đại AI.",
      "Sử dụng AI đúng cách giúp người học phát triển bền vững hơn.",
    ],
    tags: ["Đạo đức AI", "7 nguyên tắc", "Tư duy phản biện"],
    progress: 100,
  },
];

const SEARCH_OPERATORS = [
  { op: "site:", ex: "site:edu.vn AI giáo dục", why: "Giới hạn kết quả trong tên miền học thuật." },
  { op: "filetype:", ex: "filetype:pdf prompt engineering", why: "Chỉ lấy tài liệu PDF, thường là báo cáo/nghiên cứu." },
  { op: "intitle:", ex: "intitle:\"AI in education\"", why: "Từ khóa phải xuất hiện trong tiêu đề trang." },
  { op: "\"…\"", ex: "\"generative AI in higher education\"", why: "Buộc khớp chính xác cụm từ." },
  { op: "OR", ex: "ChatGPT OR Gemini", why: "Mở rộng kết quả sang nhiều lựa chọn tương đương." },
  { op: "-", ex: "AI giáo dục -quảng cáo", why: "Loại bỏ kết quả chứa từ không mong muốn." },
  { op: "after:", ex: "AI education after:2023", why: "Giới hạn kết quả theo mốc thời gian mới." },
];

const SOURCES = [
  { name: "Vu & Hoang — The impact of EVFTA on Vietnam's exports", org: "Journal of Asian Finance, Economics and Business", year: "2021", trust: "Rất cao", reason: "Tạp chí quốc tế bình duyệt, phương pháp định lượng.", limit: "Dữ liệu giai đoạn đầu, cần cập nhật thêm." },
  { name: "Nguyen & Tran — Opportunities and challenges of EVFTA", org: "Sustainability (MDPI)", year: "2022", trust: "Rất cao", reason: "Bình duyệt quốc tế, phương pháp định lượng.", limit: "Tập trung vào doanh nghiệp nói chung." },
  { name: "Ciuriak & Xiao — Economic impacts of EU–Vietnam FTA", org: "Journal of East Asian Economic Integration", year: "2018", trust: "Rất cao", reason: "Mô hình kinh tế, số trích dẫn rất cao.", limit: "Xuất bản trước khi EVFTA có hiệu lực." },
  { name: "Krugman, Obstfeld, Melitz — International Economics", org: "Pearson", year: "2018", trust: "Rất cao", reason: "Sách học thuật nền tảng về thương mại quốc tế.", limit: "Không đề cập trực tiếp EVFTA." },
  { name: "World Bank — Vietnam: Deepening International Integration", org: "World Bank", year: "2020", trust: "Rất cao", reason: "Báo cáo tổ chức quốc tế, dữ liệu thực nghiệm.", limit: "Bao quát nhiều FTA, không chỉ EVFTA." },
  { name: "Bộ Công Thương — Báo cáo thực hiện EVFTA", org: "Bộ Công Thương", year: "2024", trust: "Cao", reason: "Nguồn chính thống, số liệu cập nhật nhất.", limit: "Góc nhìn quản lý nhà nước, thiếu phản biện độc lập." },
];

const PROMPT_COMPARE = [
  { k: "Độ rõ ràng", a: "Thấp — chỉ một câu ngắn.", b: "Tốt — có cấu trúc từng phần.", c: "Rất tốt — có vai trò, bước thực hiện, tiêu chí." },
  { k: "Mức độ chi tiết", a: "Ít — bản tóm tắt ngắn thiếu chiều sâu.", b: "Khá đầy đủ — 3–5 ý mỗi phần.", c: "Rất đầy đủ — bám sát toàn bộ tài liệu." },
  { k: "Cấu trúc câu trả lời", a: "Chưa rõ, không chia mục.", b: "Chia theo phần chính.", c: "Chuyên nghiệp, đúng chuẩn báo cáo học thuật." },
  { k: "Tính chính xác", a: "Trung bình — thiếu kết luận quan trọng.", b: "Cao — giữ được ý cốt lõi.", c: "Rất cao — không suy diễn, bám sát tài liệu gốc." },
  { k: "Phù hợp học tập", a: "Trung bình.", b: "Tốt.", c: "Rất tốt — dùng được ngay cho báo cáo." },
];

const TEAM_TASKS = [
  { m: "Cá nhân — soạn thảo", t: "Biên soạn nội dung được phân công trên Google Docs", due: "Trong tuần", status: "Hoàn thành", note: "Theo dõi qua Version History" },
  { m: "Cá nhân — biên tập", t: "Chỉnh sửa chính tả, ngữ pháp và định dạng báo cáo", due: "Sau mỗi lần góp ý", status: "Hoàn thành", note: "Tiếp nhận qua tính năng Comment" },
  { m: "Cá nhân — lưu trữ", t: "Tải phiên bản mới lên Google Drive, sắp xếp thư mục", due: "Sau mỗi lần chỉnh sửa", status: "Hoàn thành", note: "Chia sẻ quyền cho cả nhóm" },
  { m: "Cả nhóm — thảo luận", t: "Thống nhất bố cục, hạn nộp và phân công qua Zalo", due: "Hằng ngày", status: "Đang làm", note: "Nhóm 30 — Nhập môn CNS & AI" },
  { m: "Nhóm trưởng", t: "Tổng hợp bản cuối và nộp bài", due: "Ngày nộp", status: "Chưa làm", note: "Phụ thuộc phiên bản mới nhất trên Drive" },
];



const AI_RISKS = [
  { risk: "Đạo văn / gian lận học thuật", solution: "Ghi chú rõ khi dùng AI, tự viết lại bằng ngôn ngữ cá nhân." },
  { risk: "Sai lệch thông tin (hallucination)", solution: "Kiểm chứng qua ít nhất hai nguồn độc lập." },
  { risk: "Thiên kiến thuật toán", solution: "Đọc phản biện, đối chiếu quan điểm nhiều chiều." },
  { risk: "Quyền riêng tư dữ liệu", solution: "Không nhập thông tin cá nhân, mật khẩu, dữ liệu nhạy cảm vào AI." },
  { risk: "Phụ thuộc AI", solution: "Dùng AI để hỗ trợ tư duy, không thay thế quá trình tự suy nghĩ." },
];

const PRINCIPLES = [
  "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
  "Luôn kiểm chứng thông tin do AI cung cấp trước khi sử dụng.",
  "Ghi rõ khi có sử dụng AI trong quá trình học tập.",
  "Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm vào AI.",
  "Không sao chép nguyên văn nội dung AI nếu chưa kiểm tra và chỉnh sửa.",
  "Sử dụng AI để hỗ trợ tư duy, không thay thế tư duy cá nhân.",
  "Chịu trách nhiệm cuối cùng với mọi sản phẩm học tập của bản thân.",
];

const EVIDENCES = [
  { title: "Thao tác trên File Explorer", desc: "Ảnh minh chứng thư mục ThucHanh_NguyenMinhNgoc và các tệp GhiChu / DiChuyen.", tag: "Bài 01", img: ev1.url },
  { title: "Bảng đánh giá 10 nguồn EVFTA", desc: "Danh mục tài liệu và bảng chấm sao độ tin cậy theo 7 tiêu chí.", tag: "Bài 02", img: ev2.url },
  { title: "So sánh 3 mức Prompt", desc: "Bảng so sánh prompt cơ bản – cải tiến – nâng cao theo 5 tiêu chí.", tag: "Bài 03", img: ev3.url },
  { title: "Google Drive & Zalo Nhóm 30", desc: "Ảnh Google Drive lưu tài liệu và nhóm Zalo trao đổi công việc.", tag: "Bài 04", img: ev4.url },
  { title: "Infographic AI trong giáo dục", desc: "Bản thiết kế Canva AI về lợi ích và rủi ro của AI trong giáo dục.", tag: "Bài 05", img: ev5.url },
  { title: "Bộ nguyên tắc dùng AI", desc: "7 nguyên tắc cá nhân + 5 rủi ro đạo đức AI (placeholder).", tag: "Bài 06", img: "" },
];

const SKILLS = [
  { s: "Quản lý tệp và dữ liệu số", level: 92, use: "Tổ chức toàn bộ tài liệu học tập, sao lưu đám mây." },
  { s: "Tìm kiếm thông tin học thuật", level: 90, use: "Nghiên cứu, viết tiểu luận, chuẩn bị thuyết trình." },
  { s: "Đánh giá độ tin cậy của nguồn", level: 88, use: "Sàng lọc thông tin trước khi trích dẫn." },
  { s: "Viết Prompt hiệu quả", level: 90, use: "Khai thác AI cho tóm tắt, dịch, phân tích." },
  { s: "Làm việc nhóm trực tuyến", level: 86, use: "Quản lý dự án nhóm bằng Trello / Notion." },
  { s: "Sáng tạo nội dung số bằng AI", level: 84, use: "Sản xuất video, infographic, thuyết trình." },
  { s: "Sử dụng AI có trách nhiệm", level: 94, use: "Tuân thủ đạo đức học thuật khi dùng AI." },
  { s: "Tự đánh giá và cải thiện", level: 88, use: "Phản tư sau mỗi bài tập, điều chỉnh phương pháp." },
];

/* -------------------------- Hooks -------------------------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* -------------------------- Components -------------------------- */

function PortfolioPage() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Evidence />
        <Skills />
        <Conclusion />
      </main>
      <Footer />
      {showTop && (
        <a
          href="#top"
          aria-label="Quay lại đầu trang"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-accent text-accent-foreground shadow-accent transition-transform hover:-translate-y-1"
        >
          ↑
        </a>
      )}
    </div>
  );
}

function Nav({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      id="top"
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand font-display text-primary-foreground shadow-soft">P</span>
          <span className="hidden font-display text-lg font-semibold sm:block">Portfolio Số</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#du-an"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-block"
        >
          Xem dự án
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="paper relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.15fr_1fr] md:items-center md:px-8">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Nhập môn Công nghệ số & AI
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
            Portfolio Kỹ thuật số <span className="italic text-accent">cá nhân</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
            Hành trình học tập môn <em className="not-italic font-medium text-primary">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</em> — lưu trữ, trình bày và tự đánh giá quá trình học qua các sản phẩm số đã hoàn thành.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { href: "#gioi-thieu", label: "Giới thiệu", primary: false },
              { href: "#du-an", label: "Dự án học tập", primary: true },
              { href: "#minh-chung", label: "Minh chứng", primary: false },
              { href: "#tong-ket", label: "Tổng kết", primary: false },
            ].map((b) => (
              <a
                key={b.href}
                href={b.href}
                className={
                  b.primary
                    ? "rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
                    : "rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary shadow-soft transition-colors hover:bg-secondary"
                }
              >
                {b.label}
              </a>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "06", v: "Dự án học tập" },
              { k: "07", v: "Kỹ năng số" },
              { k: "100%", v: "Bài tập hoàn thành" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card/70 p-4 shadow-soft backdrop-blur">
                <dt className="font-display text-2xl font-semibold text-primary md:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroArtwork />
      </div>
    </section>
  );
}

function HeroArtwork() {
  return (
    <div className="reveal relative">
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-brand shadow-lift" />
        <div className="absolute -right-4 -top-4 h-32 w-32 rounded-3xl bg-accent-soft shadow-accent" />
        <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-primary-soft shadow-soft" />
        <div className="absolute inset-6 rounded-[2rem] bg-card/95 p-6 shadow-lift backdrop-blur">
          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <span>./portfolio</span>
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              <span className="h-2 w-2 rounded-full bg-primary/40" />
              <span className="h-2 w-2 rounded-full bg-primary/20" />
            </span>
          </div>
          <div className="mt-4 space-y-3">
            {MISSIONS.slice(0, 4).map((m) => (
              <div key={m.n} className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-3 py-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-lg">{m.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-primary">{m.title}</div>
                  <div className="mt-1 h-1 rounded-full bg-secondary">
                    <div className="h-1 rounded-full bg-gradient-accent" style={{ width: `${70 + Number(m.n) * 5}%` }} />
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-accent/40 bg-accent-soft/60 px-3 py-2.5 text-xs font-medium text-accent">
              + 02 dự án nâng cao về sáng tạo AI & đạo đức AI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
  tone?: "default" | "surface" | "surface-2";
}) {
  const bg = tone === "surface" ? "bg-surface" : tone === "surface-2" ? "bg-surface-2" : "bg-background";
  return (
    <section id={id} className={`${bg} scroll-mt-24 py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl text-balance md:text-5xl">{title}</h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="gioi-thieu"
      eyebrow="Giới thiệu"
      title={<>Xin chào, mình là <span className="italic text-accent">sinh viên số</span>.</>}
      intro="Portfolio là bức chân dung học tập của mình — nơi hệ thống hóa các bài tập, chứng minh năng lực dùng công cụ số và AI, và rèn luyện thói quen tự đánh giá."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-lift">
          <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-brand font-display text-4xl text-primary-foreground shadow-lift">
            SV
          </div>
          <div className="mt-6 space-y-3 text-sm">
            <Row k="Họ và tên" v="\n" />
            <Row k="Ngành học" v="\n" />
            <Row k="Trường / Lớp" v="\n" />
            <Row k="Môn học" v="Nhập môn CNS & AI" />
            <Row k="Năm học" v="2025 – 2026" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Công nghệ số", "AI tạo sinh", "Sáng tạo nội dung", "Quản lý dữ liệu", "Làm việc nhóm"].map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{t}</span>
            ))}
          </div>
        </div>

        <div className="reveal grid gap-4 sm:grid-cols-2">
          {[
            { t: "Hệ thống hoá bài tập", d: "Tập hợp toàn bộ 6 bài tập cuối kỳ vào một nơi duy nhất." },
            { t: "Chứng minh năng lực", d: "Trình bày cách vận dụng công cụ số và AI vào từng nhiệm vụ." },
            { t: "Lưu trữ & chia sẻ", d: "Dễ dàng truy cập, cập nhật và phát triển sản phẩm trong tương lai." },
            { t: "Phản tư bản thân", d: "Rèn kỹ năng phân tích, phản biện và tự đánh giá quá trình học." },
          ].map((g) => (
            <div key={g.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">◆</div>
              <div className="font-display text-lg font-semibold">{g.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-border pb-2">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium text-primary">{v}</span>
    </div>
  );
}

function Journey() {
  return (
    <Section
      id="hanh-trinh"
      eyebrow="Tổng quan dự án"
      title={<>Hành trình <span className="italic text-accent">6 nhiệm vụ</span> học tập</>}
      intro="Sáu nhiệm vụ nối tiếp nhau, đi từ kỹ năng nền tảng đến năng lực nâng cao trong việc sử dụng AI có trách nhiệm."
      tone="surface"
    >
      <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MISSIONS.map((m, i) => (
          <li
            key={m.n}
            className="reveal group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-2xl">{m.icon}</span>
              <span className="font-display text-sm font-semibold text-accent">Nhiệm vụ {m.n}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">{m.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            <a
              href={`#du-an-${m.n}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-transform group-hover:translate-x-1"
            >
              Xem chi tiết →
            </a>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="du-an"
      eyebrow="Dự án học tập"
      title={<>Sáu dự án — <span className="italic text-accent">một bức tranh năng lực</span></>}
      intro="Mỗi dự án được trình bày thống nhất: mục tiêu, quy trình, công cụ, minh chứng, phân tích và bài học rút ra."
    >
      <div className="space-y-10">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p, index }: { p: (typeof PROJECTS)[number]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <article
      id={`du-an-${p.n}`}
      className="reveal scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-lift"
    >
      <div className={`grid gap-0 md:grid-cols-[1fr_1.35fr] ${isEven ? "" : "md:[&>*:first-child]:order-2"}`}>
        <div className="relative bg-gradient-brand p-8 text-primary-foreground md:p-10">
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              Bài {p.n}
            </span>
            <span className="font-display text-6xl font-semibold opacity-30 md:text-8xl">{p.n}</span>
          </div>
          <h3 className="mt-6 font-display text-2xl leading-tight md:text-3xl">{p.title}</h3>
          <p className="mt-4 text-sm text-primary-foreground/85 md:text-base">{p.goal}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full bg-primary-foreground/12 px-3 py-1 text-xs font-medium backdrop-blur">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
              <span>Tiến độ</span>
              <span>{p.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-primary-foreground/15">
              <div className="h-2 rounded-full bg-gradient-accent" style={{ width: `${p.progress}%` }} />
            </div>
          </div>

          <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">Công cụ sử dụng</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <span key={t} className="rounded-md border border-primary-foreground/25 px-2 py-1 text-xs">{t}</span>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <Block title="Quá trình thực hiện">
            <ol className="space-y-2.5">
              {p.steps.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/85">
                  <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-secondary text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Phân tích kết quả">
            <ul className="space-y-2 text-sm text-foreground/85">
              {p.analysis.map((a, i) => (
                <li key={i} className="flex gap-2"><span className="text-accent">▸</span>{a}</li>
              ))}
            </ul>
          </Block>

          <Block title="Bài học rút ra">
            <ul className="space-y-2 text-sm text-foreground/85">
              {p.lesson.map((a, i) => (
                <li key={i} className="flex gap-2"><span className="text-accent">✦</span>{a}</li>
              ))}
            </ul>
          </Block>

          {p.n === "02" && <SearchOperators />}
          {p.n === "02" && <SourceTable />}
          {p.n === "03" && <PromptCompare />}
          {p.n === "04" && <TeamTable />}
          {p.n === "05" && <AIWorkflow />}
          {p.n === "06" && <ResponsibleAI />}

          <EvidenceBox note={p.evidence} tag={`Bài ${p.n}`} img={EVIDENCE_IMG[p.n]} />
        </div>
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 first:mt-0">
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">{title}</h4>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function EvidenceBox({ note, tag, img }: { note: string; tag: string; img?: string }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border-2 border-dashed border-accent/35 bg-accent-soft/40">
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">Minh chứng · {tag}</span>
        <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold text-accent-foreground">
          {img ? "ẢNH THẬT" : "PLACEHOLDER"}
        </span>
      </div>
      {img && (
        <div className="mt-3 border-y border-accent/20 bg-background/50">
          <img
            src={img}
            alt={`Minh chứng ${tag}`}
            loading="lazy"
            className="mx-auto block max-h-[520px] w-full object-contain"
          />
        </div>
      )}
      <div className="px-5 pb-4 pt-3">
        <p className="text-sm text-foreground/80">{note}</p>
        {!img && (
          <p className="mt-1 text-xs italic text-muted-foreground">→ Thay khu vực này bằng ảnh chụp màn hình / liên kết sản phẩm thật.</p>
        )}
      </div>
    </div>
  );
}

function SearchOperators() {
  return (
    <Block title="Bộ toán tử tìm kiếm nâng cao (7 toán tử)">
      <div className="grid gap-2 sm:grid-cols-2">
        {SEARCH_OPERATORS.map((o) => (
          <div key={o.op} className="rounded-xl border border-border bg-surface p-3">
            <div className="flex items-center gap-2">
              <code className="rounded bg-primary px-2 py-0.5 font-mono text-xs text-primary-foreground">{o.op}</code>
              <span className="text-xs text-muted-foreground">{o.ex}</span>
            </div>
            <p className="mt-1.5 text-xs text-foreground/80">{o.why}</p>
          </div>
        ))}
      </div>
    </Block>
  );
}

function SourceTable() {
  return (
    <Block title="Bảng đánh giá nguồn (5 nguồn)">
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-xs">
          <thead className="bg-secondary text-primary">
            <tr>
              {["Nguồn", "Tổ chức", "Năm", "Độ tin cậy", "Lý do", "Hạn chế"].map((h) => (
                <th key={h} className="px-3 py-2 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SOURCES.map((s) => (
              <tr key={s.name} className="border-t border-border align-top">
                <td className="px-3 py-2 font-medium text-primary">{s.name}</td>
                <td className="px-3 py-2 text-muted-foreground">{s.org}</td>
                <td className="px-3 py-2 text-muted-foreground">{s.year}</td>
                <td className="px-3 py-2">
                  <span className={
                    s.trust === "Rất cao" || s.trust === "Cao"
                      ? "rounded-full bg-primary-soft px-2 py-0.5 text-primary"
                      : s.trust === "Trung bình"
                        ? "rounded-full bg-secondary px-2 py-0.5 text-primary"
                        : "rounded-full bg-accent-soft px-2 py-0.5 text-accent"
                  }>{s.trust}</span>
                </td>
                <td className="px-3 py-2 text-foreground/80">{s.reason}</td>
                <td className="px-3 py-2 text-foreground/80">{s.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

function PromptCompare() {
  return (
    <Block title="So sánh 3 mức Prompt (cơ bản – cải tiến – nâng cao)">
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-xs">
          <thead className="bg-secondary text-primary">
            <tr>
              <th className="px-3 py-2 font-semibold">Tiêu chí</th>
              <th className="px-3 py-2 font-semibold">Prompt cơ bản</th>
              <th className="px-3 py-2 font-semibold">Prompt cải tiến</th>
              <th className="px-3 py-2 font-semibold">Prompt nâng cao</th>
            </tr>
          </thead>
          <tbody>
            {PROMPT_COMPARE.map((r) => (
              <tr key={r.k} className="border-t border-border align-top">
                <td className="px-3 py-2 font-medium text-primary">{r.k}</td>
                <td className="px-3 py-2 text-muted-foreground">{r.a}</td>
                <td className="px-3 py-2 text-foreground/85">{r.b}</td>
                <td className="px-3 py-2 text-foreground/85">{r.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        <strong className="text-primary">Nhận xét:</strong> Prompt càng chi tiết, có vai trò và quy định định dạng đầu ra thì kết quả càng bám sát mục tiêu học tập và ít bị lan man.
      </p>
    </Block>
  );
}

function TeamTable() {
  const badge = (s: string) => {
    const map: Record<string, string> = {
      "Hoàn thành": "bg-primary-soft text-primary",
      "Đang làm": "bg-secondary text-primary",
      "Cần chỉnh sửa": "bg-accent-soft text-accent",
      "Chưa làm": "bg-muted text-muted-foreground",
    };
    return <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${map[s]}`}>{s}</span>;
  };
  return (
    <Block title="Bảng phân công công việc nhóm (Kanban)">
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-xs">
          <thead className="bg-secondary text-primary">
            <tr>
              {["Thành viên", "Nhiệm vụ", "Hạn", "Trạng thái", "Ghi chú"].map((h) => (
                <th key={h} className="px-3 py-2 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TEAM_TASKS.map((t) => (
              <tr key={t.t} className="border-t border-border">
                <td className="px-3 py-2 font-medium text-primary">{t.m}</td>
                <td className="px-3 py-2 text-foreground/85">{t.t}</td>
                <td className="px-3 py-2 text-muted-foreground">{t.due}</td>
                <td className="px-3 py-2">{badge(t.status)}</td>
                <td className="px-3 py-2 text-muted-foreground">{t.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Block>
  );
}

function AIWorkflow() {
  const steps = [
    { s: "Lên ý tưởng", h: "Con người", a: "Xác định khái niệm & thông điệp" },
    { s: "Viết kịch bản", h: "AI + Con người", a: "AI đề xuất, người biên tập" },
    { s: "Tạo hình ảnh / giọng đọc", h: "AI", a: "DALL·E / TTS tạo bản nháp" },
    { s: "Dựng video", h: "Con người", a: "CapCut / Canva ghép hoàn thiện" },
    { s: "Kiểm tra chất lượng", h: "Con người", a: "Đối chiếu tính chính xác học thuật" },
    { s: "Hoàn thiện & xuất bản", h: "Con người", a: "Chuẩn hoá thương hiệu, đăng tải" },
  ];
  return (
    <Block title="Quy trình sản xuất nội dung với AI (6 bước)">
      <ol className="grid gap-2 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.s} className="rounded-xl border border-border bg-surface p-3">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-accent text-[11px] font-semibold text-accent-foreground">{i + 1}</span>
              <span className="text-sm font-semibold text-primary">{s.s}</span>
              <span className="ml-auto rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent">{s.h}</span>
            </div>
            <p className="mt-1.5 text-xs text-foreground/80">{s.a}</p>
          </li>
        ))}
      </ol>
    </Block>
  );
}

function ResponsibleAI() {
  return (
    <>
      <Block title="Phân tích 5 rủi ro đạo đức khi dùng AI">
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-xs">
            <thead className="bg-secondary text-primary">
              <tr>
                <th className="px-3 py-2 font-semibold">Rủi ro</th>
                <th className="px-3 py-2 font-semibold">Giải pháp đề xuất</th>
              </tr>
            </thead>
            <tbody>
              {AI_RISKS.map((r) => (
                <tr key={r.risk} className="border-t border-border align-top">
                  <td className="px-3 py-2 font-medium text-accent">{r.risk}</td>
                  <td className="px-3 py-2 text-foreground/85">{r.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>
      <Block title="Bộ nguyên tắc cá nhân — 7 điều">
        <ol className="grid gap-2 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-border bg-surface-2 p-3 text-sm text-foreground/85">
              <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-accent text-[11px] font-semibold text-accent-foreground">{i + 1}</span>
              {p}
            </li>
          ))}
        </ol>
      </Block>
    </>
  );
}

function Evidence() {
  return (
    <Section
      id="minh-chung"
      eyebrow="Minh chứng"
      title={<>Thư viện <span className="italic text-accent">minh chứng</span> học tập</>}
      intro="Mỗi minh chứng gắn với một bài tập cụ thể — có thể thay bằng ảnh/video thật khi nộp bài."
      tone="surface-2"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EVIDENCES.map((e, i) => (
          <article
            key={e.title}
            className="reveal group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-brand">
              <div className="absolute inset-0 opacity-25" style={{
                backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px, 32px 32px",
              }} />
              <div className="absolute inset-0 grid place-items-center">
                <span className="rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur">
                  {e.tag} · Placeholder
                </span>
              </div>
              <div className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                Minh chứng
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-primary">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              <a
                href={`#du-an-${e.tag.replace("Bài ", "")}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-transform group-hover:translate-x-1"
              >
                Xem chi tiết →
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="ky-nang"
      eyebrow="Kỹ năng đạt được"
      title={<>Bức tranh <span className="italic text-accent">năng lực số</span> sau môn học</>}
      intro="Mỗi kỹ năng đi kèm mức độ thành thạo và ứng dụng thực tế trong học tập."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((s, i) => (
          <div
            key={s.s}
            className="reveal rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">{s.s}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.use}</p>
              </div>
              <span className="font-display text-2xl font-semibold text-accent">{s.level}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-secondary">
              <div className="h-2 rounded-full bg-gradient-accent transition-all" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Conclusion() {
  return (
    <Section
      id="tong-ket"
      eyebrow="Tổng kết"
      title={<>Nhìn lại — và <span className="italic text-accent">bước tiếp theo</span></>}
      tone="surface"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-lift md:p-10">
          <p className="font-display text-xl leading-relaxed text-primary md:text-2xl">
            "Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không chỉ lưu trữ các sản phẩm học tập mà còn nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số, tư duy phản biện và khả năng sử dụng AI có trách nhiệm."
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Portfolio giúp em hiểu rằng trong môi trường học tập hiện đại, công nghệ không chỉ là công cụ hỗ trợ mà còn là phương tiện để người học thể hiện năng lực, sự sáng tạo và thái độ học tập nghiêm túc. Những kỹ năng như quản lý dữ liệu, tìm kiếm học thuật, viết prompt, làm việc nhóm trực tuyến và đánh giá đạo đức AI sẽ tiếp tục có giá trị trong học tập, nghiên cứu và công việc tương lai.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ConclusionBlock title="Điều tâm đắc nhất">
              Hiểu rằng AI mạnh nhất khi kết hợp với tư duy con người — và Portfolio chính là bằng chứng sống động cho sự hợp tác đó.
            </ConclusionBlock>
            <ConclusionBlock title="Định hướng tương lai">
              Tiếp tục duy trì Portfolio; áp dụng kỹ năng số vào học tập, nghiên cứu; xem AI là trợ lý có trách nhiệm.
            </ConclusionBlock>
          </div>
        </div>

        <div className="reveal space-y-4">
          <ChallengeCard
            title="Khó khăn đã gặp"
            items={[
              "Sắp xếp nội dung sao cho khoa học và mạch lạc.",
              "Đánh giá độ tin cậy của thông tin trên internet.",
              "Viết prompt đủ rõ ràng để AI hiểu đúng ý.",
              "Cân bằng giữa dùng AI và tư duy cá nhân.",
            ]}
            tone="accent"
          />
          <ChallengeCard
            title="Cách khắc phục"
            items={[
              "Lập kế hoạch chi tiết trước khi bắt tay vào làm.",
              "Kiểm chứng thông tin từ ít nhất 2 nguồn độc lập.",
              "So sánh nhiều phiên bản prompt trước khi chọn.",
              "Luôn chỉnh sửa và cá nhân hoá đầu ra của AI.",
            ]}
            tone="primary"
          />
        </div>
      </div>
    </Section>
  );
}

function ConclusionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">{title}</div>
      <p className="mt-2 text-sm text-foreground/85">{children}</p>
    </div>
  );
}

function ChallengeCard({ title, items, tone }: { title: string; items: string[]; tone: "accent" | "primary" }) {
  const isAccent = tone === "accent";
  return (
    <div className={`rounded-2xl border p-6 shadow-soft ${isAccent ? "border-accent/25 bg-accent-soft/40" : "border-primary/20 bg-primary-soft/40"}`}>
      <h3 className={`font-display text-lg font-semibold ${isAccent ? "text-accent" : "text-primary"}`}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-foreground/85">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className={isAccent ? "text-accent" : "text-primary"}>●</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-accent font-display text-lg text-accent-foreground shadow-accent">P</span>
            <span className="font-display text-xl font-semibold">Portfolio Kỹ thuật số cá nhân</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Thông tin</div>
          <ul className="mt-3 space-y-1.5 text-primary-foreground/85">
            <li>Sinh viên: <span className="font-medium">[Điền tên của bạn]</span></li>
            <li>Môn: Nhập môn CNS & AI</li>
            <li>Năm học: 2025 – 2026</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">Liên hệ</div>
          <ul className="mt-3 space-y-1.5 text-primary-foreground/85">
            <li>Email: <span className="font-medium">your.email@example.com</span></li>
            <li>Trường: <span className="font-medium">[Điền trường/lớp]</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/60 md:px-8">
          <span>© 2026 Portfolio Kỹ thuật số cá nhân.</span>
          <span>Made with intent · Human + AI collaboration</span>
        </div>
      </div>
    </footer>
  );
}
