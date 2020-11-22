import React,{Fragment} from 'react';
import Room from '../../Services/Room'

const RoomLists = ({rooms}) => {
	
    return (
        <Fragment>
        {rooms.length === 0 && <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
       	</div>}
        {rooms.length > 0  && <section className="roomslist"> 
        <div className="roomslist-center">
        {rooms.map(room => (
        	<Room key={room.id} room={room}/>
        	))}	
        </div>
        </section>
        }
       </Fragment>
    );
};


export default RoomLists;