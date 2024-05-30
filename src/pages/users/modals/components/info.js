import React, { Fragment } from "react";

function Info(props) {
	const {
		isDisabled, 
		valUsername,
		valName,
		valEmail,
		valPhone,
		valWebsite
	} = props;

	return (
		<Fragment>
			<div class="row">
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Username:</label>
						<input type="text" class="form-control" name="username" value={valUsername} disabled="true" />
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Name:</label>
						<input type="text" class="form-control" name="name" value={valName} disabled={isDisabled} />
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Email:</label>
						<input type="email" class="form-control" name="email" value={valEmail} disabled={isDisabled} />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Phone:</label>
						<input type="tel" class="form-control" name="phone" value={valPhone} disabled={isDisabled} />
					</div>
				</div>
				<div class="col-12 col-sm-4">
					<div class="mb-3">
						<label class="col-form-label">Website:</label>
						<input type="url" class="form-control" name="website" value={valWebsite} disabled={isDisabled} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Info;