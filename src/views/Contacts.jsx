import { useEffect, useState } from "react";
import Contact from "../components/Contact/Contact";

export default function Contacts() {
    let [data, setData] = useState([]);

    useEffect(() => {

            fetch('/contacts.json')
                .then(res => res.json())
                .then(info => {
                    setData(info)
                });
                
    }, [])
    
    return <div>
        {data.map(item => <Contact name={ item.name } img={ item.img } text={ item.text } />)}
    </div>
}