import {useEffect,useState} from "react"
import {PRODUCTS_URL} from "../utils/app.constants"

const TopProducts = () => {
    
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch(PRODUCTS_URL);
        const {products} = await response.json();
        setProducts(products);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="flex flex-col w-[80%] m-auto mt-28">
            <span className="text-4xl font-bold">Top Products</span>
            <div className="no-scrollbar flex gap-8 overflow-x-scroll mt-8">
                {products.map((prod) => {
                    return (
                    <div key={prod.title} className="w-70 flex flex-col gap-3 whitespace-nowrap items-center justify-center bg-wild-sand rounded-lg p-4">
                        <div className="w-64 h-64">
                            <img src={prod.thumbnail} alt={prod.title} className="w-full h-full object-cover rounded" />
                        </div>
                        <span className="text-sm font-semibold">{prod.title}</span>
                        <span className="font-medium text-lg">${prod.price}</span>

                    </div>
                )
                })}
            </div>
            
        </div>
    )
}

export default TopProducts