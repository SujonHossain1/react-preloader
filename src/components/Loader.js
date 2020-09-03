import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ProductDetails from './ProductDetails';
import Card from './Card';

const Loader = () => {
    const [data, setData] = useState([]);
    const [loadding, setLoadding] = useState(false);

    useEffect(() => {
        setLoadding(true);

        // const timing = setTimeout(() => {
        //     setLoadding(false);
        //     setData(UserData);
        // }, 4000);
        // return () => clearTimeout(timing);

        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            await setData(data);
            await setLoadding(false)
        }
        getData();

    }, []);

  
    return (
        <>
            {
                loadding ? <ProductDetails data={data} key= {data.id} /> : data.map((item, index) => <Card item={item} key={index} />)

            }
        </>
    )
}
export default Loader
