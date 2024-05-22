import Google from "../assets/images/google.svg";
import Facebook from "../assets/images/facebook.svg";
import Netflix from "../assets/images/netflix.svg";
import Airbnb from "../assets/images/airbnb.svg";
import Amazon from "../assets/images/google.svg";
import Grab from "../assets/images/grab.svg";

const Company = () => {
  return (
    <section className="company">
      <p className="company-heading">
        Được tin dùng bởi 50+ Công Ty trên thế giới
      </p>
      <div className="company-logos">
        <div className="company-logo">
          <img src={Google} alt="google" />
        </div>
        <div className="company-logo">
          <img src={Facebook} alt="facebook" />
        </div>
        <div className="company-logo">
          <img src={Netflix} alt="netflix" />
        </div>
        <div className="company-logo">
          <img src={Airbnb} alt="airbnb" />
        </div>
        <div className="company-logo">
          <img src={Amazon} alt="amazon" />
        </div>
        <div className="company-logo">
          <img src={Grab} alt="grab" />
        </div>
      </div>
    </section>
  );
};

export default Company;
