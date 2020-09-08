import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Preloader from './Preloader'
import LogsItem from "./LogsItem"
import { GetLogs } from '../Redux/LogActions';

const Logs = (props) => {

    useEffect(() => {
        props.GetLogs();
        // eslint-disable-next-line
    }, [])


    if(props.log.loading || props.log.logs === null) {
        return  <Preloader />
    }

    return (
        <div className="container">
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">Activity Logs</h4>
                </li>
                {!props.log.loading && props.log.logs.length === 0 ? (<p>No logs to show..</p>) : (props.log.logs.slice(0).reverse().map(i => <LogsItem key={i.id} log_i={i} />))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { GetLogs }) (Logs)
