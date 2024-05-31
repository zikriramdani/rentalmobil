import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ZRModals from '../../../components/ZRModals';

// Components
import Info from './components/info';
import Address from './components/address';
import Company from './components/company';

// Redux
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/action/users/creator';

function Update(props) {
  const { onClose, onShow, dataItem, setAlertSuccess, alertSuccess, setAlertError, alertError } =
    props;
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e, object) => {
    const { name, value } = e.target;
    if (object === 'address') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        address: {
          ...prevFormData.address,
          [name]: value
        }
      }));
    } else if (object === 'company') {
      if (name === 'company_name') {
        setFormData((prevFormData) => ({
          ...prevFormData,
          company: {
            ...prevFormData.company,
            name: value
          }
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          company: {
            ...prevFormData.company,
            [name]: value
          }
        }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    // Validate the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value)
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        return value ? '' : 'Username is required.';
      case 'name':
        return value ? '' : 'Name is required.';
      case 'email':
        if (!value) return 'Email is required.';
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Email is invalid.';
      case 'website':
        if (value && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value))
          return 'Website URL is invalid.';
        return '';
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
      username: '',
      name: '',
      email: '',
      phone: '',
      website: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
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
        await dispatch(updateUser(dataItem?.id, formData));
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
      username: dataItem?.username,
      name: dataItem?.name,
      email: dataItem?.email,
      phone: dataItem?.phone,
      website: dataItem?.website,
      address: {
        street: dataItem?.address?.street,
        suite: dataItem?.address?.suite,
        city: dataItem?.address?.city,
        zipcode: dataItem?.address?.zipcode,
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      company: {
        name: dataItem?.company?.name,
        catchPhrase: dataItem?.company?.catchPhrase,
        bs: dataItem?.company?.bs
      }
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
            valImages={`https://picsum.photos/id/${dataItem?.id}/315/315.webp`}
            valUsername={formData?.username}
            valName={formData?.name}
            valEmail={formData?.email}
            valPhone={formData?.phone}
            valWebsite={formData?.website}
            onChange={handleChange}
            errors={errors}
          />
          <hr />
          <Address
            valStreet={formData?.address?.street}
            valSuite={formData?.address?.suite}
            valCity={formData?.address?.city}
            valZipcode={formData?.address?.zipcode}
            onChange={(e) => handleChange(e, 'address')}
          />
          <hr />
          <Company
            valCompanyName={formData?.company?.name}
            valCatchPhrase={formData?.company?.catchPhrase}
            valBs={formData?.company?.bs}
            onChange={(e) => handleChange(e, 'company')}
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
