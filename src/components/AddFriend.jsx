import React, { useState } from "react";

const AddFriend = ({ friendsList,onAdd }) => {
    const [friendsName, setFriendsName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newFriend = {
            id: friendsList.length + 1,
            name: friendsName,
            balance: amount,
        }
        onAdd(newFriend);

        setAmount('')
        setFriendsName('')
    }

    return (
        <>
            <div className="container-fluid bg-dark bg-opacity-50 d-flex align-items-center justify-content-center position-fixed top-0 start-0 w-100 vh-100">
                <div className="row w-100 justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
                            <h5 className="text-center mb-4">Add Friend</h5>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Enter friend's name"
                                    className="form-control"
                                    onChange={(e) => { setFriendsName(e.target.value) }}
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="number"
                                    placeholder="Enter amount he owes"
                                    className="form-control"
                                    onChange={(e) => { setAmount(e.target.value) }}
                                />
                            </div>

                            <div className="d-grid">
                                <input
                                    type="submit"
                                    value="Add Friend"
                                    className="btn btn-primary"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddFriend;
