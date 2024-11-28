import styles from "./header.module.css";
import BackArrow from "../../assests/BackArrow.png"
import { memo } from 'react';
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../constants/routes"

const CustomHeader = ({ title, subTitle, classes }) => {

    const navigate = useNavigate();
    return (
        <header className={`text-center green-bg white-text ${classes || ""}`}>
            <div className={styles['back-arrow']} onClick={() => navigate(DASHBOARD)}>
                <img src={BackArrow} alt="BackArrow" />
            </div>
            <div className={`fw-medium ls-2 ${styles['title']}`}>{title}</div>
            {
                subTitle
                ? <div className={`ls-1 ${styles['sub-title']}`}>{subTitle}</div>
                : null
            }
        </header>
    );
};

export default memo(CustomHeader);