import "./404.css"

import Background from "Components/Background/Background";
import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";

function Page404() {
	return (
		<>
			<Background/>
			<Navigation/>
			<title>Page not found.</title>
			<div className="body">
				<p>Page not found.</p>
			</div>
			<Footer/>
		</>
	)
}

export default Page404;