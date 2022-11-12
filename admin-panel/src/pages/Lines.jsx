import React from 'react'

import Table from '../components/table/Table'

import LinesList from '../assets/JsonData/lines-list.json'

const customerTableHead = [
    '#',
    'Depart',
    'Stations',
    'Arrive',
    'Bus',
    'Places No.',
    'Operations'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.depart}</td>
        <td>{item.stations}</td>
        <td>{item.arrive}</td>
        <td>{item.bus}</td>
        <td>{item.places_number}</td>
        <td><a className="operation"><i className="bx bx-trash"></i></a> <a className="operation"><i className="bx bx-edit"></i></a></td>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <div className='top-lines'>
                <h2 className="page-header">
                    Lines
                </h2>
                <button className='add-lines'>New Line</button>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='8'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={LinesList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
