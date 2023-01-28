import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
    const countryDetails = useLoaderData();
    console.log(countryDetails);
    return (
        <div>
            <h2>Country Details</h2>
        </div>
    );
};

export default CountryDetails;