import React, {useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { UpdateLog } from '../Redux/LogActions'


const EditLogModal = (props) => {
    const [msg, setMsg] = useState('')
    const [attention, setAttention] = useState(false)
    const [people, setPeople] = useState('')

    useEffect(() => {
        if(props.current) {
            setMsg(props.current.msg)
            setAttention(props.current.attention)
            setPeople(props.current.people)
        }
        // eslint-disable-next-line
    }, [props.current])

    const onSubmit = () => {
        if(msg === '' || people === ''){
            M.toast({ html: 'Please enter a message and people ' })
        }else {
            const updatedLog = {
                id: props.current.id,
                msg,
                attention,
                people,
                date: new Date()
            }
            props.UpdateLog(updatedLog);
            
            M.toast({ html: "Log Updated By " + people})

            setMsg('')
            setAttention(false)
            setPeople('')
        }
    }

    return (
        <div id="edit-log-modal" className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Edit Log</h4>

                <div className='row'>
                    <div className='input-field'>
                        <input type="text" name="msg" value={msg} onChange={e=>setMsg(e.target.value)} />
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <select className='browser-default' name="people" value={people} onChange={e=>setPeople(e.target.value)}>
                            <option value="" disabled>Select People</option>
                            <option value="Rotten Motty" >Rotten Motty</option>
                            <option value="D. Will" >D. Will</option>
                            <option value="ConDoriano" >ConDoriano</option>
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
                <a href="#!" className="modal-close waves-effect waves-green btn green" onClick={onSubmit}>Update</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width:'75%',
    height:'75%'
}

const mapStateToProps = state => ({
    current: state.log.current
})


export default connect(mapStateToProps, {UpdateLog}) (EditLogModal)
