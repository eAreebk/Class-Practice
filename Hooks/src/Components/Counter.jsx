
import React, {useRef, useState} from 'react'

function Counter (){
    let  varCount = 0;
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    

    const handleClick = () =>{
        varCount += 1;
        setStateCount(stateCount + 1 );
        refCount.current += 1;

        console.log('varCount:', varCount)
        console.log('stateCount:', stateCount)
        console.log('refCount:', refCount.current)
    }

    return(
        <div>
            <button onClick={handleClick}>Click Here</button>
            <p>varCount: {varCount}</p>
            <p>stateCount: {stateCount}</p>
            <p>Ref: {refCount.current}</p>
        </div>
    )
}

export default Counter;