import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import './table.scss';

const Table = ({ headData, renderHead, bodyData, renderBody, limit }) => {

    const theme = useSelector(state => state.theme)

    const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)): bodyData;

    const [dataShow, setDataShow] = useState(initDataShow);
    const [currPage, setCurrPage] = useState(0);

    let pages = 1;
    let range = [];

    if(limit !== undefined) {
        let page = Math.floor((bodyData.length / Number(limit)));
        pages = bodyData.length % Number(limit) === 0 ? page: page+1; 
        range = [...Array(pages).keys()];
    }

    const selectPage = page => {
        let start = Number(limit) * page;
        let end = start + Number(limit);

        setDataShow(bodyData.slice(start, end));

        setCurrPage(page);
    }

    return (
        <div className='table-wrap'>
            <table className={theme.mode}>
                <thead>
                    <tr>
                        {
                            headData ? headData.map((item, index) => renderHead(item, index)):''
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dataShow.map((item, index) => renderBody(item, index, theme.themeHover))
                    }
                </tbody>
            </table>
            <div className="paginantion">
                {
                    pages > 1 ? range.map((item, index) => (
                        <div className={`paginantion__item ${currPage === index ? `active ${theme.theme}`:''}`} key={index} onClick={() => selectPage(index)}>
                            {item+1}
                        </div>
                    )):''
                }
            </div>
        </div>
    )
}

export default Table
