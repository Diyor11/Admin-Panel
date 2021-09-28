import React from 'react';
import './dashboard.scss';
import StatusCards from './Status-cards/StatusCards';
import { chartOptions } from './chartOptions';
import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'
import Table from '../../component/Table/Table';
import Badge from '../../component/Badge/Badge';
import { useSelector } from 'react-redux';

const topCustomers = {
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const latestOrders = {
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}
const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}
const shortRenderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const shortRenderBody = (item, index, hover) => (
    <tr key={index} className={hover}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const longRenderHead = (item, index) => (
    <th key={index}>{item}</th>
);

const longRenderBody = (item, index, hover) => (
    <tr key={index} className={hover}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td>
            <Badge content={item.status} type={orderStatus[item.status]} />
        </td>
    </tr>
)

const Dashboard = () => {
    
    const data = useSelector(state => state.data);
    const theme = useSelector(state => state.theme);

    return (
        <div id='dashboard'>
            <h2 className="page-header">{data.pages.dashboard}</h2>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        {data.statusCard.map((item, index) => (
                            <div className="col-6" key={index}>
                                <StatusCards 
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="us-card full-height">
                        <Chart
                            options={theme.mode === 'dark-background' ?{
                                ...chartOptions.options,
                                theme: {mode: 'dark'}
                            }:{
                                ...chartOptions.options,
                                theme: {mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mx-md-auto">
                    <div className="us-card">
                        <div className="card__header">
                            <span>{data.shortTableTitle}</span>
                        </div>
                        <div className="card__body">
                            <Table 
                                headData={data.topCustomer}
                                renderHead={shortRenderHead}
                                bodyData={topCustomers.body}
                                renderBody={shortRenderBody}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>{data.footer}</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 mx-md-auto ofy-scroll">
                    <div className="us-card">
                        <div className="card__header">
                            <span>{data.longTableTitle}</span>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={data.latestCostumer}
                                renderHead={longRenderHead}
                                bodyData={latestOrders.body}
                                renderBody={longRenderBody}
                             />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>{data.footer}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
