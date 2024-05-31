import React, { Fragment } from "react";
import PropTypes from 'prop-types';

function Address(props) {
	const {
		isDisabled, 
		valStreet,
		valSuite,
		valCity,
		valZipcode,
		onChange
	} = props;

	return (
		<Fragment>
			<div className="row">
				<div className="col-12">
					<div className="mb-3">
						<label className="col-form-label">Address</label>
						<textarea onChange={onChange} className="form-control" name="street" value={valStreet} disabled={isDisabled} />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Suite</label>
						<input onChange={onChange} type="text" className="form-control" name="suite" value={valSuite} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">City</label>
						<input onChange={onChange} type="text" className="form-control" name="city" value={valCity} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Zipcode</label>
						<input onChange={onChange} type="text" className="form-control" name="zipcode" value={valZipcode} disabled={isDisabled} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

// Define prop types
Address.propTypes = {
  isDisabled: PropTypes.any,
	valStreet: PropTypes.any,
	valSuite: PropTypes.any,
	valCity: PropTypes.any,
	valZipcode: PropTypes.any,
	onChange: PropTypes.any,
};

export default Address;