import { Button } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TeamProduct = (props) => {
  const {
    className, data,
  } = props;

  const { icon, name, link } = data;

  return (
    <div className={classnames('team-product-wrapper', className)}>
      <div className='team-product-logo'>
        <img
          src={icon}
          className='team-product-icon'
          alt='logo'
        />
      </div>

      <div className='team-product-info'>
        <div className='team-product-name'>
          <span>{name}</span>
        </div>
        <Button
          onClick={() => window.open(link, '')}
          type='link'
          className='team-product-link'
        >
          <span>{link}</span>
        </Button>
      </div>
    </div>
  );
};

TeamProduct.defaultProps = {
  className: '',
  data: {},
};
TeamProduct.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(),
};

export default TeamProduct;
