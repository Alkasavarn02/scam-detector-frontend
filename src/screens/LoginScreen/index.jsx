import { useNavigate } from "react-router-dom";
import { loginFormFields } from "../../constants";
import styles from "./login.module.css";
import { login } from "../../services/auth";
import { DASHBOARD } from "../../constants/routes";
import React, { memo, useEffect, useState } from "react";
import validationForm from "../../utils/loginValidation";
const InputField = React.lazy(() => import("../../component/customInput"));
const CustomButton = React.lazy(() => import("../../component/customButton"));
const CustomHeader = React.lazy(() => import("../../component/customHeader"));

const LoginScreen = () => {

    const [loginFormData, setLoginFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();

    const onInputChange = (e) => {
        e.preventDefault()

        setLoginFormData({
            ...loginFormData,
            [e?.target?.name] : e?.target?.value
        })
    }

    const onLogin = async(e) => {
        e.preventDefault()
        const {err,isValid} = validationForm(loginFormData)

        if(!isValid){
            setErrors({...err})
            return
        } else {
            setErrors(null)

            if(isLoading) return;
            setIsLoading(true);

            try {
                const res = await login(loginFormData);            
                if (res.status === 201) {
                    localStorage.setItem("token",`${res?.data?.token}`)
                    alert("Logged in Successfully");
                    setTimeout(() => {
                        navigate(DASHBOARD);
                    }, 1000);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    alert(`${error.response.data.message}`);
                } else if(error.response && error.response.status === 404) {
                    alert(`${error.response.data.message}`);
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate(DASHBOARD);
        }
    }, [localStorage.getItem('token')]);

    return (
        <>
            <CustomHeader
                title={'Login Screen'}
                subTitle={'Login in to Continue'}
            />

            <form className={styles['form-data']}>
                {
                    loginFormFields?.map((input)=>{
                        return (
                            <div key={input?.id} className={styles['input-field']}>
                                <InputField 
                                    key={input?.id}
                                    label={input?.label}
                                    type={input?.type}
                                    placeholder={input?.placeholder}
                                    name={input?.name}
                                    value={loginFormData?.[input?.name] || ""}
                                    onChange={onInputChange}
                                />
                                {
                                    errors?.[input?.name]
                                    ? <p className={`error ${styles['err-section']}`}>{errors?.[input?.name]}</p>
                                    : null
                                }
                            </div>
                        )
                    })
                }
                <div>
                    <CustomButton
                        title={"Login"}
                        htmlType={'submit'}
                        disabled={isLoading}
                        onClick={onLogin}
                        classes={`${styles['login']}`}
                    />
                </div>
            </form>
        </>
    );
};


export default memo(LoginScreen);