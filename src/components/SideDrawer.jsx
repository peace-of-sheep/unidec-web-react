import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { useDrawerContext } from "contexts/DrawerContext";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: "100vw",
	},
	container: {
		padding: "48px",
		width: "100%",
	},
	textField: {
		margin: "16px 0",
	},
	icon: {
		width: "64px",
		height: "64px",
		fontSize: 48,
	},
	[theme.breakpoints.up("sm")]: {
		drawer: {
			width: "auto",
		},
		container: {
			padding: "64px",
			width: "500px",
		},
	},
}));

const SideDrawer = () => {
	const { state, actions } = useDrawerContext();
	const classes = useStyles();

	const toggleDrawer = (newState) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		actions.close();
	};

	return (
		<>
			<Drawer
				variant="temporary"
				anchor="right"
				open={state.open}
				onClose={toggleDrawer(false)}
				className={classes.drawer}
			>
				<div className={classes.container}>
					<IconButton
						aria-label="close drawer"
						onClick={toggleDrawer(false)}
						className={classes.icon}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>

					<Typography variant="h4" color="initial">
						{state.item.label}
					</Typography>

					<Typography variant="body1" color="initial">
						{state.item.text}
					</Typography>

					<form noValidate autoComplete="off">
						<TextField
							id="name"
							label="Nombre"
							variant="outlined"
							fullWidth
							className={classes.textField}
						/>
						<TextField
							id="dni"
							label="Dni"
							variant="outlined"
							fullWidth
							className={classes.textField}
						/>

						<Button variant="contained" color="secondary">
							Regístrate
						</Button>
					</form>
				</div>
			</Drawer>
		</>
	);
};

export default SideDrawer;
