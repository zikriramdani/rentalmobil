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
			<div className="row">
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Company Name:</label>
						<input type="text" className="form-control" name="company_name" value={valCompanyName} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">CatchPhrase:</label>
						<input type="text" className="form-control" name="catchphrase" value={valCatchPhrase} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">BS:</label>
						<input type="text" className="form-control" name="bs" value={valBs} disabled={isDisabled} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Company;