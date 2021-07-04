import {useState, useEffect} from "react";
import {useCallback} from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchFiles = useCallback(async (controller) => {
        try {
            const response = await fetch(url, {signal: controller.signal});
            const json = await response.json();
            setData(json);
            setLoading(false)
        } catch (e) {
            setLoading(true)
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        const controller = new AbortController()
        fetchFiles(controller).then(() => {
            setLoading(false)
        })
        return () => controller.abort()

    }, [fetchFiles]);


    return [data, loading];
}

export {useFetch};