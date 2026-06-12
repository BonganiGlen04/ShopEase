import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import TopProducts from "./components/TopProducts"
import FeatureSection from "./components/FeatureSection"
import One from "./assets/first-feature.png"
import Two from "./assets/second.png"
import Three from "./assets/third.png"
import Four from "./assets/four.png"
import Five from "./assets/five.png"


const App = () => {
  return (
  <div>
    <Navbar />
    <HeroSection />
    <TopProducts />
    <div className="flex flex-col w-full m-auto lg:w-[80%]">
      <FeatureSection 
        title="Why Choose Us?"
        description="We make online shopping simple, safe, and rewarding with
                    premium products, fast delivery, and customer-first service."
        ctaTitle="Learn More"
        image={One}
       />
       <FeatureSection 
       className="flex-row-reverse"
        title="Shop by Category"
        description="Find everything you need in just a few clicks - from fashion and
                    electronics to home essentials and more."
        ctaTitle="View Categories"
        image={Two}
       />
       <FeatureSection 
        title="Trending Right Now"
        description="Discover what's hot! Shop the products everyone is loving today."
        ctaTitle="View Best Sellers"
        image={Three}
       />
       <FeatureSection 
        className="flex-row-reverse"
        title="Customer Satisfaction Guaranteed"
        description="Grab exclusive discounts and special offers before they're gone."
        ctaTitle="Shop Deals"
        image={Four}
       />
       <FeatureSection 
        title="Loved by Thousands"
        description="Amazing experience! The delivery was quick, and the product
                    quality exceeded expectations."
        ctaTitle="Shop Now"
        image={Five}
       />
      
    </div>

  </div>)
}

export default App