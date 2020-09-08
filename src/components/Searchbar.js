import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { SearchLog } from '../Redux/LogActions'

const Searchbar = ({SearchLog}) => {

    const input_text = useRef('')

    const onChange = () => {
        SearchLog(input_text.current.value);
    }
    const onCross = (e) => {
        input_text.current.value = ''
        SearchLog('');
    }

    return (
    <nav style={{marginBottom:'30px'}}>
        <div className="nav-wrapper green">
        <form>
            <div className="input-field">
            <input id="search" onChange={onChange} type="search" name="SearchBar" ref={input_text} placeholder="Search" />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i onClick={onCross} className="material-icons">close</i>
            </div>
        </form>
        </div>
    </nav>
    )
}

export default connect(null, { SearchLog }) (Searchbar)
