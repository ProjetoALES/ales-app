import React from "react";
import Landing from "./Sections/Landing/Landing";
import WhatIs from "./Sections/WhatIs/WhatIs";
import WhatDo from "./Sections/WhatDo/WhatDo";
import AboutUs from "./Sections/AboutUs/AboutUs";
import GetThere from "./Sections/GetThere/GetThere";
import Contact from "./Sections/Contact/Contact";

const Home = () => (
  <div>
    <Landing />
    <WhatIs />
    <WhatDo />
    <AboutUs />
    <GetThere />
    <Contact />
  </div>
);

export default Home;
