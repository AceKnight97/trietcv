import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectInfo = (props) => {
  const {
    data, isShowDetails, toggleClick, className,
  } = props;
  const {
    icon, title, rows, iconClassName,
  } = data;

  const renderLeft = () => (
    <div className='project-info-left'>
      <img src={icon} className={classnames('project-info-left-logo', iconClassName)} alt=' ' />

      <div className='project-info-left-title'>
        <span>{title}</span>
      </div>
    </div>
  );

  const renderItem = (item = {}) => {
    const {
      title, value, type, children, link,
    } = item;
    // console.log({title, value, type, children, link,})
    switch (type) {
      case 'LINK':
        return (
          <>
            <span>{`${title || ''} `}</span>
            <a href={link} target=' ' className=''>{value}</a>
          </>
        );
      case 'CUSTOM':
        return children();
      default:
        return (
          <>
            <span>{`${title || ''} ${value || ''}`}</span>
          </>
        );
    }
  };

  const renderRow = (rowArray = [], index = 0) => {
    if (rowArray.length === 0) {
      return null;
    }

    const leftItem = rowArray[0];
    if (rowArray.length === 1) {
      return (
        <div className='project-info-right-row'>
          {renderItem(leftItem)}
        </div>
      );
    }
    const rightItem = rowArray[1];

    return (
      <div className='project-info-right-row' key={index}>
        <div className='project-info-right-row-item'>
        {renderItem(leftItem)}
      </div>
        <div className='project-info-right-row-item'>
        {renderItem(rightItem)}
      </div>
      </div>
    );
  };

  const renderRight = () => (
    <div className='project-info-right'>
      {_.map(rows || [], (x, index) => renderRow(x, index))}
    </div>
  );

  return (
    <div className={classnames('project-info', isShowDetails ? 'project-info-hover' : '', className)}>
      {renderLeft()}

      {renderRight()}

      <Button
        type='ghost'
        className='project-info-toggle-btn'
        onClick={toggleClick}
      >
        {isShowDetails ? <ArrowLeftOutlined /> : <ArrowRightOutlined />}
      </Button>
    </div>
  );
};

ProjectInfo.defaultProps = {
  className: '',
  data: {
    icon: undefined,
    title: '',
    downloadLink: '',
    guideLink: '',
    releaseDate: '',
    description: '',
    rows: [],
    iconClassName: '',
  },
  toggleClick: () => {},
  isShowDetails: false,
};
ProjectInfo.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    downloadLink: PropTypes.string,
    guideLink: PropTypes.string,
    releaseDate: PropTypes.string,
    description: PropTypes.string,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
    iconClassName: PropTypes.string,
  }),
  toggleClick: PropTypes.func,
  isShowDetails: PropTypes.bool,
};

export default ProjectInfo;
