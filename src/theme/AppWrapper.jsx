import { StrictMode } from "react";
import ThemeWrapper from "theme/ThemeWrapper";
import App from "components/App";

const AppWrapper = () => (
	<StrictMode>
		<ThemeWrapper>
			<App />
		</ThemeWrapper>
	</StrictMode>
);

export default AppWrapper;
