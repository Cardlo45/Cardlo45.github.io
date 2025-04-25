import "./Background.css"

import background from "Assets/Background.png"

function Background() {
	return (
		<>
			<img src={background} alt="Background Image, A Donut with Sprinkles." className="background"/>
		</>
	)
}

export default Background;