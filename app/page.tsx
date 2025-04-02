import { NavbarDemo } from "@/components/navbar-demo" // 导入新的导航栏
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ProductCard3D } from "@/components/sections/card-showcase"
import { Footer } from "@/components/layout/footer"
// 移除旧的 Header 导入
// import { Header } from "@/components/layout/header";
import { BlogProfileCard } from "@/components/blog-profile-card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1 pt-16">
 
        <HeroSection />
        {/* 博客风格名片 */}
        
        <FeaturesSection />
        <ProductCard3D />
      </main>
      <Footer />
    </div>
  )
}

