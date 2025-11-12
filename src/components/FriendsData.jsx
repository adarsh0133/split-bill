import React from 'react'
import AddFriend from './AddFriend';

const FriendsData = ({ friendsList,setSelectedFriend,openModal }) => {

    return (
        <>
            <div className="conatiner-fluid p-2">
                {
                    friendsList.map((friend) => (
                        <div key={friend.id} className="w-100 h-25 bg-dark-subtle text-dark p-2 d-flex align-items-center gap-5 ps-5 rounded mb-2">
                            <div className="image-container rounded-circle bg-primary" style={{ width: '100px', height: '100px' }}>
                                <img src={'#'} alt="" />
                            </div>
                            <div className="info-container">
                                <h2>{friend.name}</h2>
                                <p>{friend.balance > 0 ? `${friend.name} Owes You ${friend.balance}rs.` : `You Owe ${friend.name}'s ${Math.abs(friend.balance)}rs.`}</p>
                            </div>
                            <div className="">
                                <button onClick={()=>{setSelectedFriend(friend)}} className='btn btn-primary'>Split</button>
                            </div>
                        </div>
                    ))
                }

                <div className="d-flex justify-content-end">
                    <button onClick={()=>{openModal(true)}} className='btn btn-primary'>Add Friend</button>
                </div>
            </div>
        </>
    )
}

export default FriendsData