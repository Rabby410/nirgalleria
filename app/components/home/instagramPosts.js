import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';

const InstagramPosts = () => {
    const posts = [
        { id: 1, image: '/images/home/newarrivels/c1.png', likes: 3750, comments: 337 },
        { id: 2, image: '/images/home/newarrivels/c3.jpg', likes: 2500, comments: 120 },
        { id: 3, image: '/images/home/newarrivels/c2.jpg', likes: 4800, comments: 200 },
        { id: 4, image: '/images/home/newarrivels/c4.jpg', likes: 3600, comments: 450 },
        { id: 5, image: '/images/home/newarrivels/c5.png', likes: 2900, comments: 130 },
        { id: 6, image: '/images/home/newarrivels/c6.png', likes: 4100, comments: 380 },
        { id: 7, image: '/images/home/newarrivels/c7.png', likes: 5200, comments: 500 },
        { id: 8, image: '/images/home/newarrivels/c8.jpg', likes: 2700, comments: 150 },
        { id: 9, image: '/images/home/newarrivels/c1.png', likes: 3800, comments: 220 },
        { id: 10, image: '/images/home/newarrivels/c2.jpg', likes: 3800, comments: 220 },
        { id: 11, image: '/images/home/newarrivels/c3.jpg', likes: 3800, comments: 220 },
        { id: 12, image: '/images/home/newarrivels/c4.jpg', likes: 3800, comments: 220 },
    ];

    return (
        <div className="max-w-screen p-4">
            <div className="relative grid grid-cols-4">
                {posts.map((post) => (
                    <div key={post.id} className="relative group overflow-hidden">
                        <img
                            src={post.image}
                            alt={`Instagram post ${post.id}`}
                            className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105 z-10"
                        />
                        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end justify-between z-30">
                            <div className="flex flex-row justify-between w-full">
                                <div className="flex items-center mb-2">
                                    <AiFillHeart className="mr-1" />
                                    <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaRegCommentAlt className="mr-1" />
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center bg-transparent p-4 z-20">
                    <div className="text-center w-[200px] md:w-[300px] bg-white p-4 shadow-lg">
                        <h2 className="text-xl font-bold">INSTAGRAM</h2>
                        <p className='text-[15px] pt-2'>@nir-galleria</p>
                        <p className='text-[13px] pt-2'>Giving our planet a helping hand is just a matter of making one simple change at a time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramPosts;
