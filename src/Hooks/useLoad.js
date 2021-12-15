import {useState} from 'react'

const useLoad = () => {

    const [load,setLoad] = useState(true)

    function finishLoad() {setLoad(false)};
    function startLoad() {setLoad(true)}

    return {
        load,
        finishLoad,
        startLoad
    }
}

export default useLoad
