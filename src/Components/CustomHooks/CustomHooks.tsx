import {useState} from "react";


export const CustomHooksInput = (): [string, (value: string) => void, string] => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const changeSetName = (value: string) => {
        if (value.length > 10) {
            setError('So bad!')
        } else setName(value)
    }
    return [name, changeSetName, error]
}