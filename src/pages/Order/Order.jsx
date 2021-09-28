import React from 'react'
import { useSelector } from 'react-redux';
import './order.scss';
import Loader from '../../component/Loader/Loader';

const Order = () => {

    const product = useSelector(state => state.products.selectProduct);
    const select = useSelector(state => state.products.select);
    const theme = useSelector(state => state.theme);
    const data = useSelector(state => state.data);

    return (
        <div className='order container-fluid'>
            <h2 className="page-header">{data.pages.orders}</h2>
            <div className="row">
                <div className="col-12">
                    {
                        !select ? <h5>{data.selectProduct}...</h5> :  product.id ? 
                        <div className="box row">
                            <div className="img-wrap col-md-6">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="right__info col-md-6">
                                <h3 className={theme.mode} >{product.category}</h3>
                                <div className={`price ${theme.theme}`}>
                                    {product.price} $
                                </div>
                                <p className='title'>
                                    {product.title}
                                </p>
                                <p className="description">
                                    {product.description}
                                </p>
                                <button className={theme.theme}>Add Card</button>
                            </div>
                        </div>:<Loader />
                    }
                </div>
            </div>
        </div>
    )
}

export default Order
