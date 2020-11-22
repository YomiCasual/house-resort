import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../Loading/Loading'
import { RoomContext } from '../../context/context'
import RoomFilter from './RoomFilter'
import RoomLists from './RoomLists'


const RoomContainer = () => {
	const value = useContext(RoomContext)
	const { rooms, sortedRooms, loading } = value	

	return(
		<Fragment>
		{loading && <Loading />}
		{!loading && <div>
		<RoomFilter rooms={rooms}/>
		<RoomLists rooms={sortedRooms}/> 
		</div>
		}
		</Fragment>
		)
}







export default RoomContainer