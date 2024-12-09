import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Component
import ZRAlert from '../../components/ZRAlert';

// Modals
import DetailsModals from './modals/details';
import UpdateModals from './modals/update';
import DeleteModals from './modals/delete';
import CreateModals from './modals/create';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getListCars } from '../../redux/action/cars/creator';

function Index() {
  const carsList = useSelector((state) => state.cars.carsList);
  const dispatch = useDispatch();

  const [showCreate, setShowCreate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [alertSuccessCreate, setAlertSuccessCreate] = useState(false);
  const [alertErrorCreate, setAlertErrorCreate] = useState(false);
  const [alertSuccessDelete, setAlertSuccessDelete] = useState(false);
  const [alertErrorDelete, setAlertErrorDelete] = useState(false);
  const [alertSuccessEdit, setAlertSuccessEdit] = useState(false);
  const [alertErrorEdit, setAlertErrorEdit] = useState(false);

  const [itemModals, setItemModals] = useState(null);

  const onClickDetails = (id, item) => {
    setShowDetails(id);
    setItemModals(item);
  };

  const onClickEdit = (id, item) => {
    setShowEdit(id);
    setItemModals(item);
  };

  const onClickDelete = (id) => {
    setShowDelete(id);
  };

  const getDataListCars = () => {
    dispatch(getListCars());
  };

  const anotherAlertCreate = () => {
    return (
      <Fragment>
        {alertSuccessCreate && (
          <ZRAlert className="alert-success" title="Successfully added data" />
        )}
        {alertErrorCreate && <ZRAlert className="alert-danger" title="Failed to add data" />}
      </Fragment>
    );
  };

  const anotherAlertDelete = () => {
    return (
      <Fragment>
        {alertSuccessDelete && (
          <ZRAlert className="alert-success" title="Successfully delete data" />
        )}
        {alertErrorDelete && <ZRAlert className="alert-danger" title="Failed to delete data" />}
      </Fragment>
    );
  };

  const anotherAlertEdit = () => {
    return (
      <Fragment>
        {alertSuccessEdit && <ZRAlert className="alert-success" title="Successfully update data" />}
        {alertErrorEdit && <ZRAlert className="alert-danger" title="Failed to update data" />}
      </Fragment>
    );
  };

  useEffect(() => {
    getDataListCars();
  }, []);

  return (
    <Fragment>
      <div className="container mt-3">
        <div className="gutters-sm mb-3 row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xl-4">
          <div className="col">
            <button
              onClick={() => setShowCreate(true)}
              className="btn btn-primary btn-sm flex-fill has-icon w-100"
            >
              Create Car
            </button>
          </div>
          <div className="col">
            <Link to={`/orders`} className="btn btn-info btn-sm flex-fill has-icon w-100">
              Order Page
            </Link>
          </div>
        </div>
        {anotherAlertCreate()}
        {anotherAlertDelete()}
        {anotherAlertEdit()}
        {carsList?.length > 0 ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
            {carsList?.map((item, i) => (
              <div className="col mb-3" key={item?.id || i}>
                <div className="card">
                  <img
                    src={
                      item?.image instanceof File ? URL?.createObjectURL(item?.image) : item?.image
                    }
                    alt="Cover"
                    className="card-img-top"
                    style={{ height: '200px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name : {item?.name}</h5>
                    <p className="text-secondary mb-1">Month Rate : {item?.month_rate}</p>
                    <p className="text-muted font-size-sm text-truncate">
                      Day Rate: {item?.day_rate}
                    </p>
                  </div>
                  <div className="card-footer d-flex">
                    <button
                      onClick={() => onClickDetails(item?.id, item)}
                      className="btn btn-block btn-primary btn-sm flex-fill has-icon"
                      type="button"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onClickEdit(item?.id, item)}
                      className="btn btn-block btn-sm btn-success has-icon ms-2"
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onClickDelete(item?.id)}
                      className="ms-2 btn btn-block btn-danger btn-sm has-icon text-white"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="col-12">
            <div className="alert alert-info text-center" role="alert">
              No data.
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <CreateModals
        onClose={() => setShowCreate(false)}
        onShow={showCreate}
        setAlertSuccess={setAlertSuccessCreate}
        alertSuccess={alertSuccessCreate}
        setAlertError={setAlertErrorCreate}
        alertError={alertErrorCreate}
      />
      <DetailsModals
        onClose={() => {
          setShowDetails(false);
          setItemModals(null);
        }}
        onShow={showDetails}
        dataItem={itemModals}
      />
      <UpdateModals
        onClose={() => {
          setShowEdit(false);
          setItemModals(null);
        }}
        onShow={showEdit}
        dataItem={itemModals}
        setAlertSuccess={setAlertSuccessEdit}
        alertSuccess={alertSuccessEdit}
        setAlertError={setAlertErrorEdit}
        alertError={alertErrorEdit}
      />
      <DeleteModals
        onClose={() => setShowDelete(false)}
        onShow={showDelete}
        carId={showDelete}
        setAlertSuccess={setAlertSuccessDelete}
        alertSuccess={alertSuccessDelete}
        setAlertError={setAlertErrorDelete}
        alertError={alertErrorDelete}
      />
    </Fragment>
  );
}

export default Index;
