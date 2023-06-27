import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label ,onClick}) => {
    const css = `
    .Button {
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid #000;
      background: #909090;
      display: flex;
      width: 300px;
      height: 35px;
      padding: 9px 14px;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .ButtonLabel {
      color: white;
      font-size: 16px;
      font-family: 'Mulish';
      font-weight: 700;
      line-height: 18px;
      word-wrap: break-word;
    }
  `;

    return (
        <div className="Button" onClick={onClick}>
            <style>{css}</style>
            <div className="ButtonLabel">{label}</div>
        </div>
    );
};

export default Button;
