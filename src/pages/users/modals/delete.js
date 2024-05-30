import React, { Fragment } from 'react';
import ZRModals from "../../../components/ZRModals"

function Delete(props) {
	const { onClose, onShow, id } = props;
	
  return (
    <ZRModals onClose={onClose} onShow={onShow}
			title="Delete"
			customModalDialog=" "
			body={<Fragment>
      	<p>Are you sure you want to delete your {id} ?</p> 
			</Fragment>}
			footer={<Fragment>
				<button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        <button type="button" className="btn btn-danger">Delete</button>
			</Fragment>}
		/>
  );
}

export default Delete;
