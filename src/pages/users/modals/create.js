import React, { Fragment } from 'react';
import ZRModals from "../../../components/ZRModals"

// Components
import Info from "./components/info";
import Address from "./components/address";
import Company from "./components/company";

function Create(props) {
	const { onClose, onShow } = props;
	
  return (
    <ZRModals onClose={onClose} onShow={onShow}
			title="Create"
			body={<Fragment>
				<Info
          isDisabledUsername={false}
        />
				<hr />
				<Address
				/>
				<hr />
				<Company
				/>
			</Fragment>}
			footer={<Fragment>
				<button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        <button type="button" className="btn btn-success">Save</button>
			</Fragment>}
		/>
  );
}

export default Create;
