import Link from 'next/link';
import { blogData } from './../../public/static/blog';

const News = () => {
  
  const data = blogData;
  return (
    <div className="dizme_tm_section" id="blog">
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>From My Blog</span>
            <h3>{`Our Recent Updates, Blog, Tips, Tricks & More`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {data &&
                data.map((blog, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <Link href={`blog/${blog.slug}`}>
                    <div  className="list_inner">
                    <a>
                    <div className="image">
                          <img src="img/thumbs/42-29.jpg" alt="image" />
                          <div
                            className="main"
                            data-img-url={blog && blog.img}
                            style={{
                              backgroundImage: `url(${blog && blog.img})`,
                            }}
                          />
                          <div className="date">
                            <h3>{blog && blog.date && blog.date.date}</h3>
                            <span>{blog && blog.date && blog.date.month}</span>
                          </div>
                         
                        </div>
                        <div className="details">
                          <span className="category">
                            <a >{blog.category}</a>
                          </span>
                          <h3 className="title">
                            <a >{blog.title}</a>
                          </h3>
                        </div>
                        <div className="news_hidden_details">
                        </div>
                    </a>
                    </div>
                    </Link>
                  
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;
