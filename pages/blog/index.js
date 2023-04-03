import BlogLayer from "../../src/layout/BlogLayer"; 
import Head from "next/head";
import News from "../../src/components/News";
const Blog = () => {
  
    return (
        <BlogLayer>
          <Head>
            <title>Lagdhir | Blog</title>
          </Head>
          <div style={{marginTop:"100px"}}>
          <News /> 
          </div>
          
        </BlogLayer>
      );

};

export default Blog;
