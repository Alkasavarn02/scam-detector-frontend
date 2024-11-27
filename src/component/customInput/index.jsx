import { memo } from "react";
import styles from "./Input.module.css"

const InputField = ({label, type, placeholder, name, value, onChange})=> {
    return (
        
            <div className={`d-flex flex-column ${styles['input-field']}`}>
                <label
                    htmlFor={name}
                >
                    {label}
                </label>
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div> 
    );
}

export default memo(InputField);