import React from "react";

type Props = {};

const RestaurantInformation = (props: Props) => {
  return (
    <section className="ftco-section ftc-no-pb ftc-no-pt">
      <div className="container">
        <div className="row">
          <div
            className="col-md-5 p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center"
            style={{ backgroundImage: "url(images/about.jpg)" }}
          ></div>
          <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
            <div className="heading-section heading-section-wo-line pt-md-4 mb-5">
              <div className="ml-md-0">
                <span className="subheading">Our Restaurants</span>
                <h2 className="mb-4">We Are Food Lover</h2>
              </div>
            </div>
            <div className="pb-md-4">
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times.
              </p>
              <p className="pl-md-5">
                When she reached the first hills of the Italic Mountains, she
                had a last view back on the skyline of her hometown
                Bookmarksgrove, the headline of Alphabet Village and the subline
                of her own road, the Line Lane. Pityful a rethoric question ran
                over her cheek, then she continued her way.
              </p>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInformation;
