import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a href="/">
            <Image src="/img/logo/logo-nl.png" width={150} height={53} alt="NL logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="download_cv">
                <a
                  href="https://nlagdhir.in/images/Nilesh_Lagdhir_CV.pdf"
                  target="_blank" rel="noopener"
                >
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
