import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    const fetching = async (...args) => {
        setTimeout(async () => {
            try {
                await callback(...args)
                await setIsLoading(false)
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false)
            }
        }, 2000)
    }

    return [fetching, isLoading, error]
}