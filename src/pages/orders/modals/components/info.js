import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getListCars } from '../../../../redux/action/cars/creator';

function Info(props) {
  const {
    isDisabled,
    valCarId = '',
    valOrderDate = '',
    valPickupDate = '',
    valDropoffDate = '',
    valPickupLocation = '',
    valDropoffLocation = '',
    onChange,
    errors = {}
  } = props;
  const carsList = useSelector((state) => state.cars.carsList);
  const dispatch = useDispatch();

  const getDataListCars = () => {
    dispatch(getListCars());
  };

  useEffect(() => {
    getDataListCars();
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              CarId<span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              name="car_id"
              required
              value={valCarId}
              disabled={isDisabled}
              onChange={onChange}
            >
              <option value="" disabled>
                Select a car
              </option>
              {carsList?.map((car) => (
                <option key={car?.id} value={car?.id}>
                  {car?.name}
                </option>
              ))}
            </select>
            {errors.car_id && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.car_id}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Order Date<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              onChange={onChange}
              className="form-control"
              name="order_date"
              value={valOrderDate}
              disabled={isDisabled}
              required
            />
            {errors.order_date && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.order_date}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Pickup Date<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              onChange={onChange}
              className="form-control"
              name="pickup_date"
              value={valPickupDate}
              disabled={isDisabled}
            />
            {errors.pickup_date && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.pickup_date}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Dropoff Date<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              onChange={onChange}
              className="form-control"
              name="dropoff_date"
              value={valDropoffDate}
              disabled={isDisabled}
              required
            />
            {errors.dropoff_date && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.dropoff_date}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Pickup Location<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              className="form-control"
              name="pickup_location"
              value={valPickupLocation}
              disabled={isDisabled}
              required
            />
            {errors.pickup_location && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.pickup_location}
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="mb-3">
            <label className="col-form-label">
              Dropoff Location<span className="text-danger">*</span>
            </label>
            <input
              onChange={onChange}
              className="form-control"
              name="dropoff_location"
              value={valDropoffLocation}
              disabled={isDisabled}
              required
            />
            {errors.dropoff_location && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {errors.dropoff_location}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// Define prop types
Info.propTypes = {
  isDisabledUsername: PropTypes.any,
  isDisabled: PropTypes.any,
  valCarId: PropTypes.any,
  valOrderDate: PropTypes.any,
  valPickupDate: PropTypes.any,
  valDropoffDate: PropTypes.any,
  valPickupLocation: PropTypes.any,
  valDropoffLocation: PropTypes.any,
  onChange: PropTypes.any,
  errors: PropTypes.any,
  carsList: PropTypes.any
};

export default Info;
