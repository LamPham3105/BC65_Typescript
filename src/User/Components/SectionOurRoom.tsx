import React from "react";

type Props = {};

const SectionOurRoom = (props: Props) => {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Our Rooms</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm col-md-6 col-lg-4 ftco-animate">
            <div className="room">
              <a
                href="rooms.html"
                className="img d-flex justify-content-center align-items-center"
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
                    View Room Details <span className="icon-long-arrow-right" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6 col-lg-4 ftco-animate">
            <div className="room">
              <a
                href="rooms.html"
                className="img d-flex justify-content-center align-items-center"
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
                    View Room Details <span className="icon-long-arrow-right" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6 col-lg-4 ftco-animate">
            <div className="room">
              <a
                href="rooms.html"
                className="img d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(images/room-3.jpg)" }}
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-search2" />
                </div>
              </a>
              <div className="text p-3 text-center">
                <h3 className="mb-3">
                  <a href="rooms.html">Deluxe Room</a>
                </h3>
                <p>
                  <span className="price mr-2">$150.00</span>{" "}
                  <span className="per">per night</span>
                </p>
                <hr />
                <p className="pt-1">
                  <a href="room-single.html" className="btn-custom">
                    View Room Details <span className="icon-long-arrow-right" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6 col-lg-4 ftco-animate">
            <div className="room">
              <a
                href="rooms.html"
                className="img d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(images/room-4.jpg)" }}
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-search2" />
                </div>
              </a>
              <div className="text p-3 text-center">
                <h3 className="mb-3">
                  <a href="rooms.html">Classic Room</a>
                </h3>
                <p>
                  <span className="price mr-2">$130.00</span>{" "}
                  <span className="per">per night</span>
                </p>
                <hr />
                <p className="pt-1">
                  <a href="room-single.html" className="btn-custom">
                    View Room Details <span className="icon-long-arrow-right" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6 col-lg-4 ftco-animate">
            <div className="room">
              <a
                href="rooms.html"
                className="img d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(images/room-5.jpg)" }}
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-search2" />
                </div>
              </a>
              <div className="text p-3 text-center">
                <h3 className="mb-3">
                  <a href="rooms.html">Superior Room</a>
                </h3>
                <p>
                  <span className="price mr-2">$300.00</span>{" "}
                  <span className="per">per night</span>
                </p>
                <hr />
                <p className="pt-1">
                  <a href="room-single.html" className="btn-custom">
                    View Room Details <span className="icon-long-arrow-right" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm col-md-6 col-lg-4 ftco-animate">
            <div className="room">
              <a
                href="rooms.html"
                className="img d-flex justify-content-center align-items-center"
                style={{ backgroundImage: "url(images/room-6.jpg)" }}
              >
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-search2" />
                </div>
              </a>
              <div className="text p-3 text-center">
                <h3 className="mb-3">
                  <a href="rooms.html">Luxury Room</a>
                </h3>
                <p>
                  <span className="price mr-2">$500.00</span>{" "}
                  <span className="per">per night</span>
                </p>
                <hr />
                <p className="pt-1">
                  <a href="room-single.html" className="btn-custom">
                    View Room Details <span className="icon-long-arrow-right" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOurRoom;
