import React from "react";

type Props = {};

const RestaurantMenu = (props: Props) => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2>Our Menu</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-1.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Grilled Beef with potatoes</span>
                  </h3>
                  <span className="price">$20.00</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-2.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Grilled Beef with potatoes</span>
                  </h3>
                  <span className="price">$29.00</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-3.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Grilled Beef with potatoes</span>
                  </h3>
                  <span className="price">$20.00</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-4.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Grilled Beef with potatoes</span>
                  </h3>
                  <span className="price">$20.00</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-5.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Grilled Beef with potatoes</span>
                  </h3>
                  <span className="price">$49.91</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-6.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Ultimate Overload</span>
                  </h3>
                  <span className="price">$20.00</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-7.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Grilled Beef with potatoes</span>
                  </h3>
                  <span className="price">$20.00</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
            <div className="pricing-entry d-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: "url(images/menu-8.jpg)" }}
              />
              <div className="desc pl-3">
                <div className="d-flex text align-items-center">
                  <h3>
                    <span>Ham &amp; Pineapple</span>
                  </h3>
                  <span className="price">$20.00</span>
                </div>
                <div className="d-block">
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
