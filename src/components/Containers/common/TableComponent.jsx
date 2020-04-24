import React from 'react';
import Button from './Button'


const TableComponent = (props) => {
    const { id, className, headers, body } = props;

    
    return (
        <table id={id} className={className} border='2'>
            <thead>
                <tr>
                    {headers.map(header => <th>{header}</th>)}
                </tr>
            </thead>
            <tbody>
    {body.map((row, index) => <tr key={index}><td>{row.id}</td><td>{row.title}</td><td>{row.body}</td>
    <td><Button type='submit' value ='getValue' id={`get_${index}`} className='col' onClick={(e) => { props.onClick(row.id) }}></Button></td>
    <td><Button type='submit' value ='delete' id={`del_${index}`} className='col' onClick={(e) => { props.onDelete(row.id) }}></Button></td>
    
    </tr>)}
            </tbody>
        </table>
    )
}

TableComponent.propTypes = {

}

export default TableComponent
