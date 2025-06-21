
import React, {useRef} from 'react'

function RefCounter (){
    const refCount = useRef(0);

    const handleClick = () =>{
        refCount.current += 1;
        console.log('refCount:', refCount.current)
    }

    return(
        <div>
            <button onClick={handleClick}>Click Here</button>
            <p>Ref: {refCount.current}</p>
        </div>
    )
}

export default RefCounter;