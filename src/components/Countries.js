import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);

    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ['doloribus', 'odit', 'ipsam', 'sunt']; // <= possible de déclarer comme en js

    useEffect(() => {

        if (playOnce) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    setData(res.data);
                    setPlayOnce(false);
                });
        }


        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);

            const sortedArray = countryObj.sort((a, b) => {
                return b.id - a.id
            });
            sortedArray.length = rangeValue; //nombre élément à afficher
            setSortedData(sortedArray);

        };
        sortedCountry();
    }, [data, playOnce, rangeValue]);

    return (
        <div className='countries'>
            <div className="sort-container">
                <input type="range" min="1" max="100" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                <ul>
                    {radios.map((target) => {
                        return (
                            <li key={target}>
                                <input type="radio" value={target} id={target} checked={target === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
                                <label htmlFor={target}>{target}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>}
            </div>
            <ul className="countries-list">
                {sortedData
                    .filter((target) => target.title.includes(selectedRadio))
                    .map((target) => (
                        <Card country={target} key={target.id} />
                    ))}
            </ul>
        </div>
    );
};

export default Countries;