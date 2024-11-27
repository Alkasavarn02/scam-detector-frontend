import { memo } from 'react';
import './header.css';

const CustomHeader = ({ title, subTitle, classes }) => {
    return (
        <header className={`text-center green-bg white-text ${classes || ""}`}>
            <div className='fw-medium ls-2 title'>{title}</div>
            {
                subTitle
                ? <div className='ls-1 sub-title'>{subTitle}</div>
                : null
            }
        </header>
    );
};

export default memo(CustomHeader);