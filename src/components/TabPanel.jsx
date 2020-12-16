import { Paper, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "1fr",
	},
	content: {
		padding: "24px",
	},
	button: {
		margin: "24px 0",
	},
	[theme.breakpoints.up("sm")]: {
		content: {
			padding: "32px",
		},
	},
	[theme.breakpoints.up("md")]: {
		container: {
			gridTemplateColumns: "1fr 1fr",
			columnGap: "24px",
		},
		content: {
			gridColumn: "1",
			padding: "48px",
		},
	},
}));

const PanelOne = ({ title }) => {};

const PanelTwo = ({ title }) => {};

const PanelThree = ({ title }) => {};

const TabPanel = ({ item, onButtonClick }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Paper variant="outlined" square className={classes.content}>
				<Typography variant="h4" color="initial">
					{item.label}
				</Typography>
				<Typography variant="body1" color="initial">
					{item.text}
				</Typography>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					onClick={() => onButtonClick(true)}
				>
					Registrarse
				</Button>
			</Paper>
		</div>
	);
};

export default TabPanel;
