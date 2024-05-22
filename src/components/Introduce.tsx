import AI from "../assets/images/AI-icon.svg";
import Respon from "../assets/images/respon-icon.svg";
import Chat from "../assets/images/words-icon.svg";

type Props = {};

const Introduce = (props: Props) => {
  return (
    <div className="introduce">
      <div className="introduce-header">
        <h3 className="global-heading">
          <span>Nền tảng ứng dụng </span> kết hợp.
        </h3>
        <p className="introduce-desc global-text">
          Chúng tôi kết hợp tất cả các công cụ cần thiết để điều hành một ứng dụng
          thành công. Mang đến những ý tưởng tươi mới, phù hợp mọi lứa tuổi.
        </p>
      </div>
      <div className="introduce-list">
        <div className="introduce-item">
          <div className="introduce-icon">
            <img src={AI} alt="AI" />
          </div>
          <div className="introduce-title">Trí tuệ nhân tạo</div>
          <div className="introduce-desc">
            Chúng tôi áp dụng AI vào để duyệt các bài đăng một cách tự động,
            nhanh gọn và chính xác.
          </div>
        </div>
        <div className="introduce-item">
          <div className="introduce-icon">
            <img src={Respon} alt="AI" />
          </div>
          <div className="introduce-title">Yếu tố giải trí</div>
          <div className="introduce-desc">
            Chúng tôi sử dụng những video ngắn để thể hiện nội dung bớt nhàm chán.
          </div>
        </div>
        <div className="introduce-item">
          <div className="introduce-icon">
            <img src={Chat} alt="AI" />
          </div>
          <div className="introduce-title">Kết nối dễ dàng</div>
          <div className="introduce-desc">
            Trao đổi với bất kì ai, bất cứ thứ gì.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
