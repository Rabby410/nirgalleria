import React from 'react'
import NewArrivelsTab from './client-elements/new-arrivales-tab'

const NewArrivels = () => {

  return (
    <>
      <div className="py-10">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <p className='text-green-400'>Hurry up to buy</p>
            <h2 className="text-3xl font-semibold mt-3 ">New Arrivals</h2>
            <h5 className="text-xl mt-3">Grab your copy before it goes SOLD OUT</h5>
          </div>
          <NewArrivelsTab />
        </div>
      </div>
    </>
  )
}

export default NewArrivels