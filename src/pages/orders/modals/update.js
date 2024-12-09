import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ZRModals from '../../../components/ZRModals';

// Components
import Info from './components/info';

// Redux
import { useDispatch } from 'react-redux';
import { updateOrder } from '../../../redux/action/orders/creator';

function Update(props) {
  const { onClose, onShow, dataItem, setAlertSuccess, alertSuccess, setAlertError, alertError } =
    props;
  const [formData, setFormData] = useState({
    car_id: '',
    order_date: '',
    pickup_date: '',
    dropoff_date: '',
    pickup_location: '',
    dropoff_location: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e, object) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value)
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'car_id':
        return value ? '' : 'Car Id is required.';
      case 'order_date':
        return value ? '' : 'Order Date Rate is required.';
      case 'pickup_date':
        return value ? '' : 'Pickup Date is required.';
      case 'dropoff_date':
        return value ? '' : 'Dropoff Date is required.';
      case 'pickup_location':
        return value ? '' : 'Pickup Location is required.';
      case 'dropoff_location':
        return value ? '' : 'Dropoff Location is required.';
      default:
        return '';
    }
  };

  const validate = () => {
    const newErrors = {};
    for (let [name, value] of Object.entries(formData)) {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    }
    return newErrors;
  };

  const resetForm = () => {
    setFormData({
      car_id: '',
      order_date: '',
      pickup_date: '',
      dropoff_date: '',
      pickup_location: '',
      dropoff_location: ''
    });
    onClose();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      try {
        await dispatch(updateOrder(dataItem?.id, formData));
        setAlertSuccess(true);
        resetForm();
      } catch (error) {
        setAlertError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getDataForm = () => {
    setFormData({
      car_id: dataItem?.car_id,
      order_date: dataItem?.order_date,
      pickup_date: dataItem?.pickup_date,
      dropoff_date: dataItem?.dropoff_date,
      pickup_location: dataItem?.pickup_location,
      dropoff_location: dataItem?.dropoff_location
    });
  };

  useEffect(() => {
    getDataForm();
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
  }, [alertSuccess, alertError, dataItem]);

  return (
    <ZRModals
      onClose={onClose}
      onShow={onShow}
      title="Edit"
      body={
        <Fragment>
          <Info
            isDisabledUsername={true}
            valCarId={formData?.car_id}
            valOrderDate={formData?.order_date}
            valPickupDate={formData?.pickup_date}
            valDropoffDate={formData?.dropoff_date}
            valPickupLocation={formData?.pickup_location}
            valDropoffLocation={formData?.dropoff_location}
            onChange={handleChange}
            errors={errors}
          />
        </Fragment>
      }
      footer={
        <Fragment>
          <button onClick={onClose} type="button" className="btn btn-secondary">
            Cancel
          </button>
          <button
            onClick={(e) => handleUpdate(e)}
            type="button"
            className="btn btn-success"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </Fragment>
      }
    />
  );
}

// Define prop types
Update.propTypes = {
  onClose: PropTypes.any,
  onShow: PropTypes.any,
  dataItem: PropTypes.any,
  setAlertSuccess: PropTypes.any,
  alertSuccess: PropTypes.any,
  setAlertError: PropTypes.any,
  alertError: PropTypes.any
};

export default Update;
