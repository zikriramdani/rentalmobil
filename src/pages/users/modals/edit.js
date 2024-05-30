import React, { Fragment } from 'react';
import ZRModals from "../../../components/ZRModals"

// Components
import Info from "./components/info";
import Address from "./components/address";
import Company from "./components/company";

function Edit(props) {
	const { onClose, onShow, id } = props;
	
  return (
    <ZRModals onClose={onClose} onShow={onShow}
			title="Edit"
			body={<Fragment>
				<Info
					valUsername={id}
					valName=""
					valEmail=""
					valPhone=""
					valWebsite=""
		 		/>
				<hr />
				<Address
					valStreet=""
					valSuite=""
					valCity=""
					valZipcode=""
				/>
				<hr />
				<Company
					valCompanyName=""
					valCatchPhrase=""
					valBs=""
				/>
			</Fragment>}
		/>
  );
}

export default Edit;
