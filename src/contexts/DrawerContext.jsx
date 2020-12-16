import { createContext, useContext, useReducer, useState } from "react";

const DrawerContext = createContext();
const DrawerDispatchContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "open":
			return {
				open: true,
				item: action.payload,
			};
		case "close":
			return { open: false, item: {} };
		default:
			break;
	}
};

const DrawerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		open: false,
		item: {},
	});

	return (
		<DrawerContext.Provider value={state}>
			<DrawerDispatchContext.Provider value={dispatch}>
				{children}
			</DrawerDispatchContext.Provider>
		</DrawerContext.Provider>
	);
};

const useDrawerDispatcherContext = () => {
	const dispatch = useContext(DrawerDispatchContext);
	const actions = {
		open: (item) => dispatch({ type: "open", payload: item }),
		close: () => dispatch({ type: "close" }),
	};
	return actions;
};

const useDrawerContext = () => {
	const state = useContext(DrawerContext);
	const actions = useDrawerDispatcherContext();
	return { state, actions };
};

export { DrawerProvider, useDrawerContext, useDrawerDispatcherContext };
