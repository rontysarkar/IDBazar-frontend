"use client";
import { useVerifyEmailMutation } from "@/store/api";
import { authStatus, setEmailVarified } from "@/store/slice/userSlice";
import { RootState } from "@/store/store";
import { CheckCircle, Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const page: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const router = useRouter();
  const dispatch = useDispatch();
  const [verifyEmail] = useVerifyEmailMutation();
  const isVerifyEmail = useSelector(
    (state: RootState) => state.user.isEmailVarified,
  );
  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "succes" | "alreadyVerified" | "failed"
  >("loading");

  useEffect(() => {
    const verify = async () => {
      if (isVerifyEmail) {
        setVerificationStatus("alreadyVerified");
        return;
      }
      try {
        const result = await verifyEmail(token).unwrap();
        if (result.success) {
          setVerificationStatus("succes");
          dispatch(setEmailVarified(true));
          dispatch(authStatus());
          toast.success("Email Verified Successfully");
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        } else {
          throw new Error(result.message || "verificaton failed");
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      verify();
    }
  }, [token, dispatch, isVerifyEmail, verifyEmail]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 to via-sky-50 to-white">
      {verificationStatus === "loading" && (
        <div className="bg-white p-10 rounded-lg text-center shadow-2xl">
          <Loader2 className="mx-auto animate-spin h-12 w-12 text-blue-500" />
          <h1 className="text-2xl font-semibold mb-2 text-gray-800">
            Verifying Your Email
          </h1>
          <p className="text-gray-500">
            Please wait wile we confram your email address...
          </p>
        </div>
      )}

      {verificationStatus === "succes" && (
        <div className="bg-white p-10 rounded-lg text-center shadow-2xl">
          <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
          <h1 className="text-2xl font-semibold mb-2 text-gray-800">
            Email Verified
          </h1>
          <p className="text-gray-500">
            Your Email has been successfully verified
          </p>
        </div>
      )}

      {verificationStatus === "alreadyVerified" && (
        <div className="bg-white p-10 rounded-lg text-center  shadow-2xl">
          <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
          <h1 className="text-2xl font-semibold mb-2 text-gray-800">
            Email already Verified
          </h1>
          <p className="text-gray-500">
            Your Email is already verified.You can use our services
          </p>
          <button
          onClick={()=> router.push('/')}
           className="bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-full mt-3 text-white ">
            Go to homepage
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
