'use client'
import AuthProtection from "@/app/components/middleware/AuthProtection"

const Memories = () => {
    return (
        <div>Memories</div>
    )
}

export default AuthProtection(Memories);