import './Input.css';

const Input = ({title, placeholder, required, value, setValue, type = 'text'}) => {

    const getInputValue = (e) => {
        setValue(e.target.value);
    };

    return <div className={`input input-${type}`}>
        <label> {title} </label>
        <input type={type} placeholder={placeholder} required={required} value={value} onChange={getInputValue} />
    </div>
}

export default Input