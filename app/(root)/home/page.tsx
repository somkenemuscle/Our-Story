'use client';
import AuthProtection from "@/app/components/middleware/AuthProtection"
import HeroSection from "@/app/components/ui/HeroSection";


const Homepage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  )
}


export default AuthProtection(Homepage);