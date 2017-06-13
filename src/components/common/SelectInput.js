import React         from 'react';
import { PropTypes } from 'react';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select name={name} className="formControl" value={value} onChange={onChange}>
                    <option value="">{defaultOption}</option>
                    {
                        options.map((option) => { return <option key={option.value} value={option.value}>{option.text}</option>; })
                    }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
                           name:          React.PropTypes.string.isRequired,
                           label:         React.PropTypes.string.isRequired, 
                           onChange:      React.PropTypes.func, 
                           defaultOption: React.PropTypes.string, 
                           value:         React.PropTypes.string, 
                           error:         React.PropTypes.string, 
                           options:       React.PropTypes.arrayOf(PropTypes.object)
                        };
                       
export default SelectInput;