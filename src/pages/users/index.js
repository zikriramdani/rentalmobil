import React, {useState, useEffect} from 'react';

function Index() {
	const [dataUsers, setDataUsers] = useState([]);

	const getListUsers = () => {
		setDataUsers([1,2,3,4,5,6])
	}

	useEffect(()=> {
		getListUsers();
	}, [])
	
  return (
    <div className="container mt-3">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
					{dataUsers.map((item, i) => (
						<div className="col mb-3" key={item || i}>
							<div className="card">
								<img src="https://www.bootdey.com/image/340x120/808080/000000" alt="Cover" className="card-img-top" />
								<div className="card-body text-center">
									<img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{width: "100px", marginTop: "-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
									<h5 className="card-title">John Doe</h5>
									<p className="text-secondary mb-1">Full Stack Developer</p>
									<p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
								</div>
								<div className="card-footer d-flex">
									<button className="btn btn-block btn-primary btn-sm flex-fill has-icon" type="button">Details</button>
									<button className="btn btn-block btn-sm btn-success has-icon ms-2" type="button">Edit</button>
									<button className="ms-2 btn btn-block btn-danger btn-sm has-icon text-white" type="button">Delete</button>
								</div>
							</div>
						</div>
					))}
				</div>
    </div>
  );
}

export default Index;
