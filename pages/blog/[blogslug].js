import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BlogLayer from "../../src/layout/BlogLayer";
import { blogData } from './../../public/static/blog.js';
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
function blogDetails() {

  const [data, setData] = useState({});
  const router = useRouter();
  useEffect(()=>{
    if(router.isReady){
      const slug = router.query.blogslug;
        const blog = blogData.find((d) => d.slug === slug);
        setData(blog);
    }
  },[router.isReady])
  return (
     <BlogLayer>
      <div className="dizme_tm_detailsbox">
      {data && (
        <div className="box_inner">
          <div className="description_wrap">
            <div className="news_popup_informations">
              <div className="image">
                <img style={{borderRadius: "15px"}} src={data && data.img && data.img} alt="" />
              </div>
              <div className="details">
                <h3>{data && data.title}</h3>
                <span>
                  <h6 style={{paddingTop:"15px",paddingBottom:"8px", color:'#f86a44'}}>{data && data.category}</h6>
                </span>
                <div />
                <p>{data && data.description}</p>
              </div>
              <div className="text">
                {data &&
                  data.details &&
                  data.details?.map((details, i) => <div key={i}>
                    <h5 style={{paddingTop:"15px",paddingBottom:"8px",textAlign:"justify"}} key={i}>{details.example}</h5>
                  <p>{details.description}</p>
                  <SyntaxHighlighter style={atomOneDark} language="jsx"customStyle={{padding:'25px',marginTop:"10px",marginBottom:"10px"}} >
                  {details.code}
                  </SyntaxHighlighter>
                  </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
     </BlogLayer>
  );
}

export default blogDetails;
