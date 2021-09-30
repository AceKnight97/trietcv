import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import NumberFormat from 'react-number-format';
import classnames from 'classnames';

import InputTitle from './inputTitle';
import DatepickerCT from './datepickerCT';

const InputCT = (props) => {
  const {
    className, type, rows, placeholder, title, disabled, value,
    inputClassName,
    maxLength, prefix, mask, format,
    decimalScale, name, allowedDecimalSeparators, allowLeadingZeros, thousandSeparator,
    data, mode, unitValue, onChangeUnit, disabledDate,
    suffix, autoComplete,
    supName, errMes, errMesClassName,
    absSuffix, allowNegative,
    isValueOutside, isSearchable, loadOptions, options, clearOptions, onInputChange, // for Async
  } = props;

  const onChange = (e) => {
    props.onChange(name, e.target.value);
  };

  const onValueChange = ({ value }) => {
    props.onChange(name, value);
  };

  return (
    <div className={classnames('input-ct-wrapper', className)}>
      <InputTitle title={title} />

      {
        type === 'TEXTAREA'
          ? (
            <Input.TextArea
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              rows={rows}
              onChange={onChange}
            />
          )
          : null
      }

      {
        type === 'NUMBER'
          ? (
            <NumberFormat
              mask={mask}
              format={format}
              value={value}
              className={classnames('basic-number-format', inputClassName, errMes ? 'err-border' : '')}
              disabled={disabled}
              onValueChange={onValueChange}
              placeholder={placeholder}
              maxLength={maxLength}
              decimalScale={decimalScale}
              prefix={prefix}
              suffix={suffix}
              allowNegative={allowNegative}
            // allowedDecimalSeparators={allowedDecimalSeparators}
            // allowNegative={false}
            // allowLeadingZeros={allowLeadingZeros}
            // thousandSeparator={thousandSeparator}
            // inputMode="numeric"
            // prefix={prefix}
            />
          )
          : null
      }

      {
        type === 'DATE'
          ? (
            <DatepickerCT
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={props.onChange}
              disabledDate={disabledDate}
              suffixIcon={suffix}
            />
          )
          : null
      }

      {
        type === 'text'
          ? (
            <Input
              className={errMes ? 'err-border' : ''}
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              onChange={onChange}
              prefix={prefix}
              suffix={suffix}
            />
          )
          : null
      }

      {type === 'PASSWORD'
        ? (
          <Input.Password
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            autoComplete={autoComplete}
          />
        )
        : null}

      {
        errMes
          ? (
            <div className={classnames('div-incorrect-mes', errMesClassName)}>
              <span>{errMes}</span>
            </div>
          )
          : null
      }

      {
        absSuffix && (
          <div className='abs-suffix-ct'>
            <span>{absSuffix}</span>
          </div>
        )
      }
    </div>
  );
};

InputCT.defaultProps = {
  className: undefined,
  rows: 4,
  type: 'text',
  title: '',
  placeholder: 'Enter...',
  onChange: () => { },
  onChangeUnit: () => { },
  disabled: false,
  value: undefined,
  inputClassName: '',
  maxLength: 20,
  allowedDecimalSeparators: undefined,
  decimalScale: undefined,
  allowLeadingZeros: false,
  thousandSeparator: false,
  prefix: undefined,
  suffix: undefined,
  mask: undefined,
  format: undefined,
  name: '',
  supName: '',
  data: [],
  mode: undefined, // 'tags', // or multiple
  unitValue: '',
  disabledDate: undefined,
  autoComplete: '',
  errMes: '',
  errMesClassName: '',
  absSuffix: '',
  allowNegative: false,
  isValueOutside: false,
  isSearchable: false,
  loadOptions: () => { },
  options: [],
  clearOptions: () => {},
  onInputChange: () => {},
};

InputCT.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.number,
  type: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onChangeUnit: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf([PropTypes.string]), PropTypes.number]),
  inputClassName: PropTypes.string,
  maxLength: PropTypes.number,
  allowedDecimalSeparators: PropTypes.bool,
  decimalScale: PropTypes.number,
  allowLeadingZeros: PropTypes.bool,
  thousandSeparator: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ]),
  mask: PropTypes.string,
  format: PropTypes.string,
  name: PropTypes.string,
  supName: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  mode: PropTypes.string,
  unitValue: PropTypes.string,
  disabledDate: PropTypes.string,
  autoComplete: PropTypes.string,
  errMes: PropTypes.string,
  errMesClassName: PropTypes.string,
  absSuffix: PropTypes.string,
  allowNegative: PropTypes.bool,
  isValueOutside: PropTypes.bool,
  isSearchable: PropTypes.bool,
  loadOptions: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape()),
  clearOptions: PropTypes.func,
  onInputChange: PropTypes.func,
};

export default InputCT;
