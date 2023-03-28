const DetailsPopup = ({ open, close, data }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={data && data.img} alt="image" />
              <div
                className="main"
                data-img-url={data && data.img}
                style={{ backgroundImage: `url(${data && data.img})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{data && data.name}</h3>
              <span>
                <a style={{color:'#f75023'}} href="#">{data && data.category}</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div style={{ textAlign: "justify" }} className="textbox">
                <p>{data && data.details}</p>
                <div className="demo_button">
                  <a href={data && data.demo} target="_blank">
                    View Project
                  </a>
                </div>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>{data && data.client}</span>
                  </li>
                  <li>
                    <span className="first">Category</span>
                    <span>
                      <a href="#">{data && data.category}</a>
                    </span>
                  </li>
                  <li>
                    <span className="first">Date</span>
                    <span>
                      {data && data.date && data.date.date}{" "}
                      {data && data.date && data.date.month}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
