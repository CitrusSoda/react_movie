import React from 'react';
//prop 확인
import PropTypes from "prop-types";

//{a} = props.a
function Food({name, picture, rating}) {
    return (
        <div>
            <h1>I like {name}</h1>
            <h4>rating is {rating}</h4>
            <img src={picture} alt={name}/>
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://cdn.pixabay.com/photo/2017/06/10/19/32/kimchi-2390565_640.jpg",
        rating: 4.9,
    }
];

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App() {
    return (
        <div>
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
            ))}
        </div>
    );
}

export default App;
