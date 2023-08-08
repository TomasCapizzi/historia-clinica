import React from 'react'

function UserInfo({userData}) {
  return (
    <div className='border-t-2 border-solid border-cyan-400 border-b-2 w-4/5 lg:w-11/12 flex justify-around items-center mb-2 lg:mb-5'>
        <div className='text-center text-cyan-700 my-3 text-sm lg:text-base'>
            <p className='font-medium'>{userData.displayName}</p>
            <p>{userData.userBirth}</p>
        </div>
        <div className='text-center my-3 text-sm lg:text-base'>
            <p className='bg-cyan-500 p-1 text-white font-bold rounded-md'>{userData.specialty.toUpperCase()}</p>
            <p className='text-cyan-700'>{userData.userCollege}</p>
        </div>
    </div>
  )
}

export default UserInfo