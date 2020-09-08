import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PeoplesListItem from './PeoplesListItem'
import { GetPeoples } from '../Redux/PeopleActions'

const PeoplesListModal = ({GetPeoples, people: { peoples, loading }}) => {

    useEffect(() => {
        GetPeoples()
        // eslint-disable-next-line
    }, [])


    return (
        <div id="peoples-list-modal" className='modal'>
            <div className="modal-content">
                <h4>Peoples List</h4>
                <ul className="collection">
                    {!loading && peoples !== null && (peoples.map(i => <PeoplesListItem key={i.id} item={i}/>))}
                </ul>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn green">Enter</a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    people: state.people
});

export default connect(mapStateToProps, { GetPeoples })(PeoplesListModal)
