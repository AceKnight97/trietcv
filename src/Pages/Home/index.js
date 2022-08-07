import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
// import { useMergeState } from "../../Helpers/customHooks";

const Home = (props) => {
  // const [state, setState] = useMergeState({
  //   data: [],
  // });

  const { className } = props;

  // const onChange = (key, value) => {
  //   setState({ [key]: value });
  // }

  return (
    <div className={classnames("home", className)}>
      <span>my component 123 3241231</span>
    </div>
  );
};

Home.defaultProps = {
  className: "",
};
Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
