import ScrollUp from '../assets/images/arrow-up.svg'

const Scrollup = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")
        if (this.scrollY >= 560) scrollUp?.classList.add("show-scroll")
        else scrollUp?.classList.remove("show-scroll")
    })
  return (
    <a href="#" className="scrollup">
        <img src={ScrollUp} className="uil uil-arrow-up scrollup__icon"></img>
    </a>
  )
}

export default Scrollup;