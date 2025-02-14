"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthProtection = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            if (localStorage.getItem("isLoggedIn") !== "true") {
                router.push("/");
            } else {
                setIsAuthenticated(true);
            }
        }, []);

        if (!isAuthenticated) return null; // Prevent rendering until auth is confirmed

        return <WrappedComponent {...props} />;
    };
};

export default AuthProtection;
