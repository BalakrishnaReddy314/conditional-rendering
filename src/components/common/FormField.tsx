import React, { ChangeEvent } from 'react';
import { IFormField } from "../../config/FormConfig";
import TextInput from '../controls/TextInput';
import SelectInput from '../controls/SelectInput';
import NumberInput from '../controls/NumberInput';
import Utilities from '../../utils/Utilities';

interface Props {
    formField: IFormField;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    formData: any;
}

const FormField: React.FC<Props> = ({ formField, value, onChange, formData }) => {

    const { label, name, type, options, renderCondition }: IFormField = formField;

    if(renderCondition && !Utilities.evaluateConditions(renderCondition, formData)) {
        return null;
    } else {
        switch (type) {
            case 'text':
                return <TextInput label={label} name={name} value={value as string} onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void} />;
            case 'select':
                return <SelectInput label={label} name={name} options={options as string[]} value={value as string} onChange={onChange as (e: ChangeEvent<HTMLSelectElement>) => void} />;
            case 'number':
                return <NumberInput label={label} name={name} value={value as number} onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void} />;
            default:
                return null;
        }
    }
};

export default FormField;
