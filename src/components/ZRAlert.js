

import React, { Fragment } from "react";

function ZRAlert(props) {
  const { className, title } = props;
	return (
		<Fragment>
			<div class={`alert ${className}`} role="alert">
        {title}
      </div>
		</Fragment>
	)
};

export default ZRAlert;