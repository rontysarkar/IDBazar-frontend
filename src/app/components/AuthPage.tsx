import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BASE_URL,
  useForgotPasswordMutation,
  useLoginMutation,
  useRegisterMutation,
} from "@/store/api";
import { authStatus, toggleLoginDialog } from "@/store/slice/userSlice";
import {
  CheckCircle,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface AuthPageProps {
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
}
interface loginFormData {
  email: string;
  password: string;
}
interface signUpFormData {
  name: string;
  email: string;
  password: string;
}
interface forgotPasswordFormData {
  email: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ isLoginOpen, setIsLoginOpen }) => {
  const [currentTab, setCurrentTab] = useState<"login" | "signup" | "forgot">(
    "login",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(true);
  const [registerMutation] = useRegisterMutation();
  const [loginMutation] = useLoginMutation();
  const [forgotPasswordMutation] = useForgotPasswordMutation();

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginError },
  } = useForm<loginFormData>();
  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpError },
  } = useForm<signUpFormData>();
  const {
    register: registerForgotPassword,
    handleSubmit: handleForgotPasswordSubmit,
    formState: { errors: forgotPasswordError },
  } = useForm<forgotPasswordFormData>();

  const onSubmitSignUp = async (data: signUpFormData) => {
    setSignUpLoading(true);
    try {
      const result = await registerMutation(data).unwrap();
      console.log("This is result", result);
      if (result.success) {
        toast.success(
          "Verification Link Sent To Email, Please verify your email",
        );
        dispatch(toggleLoginDialog());
      }
    } catch (error) {
      toast.error("Email alreday registered");
    } finally {
      setSignUpLoading(false);
    }
  };

  const onSubmitLogin = async (data: loginFormData) => {
    setLoginLoading(true);
    try {
      const result = await loginMutation(data).unwrap();
      if (result.success) {
        toast.success("User Login Successfully");
        dispatch(toggleLoginDialog());
        dispatch(authStatus());
        window.location.reload();
      }
    } catch (error) {
      toast.error("Email or password is incorrect");
    } finally {
      setLoginLoading(false);
    }
  };

  const onSubmitGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      router.push(`${BASE_URL}/auth/google`);
      dispatch(authStatus());
    } catch (error) {
      console.log(error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const onSubmitForgotPassword = async(data:forgotPasswordFormData)=>{
    setForgotPasswordLoading(true);
    try {
      const result = await forgotPasswordMutation(data.email).unwrap();
      if(result.success){
        toast.success("Password reset link sent to email")
        setForgotPasswordSuccess(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Faild to Rest passowrd,Please try later")
    }
    finally{
      setForgotPasswordLoading(false);
    }
  }

  return (
    <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold mb-4">
            Welcome to ID Bazar
          </DialogTitle>
          <Tabs
            value={currentTab}
            onValueChange={(value) =>
              setCurrentTab(value as "login" | "signup" | "forgot")
            }
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
              <TabsTrigger value="forgot">Forgot</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="space-y-4">
              <form
                onSubmit={handleLoginSubmit(onSubmitLogin)}
                className="space-y-4 mt-2"
              >
                <div className="relative">
                  <Input
                    {...registerLogin("email", {
                      required: "Email is Required",
                    })}
                    placeholder="Email"
                    type="email"
                    className="pl-10"
                  />
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
                {loginError.email && (
                  <p className="text-red-500 text-sm">
                    {loginError.email.message}
                  </p>
                )}

                <div className="relative">
                  <Input
                    {...registerLogin("password", {
                      required: "Password is Required",
                    })}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10"
                  />
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  {showPassword ? (
                    <EyeOff
                      onClick={() => setShowPassword(false)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                  ) : (
                    <Eye
                      onClick={() => setShowPassword(true)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                  )}
                </div>
                {loginError.password && (
                  <p className="text-red-500 text-sm">
                    {loginError.password.message}
                  </p>
                )}
                <Button type="submit" className="w-full font-bold">
                  {loginLoading ? (
                    <Loader2 className="animate-spin mr-2" size={20} />
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <p className="mx-2 text-gray-500 text-sm">Or</p>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <Button onClick={onSubmitGoogleLogin} className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
                <Image
                  src="/icons/google.svg"
                  alt="googleIcon"
                  width={20}
                  height={20}
                />
                Login with Google
              </Button>
            </TabsContent>
            <TabsContent value="signup" className="space-y-4">
              <form
                onSubmit={handleSignUpSubmit(onSubmitSignUp)}
                className="space-y-4 mt-2"
              >
                <div className="relative">
                  <Input
                    {...registerSignUp("name", {
                      required: "Name is Required",
                    })}
                    placeholder="Name"
                    type="text"
                    className="pl-10"
                  />
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
                {signUpError.name && (
                  <p className="text-red-500 text-sm">
                    {signUpError.name.message}
                  </p>
                )}
                <div className="relative">
                  <Input
                    {...registerSignUp("email", {
                      required: "Email is Required",
                    })}
                    placeholder="Email"
                    type="email"
                    className="pl-10"
                  />
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
                {signUpError.email && (
                  <p className="text-red-500 text-sm">
                    {signUpError.email.message}
                  </p>
                )}
                <div className="relative">
                  <Input
                    {...registerSignUp("password", {
                      required: "Password is Required",
                    })}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10"
                  />
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  {showPassword ? (
                    <EyeOff
                      onClick={() => setShowPassword(false)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                  ) : (
                    <Eye
                      onClick={() => setShowPassword(true)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                  )}
                </div>
                {signUpError.password && (
                  <p className="text-red-500 text-sm">
                    {signUpError.password.message}
                  </p>
                )}
                <Button type="submit" className="w-full font-bold my-5">
                  {signUpLoading ? (
                    <Loader2 className="animate-spin mr-2" size={20} />
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="forgot" className="space-y-4">
              {!forgotPasswordSuccess ? (
                <form className="space-y-4 mt-2" onSubmit={handleForgotPasswordSubmit(onSubmitForgotPassword)}>
                  <div className="relative">
                    <Input
                      {...registerForgotPassword("email", {
                        required: "Email is Required",
                      })}
                      placeholder="Email"
                      type="email"
                      className="pl-10"
                    />
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 "
                      size={20}
                    />
                  </div>
                  {forgotPasswordError.email && (
                    <p className="text-red-500 text-sm">
                      {forgotPasswordError.email.message}
                    </p>
                  )}
                  <Button className="w-full font-bold">
                    {forgotPasswordLoading ? (
                      <Loader2 className="animate-spin mr-2" />
                    ) : (
                      "Send Reset Link"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <CheckCircle
                    className="text-green-500 mx-auto my-2"
                    size={40}
                  />
                  <h1 className="text-xl font-semibold text-gray-700">
                    Reset Link Send
                  </h1>
                  <p className="text-gray-500">
                    We've sent a password reset link to your email.Please check
                    your inbox and follow the instructions to reset your
                    password.
                  </p>
                  <Button
                    onClick={() => setForgotPasswordSuccess(false)}
                    className="w-full"
                  >
                    Send Another Link to Email
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
// hello
export default AuthPage;
