import React, { ChangeEvent } from 'react';

interface Props {
    label: string;
    name: string;
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<Props> = ({ label, name, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="number" id={name} name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default NumberInput;
