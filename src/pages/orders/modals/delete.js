import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Modals
import ZRModals from '../../../components/ZRModals';

import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../../redux/action/orders/creator';

function Delete(props) {
  const { onClose, onShow, orderId, setAlertSuccess, alertSuccess, setAlertError, alertError } =
    props;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(deleteOrder(orderId));
      setAlertSuccess(true);
      onClose();
    } catch (error) {
      setAlertError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (alertSuccess) {
      const timer = setTimeout(() => {
        setAlertSuccess(false);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
    if (alertError) {
      const timer = setTimeout(() => {
        setAlertError(false);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [alertSuccess, alertError]);

  return (
    <ZRModals
      onClose={onClose}
      onShow={onShow}
      title="Delete"
      customModalDialog=" "
      body={<p>Are you sure you want to delete your {orderId} ?</p>}
      footer={
        <Fragment>
          <button onClick={onClose} type="button" className="btn btn-secondary">
            Cancel
          </button>
          <button
            onClick={(e) => handleDelete(e)}
            type="button"
            className="btn btn-danger"
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </Fragment>
      }
    />
  );
}

// Define prop types
Delete.propTypes = {
  onClose: PropTypes.any,
  onShow: PropTypes.any,
  orderId: PropTypes.any,
  setAlertSuccess: PropTypes.any,
  alertSuccess: PropTypes.any,
  setAlertError: PropTypes.any,
  alertError: PropTypes.any
};

export default Delete;
