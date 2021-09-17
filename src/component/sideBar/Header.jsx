import React from 'react'
import { MdChat, MdMoreVert, MdDataUsage } from "react-icons/md";
function Header() {
    return (
        <div className="header">
            <div className="header_inner">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwF-x9cgqUj8qYRSWCnNIHubrpoeHUqrD8YSYbrPsqn-CUjxJUj2eF0HGINT9ILD4_wT0&usqp=CAU" alt="" srcset="" />
                <div className="header_inner_icon">
                    <MdDataUsage size="2rem" />
                    <MdChat size="2rem" />
                    <MdMoreVert size="2rem" />
                </div>
            </div>
        </div>
    )
}

export default Header
