import React from "react";
// import Preview from "../views/Preview";
// import HomeLight from "../views/all-home-version/HomeLight";
// import LightProfessionalAnimation from "../views/all-home-version/LightProfessionalAnimation";
// import HomeLightProfessional2 from "../views/all-home-version/HomeLightProfessional2";
// import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
// import HomeLightRtlAnimation from "../views/all-home-version/HomeLightRtlAnimation";
// import HomeLightSidebarTwo from "../views/all-home-version/HomeLightSidebarTwo";
// import HomeDark from "../views/all-home-version/HomeDark";
// import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          {/* <Route path="/" component={HomeLight} />
          <Route path="/home-light-animation" component={HomeLightAnimation} />
          <Route
            path="/home-light-rtl-animation"
            component={HomeLightRtlAnimation}
          />
          <Route
            path="/home-light-sidebar-two"
            component={HomeLightSidebarTwo}
          /> */}
          {/* <Route path="/" component={HomeDarkParticles} />
          <Route
            path="/home-light-professional"
            component={LightProfessionalAnimation}
          />
          <Route
            path="/home-light-professional-2"
            component={HomeLightProfessional2}
          /> */}
          {/* <Route path="/" component={HomeDark} /> */}
          <Route path="/" component={HomeDarkAnimation} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
