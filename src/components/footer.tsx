import Link from "next/link";

import styles from "@/styles/footer.module.css";

// import { unstable_ViewTransition as ViewTransition } from "react";

export default function Footer(props: { buttons: Array<{ text: string, target: string }> }) {
	return (
		// <ViewTransition name="footer">
			<footer className={styles.footer}>
				<ul className={styles.footer_menu}>
					{
						props.buttons.map((btn) => (
							<li key={btn.text}>
								<Link href={btn.target}>{btn.text}</Link>
							</li>
						))
					}
				</ul>
				© Carslo_45 2025
			</footer>
		// </ViewTransition>
	)
}
