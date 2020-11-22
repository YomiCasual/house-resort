import { FETCH_ROOMS, GET_ROOM, DELETE_POSTS } from '../actions/types'


const initialState = {
	rooms: [],
	sortedRooms: [], 
	featuredRooms: [],
	loading: true,
} 

export default (state=initialState, action ) => {
	switch(action.type) {
		case FETCH_ROOMS:
		const  { payload : rooms } = action
		let featuredRooms = rooms.filter(room => room.featured)
			return {
				...state,
				featuredRooms,
				rooms,
				sortedRooms: rooms,
				loading: false
			}
			
		break;

		case GET_ROOM:
			return {
					...state
			}
		break;
		case DELETE_POSTS:
			return {
				...state,
				items: []
			}

		default: 
		return state

	}



}