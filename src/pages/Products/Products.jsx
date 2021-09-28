import React, { useEffect } from 'react';
import { fetchData } from '../../redux/Actions.js/Actions';
import './products.scss';

import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card/Card';
import Loader from '../../component/Loader/Loader';

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const data = useSelector(state => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    return (
        <div className='products container-fluid'>
            <h2 className="page-header">{data.pages.products}</h2>
            <div className="row">
                
                {
                   products.length === 0 ? <Loader /> : products ? products.map((item, index) => <Card item={item} key={index} />) :''
                }
            </div>
        </div>
    )
}

export default Products
