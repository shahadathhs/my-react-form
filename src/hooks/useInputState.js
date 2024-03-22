import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    // Type-1
    // const handleChange = (event) =>{
    //     setValue(event.target.value);
    // }
    // return [value, handleChange];

    // Type-2
    const onChange = (event) =>{
      setValue(event.target.value);
    }
    return {
        value, 
        onChange
    }
}

export default useInputState;