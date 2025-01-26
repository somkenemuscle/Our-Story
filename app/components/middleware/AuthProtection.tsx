'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthProtection = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const router = useRouter();

        useEffect(() => {
            if (localStorage.getItem("isLoggedIn") !== "true") {
                router.push("/");
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default AuthProtection;
