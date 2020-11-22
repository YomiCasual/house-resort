import React, { Fragment } from 'react'
import Hero from '../Hero/Hero'
import Banner from '../Hero/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from './RoomDetails/RoomContainer'

const Room = () => {
    return (
        <div>
	       <Hero hero="roomsHero"> 
		        <Banner title="Our Rooms">
		        	<Link to='/' className="btn-primary">return home</Link>
		        </Banner>
	       </Hero>
	       <RoomContainer />

        </div>
    );
};



export default Room;
