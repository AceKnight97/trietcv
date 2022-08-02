import { Button } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonCT = (props) => {
  const {
    className, type, title, onClick,
  } = props;

  return (
    <Button
      onClick={onClick}
      type={type}
      className={classnames('button-ct-wrapper', className)}
    >
      {title}
    </Button>
  );
};

ButtonCT.defaultProps = {
  className: '',
  type: undefined,
  title: '',
  onClick: () => { },
};
ButtonCT.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonCT;
