import  React, { useState , useEffect } from "react";
import "./dateTime.css"

export const DateTime = () => {

    let [date, setDate] = useState(new Date());

    useEffect(() => {
      let timer = setInterval(() => setDate(new Date()), 1000 )
      return function cleanup() {
        clearInterval(timer)
      }

    });

    return(
      <div className="date-time">
        <span>{date.toLocaleDateString()}</span>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    );

}

export default DateTime;
