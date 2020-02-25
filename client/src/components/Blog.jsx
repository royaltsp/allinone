import React from 'react'

export default function Blog() {
  return (
    <div>
      <section className="blog-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>Latest News</h2>
            <p>Securum is the simplest way to exchange money at very low cost.</p>
          </div>
          <div className="row">
            {/* <!-- blog item --> */}
            <div className="col-md-4">
              <div className="blog-item">
                <figure className="blog-thumb">
                  <img src="img/blog/1.jpg" alt="" />
                </figure>
                <div className="blog-text">
                  <div className="post-date">03 jan 2018</div>
                  <h4 className="blog-title">
                    <a href="">Coinbase to Reopen the GDAX Securum Cash-Euro Order Book</a>
                  </h4>
                  <div className="post-meta">
                    <a href=""><span>by</span> Admin</a>
                    <a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
                    <a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- blog item --> */}
            <div className="col-md-4">
              <div className="blog-item">
                <figure className="blog-thumb">
                  <img src="img/blog/2.jpg" alt="" />
                </figure>
                <div className="blog-text">
                  <div className="post-date">28 dec 2018</div>
                  <h4 className="blog-title">
                    <a href="">Blockchain Rolls Out Trading Feature for 22 States in the
                  U.S</a>
                  </h4>
                  <div className="post-meta">
                    <a href=""><span>by</span> Admin</a>
                    <a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
                    <a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- blog item --> */}
            <div className="col-md-4">
              <div className="blog-item">
                <figure className="blog-thumb">
                  <img src="img/blog/3.jpg" alt="" />
                </figure>
                <div className="blog-text">
                  <div className="post-date">28 aug 2018</div>
                  <h4 className="blog-title">
                    <a href="">This Week in Securum: Up, Down and Sideways</a>
                  </h4>
                  <div className="post-meta">
                    <a href=""><span>by</span> Admin</a>
                    <a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
                    <a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
