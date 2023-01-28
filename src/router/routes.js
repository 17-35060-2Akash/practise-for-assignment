import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Countries from "../components/Countries/Countries";
import CountryDetails from "../components/CountryDetails/CountryDetails";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Main from "../layouts/Main";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/countries',
                loader: async () => fetch('https://restcountries.com/v3.1/all'),
                element: <Countries></Countries>,
            },
            {
                path: '/country/:countryId',
                loader: async ({ params }) => {
                    return fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
                },
                element: <CountryDetails></CountryDetails>
            },
            {
                path: '/about',
                element: <About></About>,
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);