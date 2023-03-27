import { } from "antd";
import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useMergeState } from "../../Helpers/customHooks";

const Home = (props) => {
  const [state, setState] = useMergeState({
    data: [],
    isLoaded: false,
  });

  const { className } = props;

  const { isLoaded } = state;

  const asdasd = () => {
    let a = '111';
    switch (undefined) {
      default:
        a = '2225555';
        break;
    }
    return a;
  }

  return (
    <div className={classnames("home", className)}>
      <span className={!isLoaded && "display-none"}>
        my component 123 3241231
      </span>

      {asdasd()}

      <button
        onClick={() => {
          setState({ isLoaded: !isLoaded });
        }}
      >
        AAAAAAAAAAA
      </button>
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
