import React, { Fragment } from "react";

function Info(props) {
	const {
		isDisabledUsername,
		isDisabled, 
		valUsername,
		valName,
		valEmail,
		valPhone,
		valWebsite
	} = props;

	return (
		<Fragment>
			<div className="row">
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Username:</label>
						<input type="text" className="form-control" name="username" value={valUsername} disabled={isDisabledUsername} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Name:</label>
						<input type="text" className="form-control" name="name" value={valName} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Email:</label>
						<input type="email" className="form-control" name="email" value={valEmail} disabled={isDisabled} />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Phone:</label>
						<input type="tel" className="form-control" name="phone" value={valPhone} disabled={isDisabled} />
					</div>
				</div>
				<div className="col-12 col-sm-4">
					<div className="mb-3">
						<label className="col-form-label">Website:</label>
						<input type="url" className="form-control" name="website" value={valWebsite} disabled={isDisabled} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Info;