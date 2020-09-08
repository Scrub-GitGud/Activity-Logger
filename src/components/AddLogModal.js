import React, {useState} from 'react'
import { connect } from 'react-redux'
import { AddNewLog } from '../Redux/LogActions'
import M from 'materialize-css/dist/js/materialize.min.js'


const AddLogModal = (props) => {
    const [msg, setMsg] = useState('')
    const [attention, setAttention] = useState(false)
    const [people, setPeople] = useState('')

    const onSubmit = () => {
        if(msg === '' || people === ''){
            M.toast({ html: 'Please enter a message and people ' })
        }else {
            const newLog = {
                msg,
                attention,
                people,
                date: new Date()
            }
            props.AddNewLog(newLog);

            M.toast({ html: "New Log Succesfully Added " + people})

            setMsg('')
            setAttention(false)
            setPeople('')
        }
    }

    return (
        <div id="add-log-modal" className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter New Log</h4>

                <div className='row'>
                    <div className='input-field'>
                        <input type="text" name="msg" value={msg} onChange={e=>setMsg(e.target.value)} />
                        <label htmlFor="msg" className='active'>Log Message</label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <select className='browser-default' name="people" value={people} onChange={e=>setPeople(e.target.value)}>
                            <option value="" disabled>Select People</option>
                            {props.people.peoples !== null && props.people.peoples.map(i => 
                                <option key={i.id} value={i.firstName+" "+i.lastName} >{i.firstName+" "+i.lastName}</option>
                            )}
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input type="checkbox" className="filled-id" checked={attention} value={attention} onChange={e=>setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn green" onClick={onSubmit}>Add</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width:'75%',
    height:'75%'
}

const mapStateToProps = state => ({
    people: state.people
});

export default connect(mapStateToProps, { AddNewLog }) (AddLogModal)
