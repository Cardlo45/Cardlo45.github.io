
import { Outlet } from "react-router-dom";

import Background from "Components/Background/Background";
import Navigation from "Components/Navigation/Navigation";
import Footer from "Components/Footer/Footer";

function MainLayout() {
	return (
		<>
			<Background />
			<Navigation />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayout;