import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles({
	container: {
		width: "100%",
		height: "100%",
		background: (props) => props.color,
		"& img": {
			width: "100%",
			height: "100%",
		},
	},
});

const Image = (props) => {
	const classes = useStyle(props);

	const { imgUrl, alt, className } = props;

	const handleStateImg = (state) => {
		console.log("img " + (state ? "loaded" : "error"));
	};

	return (
		<div className={clsx(classes.container, className)}>
			<img
				src={imgUrl}
				alt={alt}
				onLoad={() => handleStateImg(true)}
				onError={() => handleStateImg(false)}
			/>
		</div>
	);
};

export default Image;
