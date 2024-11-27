import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";
import React, { memo, Suspense, useState } from "react";
import { sideMenuList } from "../../constants/sideMenu";
const CustomModal = React.lazy(() => import("../customModal"));
const ScamReportModal = React.lazy(() => import("../../PopUpModal/ReportScamPopUp"))
const LogOutModal = React.lazy(() => import("../../PopUpModal/logoutmodal"));

const ModalFallback = () => <div>Loading...</div>

function SideBar({classes}){
    
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(null)
    
    const onCancel = () => {
        setShowModal(null)
    }
    
    const onLogout = () => {
        try {
            localStorage.removeItem("user")
            localStorage.removeItem("email")
            localStorage.removeItem("token")
            
            navigate("/login")
        } catch(err){
            alert(`Something went wrong please try again later, ${err}`)
        }
    }
    
    const modalComponents = {
        "1": <ScamReportModal onCancel={onCancel} screen="scam-lookup" />,
        "2": <ScamReportModal onCancel={onCancel} screen="report-scam" />,
        "4": <LogOutModal onClick={onLogout} onCancel={onCancel} />,
    };
    
    return (
        <div className={`${styles['side-bar']} ${classes || ""}`}>
            {
                sideMenuList.map((menu)=>{
                    const {id,classes,title} = menu || {};
                    return (
                        <p
                            key={id}
                            className={`${styles[classes]}`}
                            onClick={() => {
                                if ( id != '3'){
                                    setShowModal(id)
                                } else if( id==="3") {
                                    navigate("/scam-list")
                                }
                            }}
                        >
                            {title}
                        </p>
                    )
                })
            }
            {
                showModal && 
                <Suspense fallback={<ModalFallback />}>
                    <CustomModal>
                        {modalComponents[showModal]}
                    </CustomModal>
                </Suspense>
            }
        </div>
    );
}

export default memo(SideBar);