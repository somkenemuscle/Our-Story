'use client';
import AuthProtection from "@/app/components/middleware/AuthProtection"
import HeroSection from "@/app/components/ui/HeroSection";
import Story from "@/app/components/ui/Story";
import Memories from "@/app/components/ui/Memories";
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Story />
      <Memories />
    </div>
  )
}


export default AuthProtection(Homepage);