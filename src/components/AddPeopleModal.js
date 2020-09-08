import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { AddNewPeople } from '../Redux/PeopleActions'
import { connect } from 'react-redux'


const AddPeopleModal = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({ html: 'Please enter first name & last name' })
        }else {
            const newPeople = {
                firstName,
                lastName
            }
            props.AddNewPeople(newPeople)
            M.toast({ html: " Added: " + newPeople.firstName + " " + newPeople.lastName})

            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div id="add-people-modal" className='modal'>
            <div className="modal-content">
                <h4>Enter New People</h4>

                <div className='row'>
                    <div className='input-field'>
                        <input type="text" name="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className='active'>First Name: </label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input type="text" name="lastName" value={lastName} onChange={e=>setLastName(e.target.value)} />
                        <label htmlFor="lastName" className='active'>Last Name: </label>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn green" onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}

export default connect(null, { AddNewPeople }) (AddPeopleModal)
