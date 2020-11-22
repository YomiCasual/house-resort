 import React from 'react'
import Title from './Title'
import Room from './Room'
import {RoomContext} from '../context/context'
import Loading from '../Loading/Loading'
class FeaturedRooms extends React.Component {

	static contextType = RoomContext
	
	render() {

		const value = this.context
		const { featuredRooms, loading } = value
		return (
			<section className="featured-rooms">
			<Title title="featured rooms" />
			<div className="featured-rooms-center">
			{ loading === true ? <Loading />: featuredRooms.map(room => {
				return <Room key={room.id} room={room}/>
			})
			}
			</div>
			</section>
			)
		}
	}




 export default (FeaturedRooms)
