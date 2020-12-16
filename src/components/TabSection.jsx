import { Paper, Tab, withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import { useTabContext, useTabDispatchContext } from "contexts/TabContext";

const StyledTabs = withStyles((theme) => ({
	flexContainer: {
		justifyContent: "space-evenly",
	},
	indicator: {
		transform: "scaleX(0.75)",
		height: "4px",
		background: theme.palette.text.primary,
	},
}))(Tabs);

const StyledTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightBold,
		fontSize: theme.typography.pxToRem(15),
		[theme.breakpoints.up("sm")]: {
			minWidth: 105,
			padding: "28px 12px 20px",
		},
	},
	labelIcon: {
		minHeight: 72,
		"& $wrapper > *:first-child": {
			marginBottom: 8,
		},
	},
}))(Tab);

function a11yProps(index) {
	return {
		id: `tab-${index}`,
		"aria-controls": `tabpanel-${index}`,
	};
}

const TabSection = (props) => {
	const selectedTab = useTabContext();
	const dispatch = useTabDispatchContext();

	const { items } = props;

	return (
		<Paper square variant="outlined">
			<StyledTabs
				value={selectedTab}
				onChange={(e, v) => dispatch(v)}
				aria-label="Tabs"
			>
				{items.map((item, index) => (
					<StyledTab
						key={index}
						label={item.label}
						icon={item.icon}
						{...a11yProps(index)}
					/>
				))}
			</StyledTabs>
		</Paper>
	);
};

export default TabSection;
