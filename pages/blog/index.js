import BlogLayer from "../../src/layout/BlogLayer"; 
import Head from "next/head";
import News from "../../src/components/News";
const Blog = () => {
  
    return (
        <BlogLayer>
          <Head>
            <title>Lagdhir | Blog</title>
          </Head>
          {/* NEWS */}
          <News /> 
        </BlogLayer>
      );

};

export default Blog;
