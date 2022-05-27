// import React, {useEffect} from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

//import Chart from 'react-apexcharts'

//import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'



const latestOrders = {
    header: [
        "CNC ADI",
        "PARÇA ADI",
        "OPERATÖR ADI",
        "SÜRE",
        "DURUM"
    ],
    body: [
        {
            id: "CNC-1",
            user: "789546",
            date: "00:11:14",
            price: "HASAN",
            status: "DURUŞ"
        },
        {
            id: "CNC-2",
            user: "46558412",
            date: "00:01:14",
            price: "HÜSEYİN",
            status: "ÇALIŞIYOR"
        },
        {
            id: "CNC-3",
            user: "2536554",
            date: "00:17:10",
            price: "MEHMET",
            status: "ÇALIŞIYOR"
        },
        {
            id: "CNC-4",
            user: "145522",
            date: "02:11:17",
            price: "VELİ",
            status: "ÇALIŞIYOR"
        },
        {
            id: "CNC-1",
            user: "125489",
            date: "01:45:14",
            price: "ALİ",
            status: "DURUŞ"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "ÇALIŞIYOR": "success",
    "DURUŞ": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    //const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            
            <div className="row">
               
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-2" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                   
                </div>
                
                
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>CNC ANLIK RAPOR</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Tümünü Göster</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
