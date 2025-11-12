import React, { useState } from 'react'
import FriendsData from './FriendsData'
import SplittingForm from './SplittingForm'


let initialfriendsList = [{
    id: 1,
    name: 'adarsh',
    balance: 400,
}, {
    id: 2,
    name: 'raj',
    balance: -200,
}, {
    id: 3,
    name: 'amit',
    balance: 100,
},{
    id: 4,
    name: 'Shubh',
    balance: 300,
},]

const Hero = () => {
    const [friendsList, setfriendsList] = useState(initialfriendsList)
    const [selectedFriend, setSelectedFriend] = useState(null);
    const handleSplit = (selectedFriendId,newExpense) => {
        setfriendsList((prev)=>{
            return(
                prev.map(f => f.id == selectedFriendId ? {...f,balance: newExpense} : f)
            )
        })  
    }

    console.log(friendsList);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <FriendsData friendsList={friendsList} setSelectedFriend={setSelectedFriend}/>
                    </div>
                    <div className="col-6">
                        <SplittingForm selectedFriend={selectedFriend} handleSplit={handleSplit}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero