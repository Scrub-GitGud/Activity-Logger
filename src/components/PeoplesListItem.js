import React from 'react'
import { connect } from 'react-redux';
import { DeletePeople } from '../Redux/PeopleActions';

const PeoplesListItem = ({DeletePeople, item}) => {

    const onDelete = () => {
        DeletePeople(item.id)
    } 

    return (
        <li className="collection-item">
            <div>
                {item.firstName} {item.lastName}
                <a onClick={onDelete} href="#!" className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null, {DeletePeople}) (PeoplesListItem);