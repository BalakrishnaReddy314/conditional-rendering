import React, { ChangeEvent } from 'react';

interface Props {
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({ label, name, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default TextInput;
