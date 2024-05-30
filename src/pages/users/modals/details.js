import React, { Fragment } from 'react';
import ZRModals from "../../../components/ZRModals"

// Components
import Info from "./components/info";
import Address from "./components/address";
import Company from "./components/company";

function Details(props) {
	const { onClose, onShow, id } = props;
	
  return (
    <ZRModals onClose={onClose} onShow={onShow}
			title="Details"
			body={<Fragment>
				<Info
					isDisabled={true}
					valUsername={id}
					valName=""
					valEmail=""
					valPhone=""
					valWebsite=""
		 		/>
				<hr />
				<Address
					isDisabled={true}
					valStreet=""
					valSuite=""
					valCity=""
					valZipcode=""
				/>
				<hr />
				<Company
					isDisabled={true}	
					valCompanyName=""
					valCatchPhrase=""
					valBs=""
				/>
			</Fragment>}
		/>
  );
}

export default Details;
