import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: 0,
		[theme.breakpoints.up("lg")]: {
			padding: `0 calc((100vw - ${theme.breakpoints.values.lg}px) / 2)`,
		},
	},
}));

const AppPadder = ({ children }) => {
	const classes = useStyles();
	return <div className={classes.container}>{children}</div>;
};

export default AppPadder;
