import AboutUni from "@/components/AboutUni";
import ContactUs from "@/components/ContactUs";
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
      <ContactUs />
    </div>
  );
};

export default page;
