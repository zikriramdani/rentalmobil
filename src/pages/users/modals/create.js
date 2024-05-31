import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Modals
import ZRModals from "../../../components/ZRModals"

// Components
import Info from "./components/info";

import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/action/users/creator';

function Create(props) {
	const { onClose, onShow, setAlertSuccess, alertSuccess, setAlertError, alertError } = props;
	const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
          lat: "-37.3159",
          lng: "81.1496"
      }
    },
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    }
  });
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

	const handleChange = (e) => {
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
      case "username":
        return value ? "" : "Username is required.";
      case "name":
        return value ? "" : "Name is required.";
      case "email":
        if (!value) return "Email is required.";
        return /\S+@\S+\.\S+/.test(value) ? "" : "Email is invalid.";
      case "website":
        if (value && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value)) return "Website URL is invalid.";
        return "";
      default:
        return "";
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
			username: "",
			name: "",
			email: "",
			phone: "",
			website: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
      },
      company: {
          name: "",
          catchPhrase: "",
          bs: ""
      }
		});
		onClose();
	}

	const handleSave = async (e) => {
		e.preventDefault();
		const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
			setIsLoading(true);
      try {
        await dispatch(createUser(formData));
        setAlertSuccess(true);
        resetForm();
      } catch (error) {
				setAlertError(true);
      } finally {
        setIsLoading(false); 
      }
    }
	}

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
    <ZRModals onClose={onClose} onShow={onShow}
			title="Create"
			body={<Fragment>
				<Info
          isDisabledUsername={false}
					valUsername={formData.username}
					valName={formData.name}
					valEmail={formData.email}
					valPhone={formData.phone}
					valWebsite={formData.website}
					onChange={handleChange}
					errors={errors}
        />
			</Fragment>}
			footer={<Fragment>
				<button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        <button onClick={(e)=> handleSave(e)} type="button" className="btn btn-success" disabled={isLoading}>
					{isLoading ? "Saving..." : "Save"}
				</button>
			</Fragment>}
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
	alertError: PropTypes.any,
};

export default Create;
