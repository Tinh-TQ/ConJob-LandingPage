import NTD from "../assets/images/ntd.png";
import UV from "../assets/images/uv.png";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about">
      <div className="about-header">
        <h3 className="global-heading">
        ConJob <span> là gì?</span>
        </h3>
        <p className="introduce-desc global-text">
          ConJob là một nền tảng kết nối việc làm, đơn giản hoá quy trình tìm
          việc cũng như tuyển dụng. Cam kết kết nối "Đúng người, đúng việc, đúng
          thời điểm".
        </p>
      </div>
      <div className="about-list">
        <div className="about-item">
          <img src={NTD} alt="" className="about-image" />
          <div className="about-content">
            <h3 className="about-title">Nhà tuyển dụng</h3>
            <a href="#!" className="btn btn--outline">
              Tìm kiếm ứng viên tài năng
            </a>
          </div>
        </div>
        <div className="about-item">
          <img src={UV} alt="" className="about-image" />
          <div className="about-content">
            <h3 className="about-title">Ứng viên</h3>
            <a href="#!" className="btn btn--about">
              Tìm kiếm việc làm phù hợp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
