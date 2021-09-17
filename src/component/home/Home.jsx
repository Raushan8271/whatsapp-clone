import React from 'react'
import Chat from '../chat/Chat'
import Sidebar from '../sideBar/Sidebar'

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Home
