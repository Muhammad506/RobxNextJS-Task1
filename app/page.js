import AboutUni from "@/components/AboutUni";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
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
      <Gallery />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
