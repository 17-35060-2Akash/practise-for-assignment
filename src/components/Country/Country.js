import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Country.css';

const Country = ({ country }) => {
    const { name, flags, population, cca3 } = country;
    const handleNavigate = () => {
        navigate(`/country/${cca3}`);
    }

    const navigate = useNavigate();

    return (
        <div className='py-5 border country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>population: {population}</p>
            {/* <Link to={`/country/${cca3}`}>
                <button>Details</button>
            </Link> */}
            <button onClick={handleNavigate}>Details</button>
        </div>
    );
};

export default Country;