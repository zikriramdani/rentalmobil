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
			<div class="row">
				<div class="col-12">
					<div class="mb-3">
						<label class="col-form-label">Address:</label>
						<textarea class="form-control" name="street" value={valStreet} disabled={isDisabled} />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Suite:</label>
						<input type="text" class="form-control" name="suite" value={valSuite} disabled={isDisabled} />
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">City:</label>
						<input type="text" class="form-control" name="city" value={valCity} disabled={isDisabled} />
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Zipcode:</label>
						<input type="text" class="form-control" name="zipcode" value={valZipcode} disabled={isDisabled} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Address;