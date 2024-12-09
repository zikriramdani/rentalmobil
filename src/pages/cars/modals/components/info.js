import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

function Info(props) {
  const {
    isDisabled,
    imagePreview,
    valImages,
    valName = '',
    valMonthRate = '',
    valDayRate = '',
    onChange,
    errors = {},
    page
  } = props;

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            {imagePreview ? (
              <img src={imagePreview} style={{ width: '100px' }} alt={valName} />
            ) : null}
            {page !== 'details' && (
              <input
                onChange={onChange}
                type="file"
                className="form-control"
                name="image"
                disabled={isDisabled}
                required
                accept="image/*"
              />
            )}
            {errors.image && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.image}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="name"
              value={valName}
              disabled={isDisabled}
              required
            />
            {errors.name && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.name}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Month Rate<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              className="form-control"
              name="month_rate"
              value={valMonthRate}
              disabled={isDisabled}
              required
            />
            {errors.month_rate && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.month_rate}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Day Rate<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              className="form-control"
              name="day_rate"
              value={valDayRate}
              disabled={isDisabled}
              required
            />
            {errors.day_rate && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.day_rate}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// Define prop types
Info.propTypes = {
  isDisabledUsername: PropTypes.any,
  isDisabled: PropTypes.any,
  valImages: PropTypes.any,
  valName: PropTypes.any,
  valMonthRate: PropTypes.any,
  valDayRate: PropTypes.any,
  onChange: PropTypes.any,
  errors: PropTypes.any,
  imagePreview: PropTypes.any,
  page: PropTypes.any
};

export default Info;
