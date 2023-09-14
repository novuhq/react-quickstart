import React, { useState } from 'react'
import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell
} from '@novu/notification-center';
import axios from 'axios';
import './header.css'

function Header() {
    const [description, setDescription] = useState('')
    const onClickHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/sendNotif/create', { description })
        setDescription('')
    }
    // console.log(process.env.REACT_APP_SUB_ID, '....', process.env.REACT_APP_APP_ID);
    return (
        <>
            <div className='bell'>
                <NovuProvider
                    subscriberId={process.env.REACT_APP_SUB_ID}
                    applicationIdentifier={process.env.REACT_APP_APP_ID}
                >
                    <PopoverNotificationCenter >
                        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
                    </PopoverNotificationCenter>
                </NovuProvider>
            </div>

            <form onSubmit={onClickHandler}>
                <input placeholder='Enter notification text' value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type='submit' >Send</button>
            </form>
        </>
    );
}

export default Header