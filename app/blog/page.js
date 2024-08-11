import React from 'react'
import Newses from '@/app/components/constants/news'
import BlogBox from '../components/common/blogBox'

const Blogs = () => {
    return (
        <>
            <div className="py-10 text-center bg-black text-white">
                <h1 className='text-6xl'>Blogs</h1>
            </div>
            <div className="py-10">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:px-5">
                        {Newses.map((news) => (
                            <div key={news.id}>
                                <BlogBox news={news} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs