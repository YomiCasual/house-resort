import React, { Component, Fragment, createContext } from 'react'
import data from '../../data'

const RoomContext = createContext()


const reducers = (state, action) => {

		switch(action.type) {
			case 'FETCH_ROOMS':
			return {
				...state
			}
			break;
			default: 
			return {
				...state
			}
		}
	}

class ContextProvider extends Component{
	state = {
	rooms: [],
	sortedRooms: [], 
	featuredRooms: [],
	loading: true,
	type: "all",
	capacity: 1,
	price: 0,
	minPrice: 0,
	maxPrice: 0,
	minSize: 0,
	maxSize: 0,
	breakfast: false,
	pets: false
	}


	componentDidMount() {
		const rooms = this.fetchRooms()
		const featuredRooms = rooms.filter(room => room.featured === true)
		let maxPrice = Math.max(...rooms.map(room => room.price))
		let maxSize = Math.max(...rooms.map(room => room.size))
		
		setTimeout( () => {
			this.setState((prevState) => ({
			...prevState,
			rooms,
			sortedRooms: rooms,
			featuredRooms,
			loading: false,
			price: maxPrice,
			maxPrice,
			maxSize
		}))
		}, 4000)
	}

	fetchRooms() {
		const rooms = data.map(item => {
			const { id } = item.sys
			const images = item.fields.images.map(field => field.fields .file.url)
 			const room = { ...item.fields, id, images}
			return room	
	})

		return rooms
}

	handleChange = (e) => {
		let { name, value, type, checked } = e.target
		value = type === 'checkbox' ? checked : value
		this.setState({
			[name]: value
		}, this.filteredRooms)
	}


	filteredRooms = () => {
		let { rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, handleChange } = this.state

		let sortedRooms = [...rooms]

		if (type !== 'all' ) {
			sortedRooms = sortedRooms.filter(room => room.type === type)
		}

		if (capacity !== 1) {
			sortedRooms = sortedRooms.filter(room => room.capacity >= parseInt(capacity))
		}

		if (parseInt(price) < maxPrice) {
			sortedRooms = sortedRooms.filter(room => room.price <= parseInt(price))
		}

		sortedRooms = sortedRooms.filter(room => room.size >= parseInt(minSize) && room.size <= parseInt(maxSize) )

		if (breakfast) {
			sortedRooms = sortedRooms.filter(room => room.breakfast)
		}
		if (pets) {
			sortedRooms = sortedRooms.filter(room => room.pets)
		}

		this.setState({
				sortedRooms
			})
	//end of filter rooms
	}


	render() {
		return(
			<RoomContext.Provider value={{...this.state,handleChange: this.handleChange}}>
			{this.props.children}
			</RoomContext.Provider>
			)
	}
}


export { RoomContext, ContextProvider}