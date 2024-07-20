import React from "react";

type Props = {};

const SectionBlog = (props: Props) => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_1.jpg")' }}
              ></a>
              <div className="text mt-3 d-block">
                <h3 className="heading mt-3">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <div className="meta mb-3">
                  <div>
                    <a href="#">Dec 6, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_2.jpg")' }}
              ></a>
              <div className="text mt-3">
                <h3 className="heading mt-3">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <div className="meta mb-3">
                  <div>
                    <a href="#">Dec 6, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_3.jpg")' }}
              ></a>
              <div className="text mt-3">
                <h3 className="heading mt-3">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <div className="meta mb-3">
                  <div>
                    <a href="#">Dec 6, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: 'url("images/image_4.jpg")' }}
              ></a>
              <div className="text mt-3">
                <h3 className="heading mt-3">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <div className="meta mb-3">
                  <div>
                    <a href="#">Dec 6, 2018</a>
                  </div>
                  <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="icon-chat" /> 3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
