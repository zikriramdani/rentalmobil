

import React, { Fragment } from "react";
import PropTypes from 'prop-types';

function ZRAlert(props) {
  const { className, title } = props;
	return (
		<Fragment>
			<div className={`alert ${className}`} role="alert">
        {title}
      </div>
		</Fragment>
	)
}

// Define prop types
ZRAlert.propTypes = {
  className: PropTypes.any,
  title: PropTypes.any,
};

export default ZRAlert;