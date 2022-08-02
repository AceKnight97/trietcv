import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MyCV from "./MyCV";

const Main = (props) => {
  useEffect(() => {
    window.onbeforeunload = () => {};
    window.onload = () => {
      // props.reloadPageRequest();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="div-root">
      <Router>
        <Routes>
          <Route path="/trietcv" name="My CV" element={<MyCV />} />
          <Route path="/" element={<Navigate replace to="/trietcv" />} />
        </Routes>
      </Router>
    </main>
  );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
