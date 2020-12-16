import { createContext, useContext, useReducer } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import baseTheme from "theme/themeConfig.js";

const ThemeContext = createContext();
const DarkModeContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "changeDarkMode":
			return {
				...state,
				darkMode: !state.darkMode,
			};
		default:
			return state;
	}
};

const ThemeWrapper = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		darkMode: false,
	});

	const theme = {
		...baseTheme,
		palette: {
			...baseTheme.palette,
			type: state.darkMode ? "dark" : "light",
		},
	};

	return (
		<ThemeContext.Provider value={state}>
			<DarkModeContext.Provider value={dispatch}>
				<ThemeProvider theme={createMuiTheme(theme)}>
					{children}
				</ThemeProvider>
			</DarkModeContext.Provider>
		</ThemeContext.Provider>
	);
};

export const useDarkMode = () => {
	const dispatch = useContext(DarkModeContext);
	return () => dispatch({ type: "changeDarkMode" });
};

export default ThemeWrapper;
