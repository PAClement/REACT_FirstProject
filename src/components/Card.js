import React from 'react';

const Card = (props) => {

    const { country } = props;

    // console.log(country);

    return (
        <li className='card'>
            <h3>Element n° {country.id}</h3>
            <div className="data-container">
                <ul>
                    <li>User Id = {country.userId}</li>
                    <li>Title = {country.title}</li>
                    {/* <li>Body = {country.body}</li> */}
                </ul>
            </div>
            <hr />
        </li>
    );
};

export default Card;