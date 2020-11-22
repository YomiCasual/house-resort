import React, { Component, Fragment} from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

class Services extends Component {
 
    constructor(props) {
        super(props);

        this.state = {

        	services: [
        	{
        	 icon: <FaCocktail/>,
        	 title: "Free Cocktails",
        	 info: `Laborum esse doloribus quo officiis 
        	 		eum ab cupiditate magni, optio voluptas 
        	 		nulla corrupti ipsum aspernatur earum obcaecati ea.
        	 		Quibusdam!`
        	},
        	{
        	 icon: <FaHiking/>,
        	 title: "Endless Hiking",
        	 info: `Laborum esse doloribus quo officiis 
        	 		eum ab cupiditate magni, optio voluptas 
        	 		nulla corrupti ipsum aspernatur earum obcaecati ea.
        	 		Quibusdam!`
        	},
        	{
        	 icon: <FaShuttleVan/>,
        	 title: "Free Shuttle",
        	 info: `Laborum esse doloribus quo officiis 
        	 		eum ab cupiditate magni, optio voluptas 
        	 		nulla corrupti ipsum aspernatur earum obcaecati ea.
        	 		Quibusdam!`
        	},
        	{
        	 icon: <FaBeer/>,
        	 title: "Strongest Beer",
        	 info: `Laborum esse doloribus quo officiis 
        	 		eum ab cupiditate magni, optio voluptas 
        	 		nulla corrupti ipsum aspernatur earum obcaecati ea.
        	 		Quibusdam!`
        	},
        ]}
    }

    render() {
        return (
        	<Fragment>
        	<section className="services">
        	<Title title="Our services" />
        	<div className="services-center" >
        	{this.state.services.map((item, index) => (
        		<article key={index} className="service" >
        		<span>{item.icon}</span>
        		<h6>{item.title}</h6>
        		<p>{item.info}</p>
        		</article>
        		))}
        	</div>
        	</section>
        	</Fragment>
        );
    }
}

export default Services;
