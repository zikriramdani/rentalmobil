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
            imagePreview={
              dataItem?.image instanceof File
                ? URL?.createObjectURL(dataItem?.image)
                : dataItem?.image
            }
            valImages={dataItem?.image}
            valName={dataItem?.name}
            valMonthRate={dataItem?.month_rate}
            valDayRate={dataItem?.day_rate}
            page="details"
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
