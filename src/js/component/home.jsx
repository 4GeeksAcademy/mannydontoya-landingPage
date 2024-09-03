import React from "react";
import NavBar from "./navbar";
import Container from "./container";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<>
			<NavBar/>
			<Container/>
			<Footer/>
		</>
	);
};


export default Home;
