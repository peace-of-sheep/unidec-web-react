import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexFlow: "column wrap",
		alignItems: "center",
		padding: "28px 12px 20px",
		minWidth: "105px",
	},
	icon: {
		width: theme.spacing(3) + "px",
		height: theme.spacing(3) + "px",
	},
	title: {
		minHeight: theme.spacing(5) + "px",
		marginTop: theme.spacing(1) + "px",
	},
}));

const MenuHeroItem = ({ title, icon }) => {
	const classes = useStyles();
	return (
		<a>
			<div className={classes.container}>
				<div className={classes.icon}>{icon}</div>
				<Typography
					variant="body1"
					color="initial"
					className={classes.title}
				>
					{title}
				</Typography>
			</div>
		</a>
	);
};

export default MenuHeroItem;
