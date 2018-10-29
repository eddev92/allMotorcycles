import React from 'react';
import Transform from '../../../utils/transform';

const Row = ({ obj }) => {
    const tdTransform = Transform.getTds(obj);
    console.log(tdTransform)
    const td = tdTransform.length && tdTransform.map(td => {
       return <td>{td.label}</td>
    })
    return (
        <tr>{td}</tr>
    )
}

export default Row;
