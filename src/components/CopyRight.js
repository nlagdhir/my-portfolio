const CopyRight = ({ brandName }) => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner left">
            <div className="wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed by{" "}
                <a
                  href="https://nlagdhir.in"
                  target="_blank"
                  rel="noreferrer"  
                >
                  {brandName && brandName}
                </a>{" "}
                © {new Date().getFullYear()}
              </p> 
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
