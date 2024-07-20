import React from "react";

type Props = {};

const Detail = (props: Props) => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-12 ftco-animate">
                <h2 className="mb-4">Family Room</h2>
                <div className="single-slider owl-carousel">
                  <div className="item">
                    <div
                      className="room-img"
                      style={{ backgroundImage: "url(images/room-1.jpg)" }}
                    />
                  </div>
                  <div className="item">
                    <div
                      className="room-img"
                      style={{ backgroundImage: "url(images/room-2.jpg)" }}
                    />
                  </div>
                  <div className="item">
                    <div
                      className="room-img"
                      style={{ backgroundImage: "url(images/room-3.jpg)" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 room-single mt-4 mb-5 ftco-animate">
                <p>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove, the headline of Alphabet Village and the
                  subline of her own road, the Line Lane. Pityful a rethoric
                  question ran over her cheek, then she continued her way.
                </p>
                <div className="d-md-flex mt-5 mb-5">
                  <ul className="list">
                    <li>
                      <span>Max:</span> 3 Persons
                    </li>
                    <li>
                      <span>Size:</span> 45 m2
                    </li>
                  </ul>
                  <ul className="list ml-md-5">
                    <li>
                      <span>View:</span> Sea View
                    </li>
                    <li>
                      <span>Bed:</span> 1
                    </li>
                  </ul>
                </div>
                <p>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove, the headline of Alphabet Village and the
                  subline of her own road, the Line Lane. Pityful a rethoric
                  question ran over her cheek, then she continued her way.
                </p>
              </div>
              <div className="col-md-12 room-single ftco-animate mb-5 mt-4">
                <h3 className="mb-4">Take A Tour</h3>
                <div className="block-16">
                  <figure>
                    <img
                      src="images/room-4.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                    <a
                      href="https://vimeo.com/45830194"
                      className="play-button popup-vimeo"
                    >
                      <span className="icon-play" />
                    </a>
                  </figure>
                </div>
              </div>
              <div className="col-md-12 properties-single ftco-animate mb-5 mt-4">
                <h4 className="mb-4">Review &amp; Ratings</h4>
                <div className="row">
                  <div className="col-md-6">
                    <form method="post" className="star-rating">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          <p className="rate">
                            <span>
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" /> 100 Ratings
                            </span>
                          </p>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          <p className="rate">
                            <span>
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star-o" /> 30 Ratings
                            </span>
                          </p>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          <p className="rate">
                            <span>
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star-o" />
                              <i className="icon-star-o" /> 5 Ratings
                            </span>
                          </p>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          <p className="rate">
                            <span>
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star-o" />
                              <i className="icon-star-o" />
                              <i className="icon-star-o" /> 0 Ratings
                            </span>
                          </p>
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          <p className="rate">
                            <span>
                              <i className="icon-star" />
                              <i className="icon-star-o" />
                              <i className="icon-star-o" />
                              <i className="icon-star-o" />
                              <i className="icon-star-o" /> 0 Ratings
                            </span>
                          </p>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-12 room-single ftco-animate mb-5 mt-5">
                <h4 className="mb-4">Available Room</h4>
                <div className="row">
                  <div className="col-sm col-md-6 ftco-animate">
                    <div className="room">
                      <a
                        href="rooms.html"
                        className="img img-2 d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/room-1.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3 text-center">
                        <h3 className="mb-3">
                          <a href="rooms.html">Suite Room</a>
                        </h3>
                        <p>
                          <span className="price mr-2">$120.00</span>{" "}
                          <span className="per">per night</span>
                        </p>
                        <hr />
                        <p className="pt-1">
                          <a href="room-single.html" className="btn-custom">
                            View Room Details{" "}
                            <span className="icon-long-arrow-right" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm col-md-6 ftco-animate">
                    <div className="room">
                      <a
                        href="rooms.html"
                        className="img img-2 d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/room-2.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3 text-center">
                        <h3 className="mb-3">
                          <a href="rooms.html">Family Room</a>
                        </h3>
                        <p>
                          <span className="price mr-2">$20.00</span>{" "}
                          <span className="per">per night</span>
                        </p>
                        <hr />
                        <p className="pt-1">
                          <a href="room-single.html" className="btn-custom">
                            View Room Details{" "}
                            <span className="icon-long-arrow-right" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .col-md-8 */}
          <div className="col-lg-4 sidebar ftco-animate">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>
            <div className="sidebar-box ftco-animate">
              <div className="categories">
                <h3>Categories</h3>
                <li>
                  <a href="#">
                    Properties <span>(12)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Home <span>(22)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    House <span>(37)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Villa <span>(42)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Apartment <span>(14)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Condominium <span>(140)</span>
                  </a>
                </li>
              </div>
            </div>
            <div className="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{ backgroundImage: "url(images/image_1.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar" /> July 12, 2018
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person" /> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat" /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{ backgroundImage: "url(images/image_2.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar" /> July 12, 2018
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person" /> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat" /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{ backgroundImage: "url(images/image_3.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar" /> July 12, 2018
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person" /> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat" /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">
                  dish
                </a>
                <a href="#" className="tag-cloud-link">
                  menu
                </a>
                <a href="#" className="tag-cloud-link">
                  food
                </a>
                <a href="#" className="tag-cloud-link">
                  sweet
                </a>
                <a href="#" className="tag-cloud-link">
                  tasty
                </a>
                <a href="#" className="tag-cloud-link">
                  delicious
                </a>
                <a href="#" className="tag-cloud-link">
                  desserts
                </a>
                <a href="#" className="tag-cloud-link">
                  drinks
                </a>
              </div>
            </div>
            <div className="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
