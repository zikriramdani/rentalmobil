import React, { Fragment } from "react";

function Company(props) {
	const {
		isDisabled, 
		valCompanyName,
		valCatchPhrase,
		valBs
	} = props;

	return (
		<Fragment>
			<div class="row">
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Company Name:</label>
						<input type="text" class="form-control" name="company_name" value={valCompanyName} disabled={isDisabled} />
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">CatchPhrase:</label>
						<input type="text" class="form-control" name="catchphrase" value={valCatchPhrase} disabled={isDisabled} />
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">BS:</label>
						<input type="text" class="form-control" name="bs" value={valBs} disabled={isDisabled} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Company;