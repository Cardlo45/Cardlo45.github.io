import "./404.css"

import Background from "Components/Background/Background";
import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";

function Page404() {
	return (
		<>
			<Background />
			<Navigation />
			<title>Page not found.</title>
			<div className="page-404">
				<div className="page-404b">
					<p className="not-found">Error 404 Page not found.</p>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Page404;