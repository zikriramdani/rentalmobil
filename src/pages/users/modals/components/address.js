import React, { Fragment } from "react";

function Address(props) {
	const {
		isDisabled, 
		valStreet,
		valSuite,
		valCity,
		valZipcode
	} = props;

	return (
		<Fragment>
			<div className="row">
				<div className="col-12">
					<div className="mb-3">
						<label className="col-form-label">Address:</label>
						<textarea className="form-control" name="street" value={valStreet} disabled={isDisabled} />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Suite:</label>
						<input type="text" className="form-control" name="suite" value={valSuite} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">City:</label>
						<input type="text" className="form-control" name="city" value={valCity} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Zipcode:</label>
						<input type="text" className="form-control" name="zipcode" value={valZipcode} disabled={isDisabled} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Address;