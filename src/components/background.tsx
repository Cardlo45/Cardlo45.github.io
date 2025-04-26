import Image, { StaticImageData } from "next/image"

import style from "@/styles/background.module.css"

export default function Background(props: {img: StaticImageData}) {
	return (
		<Image
			src={props.img}
			alt="Background Image"
			className={style.background_image}
		/>
	)
}
