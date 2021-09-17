import React from 'react'
import ChatPerson from './ChatPerson'
import Header from './Header'

function Sidebar() {
    return (
        <div className="sideBar">
            <Header />
            <ChatPerson/>
        </div>
    )
}

export default Sidebar
