import React, { memo } from "react";
import styles from "./logout.module.css";
const CustomButton = React.lazy(() =>import("../component/customButton"));

function LogOutModal({onClick, onCancel}){

    return (
        <div className={styles['modal-section']}>
            <p>Are you sure you want to Logout?</p>
            <CustomButton
                title="Yes,  Logout"
                type={'submit'} 
                classes={`${styles['logout']}`}
                onClick={onClick}
            />
            <CustomButton
                title={"Cancel"} 
                classes={`${styles['cancel']}`}
                onClick={onCancel}
            />
        </div>
    );
}

export default memo(LogOutModal);