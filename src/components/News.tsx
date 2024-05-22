import New1 from "../assets/images/news1.png";
import New2 from "../assets/images/news2.png";
import New3 from "../assets/images/news3.png";
import New4 from "../assets/images/news4.png";

type Props = {};

const News = (props: Props) => {
  return (
    <section className="news">
      <div className="news-header">
        <h2 className="global-heading">
          Tin tức<span> và </span>Khuyến mãi
        </h2>
        <p className="global-text">
          Xem ứng dụng của chúng tôi đã phát triển như thế nào cùng với đó là
          những khuyến mãi đi kèm.
        </p>
      </div>
      <div className="news-main">
        <div className="news-item">
          <img src={New1} alt="new1" />
          <div className="news-content">
            <a href="#!" className="btn btn-tag">
              Mới nhất
            </a>
            <h3 className="news-title">
            Cơ hội ứng tuyển việc làm với đãi ngộ hấp dẫn tại các công ty hàng đầu
            </h3>
            <p className="news-desc">
            Trước sự phát triển vượt bậc của nền kinh tế, rất nhiều ngành nghề trở nên khan hiếm nhân lực hoặc thiếu nhân lực giỏi. Vì vậy, hầu hết các trường Đại học đều liên kết với các công ty,...
            </p>
            <a href="#!" className="news-more">
              Đọc thêm
            </a>
          </div>
        </div>
        <div className="news-list">
          <div className="news-item-small">
            <img src={New2} alt="" />
            <a href="#!" className="btn btn-mini-tag">
              Mới nhất
            </a>
            <div className="news-content">
              <h3 className="news-item-small-title">
                Đâu cần tìm việc có, đâu khó có ConJob
              </h3>
              <p className="news-item-small-desc">
                Chưa bao giờ tìm việc lại dễ dàng đến thế, bạn chỉ cần có một chiếc điện thoại, với vài cú quẹt trái phải,...
              </p>
            </div>
          </div>
          <div className="news-item-small">
            <img src={New3} alt="" />
            <a href="#!" className="btn btn-mini-tag">
              Mới nhất
            </a>
            <div className="news-content">
              <h3 className="news-item-small-title">
               Tính năng sắp ra mắt của ConJob
              </h3>
              <p className="news-item-small-desc">
                Đội ngũ của chúng tôi thời gian qua đã lắng nghe ý kiến của tất cả mọi người, nhận thấy nhu cầu kết nối rất thiết thực,...
              </p>
            </div>
          </div>
          <div className="news-item-small">
            <img src={New4} alt="" />
            <a href="#!" className="btn btn-mini-tag">
              Ưu đãi
            </a>
            <div className="news-content">
              <h3 className="news-item-small-title">
                Tham gia cùng với chúng tôi để những ưu đãi khủng *khiếp
              </h3>
              <p className="news-item-small-desc">
                Với mỗi lượt đăng tải các video, hình ảnh giới thiệu bản thân tích cực ở trên ứng dụng, bạn sẽ được dùng thử gói...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
