import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';


const RowSelection = (props) => {
  const {
    className, title, data, value, onClick, disabled,
  } = props;

  const onChange = (x) => {
    if (x === value) return;
    onClick(x);
  };

  return (
    <div className={classnames('row-selection-wrapper', className)}>

      <div className={classnames('size-16-b-g9', 'mb8')}>
        <span>{title}</span>
      </div>

      {disabled
        ? data.map((x, i) => (
          <div
            key={i}
            className={classnames('row-selection-item', value === x ? 'selected-item' : '')}
          >
            <span>{`${i + 1}. ${x}`}</span>
          </div>
        ))
        : data.map((x, i) => (
          <button
            key={i}
            onClick={() => onChange(x)}
            className={classnames('row-selection-item', value === x ? 'selected-item' : '')}
          >
            <span>{`${i + 1}. ${x}`}</span>
          </button>
        ))}

    </div>
  );
};
RowSelection.defaultProps = {
  className: '',
  title: '',
  data: [],
  value: '',
  onClick: () => {},
  disabled: false,
};
RowSelection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default RowSelection;
