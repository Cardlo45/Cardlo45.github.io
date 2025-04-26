"use client";
import Link from "next/link";
import Image from "next/image";

import logo from "$/cntg_icon.png";
import styles from "@/styles/navbar.module.css";
import { useEffect, /* unstable_ViewTransition as ViewTransition */ } from "react";


export default function NavBar(props: { buttons: Array<{ text: string, target: string }> }) {

	useEffect(() => {
		document.addEventListener("scroll", () => {
			document.documentElement.dataset.scroll = (window.scrollY > 15).toString();
		})
	})

	return (
		// <ViewTransition name="navigation">
			<nav className={styles.navbar}>
				<Link href="/" className={styles.navbar_logo + " " + styles.navbar_button}>
					<Image
						src={logo}
						alt="Logo"
						height={128}
						width={128}
						className={styles.navbar_logo}
					/>
					<p className={styles.navbar_logo}>Carslo_45</p>
				</Link>

				<ul className={styles.navbar_menu}>
					{
						props.buttons.map((btn) => (
							<li key={btn.text}>
								<Link href={btn.target} className={styles.navbar_button}>{btn.text}</Link>
							</li>
						))
					}
				</ul>
			</nav>
		// </ViewTransition>
	)
}
