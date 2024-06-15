import React, { ChangeEvent } from 'react';

interface Props {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<Props> = ({ label, name, options, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select id={name} name={name} value={value} onChange={onChange}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
