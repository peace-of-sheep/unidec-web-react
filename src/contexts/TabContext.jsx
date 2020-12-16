import { createContext, useContext, useState } from "react";

const TabContext = createContext();
const TabDispatchContext = createContext();

const TabProvider = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<TabContext.Provider value={selectedTab}>
			<TabDispatchContext.Provider value={setSelectedTab}>
				{children}
			</TabDispatchContext.Provider>
		</TabContext.Provider>
	);
};

const useTabContext = () => {
	return useContext(TabContext);
};

const useTabDispatchContext = () => {
	return useContext(TabDispatchContext);
};

export { TabProvider, useTabContext, useTabDispatchContext };
