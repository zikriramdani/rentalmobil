import React, { Fragment, useState, useEffect } from 'react';

// Component
import ZRAlert from '../../components/ZRAlert';

// Modals
import DetailsModals from './modals/details';
import UpdateModals from './modals/update';
import DeleteModals from './modals/delete';
import CreateModals from './modals/create';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getListUsers } from '../../redux/action/users/creator';

function Index() {
  const usersList = useSelector((state) => state.users.usersList);
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

  const getDataListUsers = () => {
    dispatch(getListUsers());
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
    getDataListUsers();
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
              Create
            </button>
          </div>
        </div>
        {anotherAlertCreate()}
        {anotherAlertDelete()}
        {anotherAlertEdit()}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
          {usersList?.map((item, i) => (
            <div className="col mb-3" key={item?.id || i}>
              <div className="card">
                <img
                  src={`https://picsum.photos/id/${item?.id}/340/120.webp`}
                  alt="Cover"
                  className="card-img-top"
                />
                <div
                  className="card-body text-center"
                  style={{ maxHeight: '183px', minHeight: '183px' }}
                >
                  <img
                    src={`https://picsum.photos/id/${item?.id}/315/315.webp`}
                    style={{ width: '100px', marginTop: '-65px' }}
                    alt="User"
                    className="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                  />
                  <h5 className="card-title ZR-text-limit" title={item?.name}>
                    {item?.name}
                  </h5>
                  <p className="text-secondary mb-1">{item?.phone}</p>
                  <p className="text-muted font-size-sm text-truncate" title={item?.email}>
                    {item?.email}
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
        userId={showDelete}
        setAlertSuccess={setAlertSuccessDelete}
        alertSuccess={alertSuccessDelete}
        setAlertError={setAlertErrorDelete}
        alertError={alertErrorDelete}
      />
    </Fragment>
  );
}

export default Index;
