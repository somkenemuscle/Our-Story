'use client';
import AuthProtection from "@/app/components/middleware/AuthProtection"
import HeroSection from "@/app/components/ui/HeroSection";
import Story from "@/app/components/ui/Story";
import Memories from "@/app/components/ui/Memories";
import { GamesPlayed } from "@/app/components/ui/GamesPlayed";
import Movies from "@/app/components/ui/Movies";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Story />
      <Memories />
      <GamesPlayed />
      <Movies />
    </div>
  )
}


export default AuthProtection(Homepage);