import { useEffect, useState } from "react"

function SaveButton() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{
        function handleOnline(){
            setIsOnline(true);
        }

        function handleOffline(){
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offine', handleOffline);
        }
    }, [])

    function handleSaveClick(){
        console.log("Save Clicked!")
    }
    return (
        <>
        <button disabled={!isOnline} onclick={handleSaveClick}>
            { isOnline ? "Save progress" : "Reconnecting..."}
        </button>
        </>
    )
}


export default SaveButton
