import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-lone-blocks
{/*class InputTextBox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { type, id, className = 'input', value, onChange, disabled = false, placeholder} = this.props;
        return (
            <input type={type} id={id} className={className} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder} />
        )
    }
}

InputTextBox.propTypes= {
    id: PropTypes.string.isRequired,
    className :PropTypes.string,
    type:PropTypes.oneOf(['text', 'email', 'password']),
    onChange:PropTypes.func.isRequired,

}

export default InputTextBox;*/}

const InputTextBox = (props) => {
    const { type, id, className = 'input', value, onChange, disabled = false, placeholder, name } = props;

    return (
        <input type={type} id={id} className={className} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder} name ={name} />
    )

}
InputTextBox.propTypes= {
    id: PropTypes.string.isRequired,
    className :PropTypes.string,
    type:PropTypes.oneOf(['text', 'email', 'password', 'number']),
    onChange:PropTypes.func.isRequired,
}

export default InputTextBox
