import React         from 'react';
import { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
    
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' ' + 'has-error';
    }

    return (
        <div className={ wrapperClass }>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input type="text" className="formControl" name={name} placeholder={placeHolder} value={value} onChange={onChange} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
                           name:        React.PropTypes.string.isRequired,
                           label:       React.PropTypes.string.isRequired, 
                           onChange:    React.PropTypes.func, 
                           placeHolder: React.PropTypes.string, 
                           value:       React.PropTypes.string, 
                           error:       React.PropTypes.string
                       };

export default TextInput;