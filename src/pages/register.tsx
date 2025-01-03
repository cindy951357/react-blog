import RippleButton from "@/components/Button/RippleButton";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast, } from "@/context/ToastContext";

interface RegisterForm {
    account: string;
    password: string;
    confirmPassword: string;
  }
  
const Register: React.FC = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState<RegisterForm>({
        account: "",
        password: "",
        confirmPassword: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const{ showToast, } = useToast();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible((prev) => !prev);
    };

    const handleRegisterSubmit = () => {
        showToast(t('Register form submitted.'));
        return;
        // 提交處理邏輯
    };

    return (
        <div className="register-page flex justify-center items-center min-h-screen bg-gray-100">
        <div className="register-container bg-white p-8 rounded-xl shadow-md w-96">
            <h1 className="text-2xl font-bold text-center mb-6">{t("Register.Title")}</h1>
            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
            {/* 帳號欄位 */}
            <div className="input-and-icon relative">
                <input
                type="text"
                name="account"
                placeholder={t("Register.AccountPlaceholder")}
                value={form.account}
                onChange={handleInputChange}
                className="w-full p-4  bg-gray-200 text-gray-800 focus:outline-none"
                autoComplete="off"
                />
            </div>

            {/* 密碼欄位 */}
            <div className="input-and-icon relative">
                <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder={t("Register.FirstPwdPlaceholder")}
                value={form.password}
                onChange={handleInputChange}
                className="w-full p-4  bg-gray-200 text-gray-800 focus:outline-none"
                autoComplete="off"
                />
                <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
                >
                {passwordVisible ? "👁️" : "🙈"}
                </span>
            </div>

            {/* 確認密碼欄位 */}
            <div className="input-and-icon relative">
                <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder={t("Register.SecondPwdPlaceholder")}
                value={form.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-4  bg-gray-200 text-gray-800 focus:outline-none"
                autoComplete="off"
                />
                <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={toggleConfirmPasswordVisibility}
                >
                {confirmPasswordVisible ? "👁️" : "🙈"}
                </span>
            </div>

            <RippleButton displayText={t("Common.Submit")} detail={false} withBg isCentered
                onClick={() => {handleRegisterSubmit()}}
            />
            </form>
        </div>
        </div>
    );
};
  

export default Register;