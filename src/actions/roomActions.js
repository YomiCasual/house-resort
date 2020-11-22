import { FETCH_ROOMS, GET_ROOM, DELETE_POSTS } from './types'
import data from '../data'


export function fetchRooms() {
	return function(dispatch) {

		const rooms = data.map(item => {
			const { id } = item.sys
			const images = item.fields.images.map(field => field.fields .file.url)
 			const room = { ...item.fields, id, images}

			return room

		})
			dispatch({
				type: FETCH_ROOMS,
				payload: rooms
			})
	}
}

export function getRoom(slug) {
	return function(dispatch) {
			dispatch({
				type: GET_ROOM,
				payload: {}
			})
	}
}

export function deletePosts() {
	return function(dispatch) {
			dispatch({
				type: DELETE_POSTS
			})
	}
}