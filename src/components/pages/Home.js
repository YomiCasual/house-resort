import React, { Fragment } from 'react'
import Hero from '../Hero/Hero'
import Banner from '../Hero/Banner'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'
import FeaturedRooms from '../Services/FeaturedRooms'

const Home = () => {
    return (
        <div>
	        <Hero>
		        <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
		        	<Link to='/rooms' className="btn-primary"> our rooms</Link>
		        </Banner>
	        </Hero>

	        <Services />
	        <FeaturedRooms />
        </div>
    );
};



export default Home;
