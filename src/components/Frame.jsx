import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
	container: {
		position: "relative",
		width: (props) => props.w,
		height: (props) => props.h,
		"& > *": {
			position: "absolute",
			top: "0",
			left: "0",
		},
	},
});

const Frame = (props) => {
	const classes = useStyles(props);

	const { className, styles, children } = props;

	const cls = clsx(classes.container, className);

	return (
		<div className={cls} styles={styles}>
			{children}
		</div>
	);
};

export default Frame;
