import { useEffect } from "react";
import { preloader } from "../utilits";

const PreLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      preloader();
    }, 1000);
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};
export default PreLoader;
