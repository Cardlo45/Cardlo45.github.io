import { Test, Test2 } from "@/app/projects/_pages/";
import { ReactNode } from "react";

export function generateStaticParams() {
	return [{ projects: "test" }, { projects: "test2" }]
}

export default async function ProjectPage({ params, }: { params: Promise<{ projects: string }> }) {
	const proj: string = (await params).projects;

	let obj: ReactNode;

	switch (proj) {
		case "test": { obj = <Test />; break; }
		case "test2": { obj = <Test2 />; break; }
	}

	return (
		<>
			{obj}
		</>
	);
} 
