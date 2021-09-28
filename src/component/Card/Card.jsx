import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeSelectedProduct, select, selectProduct } from '../../redux/Actions.js/Actions';
import './card.scss';
import { useHistory } from 'react-router';

const Card = ({item, index}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const theme = useSelector(state => state.theme)

    const selcted = (id) => {
        dispatch(select())
        dispatch(removeSelectedProduct())
        dispatch(selectProduct(id));

        history.push('/orders')
    };

    return (
        <div className='pro__card-wrap col-md-4 col-sm-6 mt-2' key={index}>
            <div className={`pro__card ${theme.mode}`} onClick={() => selcted(item.id)} >
                <div className="img__wrap">
                    <img src={item.image} alt={item.id} className='img-fluid' />
                </div>
                <div className="pro__card-info">
                    <h4>{item.category}</h4>
                    <p>{item.title.substring(0, 58)}</p>
                    <h5>Price: <h2>{item.price} $</h2></h5>
                    <Link to='/products' className={theme.theme}>See More</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
