import React from 'react';
import './TextField.css';
interface TextFieldProps {
    label: string;
    type: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({label, type, placeholder,onChange}) => {
    return (
        <div>
            <label className={'TextFieldLabel'}>{label}</label>
            <input className={'TextField'} type={`${type}`} placeholder={`${placeholder}`} onChange={onChange} />
        </div>
    );
}

export default TextField;