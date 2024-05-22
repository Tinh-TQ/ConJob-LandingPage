
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-top">
          <h3 className="logo-text">ConJob</h3>
          <ul className="menu">
            <li className="menu-item">
              <a href="#!" className="menu-link">
                Sản phẩm
              </a>
            </li>
            <li className="menu-item">
              <a href="#!" className="menu-link">
                Về ConJob
              </a>
            </li>
            <li className="menu-item">
              <a href="#!" className="menu-link">
                Liên Hệ
              </a>
            </li>
          </ul>
          <div className="header-buttons">
            <a href="#!" className="btn btn--red">
              Nâng cấp ngay
            </a>
          </div>
        </div>
        <div className="header-main">
          <div className="header-content">
            <h1 className="header-heading">
              <span>Tìm việc chưa bao giờ dễ dàng đến thế, chỉ cần qua vài cú </span>
              quẹt
            </h1>
            <p className="header-desc">
            Tìm cho bạn công việc mới ngay hôm nay! Bài đăng việc làm mới mỗi ngày chỉ dành cho bạn, duyệt công việc bạn muốn và nộp đơn ở bất cứ đâu bạn muốn.
            </p>
            <div className="header-actions">
              <a href="#!" className="btn btn--red explore">
                <div className="arrow-right"></div>
                <span>Khám phá ngay</span>
              </a>
              <a href="#!" className="watch">
                <div className="watch-icon" />
                <span>Xem demo</span>
              </a>
            </div>
          </div>
          <div className="header-image">
            <img className="left-person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
