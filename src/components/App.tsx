import { useDarkMode } from "theme/ThemeWrapper";
import Navbar from "./Navbar";
import SectionForm from "./SectionForm";
import SideDrawer from "./SideDrawer";
import Footer from "./Footer";

function App() {
	console.log("[App] running");

	return (
		<>
			<Navbar />
			<SectionForm />
			<Footer />
		</>
	);
}

export default App;
