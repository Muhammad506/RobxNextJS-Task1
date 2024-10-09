import AboutUni from "@/components/AboutUni";
import Gallery from "@/components/Gallery";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

import WhatWeOffer from "@/components/WhatWeOffer";

const page = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <WhatWeOffer />
      <AboutUni />
      {/* <Gallery /> */}
      <Testimonials />
    </div>
  );
};

export default page;
