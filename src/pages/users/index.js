import React, { Fragment, useState, useEffect } from 'react';

// Modals
import Details from "./modals/details";
import Edit from "./modals/edit";

// Data
import ListUsers from "../../assets/data/users.json";

function Index() {
	const [dataUsers, setDataUsers] = useState([]);

	const [showDetails, setShowDetails] = useState(false);
	const [showEdit, setShowEdit] = useState(false);

	const onClickDetails = (id) => {
		setShowDetails(id);
	}

	const onClickEdit = (id) => {
		setShowEdit(id);
	}

	const getListUsers = () => {
		setDataUsers(ListUsers)
	}

	useEffect(()=> {
		getListUsers();
	}, [])

	console.log('ListUsers', dataUsers)
	
  return (
		<Fragment>
			<div className="container mt-3">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
						{dataUsers.map((item, i) => (
							<div className="col mb-3" key={item?.id || i}>
								<div className="card">
									<img src="https://www.bootdey.com/image/340x120/808080/000000" alt="Cover" className="card-img-top" />
									<div className="card-body text-center">
										<img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{width: "100px", marginTop: "-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
										<h5 className="card-title">{item?.name}</h5>
										<p className="text-secondary mb-1">{item?.phone}</p>
										<p className="text-muted font-size-sm">{item?.email}</p>
									</div>
									<div className="card-footer d-flex">
										<button onClick={()=> onClickDetails(item?.id)} className="btn btn-block btn-primary btn-sm flex-fill has-icon" type="button">Details</button>
										<button  onClick={()=> onClickEdit(item?.id)} className="btn btn-block btn-sm btn-success has-icon ms-2" type="button">Edit</button>
										<button className="ms-2 btn btn-block btn-danger btn-sm has-icon text-white" type="button">Delete</button>
									</div>
								</div>
							</div>
						))}
					</div>
			</div>

			{/* Modal */}
			<Details onClose={()=> setShowDetails(false)} onShow={showDetails} id={showDetails} />
			<Edit onClose={()=> setShowEdit(false)} onShow={showEdit} id={showEdit} />
		</Fragment>
  );
}

export default Index;
