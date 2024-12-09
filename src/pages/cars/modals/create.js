import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Modals
import ZRModals from '../../../components/ZRModals';

// Components
import Info from './components/info';

import { useDispatch } from 'react-redux';
import { createCar } from '../../../redux/action/cars/creator';

function Create(props) {
  const { onClose, onShow, setAlertSuccess, alertSuccess, setAlertError, alertError } = props;
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    month_rate: '',
    day_rate: ''
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files[0];
      setFormData({ ...formData, [name]: file });

      if (file) {
        setImagePreview(URL.createObjectURL(file));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });

      // Validate the changed field
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value)
      }));
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'image':
        return value ? '' : 'Image is required.';
      case 'name':
        return value ? '' : 'Name is required.';
      case 'month_rate':
        return value ? '' : 'Month Rate is required.';
      case 'day_rate':
        return value ? '' : 'Day Rate is required.';
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
      image: '',
      name: '',
      month_rate: '',
      day_rate: ''
    });
    setImagePreview('');
    onClose();
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      try {
        await dispatch(createCar(formData));
        setAlertSuccess(true);
        resetForm();
      } catch (error) {
        setAlertError(true);
      } finally {
        setIsLoading(false);
      }
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
      title="Create"
      body={
        <Fragment>
          <Info
            isDisabledUsername={false}
            imagePreview={imagePreview}
            valImages={formData?.image}
            valName={formData.name}
            valMonthRate={formData.month_rate}
            valDayRate={formData.day_rate}
            onChange={handleChange}
            errors={errors}
          />
        </Fragment>
      }
      footer={
        <Fragment>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            onClick={(e) => handleSave(e)}
            type="button"
            className="btn btn-success"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save'}
          </button>
        </Fragment>
      }
    />
  );
}

// Define prop types
Create.propTypes = {
  onClose: PropTypes.any,
  onShow: PropTypes.any,
  setAlertSuccess: PropTypes.any,
  alertSuccess: PropTypes.any,
  setAlertError: PropTypes.any,
  alertError: PropTypes.any
};

export default Create;
