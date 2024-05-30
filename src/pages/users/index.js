import React, { Fragment, useState, useEffect } from 'react';

// Modals
import DetailsModals from "./modals/details";
import EditModals from "./modals/edit";
import DeleteModals from "./modals/delete";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getListUsers } from "../../redux/action/users/creator";

function Index() {
	const usersList = useSelector((state) => state.users.usersList)
  const dispatch = useDispatch();

	const [showDetails, setShowDetails] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);

	const onClickDetails = (id) => {
		setShowDetails(id);
	}

	const onClickEdit = (id) => {
		setShowEdit(id);
	}

	const onClickDelete = (id) => {
		setShowDelete(id);
	}

	const getDataListUsers = () => {
		dispatch(getListUsers());
	}

	useEffect(() => {
		getDataListUsers();
	}, []);

	console.log('Redux', usersList)
	
  return (
		<Fragment>
			<div className="container mt-3">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
						{usersList?.map((item, i) => (
							<div className="col mb-3" key={item?.id || i}>
								<div className="card">
									<img src={item?.banner} alt="Cover" className="card-img-top" />
									<div className="card-body text-center">
										<img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{width: "100px", marginTop: "-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
										<h5 className="card-title">{item?.name}</h5>
										<p className="text-secondary mb-1">{item?.phone}</p>
										<p className="text-muted font-size-sm">{item?.email}</p>
									</div>
									<div className="card-footer d-flex">
										<button onClick={()=> onClickDetails(item?.id)} className="btn btn-block btn-primary btn-sm flex-fill has-icon" type="button">Details</button>
										<button onClick={()=> onClickEdit(item?.id)} className="btn btn-block btn-sm btn-success has-icon ms-2" type="button">Edit</button>
										<button onClick={()=> onClickDelete(item?.id)} className="ms-2 btn btn-block btn-danger btn-sm has-icon text-white" type="button">Delete</button>
									</div>
								</div>
							</div>
						))}
					</div>
			</div>

			{/* Modal */}
			<DetailsModals onClose={()=> setShowDetails(false)} onShow={showDetails} id={showDetails} />
			<EditModals onClose={()=> setShowEdit(false)} onShow={showEdit} id={showEdit} />
			<DeleteModals onClose={()=> setShowDelete(false)} onShow={showDelete} id={showDelete} />
		</Fragment>
  );
}

export default Index;
