import React, { useState, useEffect } from "react";
import axios from "axios";

const Chats = () => {
    const [ chats, setChats ] = useState([]);
    
    const fetchChats  = async() => {
        const { data } = await axios.get("/chats");
        console.log(data);
    }
    useEffect(() => {
        return () => {
            fetchChats();
        }
    }, [])
    return <div>Chats</div>;
};

export default Chats;