import {PLAY_STORE_IMG_URL} from "../utils/app.constants"
import {APP_STORE_IMG_URL} from "../utils/app.constants"

const Footer = () => {
    return (
    <div className="bg-black text-white p-20 mt-16 flex flex-col md: px-36">
        <span className="text-lg font-medium">ShopEase</span>
        <span className="mt-8 cursor-pointer hover:underline ">Visit help Center</span>

        <div className="flex justify-between gap-2 mt-8 flex-wrap">
            <div>
                <span className="text-lg font-medium">Company</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm">About us</span>
                    <span className="text-sm">Our offerings</span>
                    <span className="text-sm">Newsroom</span>
                    <span className="text-sm">About us</span>

                </div>
            </div>

            <div>
                <span className="text-lg font-medium">Quick Links</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm">Home</span>
                    <span className="text-sm">Shops</span>
                    <span className="text-sm">Best Sellers</span>
                    <span className="text-sm">Deals</span>
                </div>
            </div>

            <div>
                <span className="text-lg font-medium">Customer Support</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm">FAQs</span>
                    <span className="text-sm">Shipping & Delivery</span>
                    <span className="text-sm">Returns & Refunds</span>
                    <span className="text-sm">Privacy Policy</span>
                </div>
            </div>

            <div>
                <span className="text-lg font-medium">Follow Us</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm">Instagram</span>
                    <span className="text-sm">Facebook</span>
                    <span className="text-sm">Twitter / X</span>
                    <span className="text-sm">LinkEdIn</span>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-start gap-2">
            <img src={PLAY_STORE_IMG_URL} alt="play-store-icon" className="w-[7.8rem] h-[7.8rem] cursor-pointer"/>
            <img src={APP_STORE_IMG_URL} alt="app-store-icon" className="w-[7.8rem] h-[7.8rem] cursor-pointer"/>

        </div>
        <span className="mt-4 text-gray-400 text-xs">2025 ShopEase Technologies Inc.</span>
    </div>
    );

};

export default Footer