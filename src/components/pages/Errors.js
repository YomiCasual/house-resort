import React from 'react'
import Hero from '../Hero/Hero'
import Banner from '../Hero/Banner'
import { Link } from 'react-router-dom'

const Errors = () => {
    return (
       <div>
	       <Hero> 
		        <Banner title="404" subtitle="page not found">
		        	<Link to='/' className="btn-primary">return Home</Link>
		        </Banner>
	       </Hero>
        </div>
    );
};



export default Errors;
