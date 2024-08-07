import React from "react";

const CatBanner = () => {
    return (
        <>
            <div className="py-10 bg-primary">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="justify-self-center">
                            <img
                                src="./images/home/catbanner/carten.png"
                                alt=" carten nir galleria"
                                className="transition-transform hover:scale-110 duration-500"
                            />
                        </div>
                        <div>
                            <img src="./images/home/catbanner/bed-sheet.png" alt=" carten nir galleria" className="transition-transform hover:scale-105 duration-500" />
                            <div className="flex flex-col md:flex-row gap-5 mt-4">
                                <img src="./images/home/catbanner/pillow.png" alt=" carten nir galleria" className="transition-transform hover:scale-110 duration-500" />
                                <img src="./images/home/catbanner/cushion.png" alt=" carten nir galleria" className="transition-transform hover:scale-110 duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatBanner;