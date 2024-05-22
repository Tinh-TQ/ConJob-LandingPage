import Arrow from "../assets/images/arrow-2.svg";
import Woman from "../assets/images/woman.png";
import Icon from "../assets/images/arrow-3.svg";
import Star from "../assets/images/star.svg";

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <h3 className="global-caption">Phản hồi của khách hàng</h3>
        <h2 className="global-heading testimonial-heading">
          <span>Họ đã nói gì về</span> ConJob?
        </h2>
        <p className="global-text testimonial-desc">
          ConJob đã nhận được hơn 100 nghìn xếp hạng tích cực từ người dùng trên
          khắp thế giới.
        </p>
        <p className="global-text testimonial-desc">
          Nhiều bạn genZ chưa có kinh nghiệm và nhà tuyển dụng gặp khó khăn đã
          được chúng tôi hỗ trợ rất nhiều.
        </p>
        <p className="global-text testimonial-desc">
          Nếu bạn đã từng sử dụng ứng dụng này. Xin vui lòng đưa ra đánh giá của
          bạn.
        </p>
        <a href="#1" className="testimonial-btn">
          <span>Viết nhận xét</span>
          <div className="testimonial-arrow">
            <img src={Arrow} alt="arrow" />
          </div>
        </a>
      </div>
      <div className="testimonial-slider">
        <div className="testimonial-item">
          <div className="testimonial-layout">
            <div className="testimonial-image">
              <img src={Woman} alt="woman" />
              <div className="testimonial-next">
                <img src={Icon} alt="arrow" />
              </div>
              <div className="testimonial-comment">
                <p className="testimonial-text">
                  "Tôi chỉ biết nói cảm ơn rất nhiều. Nhờ ConJob mà tôi có thể
                  dễ dàng thu hút được các nhà tuyển dụng. Bạn sẽ không hối tiếc
                  khi sử dụng ứng dụng này đâu, tin tôi đi! "
                </p>
                <div className="testimonial-footer">
                  <span className="testimonial-author">Quốc Tính</span>
                  <div className="testimonial-review">
                    <div className="testimonial-star">
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                      <img src={Star} alt="star" />
                    </div>
                    <span className="testimonial-view">
                      Đánh giá điểm tuyệt đối
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
