import { useState } from "react"

const useCustomHook = (defaultValue) => {
    const [status, setStatus] = useState(defaultValue)
    const toggle = (val) => {
        setStatus(val)
    }
    return ([status, toggle])
}



export default useCustomHook