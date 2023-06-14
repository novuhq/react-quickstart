import React, { useState } from 'react'
import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell,
    useNotifications
} from '@novu/notification-center';
import axios from 'axios';


function CustomNotificationCenter() {
    const { notifications, fetchNextPage, hasNextPage, isLoading, isFetching } = useNotifications();
    // console.log('new test.......',notifications);
    return (
      <ul>
        {notifications?.map((notification,index) => {
          return <li key={index}>{notification?.payload?.description}</li>;
        })}
        {/* <div>hello</div> */}
      </ul>
    );
  }

function Header() {
    const [description, setDescription] = useState('')
    function onNotificationClick(message) {
        // your logic to handle the notification click
        if (message?.cta?.data?.url) {
            window.location.href = message.cta.data.url;
        }
    }
    const onClickHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/sendNotif/create', { description })
        setDescription('')
        // console.log(response);
    }
    return (
        <>
            <NovuProvider subscriberId={'789'} applicationIdentifier={'SWMw97ec1ZNA'} initialFetchingStrategy={{
                fetchNotifications: true,
                fetchUserPreferences: true,
            }}>
                <CustomNotificationCenter />
                {/* <PopoverNotificationCenter onNotificationClick=function{onNotificationClick} listItem={(notification) => (
                   
                    <div>
                        {notification?.payload?.description}
                    </div>
                )}>
                    {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
                </PopoverNotificationCenter> */}
                
            </NovuProvider >

            <form onSubmit={onClickHandler}>
                <input placeholder='Enter notification text' value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type='submit' >Send</button>
            </form>
        </>
    );
}

export default Header