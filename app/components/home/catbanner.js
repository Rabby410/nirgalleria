import Image from "next/image";
import React from "react";

const CatBanner = () => {
    return (
        <>
            <div className="py-10 bg-primary">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="justify-self-center">
                            <Image
                                src="/images/home/catbanner/carten.png"
                                alt=" carten nir galleria"
                                width="550"
                                height="400"
                                className="transition-transform hover:scale-110 duration-500"
                            />
                        </div>
                        <div>
                            <Image src="/images/home/catbanner/bed-sheet.png" width="500" height="400" alt=" carten nir galleria" className="transition-transform hover:scale-105 duration-500" />
                            <div className="flex flex-row gap-5 mt-4">
                                <Image src="/images/home/catbanner/pillow.png" width="240" height="400" alt="carten nir galleria" className="transition-transform hover:scale-110 duration-500" />
                                <Image src="/images/home/catbanner/cushion.png" width="240" height="400" alt="carten nir galleria" className="transition-transform hover:scale-110 duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatBanner;