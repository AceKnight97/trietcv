import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const BodyTopic = (props) => {
  const { className, title } = props;
  return (
    <div className={classnames('body-topic-wrapper', className)}>
      <div className='summary'>
        <span>{title.toUpperCase()}</span>
      </div>
      <div className='border-line' />
    </div>
  );
};
BodyTopic.defaultProps = {
  className: '',
  title: '',
};
BodyTopic.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default BodyTopic;
