import { makeStyles } from "@material-ui/core";
import { TabProvider, useTabContext } from "contexts/TabContext";
import Image from "components/Image";
import HealingIcon from "@material-ui/icons/Healing";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TabSection from "./TabSection";
import TabPanel from "./TabPanel";
import {
	DrawerProvider,
	useDrawerDispatcherContext,
} from "contexts/DrawerContext";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		display: "grid",
		gridTemplateColumns: "1fr",
		gridTemplateRows: "auto auto",
	},
	image: {
		gridRow: "2",
	},
	tabContainer: {
		gridRow: "1",
		padding: `0 calc((100vw - ${theme.breakpoints.values.lg}px) / 2)`,
	},
	[theme.breakpoints.up("md")]: {
		container: {
			minHeight: "640px",
			gridTemplateRows: "auto",
		},
		image: {
			gridColumn: "1",
			gridRow: "1",
		},
		tabContainer: {
			gridColumn: "1",
			gridRow: "1",
		},
		box: {
			padding: "64px",
		},
	},
}));

const Parallax = () => {
	const selectedTab = useTabContext();
	const actions = useDrawerDispatcherContext();
	const classes = useStyles();

	const items = [
		{
			id: 0,
			label: "COVID-19",
			text:
				"Nuestra Unidad de ensayos clínicos, siempre preocupada por el bienestar de nuestra comunidad, se encuentra buscando a los héroes de la pandemia que están decididos a poner el hombro para luchar contra el COVID-19.",
			buttonText: "Poner el hombro",
			icon: <HealingIcon />,
			imgUrl:
				"https://larepublica.pe/resizer/f_HncIkxVfUMOP7CAaixmBoMzHQ=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/7UQYOCVZZRA53BMN5LT6KLGY4M.jpeg",
		},
		{
			id: 1,
			label: "VIH",
			text:
				"Desde hace más de 4 décadas que el VIH nos ataca, en la actualidad afecta a XXX personas en todo mundo, hoy en CITBM creemos estar muy cerca de de poder encontrar por fin una vacuna, pero necesitamos de los héroes que nuestra lucha necesita para ganar esta guerra.",
			buttonText: "Sé un héroe",
			icon: <FavoriteBorderIcon />,
			imgUrl:
				"https://larepublica.pe/resizer/FVXE_AR_o0czgIpGFVVdmZpjpm8=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/TWTJK2B6AFA43HJVUKU5TACZ7E.jpg",
		},
		{
			id: 2,
			label: "Papiloma",
			text:
				"Duis aliquam quis mauris sit amet aliquam. Mauris elementum leo nisi, quis ornare ligula pretium et. Mauris at pulvinar sapien, id ultricies enim.",
			buttonText: "Registrarse",
			icon: <LocalHospitalIcon />,
			imgUrl:
				"https://larepublica.pe/resizer/QDN46yKBNgudopHYGt2U6C_VmYg=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/LFYJXDNEKZEWTOJ377P7TUXMMY.jpg",
		},
	];

	return (
		<section className={classes.container}>
			<Image
				imgUrl={items[selectedTab].imgUrl}
				alt={"Image background"}
				color={"#fff"}
				className={classes.image}
			/>
			<div className={classes.tabContainer}>
				<div className={classes.box}>
					<TabSection items={items} />
					<TabPanel
						item={items[selectedTab]}
						onButtonClick={() => actions.open(items[selectedTab])}
					/>
				</div>
			</div>
		</section>
	);
};

const SectionForm = () => (
	<DrawerProvider>
		<TabProvider>
			<Parallax />
		</TabProvider>
		<SideDrawer />
	</DrawerProvider>
);

export default SectionForm;
