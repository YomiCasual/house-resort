import React, {useContext} from 'react';
import {RoomContext} from '../../context/context'
import Title from '../../Services/Title'

const getUnique = (rooms, value) => {
	return Array.from(new Set(rooms.map(room => room[value])))
}

const RoomFilter = ({rooms}) => {

	//getting context
	const value = useContext(RoomContext)

	//destructuring context
	let { type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, handleChange } = value

	//geting unique types from the data
	let types = getUnique(rooms, 'type')

	types = ['all', ...types]

	//converting to jsx
	types = types.map((item, index) => (
		<option key={index} value={item}>{item}</option>
		))

	//geting unique people
	let people = getUnique(rooms, 'capacity')

	people = people.map((item, index) => (
		<option key={index} value={item}>{item}</option>
		))


    return (
        <section className="filter-container">
        <Title title="search rooms" />	

        <form className="filter-form">

    	{/* Begining of type */}
        <div className="form-group"> 
        <label htmlFor="type">room type</label>
        <select
        name="type"
        id="type"
        className="form-control" 
        value={type}
        onChange={handleChange}
        >
        {types}
        </select>

        </div>
  		  {/* End  of type */}


  		{/* Begining of guest */}
        <div className="form-group"> 
        <label htmlFor="capacity">Guest</label>
        <select
        name="capacity"
        id="capacity"
        className="form-control" 
        value={capacity}
        onChange={handleChange}
        >
        {people}
        </select>
        </div>
  		  {/* End  of guest */}

  		  {/* Begining of price */}
        <div className="form-group"> 
        <label htmlFor="price">Room Price: ${price}</label>
        <input
        type="range"
        name="price"
        id="price"
        min={minPrice}
        max={maxPrice}
        className="form-control" 
        value={price}
        onChange={handleChange}
        />
        </div>
  		  {/* End  of price */}

  		{/* Begining of size */}
        <div className="form-group"> 
        <label htmlFor="size">Room Size</label>
        <input
        type="number"
        name="minSize"
        id="minSize"
        value={minSize}
        className="size-input" 
        onChange={handleChange}
        />
        <input
        type="number"
        name="maxSize"
        id="maxSize"
        value={maxSize}
        className="size-input" 
        onChange={handleChange}
        />
        <span>SQFT</span>
        </div>
  		  {/* End  of size */}


  		{/* Begining of extras */}
        <div className="form-group"> 
        <div className="single-extra">
        <input 
        type="checkbox"
        name="breakfast"
        id="breakfast"
        checked={breakfast}
        onChange={handleChange}
        />
        <label htmlFor="breakfast">Breakfast</label>
        </div>
        <div className="single-extra">
        <input 
        type="checkbox"
        name="pets"
        id="pets"
        checked={pets}
        onChange={handleChange}
        />
        <label htmlFor="pets">Pets</label>
        </div>
        </div>
  		  {/* End  of extras */}





        </form>
        </section>
    );
};


export default RoomFilter;
