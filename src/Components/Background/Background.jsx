import "./Background.css"

import background from "Assets/Background.png"

function Background() {
	return (
		<>
			<img src={background} className="background"/>
		</>
	)
}

export default Background;