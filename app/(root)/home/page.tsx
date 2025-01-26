'use client'; 
import AuthProtection from "@/app/components/middleware/AuthProtection"

const Homepage = () => {
  return (
    <div>Homepage</div>
  )
}


export default AuthProtection(Homepage);