import heroImage from "../assets/hero-image.png";

const HeroSection = () => {
    return(
        <div className="flex flex-wrap items-center justify-center gap-8 w-[82%] m-auto mt-28 lg:flex-nowrap lg:gap-0 lg:justify-between">
            <div className="flex flex-col gap-4 w-full">
                <span className="text-[3.25rem] font-medium">Shop Smarter. Shop Better.</span>
                <span className="w-full lg:w-152">
                    Discover thousands of products, each carefully selected for quality,
                    style, and value bringing everything you need and love into one 
                    convenient place.
                </span>
                <div className="flex gap-4 mt-8">
                    <button className="bg-black text-white px-8 py-3 rounded-md font-medium cursor-pointer hover:bg-black/90">Show Now</button>
                    <button className="bg-black text-white px-8 py-3 rounded-md font-medium cursor-pointer hover:bg-black/90">Explore Deals</button>
                </div>
            </div>
            <img 
            src={heroImage} 
            alt="Hero image" 
            className="w-[20rem] lg:w-120 lg:h-100" />
        </div>
    )
}
export default HeroSection