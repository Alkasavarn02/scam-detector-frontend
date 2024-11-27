import React, { memo, useState } from "react";
import styles from "../PopUpModal/reportscam.module.css";
import { validateInput } from "../utils/validateReportScam";
import { ReportScamFormField } from "../constants";
import { addReportScam, getScamStatus } from "../services/auth";
const InputField = React.lazy(() => import("../component/customInput"));
const CustomButton = React.lazy(() =>import("../component/customButton"));

const radioBtnInputFiled = [
    {
      id:"option1",
      title: "Phone",
    },
    {
      id:"option2",
      title: "Email",
    },
]

function ScamReportModal({onCancel, screen}){

   const [createScamStatus, setCreateScamStatus] = useState({});
   const [error, setErrors] = useState('');

   const [scamStatus,setScamStatus] = useState({})

   const onInputChange = (e, title) => {
      if(e?.target?.name === 'type') {
         setCreateScamStatus({
            ...createScamStatus,
            "type": title,
         });
      } else {
         setCreateScamStatus({
            ...createScamStatus,
            [e.target.name] : e.target.value
         })
      }
   }

   const onHandleReportScamSubmit = async()=>{
      
      const {type, value, details} = createScamStatus;

      if(!type || !value || !details){
         setErrors("Please provide all the details carefully")
         return
      } else {
         const {isValid,err} = validateInput(createScamStatus)

         if(!isValid){
            setErrors(err)
            return
         } else {
            setErrors(null)
            try {
               const res = await addReportScam(createScamStatus)
               if(res.status === 201 || res.status === 200){
                  alert("Report scam successfully")
                  onCancel()
               }
            } catch(err) {
               alert(`Something went wrong ${err}`)
            }
         }
      }
   }

   const onHandleScamLookUpSubmit = async()=>{
      
      const {type, value} = createScamStatus;

      if(!type || !value ){
         setErrors("Please provide all the details carefully")
         return
      } else {
         const {isValid,err} = validateInput(createScamStatus)

         if(!isValid){
            setErrors(err)
            return
         } else {
            setErrors(null)
            try {
               const res = await getScamStatus(value)
               if(res.status === 200 || res.status === 201){
                  setScamStatus(res?.data?.data)
               }
            } catch(err) {
               alert(`Something went wrong ${err}`)
            }
         }

      }
   }

   return (
        <div className={styles['form-data']}>

            <div className={`d-flex justify-center align-center ${styles['type-section']}`}>
               <p>Choose Type<span className={styles['mandatory-icon']}>*</span></p>
               <div className={`d-flex ${styles['radio-btn-section']}`}>
                  {
                     radioBtnInputFiled.map((btn)=>{
                        return (
                           <div
                              className={`d-flex justify-center ${styles['radio-btn-conatiner']}`}
                              key={btn?.id}
                           >
                              <input
                                 type="radio"
                                 name="type"
                                 id={btn?.id}
                                 checked={createScamStatus?.type === btn?.title}
                                 onChange={(e) => onInputChange(e, btn?.title)}
                              />
                              <label htmlFor={btn?.id} className={`d-flex align-center ${styles['label']}`}>
                                 {btn?.title}
                              </label>
                           </div>
                        )
                     })
                  }                  
               </div>         
            </div>
                     
            <form>
               {
                  screen && 
                  ReportScamFormField(screen)?.map((input)=>{
                        return (
                           <InputField
                              key={input?.id}
                              label={input?.label}
                              type={input?.type}
                              placeholder={input?.placeholder}
                              name={input?.name}
                              value={createScamStatus?.[input?.name] || ""}
                              onChange={onInputChange}
                           />
                        )
                  })
               }
            </form>

            {
               error && <p className={`error`}>{error}</p>
            }

            {
               scamStatus && Object.keys(scamStatus).length > 0 ?
               <div className={`${styles['data-section']}`}>
                  {
                     Object.entries(scamStatus).map(([key,value])=>{
                        return <p key={key} className={styles['data-text']}>{`${key}: ${value}`}</p>
                     })
                  }
               </div>
               : null
            }

            <div className={`d-flex ${styles['button-section']}`}>
               <CustomButton
                  title={'Submit'}
                  htmlType={'submit'}
                  onClick={screen === "scam-lookup" ? onHandleScamLookUpSubmit : onHandleReportScamSubmit}
                  classes={`${styles['submit']}`}
               />
               <CustomButton
                  title={'Cancel'}
                  htmlType={'submit'}
                  onClick={onCancel}
                  classes={`${styles['cancel']}`}
               />
            </div>
        </div>
    )

}

export default memo(ScamReportModal);
