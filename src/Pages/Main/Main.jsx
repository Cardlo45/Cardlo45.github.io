import "./Main.css"

import Background from "Components/Background/Background";
import Navigation from "Components/Navigation/Navigation";
import Footer from "Components/Footer/Footer";

function Main() {
	return (
		<>
			<Background />
			<Navigation />
			<title>Carslo's Webside</title>
			<div className="body">
				<div className="splashtext">
					<p>Creating Problems Since 2005</p>
				</div>
				<div className="content">
					<p>Someday I might write something here.</p>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Main;
