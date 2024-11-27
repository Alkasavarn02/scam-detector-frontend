import { memo } from 'react';
import './button.css';

const CustomButton = ({
    title,
    tooltip,
    htmlType,
    disabled,
    onClick,
    classes,
}) => {
    return (
        <button
            title={tooltip}
            type={htmlType}
            className={`d-flex cursor-pointer custom-button fw-medium ls-2 justify-center ${classes || ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default memo(CustomButton);