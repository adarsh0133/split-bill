import React, { useState } from 'react'
import FriendsData from './FriendsData'
import SplittingForm from './SplittingForm'
import AddFriend from './AddFriend'


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
}, {
    id: 4,
    name: 'Shubh',
    balance: 300,
},]

const Hero = () => {
    const [friendsList, setfriendsList] = useState(initialfriendsList)
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [openModal, setopenModal] = useState(false);
    console.log(openModal)

    const handleSplit = (selectedFriendId, newExpense) => {
        setfriendsList((prev) => {
            return (
                prev.map(f => f.id == selectedFriendId ? { ...f, balance: newExpense } : f)
            )
        })
    }

    const handleAdd = (newfriend) => {
        console.log(newfriend);
        setfriendsList((prev)=>{
            return [...prev,newfriend]
        })
        setopenModal(false)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <FriendsData friendsList={friendsList} setSelectedFriend={setSelectedFriend} openModal={setopenModal}/>
                    </div>
                    <div className="col-6">
                        <SplittingForm selectedFriend={selectedFriend} handleSplit={handleSplit} />
                    </div>
                </div>
            </div>
            {openModal && <AddFriend friendsList={friendsList} onAdd={handleAdd}/>}
        </>
    )
}

export default Hero