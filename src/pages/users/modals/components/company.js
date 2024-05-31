import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Company(props) {
  const { isDisabled, valCompanyName = '', valCatchPhrase = '', valBs = '', onChange } = props;

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">Company Name</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="company_name"
              value={valCompanyName}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">CatchPhrase</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="catchPhrase"
              value={valCatchPhrase}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">BS</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="bs"
              value={valBs}
              disabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// Define prop types
Company.propTypes = {
  isDisabled: PropTypes.any,
  valCompanyName: PropTypes.any,
  valCatchPhrase: PropTypes.any,
  valBs: PropTypes.any,
  onChange: PropTypes.any
};

export default Company;
