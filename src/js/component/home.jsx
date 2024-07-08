import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./semafor";

//create your first component
const Home = () => {
	return (
		<div className="container" style={{width:"120px"}}>
			
			<TrafficLight/>
		
			
		</div>
	);
};

export default Home;
