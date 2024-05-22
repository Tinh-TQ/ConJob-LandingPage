import Matching from "../assets/images/matching.png";
import Chatting from "../assets/images/chatting.png";
import Comment from "../assets/images/comment.png";
import IconLeft from "../assets/images/icon-1.svg";

type Props = {};

const Feature = (props: Props) => {
  return (
    <section className="feature">
      <div className="feature-header">
        <h2 className="global-heading">
          Các tính năng <span>của chúng tôi.</span>
        </h2>
        <p className="global-text">
          Các tính năng đặc biệt này giúp tăng khả năng kết nối giữa ứng viên và
          nhà tuyển dụng.
        </p>
      </div>
      <div className="feature-main">
        <div className="feature-section">
          <div className="feature-image">
            <img src={Matching} alt="matching" />
          </div>
          <div className="feature-content">
            <h3 className="global-heading feature-heading">
              Matching: <span> Quẹt trái quẹt phải</span>
            </h3>
            <ul className="feature-list">
              <li className="feature-item">
                <div className="feature-icon">
                  <img src={IconLeft} alt="icon" />
                </div>
                <p className="feature-text">Quẹt phải để ứng tuyển hoặc *say hello* với vị trí hoặc người đăng đó.</p>
              </li>
              <li className="feature-item">
                <div className="feature-icon">
                  <img src={IconLeft} alt="icon" />
                </div>
                <p className="feature-text">Quẹt trái để bỏ qua với vị trí hoặc người đăng đó.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-content">
            <h3 className="global-heading feature-heading">
              Nhắn tin <span> với bất cứ ai</span>
            </h3>
            <p className="feature-text">
              Sau khi cả 2 người cùng quẹt phải để matching với nhau, hệ thống
              sẽ chuyển 2 người sang một màn hình nhắn tin, nơi cả 2 có thể
              trò chuyện, trao đổi với công việc, hay việc gì khác.
            </p>
          </div>
          <div className="feature-image">
            <img src={Chatting} alt="matching" />
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-image">
            <img src={Comment} alt="matching" />
          </div>
          <div className="feature-content">
            <h3 className="global-heading feature-heading">
              Đánh giá <span> lẫn nhau </span>
            </h3>
            <p className="global-text">
              Cả ứng viên và nhà tuyển dụng đều có thể đánh giá lẫn nhau, mang
              lại sự công bằng và tạo ra một môi trường tương tác tích cực.
            </p>
          </div>
        </div>

        <a href="#!" className="btn feature-btn">
          Xem thêm tính năng
        </a>
      </div>
    </section>
  );
};

export default Feature;
