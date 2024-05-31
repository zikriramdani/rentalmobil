import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ZRModals from "../../../components/ZRModals";

// Components
import Info from "./components/info";
import Address from "./components/address";
import Company from "./components/company";

function Details(props) {
  const { onClose, onShow, dataItem } = props;

  return (
    <ZRModals onClose={onClose} onShow={onShow}
      title="Details"
      body={<Fragment>
        <Info
          isDisabledUsername={true}
          isDisabled={true}
          valImages={`https://picsum.photos/id/${dataItem?.id}/315/315.webp`}
          valUsername={dataItem?.username}
          valName={dataItem?.name}
          valEmail={dataItem?.email}
          valPhone={dataItem?.phone}
          valWebsite={dataItem?.website}
        />
        <hr />
        <Address
          isDisabled={true}
          valStreet={dataItem?.address?.street}
          valSuite={dataItem?.address?.suite}
          valCity={dataItem?.address?.city}
          valZipcode={dataItem?.address?.zipcode}
        />
        <hr />
        <Company
          isDisabled={true}  
          valCompanyName={dataItem?.company?.name}
          valCatchPhrase={dataItem?.company?.catchPhrase}
          valBs={dataItem?.company?.bs}
        />
      </Fragment>}
    />
  );
}

// Define prop types
Details.propTypes = {
  onClose: PropTypes.any, 
  onShow: PropTypes.any, 
  dataItem: PropTypes.any
};

export default Details;
