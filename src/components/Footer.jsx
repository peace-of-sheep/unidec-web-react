import { makeStyles, Typography } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	siteFooter: {
		background: theme.palette.dark.main,
		color: theme.palette.dark.contrastText,
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "1fr",
		justifyItems: "center",
		padding: theme.spacing(0, 2),
	},
	socialMedia: {
		display: "grid",
		gridTemplateColumns: "repeat(3, auto)",
		columnGap: "8px",
	},
}));

const Footer = () => {
	const classes = useStyles();

	const clsFooter = clsx(classes.siteFooter, classes.grid);
	return (
		<footer className={clsFooter}>
			<Typography variant="h6">Para investigadores</Typography>
			<Typography variant="body1" align="center">
				Ca. José Santos Chocano 199 <br />
				Urb. San Joaquín, <br />
				Bellavista - Callao
			</Typography>

			<Typography variant="body1">citbm@citbm.pe</Typography>

			<div className={classes.socialMedia}>
				<FacebookIcon />
				<LinkedInIcon />
				<YouTubeIcon />
			</div>

			<Typography variant="body1">
				Copyright © All rights reserved.
			</Typography>
		</footer>
	);
};

export default Footer;
