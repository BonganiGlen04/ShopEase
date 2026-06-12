const FeatureSection = ({ 
    title, 
    description, 
    ctaTitle, image, 
    className 
}) => {
    return (
        <div className={`mt-16 px-8 flex items-center justify-center flex-wrap gap-8 lg:justify-between xl:gap-0 ${className}`}>
            <div className="bg-wild-sand p-8 rounded-md">
                <img src={image} alt="Feature image" className="w-md h-100 object-contain" />
            </div>

            <div className="flex flex-col items-start justify-center gap-4 w-120">
                <span className="text-4xl font-bold">{title}</span>
                <span className="text-base">{description}</span>
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium cursor-pointer hover:bg-black/90">{ctaTitle}</button>
            </div>
        </div>
    );
};

export default FeatureSection