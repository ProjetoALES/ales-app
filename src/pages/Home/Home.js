import React from "react";
import GetThereSection from "pages/Sections/GetThere/GetThereSection";
import Landing from "./Sections/Landing/Landing";
import WhatIs from "./Sections/WhatIs/WhatIs";
import WhatDo from "./Sections/WhatDo/WhatDo";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Contact from "./Sections/Contact/Contact";

const Home = () => (
  <div>
    <Landing />
    <WhatIs />
    <WhatDo />
    <AboutUs />
    <GetThereSection />
    <Contact id="contact" />
  </div>
);

export default Home;
