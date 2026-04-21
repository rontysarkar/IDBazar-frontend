"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResetPasswordMutation } from "@/store/api";
import { toggleLoginDialog } from "@/store/slice/userSlice";
import { CheckCircle, Eye, EyeOff, Loader2, Lock } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface resetPasswordFormData {
  token: string;
  newPassword: string;
  conframPassword: string;
}

const page: React.FC = () => {
  const { token } = useParams();
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConframPassword, setShowConframPassword] = useState(false);
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);
  const [resetPassword] = useResetPasswordMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<resetPasswordFormData>();

  const onSubmitResetPassword = async (data: resetPasswordFormData) => {
    setResetPasswordLoading(true);
    if (data.conframPassword !== data.newPassword) {
      toast.error("Password Not match");
      setResetPasswordLoading(false);
      return;
    }

    try {
      await resetPassword({
        token: token,
        newPassword: data.newPassword,
      }).unwrap();
      toast.success("Password Reset Successfully");
      setResetPasswordSuccess(true);
    } catch (error) {
      toast.error("Faild to Reset Password");
      console.log(error);
    } finally {
      setResetPasswordLoading(false);
    }
  };

  const handleLoginClic = () =>{
    dispatch(toggleLoginDialog());
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 to via-sky-50 to-white">
      {resetPasswordSuccess ? (
         <div className="bg-white p-10 rounded-lg text-center  shadow-2xl">
          <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
          <h1 className="text-2xl font-semibold mb-2 text-gray-800">
            Password Reset Successfully
          </h1>
          <p className="text-gray-500">
            Your Password has been reset successfully.you can login with new password
          </p>
          <button
          onClick={()=> handleLoginClic()}
           className="bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-full mt-3 text-white ">
            login
          </button>
        </div>
      ) : (
        <div className="bg-white p-10 rounded-2xl">
          <form
            onSubmit={handleSubmit(onSubmitResetPassword)}
            className="space-y-3"
          >
            <div className="relative">
              <Input
                {...register("newPassword", {
                  required: "New Password is Required",
                })}
                placeholder="New Password"
                type={showNewPassword ? "text" : "password"}
              />

              {showNewPassword ? (
                <EyeOff
                  onClick={() => setShowNewPassword(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
              ) : (
                <Eye
                  onClick={() => setShowNewPassword(true)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
              )}
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm">
                {errors.newPassword.message as string}
              </p>
            )}
            <div className="relative">
              <Input
                {...register("conframPassword", {
                  required: "Confram Password Requird",
                })}
                placeholder="Confram Password"
                type={showConframPassword ? "text" : "password"}
              />
              {showConframPassword ? (
                <EyeOff
                  onClick={() => setShowConframPassword(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
              ) : (
                <Eye
                  onClick={() => setShowConframPassword(true)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
              )}
            </div>
            {errors.conframPassword && (
              <p className="text-red-500 text-sm">
                {errors.conframPassword.message as string}
              </p>
            )}
            <Button type="submit" className="w-full font-bold my-5">
              {resetPasswordLoading ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : (
                "Reset Password"
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default page;
