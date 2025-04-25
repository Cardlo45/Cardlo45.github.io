import { Route, Routes } from "react-router-dom"

import MainLayout from "Layouts/MainLayout"

import Main from "Pages/Main/Main"
import Projects from "Pages/Main/Projects/Projects"
import About from "Pages/Main/About/About"
import Contact from "Pages/Main/Contact/Contact"

import Page404 from "Pages/404/404"

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Main />} />
				<Route path="Projects" element={<Projects />} />
				<Route path="About" element={<About />} />
				<Route path="Contact" element={<Contact />} />
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}

export default App;