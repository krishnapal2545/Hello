import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import HomeAfterLogin from "./pages/HomeAfterLogin";
import Mymenu from "./pages/Mymenu";
import MymenuPublish from "./pages/MymenuPublish";
import MymenuAddedItemsPublish from "./pages/MymenuAddedItemsPublish";
import MymenuRemoveonclick from "./pages/MymenuRemoveonclick";
import MymenuEditonclick from "./pages/MymenuEditonclick";
import MenuID from "./pages/MenuID";
import MenuIDonclick from "./pages/MenuIDonclick";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/home-after-login":
        title = "";
        metaDescription = "";
        break;
      case "/mymenu":
        title = "";
        metaDescription = "";
        break;
      case "/mymenu-publish":
        title = "";
        metaDescription = "";
        break;
      case "/mymenuadded-items-publish":
        title = "";
        metaDescription = "";
        break;
      case "/mymenuremoveonclick":
        title = "";
        metaDescription = "";
        break;
      case "/mymenueditonclick":
        title = "";
        metaDescription = "";
        break;
      case "/menuid":
        title = "";
        metaDescription = "";
        break;
      case "/menuidonclick":
        title = "";
        metaDescription = "";
        break;
      case "/terms-and-conditions":
        title = "";
        metaDescription = "";
        break;
      case "/privacy-policy":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home-after-login" element={<HomeAfterLogin />} />
      <Route path="/mymenu" element={<Mymenu />} />
      <Route path="/mymenu-publish" element={<MymenuPublish />} />
      <Route
        path="/mymenuadded-items-publish"
        element={<MymenuAddedItemsPublish />}
      />
      <Route path="/mymenuremoveonclick" element={<MymenuRemoveonclick />} />
      <Route path="/mymenueditonclick" element={<MymenuEditonclick />} />
      <Route path="/menuid" element={<MenuID />} />
      <Route path="/menuidonclick" element={<MenuIDonclick />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
