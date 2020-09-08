import React from 'react'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { DeleteLog, SetCurrent } from '../Redux/LogActions';


const LogsItem = ({log_i, DeleteLog, SetCurrent}) => {

    const onDeleteLog = () => {
        DeleteLog(log_i.id);
    }

    const onClickLogItem = () => {
        SetCurrent(log_i)
    }

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" onClick={onClickLogItem} className={`modal-trigger ${log_i.attention? 'red-text' : 'blue-text'}`}>
                    {log_i.msg}
                </a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log_i.id} </span>
                    Last updated by: <span className='black-text'>{log_i.people} </span>
                    on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log_i.date}</Moment>
                </span>
                <a href="#!" onClick={onDeleteLog} className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null, { DeleteLog, SetCurrent }) (LogsItem)