import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appbar: {
		padding: `0.5em calc((100vw - ${theme.breakpoints.values.lg}px) / 2)`,
	},
	logo: {
		padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
		height: "100%",
	},
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<>
			<AppBar
				position="static"
				color="primary"
				className={classes.appbar}
			>
				<Toolbar>
					<img
						className={classes.logo}
						src="https://i.imgur.com/1O3kPqf.png"
						alt=""
					/>
					{/* <Typography variant="h6" className={classes.title}>
						Title
					</Typography> */}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
