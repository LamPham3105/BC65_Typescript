import React from "react";
import Carousel from "../Components/Carousel";
import Booking from "../Components/Booking";
import SectionInformation from "../Components/SectionInformation";
import SectionIcon from "../Components/SectionIcon";
import SectionOurRoom from "../Components/SectionOurRoom";
import SectionNumber from "../Components/SectionNumber";
import SectionFeedback from "../Components/SectionFeedback";
import Blog from "../Components/Blog/Blog";
import Instagram from "../Components/Instagram";
import SectionBlog from "../Components/SectionBlog";
// import ExploreSection from "./ExploreSection";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Carousel />
      <Booking />
      <SectionInformation />
      <SectionIcon />
      <SectionOurRoom />
      <SectionNumber />
      <SectionFeedback />
      <SectionBlog />
      <Instagram />
    </>
  );
};

export default HomePage;
