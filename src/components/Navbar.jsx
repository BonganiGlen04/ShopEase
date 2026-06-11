import cartIcon from "../assets/cart-icon.svg";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex justify-between py-4 px-16">
      <div className="flex items-center justify-center gap-5">
        <span className="text-lg font-medium cursor-pointer">ShopEase</span>
        <span className="text-sm cursor-pointer hover:underline">Shop</span>
        <span className="text-sm cursor-pointer hover:underline">Best Selllets</span>
        <span className="text-sm cursor-pointer hover:underline">Deals</span>
      </div>
      <div className="hidden items-center justify-center gap-5 md:flex ">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src={cartIcon} alt="Cart"/>
            <span className="text-sm">Cart</span>
        </div>
        <span className="text-sm cursor-pointer hover:underline">Help</span>
        <span className="text-sm cursor-pointer hover:underline">Login</span>
        <span className="text-sm bg-white text-black py-2 px-3 rounded-full font-medium cursor-pointer">Sign up</span>

      </div>
    </div>
  )
};

export default Navbar