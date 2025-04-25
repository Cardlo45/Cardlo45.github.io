import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Main from "Pages/Main/Main"
import Projects from "Pages/Projects/Projects"
import About from "Pages/About/About"
import Contact from "Pages/Contact/Contact"
import Page404 from "Pages/404/404"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="Projects" element={<Projects />} />
					<Route path="About" element={<About />} />
					<Route path="Contact" element={<Contact />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;