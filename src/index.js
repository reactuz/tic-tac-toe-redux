import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import gameReducers from "./reducers.js";
import Game from "./components/Game.js";
import "./index.css";

const store = createStore(gameReducers);

render(
	<Provider store={store}>
		<Game />
	</Provider>,
	document.getElementById("root")
);
