import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ZRModals from '../../../components/ZRModals';

// Components
import Info from './components/info';

function Details(props) {
  const { onClose, onShow, dataItem } = props;

  return (
    <ZRModals
      onClose={onClose}
      onShow={onShow}
      title="Details"
      body={
        <Fragment>
          <Info
            isDisabledUsername={true}
            isDisabled={true}
            valCarId={dataItem?.car_id}
            valOrderDate={dataItem?.order_date}
            valPickupDate={dataItem?.pickup_date}
            valDropoffDate={dataItem?.dropoff_date}
            valPickupLocation={dataItem?.pickup_location}
            valDropoffLocation={dataItem?.dropoff_location}
          />
        </Fragment>
      }
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
