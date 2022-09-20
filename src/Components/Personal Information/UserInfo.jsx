import React from 'react'

function UserInfo({userData}) {
  return (
    <div className='user-data'>
        <div>
            <p className='user-name'>{userData.displayName}</p>
            <p>{userData.userBirth}</p>
        </div>
        <div>
            <p className='user-specialty'>{userData.specialty.toUpperCase()}</p>
            <p>{userData.userCollege}</p>
        </div>
    </div>
  )
}

export default UserInfo