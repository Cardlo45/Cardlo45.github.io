import Background from "@/components/background";

import bgImg from "@/assets/Background.png"
import { NavBar } from "@/components";

export default function ProjectLayou({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<>
			<Background img={bgImg} />
			<NavBar buttons={[{ text: "Test", target: "/projects/test" }]} />
			{children}
			<p>Bottom - ProjectLayout</p>
		</>
	);
}
