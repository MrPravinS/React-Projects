import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-300'>
       <div className="flex justify-around p-2">
       <div className='flex ml-4'>
        <h1 className='text-2xl font-medium'>For better experience,download the Swiggy app now</h1>
        </div>
       <div className='h-[200px] w-[300px] ml-5'>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="google-store-logo" />
       </div>
       <div className='h-[200px] w-[300px] mr-8'>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="apple-store" />
       </div>
       </div>
    </div>
  )
}

export default Footer