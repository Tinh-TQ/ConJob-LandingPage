import AppStore from "../assets/images/App-store-icon.svg";
import GGPlay from "../assets/images/Google-play-icon.svg";
import FacebookIcon from "../assets/images/facebook-icon.svg";
import YoutubeIcon from "../assets/images/youtube-icon.svg";
import LinkedinIcon from "../assets/images/linkedin-icon.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="footer">
      <div className="footer-main">
        <div className="footer-subscribe">
          <h3 className="footer-heading">
            Đăng kí để nhận được những thông tin mới nhất!
          </h3>
          <div className="footer-action">
            <input
              type="text"
              className="footer-email"
              placeholder="Email của bạn ..."
            />
            <a href="#!" className="btn btn--subscribe">
              Đăng ký
            </a>
          </div>
        </div>
        <div className="footer-information">
          <div className="footer-col1">
            <h3 className="logo-text footer-logo">ConJob</h3>
            <ul>
              <li>Email: support@conjob.io</li>
              <li>Hỗ trợ: 1900 819 891</li>
              <li>
                5th Floor, The Manor Crown Tower, 62 To Huu St., Xuan Phu Ward.,
                Hue, VietNam
              </li>
              <li>
                Working Hours (GMT+7): 09:00 AM - 18:00 PM (Monday - Friday)
              </li>
            </ul>
          </div>
          <div className="footer-col2">
            <ul className="hover-color">
              <li>Trang chủ</li>
              <li>CONJOB PRO</li>
              <li>FAQs</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="footer-col3">
            <ul className="hover-color">
              <li>Tìm việc làm theo ngành nghề</li>
              <li>Tìm việc làm tại nhà</li>
              <li>Việc làm phổ biến</li>
            </ul>
          </div>
          <div className="footer-col4">
            <div className="footer-contact">
              <h3 className="footer-title">Kết nối với chúng tôi</h3>
              <div className="footer-icon">
              <img src={FacebookIcon} alt="facebook" />
              <img src={YoutubeIcon} alt="youtube" />
              <img src={LinkedinIcon} alt="linkedin" />
              </div>
            </div>
            <div className="footer-get-app">
              <h3 className="footer-title">Tải ứng dụng xuống</h3>
              <img src={AppStore} alt="download-appStore" />
              <img src={GGPlay} alt="download-ggPlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
