import { makeStyles, Typography } from "@material-ui/core";
import AppPadder from "./AppPadder";

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.dark.main,
		color: theme.palette.dark.contrastText,
		padding: "24px 0px",
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<AppPadder>
				<Typography variant="h4" color="initial">
					CITBM
				</Typography>
			</AppPadder>
		</div>
	);
};

export default Footer;
