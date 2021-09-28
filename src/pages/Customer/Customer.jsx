import React from 'react';
import './customer.scss';
import Table from '../../component/Table/Table'

import customer_list from '../../component/Datas/customer_list.json';
import { useSelector } from 'react-redux';

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index, hover) => (
    <tr key={index} className={hover}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
);

const Customer = () => {

    const data = useSelector(state => state.data);

    return (
        <div id='customer'>
            <h2 className='page-header'>{data.pages.customer}</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 us-card">
                        <Table
                            limit='10'
                            headData={data.customerListHead}
                            bodyData={customer_list}
                            renderHead={renderHead}
                            renderBody={renderBody}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;
