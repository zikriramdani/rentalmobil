import React, { Fragment, useState, useEffect } from 'react';

// Modals
import ZRModals from "../../../components/ZRModals";

import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/action/users/creator';

function Delete(props) {
	const { onClose, onShow, userId, setAlertSuccess, alertSuccess, setAlertError, alertError } = props;

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const handleDelete = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await dispatch(deleteUser(userId));
			setAlertSuccess(true);
			onClose();
		} catch (error) {
			setAlertError(true);
		} finally {
			setIsLoading(false); 
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
			title="Delete"
			customModalDialog=" "
			body={<Fragment>
      	<p>Are you sure you want to delete your {userId} ?</p> 
			</Fragment>}
			footer={<Fragment>
				<button onClick={onClose} type="button" className="btn btn-secondary" >Cancel</button>
        <button onClick={(e)=> handleDelete(e)} type="button" className="btn btn-danger" disabled={isLoading}>
					{isLoading ? "Deleting..." : "Delete"}
				</button>
			</Fragment>}
		/>
  );
}

export default Delete;
