import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../stores";

// eslint-disable-next-line react-refresh/only-export-components
const Verify = () => {
    const {
        AuthStore: { verifyEmail, verifySuccess },
    } = useStore();
    const location = new URL(window.location.href);
    const id = location.searchParams.get("id") as string;
    const otp = location.searchParams.get("otp") as string;

    React.useEffect(() => {
        verifyEmail({ id, otp });
    }, [id, otp, verifyEmail]);

    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
            <h3 className="text-center">
                {verifySuccess ? "Email verified" : "Verifying email"}
            </h3>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Verify);
