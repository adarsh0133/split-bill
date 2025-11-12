import React, { useEffect, useState } from 'react'

const SplittingForm = ({ selectedFriend,handleSplit }) => {
    const [totalExpense, setTotalExpense] = useState('');
    const [yourExpense, setYourExpense] = useState('');
    const [whoPaid, setwhoPaid] = useState('');
    const [friendExpense, setfriendExpense] = useState('')
    // setfriendExpense(friendexpense);
    useEffect(()=>{
        if(totalExpense && yourExpense){
            let friendexpense = totalExpense - yourExpense;
            setfriendExpense(friendexpense);
        }
    },[totalExpense,yourExpense]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedFriend) {
            alert("Please select a friend first");
            return;
        }

        let result = '';
        let newExpense = selectedFriend.balance;
        console.log(newExpense)

        if (whoPaid == 'you') {
            result = `${selectedFriend.name} owes you ${friendExpense}rs.`
            newExpense += friendExpense;
        }
        else if (whoPaid == 'friend') {
            result = `you owe ${selectedFriend.name} ${ friendExpense}rs.`
            newExpense -= yourExpense;
        } else {
            result = `You both are settled!`
        }

        handleSplit(selectedFriend.id,newExpense)
        setTotalExpense('')
        setwhoPaid('')
        setYourExpense('')
        setfriendExpense('')
        alert(result);
    }
    return (
        <>
            <div className="container-fluid p-4">
                <fieldset className="border p-4 rounded">
                    <legend className="float-none w-auto px-3 text-primary fw-bold">
                        {selectedFriend ? `Splitting Bill with ${selectedFriend.name}` : 'Select a Friend'}
                    </legend>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Total Expense"
                            className="form-control mb-2"
                            value={totalExpense}
                            onChange={(e) => { setTotalExpense(e.target.value) }}
                        />
                        <input
                            type="text"
                            placeholder="Your Expense"
                            className="form-control mb-2"
                            value={yourExpense}
                            onChange={(e) => { setYourExpense(e.target.value) }}
                        />
                        <input
                            type="text"
                            placeholder="Your Friend's Expense"
                            className="form-control mb-2"
                            value={friendExpense}
                            onChange={(e)=>{setfriendExpense(e.target.value)}}
                        />
                        <label className="form-label mt-2">Who Paid the Bill:</label>
                        <select className="form-select mb-2" value={whoPaid}
                            onChange={(e) => { setwhoPaid(e.target.value) }}
                        >
                            <option value="">Select Option</option>
                            <option value="you">You</option>
                            <option value="friend">{selectedFriend ? selectedFriend.name : "Friend's name"}</option>
                        </select>
                        <input
                            type="submit"
                            value="Split Bill"
                            className="btn btn-primary"
                        />
                    </form>
                </fieldset>
            </div>

        </>
    )
}

export default SplittingForm