import React from "react";

const Square = props => (
	<button className="square" onClick={props.handleClick}>
		{props.value}
	</button>
);

export default Square;
