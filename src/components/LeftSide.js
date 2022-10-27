import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories]= useState()
    useEffect(()=>{
        fetch('http://localhost:5000/science-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
       
    },[])
    return (
        <div>
            <h3>this is left side</h3>
            <div>
                {
                    categories.map(category=> <p 
                    key={category.id}>
                        <Link>{category.name}</Link>



                    </p>)
                }
            </div>


        </div>
    );
};

export default LeftSide;