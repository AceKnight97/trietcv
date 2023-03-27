import PropTypes from 'prop-types';
import React from 'react';
// import classnames from 'classnames';
import { } from 'antd';

const CVExp = (props) => {
  const { className, data } = props;
  const {
    name, position, duration, content,
  } = data || {};
  return (
    <div className={className}>
      {name && (
        <div className='cv-exp-company-name'>
          <span>{name}</span>
        </div>
      )}

      {position && (
        <div className='cv-exp-postion'>
          <span>{position}</span>
        </div>
      )}

      {duration && (
        <div className='cv-exp-duration'>
          <span>{duration}</span>
        </div>
      )}

      {content && content?.length !== 0 && (
        content.map((x, i) => (
          <div key={i} className='cv-exp-content'>
            <span>{x}</span>
          </div>
        ))
      )}
    </div>
  );
};
CVExp.defaultProps = {
  className: '',
  data: {
    name: '',
    position: '',
    duration: '',
    content: [],
  },
};
CVExp.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    duration: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.string),

  }),
};

export default CVExp;
