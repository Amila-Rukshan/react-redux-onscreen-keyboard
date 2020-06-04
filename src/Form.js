import React from 'react';
import { connect } from 'react-redux'
import { inputFocused } from './actions/allActions'

function Form({ name, address, inputFocused, currentInput}) {

    const focus = (e) => inputFocused(e.target.id)

    const handleFocus = (e) => { if (e.target.id == currentInput) { e.target.focus() } }

    return (
        <form className="simple-form">
            <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" value={name} className="form-control" id="name" placeholder="Enter name" 
                    spellCheck="false"
                    value={name}
                    autoComplete="off" 
                    onChange={() => {}} 
                    onBlur={handleFocus}
                    onClick={focus}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Your address</label>
                <input type="text" value={address}  className="form-control" id="address" placeholder="Enter address" 
                    spellCheck="false"
                    value={address}
                    autoComplete="off" // onChange={(e) => updateAddress(e.target.value)} 
                    onChange={() => {}} 
                    onBlur={handleFocus}
                    onClick={focus}/>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
       name: state.inputs.name,
       address: state.inputs.address,
       currentInput: state.inputs.currentInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputFocused: (inputID) => dispatch(inputFocused(inputID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);