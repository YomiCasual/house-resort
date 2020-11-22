import React, { Fragment, Component } from 'react'
import Hero from '../Hero/Hero'
import Banner from '../Hero/Banner'
import { Link } from 'react-router-dom'
import StyledHero from '../StyledHero/StyledHero'
import { RoomContext } from '../context/context'
import Loading from '../Loading/Loading'

class SingleRoom extends Component{

	static contextType = RoomContext

	state = { 
		slug: this.props.match.params.slug
	}

	// componentDidMount() {
	// 	this.props.fetchRooms()
	// }

	render() {

		const { rooms } = this.context
		let room = rooms.find(room => room.slug === this.state.slug)

		if (!room) {
			return (<Loading />)
		}

		const { name, description, images, type, price, size, capacity, pets, breakfast, extras, id } = room
		const [mainImage, ...defaultImages ] = images

		return (
		<Fragment>
			<StyledHero img={mainImage}>
			<Banner title={name}>
			<Link to='/' className="btn-primary">return home</Link>
			</Banner>
			</StyledHero>
			<div className="single-room">
			<div className="single-room-images">
			{defaultImages.map((image, index) => ( 
				<img key={index} src={image} alt={name} />
				))}
			</div>
			</div>

			<div className="single-room-info">
			<article className="desc">
			<h3>details</h3>
			<p>{description}</p>
			</article>

			<article className="info">
			<h3>Info</h3> 
			<h6>Price: ${price}</h6>
			<h6>Size: ${size} SQFT </h6>
			<h6>Max Capacity: {capacity > 1 ? `${capacity} people` : "1 person"}</h6>
			<h6>{pets ? "Pets are allowed": "No Pets allowed"}</h6>
			<h6>{breakfast && "Free Breakfast included"} </h6>
			</article>
			</div>
			<section className="room-extras">
			<h6>extras</h6>
			<ul className="extras">
				{extras.map((item, index) => (
					<li key={index}>- {item}</li>
					))}
			</ul>
			</section>
			
		</Fragment>
			)
		
	}
}


export default SingleRoom




