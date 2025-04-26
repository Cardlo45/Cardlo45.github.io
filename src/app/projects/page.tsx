
import bgImg from "@/assets/Background.png"
import { Background, Footer, NavBar } from "@/components";

export default function Projects() {
	return (
		<>
			<title>Carslo's Webside</title>
			<Background img={bgImg} />
			<NavBar buttons={[
				{ text: "Projects", target: "/projects" },
				{ text: "About Me", target: "/about" },
				{ text: "Contact", target: "/contact" },
			]} />
			<div className="body">
				<p>My Projects</p>
			</div>
			<div className="grow"></div>
			<Footer buttons={[
				{ text: "Github", target: "https://github.com/Cardlo45" },
				{ text: "Itch.io", target: "https://carslo.itch.io" },
				{ text: "Discord", target: "https://discord.gg/2dKhcCC34V" },
				{ text: "Patreon", target: "https://patreon.com/carslo_45" },
				{ text: "Buy Me A Coffee", target: "https://www.buymeacoffee.com/Carslo_45" },
				{ text: "Source Code", target: "https://github.com/Cardlo45/Cardlo45.github.io" },
			]} />
		</>
	);
}
