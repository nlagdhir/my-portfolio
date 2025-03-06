import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState({});
  useEffect(() => {
    dataImage();
    portfolioHover();
    fetch("static/portfolio.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup
        open={popup}
        data={popupData}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for developing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Wordpress")}`}
                  onClick={handleFilterKeyChange("Wordpress")}
                >
                  Wordpress
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Tailwind")}`}
                  onClick={handleFilterKeyChange("Tailwind")}
                >
                  Tailwind
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("React")}`}
                  onClick={handleFilterKeyChange("React")}
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("API")}`}
                  onClick={handleFilterKeyChange("API")}
                >
                  API
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {data &&
                data.map((portfolio) => (
                  <li
                    key={portfolio.id}
                    className={`${portfolio && portfolio.category} grid-item`}
                    onClick={() => {
                      setPopupData(portfolio && portfolio);
                      setPopup(true);
                    }}
                  >
                    <div>
                      <img
                        style={{
                          borderRadius: "3%",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        }}
                        src={portfolio.img}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
