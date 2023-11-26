import { useRef } from "react"
import { useEffect } from "react"

export const useObserver = (ref, canLoad, isLouding, callback) => {
    const observer = useRef()
    useEffect(() => {
        if (isLouding) return
        if (observer.current) observer.current.disconnect()
        var cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)

    }, [isLouding])
}