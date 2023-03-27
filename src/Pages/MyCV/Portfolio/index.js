import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import PropTypes from "prop-types";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import ProjectInfo from "../../../Components/UI/ProjectInfo";
import { useMergeState } from "../../../Helpers/customHooks";
import cloverIc from "../../../Images/Pages/CVs/clover.svg";
import {
  ACE_STORE_DATA, BIOACRE_CARDIAC,
  NANO_DASHBOARD, SAVE_MONEY_APP
} from "./data";

const PROJECT_DATA = {
  SMA: "SMA",
  BCCA: "BCCA",
  NANO: "NANO",
  ACE_STORE_: "ACE_STORE",
};
const { SMA, BCCA, NANO, ACE_STORE } = PROJECT_DATA;

const Portfolio = (props) => {
  const [state, setState] = useMergeState({
    current: "",
    previewImg: null,
  });

  const onClickPreview = (previewImg) => {
    setState({ previewImg });
  };

  const onClickClosePreview = () => {
    setState({ previewImg: undefined });
  };
  const { current, previewImg } = state;

  const toggleClickSMA = () => {
    setState({ current: current === SMA ? "" : SMA });
  };
  const toggleClickBCCA = () => {
    setState({ current: current === BCCA ? "" : BCCA });
  };
  const toggleClickNaNo = () => {
    setState({ current: current === NANO ? "" : NANO });
  };
  const toggleClickAceStore = () => {
    setState({ current: current === ACE_STORE ? "" : ACE_STORE });
  };

  const renderHeader = () => (
    <div className="portfolio-header">
      <span>Truong Thanh Triet</span>
    </div>
  );

  const renderCarousel = () => {
    let images = [];
    switch (current) {
      case SMA:
        images = SAVE_MONEY_APP.images;
        break;
      case BCCA:
        images = BIOACRE_CARDIAC.images;
        break;
      case NANO:
        images = NANO_DASHBOARD.images;
        break;
      default:
        break;
    }
    return images.length !== 0 ? (
      <Carousel>
        {images.map((x, i) => (
          <button
            key={i}
            className="bas-0-btn"
            onClick={() => {
              onClickPreview(x);
            }}
          >
            <img src={x} alt={`img ${i}`} />
          </button>
        ))}
      </Carousel>
    ) : (
      <div className="hello-visitor">
        <span>Hello visitor,</span>
        <img src={cloverIc} alt="Clover ic" />
        <span>Have a good day!</span>
      </div>
    );
  };

  const renderBody = () => (
    <div className="portfolio-body">
      <div className="portfolio-body-left">
        <ProjectInfo
          data={SAVE_MONEY_APP}
          toggleClick={toggleClickSMA}
          isShowDetails={current === SMA}
        />
        <ProjectInfo
          className="mt-24"
          data={BIOACRE_CARDIAC}
          toggleClick={toggleClickBCCA}
          isShowDetails={current === BCCA}
        />
        <ProjectInfo
          className="mt-24"
          data={NANO_DASHBOARD}
          toggleClick={toggleClickNaNo}
          isShowDetails={current === NANO}
        />
        <ProjectInfo
          className="mt-24"
          data={ACE_STORE_DATA}
          toggleClick={toggleClickAceStore}
          isShowDetails={current === ACE_STORE}
        />
        <Button
          block
          type="ghost"
          className="portfolio-body-left-back-btn"
          onClick={props.onClickBack}
        >
          <ArrowLeftOutlined />
          Back
        </Button>
      </div>

      <div className="portfolio-body-right">{renderCarousel()}</div>
    </div>
  );

  return (
    <>
      <div className="portfolio">
        {renderHeader()}

        {renderBody()}
      </div>
      <Modal
        visible={!!previewImg}
        onCancel={onClickClosePreview}
        centered
        footer={null}
        className="profolio-modal"
      >
        <img src={previewImg} alt="img preview" />
      </Modal>
    </>
  );
};

Portfolio.defaultProps = {
  onClickBack: () => {},
};
Portfolio.propTypes = {
  onClickBack: PropTypes.func,
};

export default Portfolio;
