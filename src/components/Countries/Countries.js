import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div className='countries'>
            {
                countries.map(country => <Country
                    key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;