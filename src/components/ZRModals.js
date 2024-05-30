import React, { Fragment } from "react";

function ZRModals(props) {
	const { onClose, onShow, title, body, footer } = props;
	
	return (
		<Fragment>
			<div className={`modal fade ${onShow ? 'show' : ''}`} style={{ display: onShow ? 'block' : '' }} tabIndex="-1">
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5">{title}</h1>
							<button onClick={onClose} type="button" className="btn-close"></button>
						</div>
						<div className="modal-body">
							{body}
						</div>
						<div className="modal-footer">
							{footer}
						</div>
					</div>
				</div>
			</div>
			{onShow &&
				<div className="modal-backdrop fade show"></div>
			}
		</Fragment>
	)
};

export default ZRModals;