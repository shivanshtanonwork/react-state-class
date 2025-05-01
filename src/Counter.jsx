import { useState } from "react"

function randNo() {
    console.log("randNo executed");
    return Math.random();
}

export default function Counter() {
    let [count, setCount] = useState(randNo);
    console.log("component was re-rendered")

    let incCount = () => {
        // setCount(count + 1) 
        // setCount(25)
        setCount((currCount) => {
            return currCount + 1;
        })
        // setCount((currCount) => {
        //     return currCount + 1;
        // })
        // setCount((currCount) => {
        //     return currCount + 1;
        // })
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}