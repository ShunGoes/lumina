import { Outlet } from "react-router-dom";
import Explore_Nav from "../components/explore-nav/explore-nav";
import "./explore.css";
import { useAuth } from "../context/auth.context";

const Explore_Layout = () => {
    const { user, resendOtp, loading, message } = useAuth();
    return (
        <div className="flex flex-col">
            <Explore_Nav />
            <div className="flex-1">
                {user ? (
                    <>
                        {!user.is_email_verified && (
                            <div className="flex bg-gray-500 justify-center items-center text-white text-center p-2">
                                {message ? (
                                    message
                                ) : (
                                    <>
                                        <p>
                                            Verify your email address to unlock
                                            all features and ensure account
                                            security.
                                        </p>
                                        <button
                                            type="button"
                                            className="ml-2 btn"
                                            disabled={loading.resendOtp}
                                            onClick={() => resendOtp()}
                                        >
                                            {loading.resendOtp
                                                ? "Resending OTP..."
                                                : "Resend OTP"}
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </>
                ) : null}
                <Outlet />
            </div>
        </div>
    );
};

export default Explore_Layout;
