export default function Form() {
    const [firstName, setFirstName] = useState("Antonio");
    const [lastName, setLastName] = useState("Neto");
    function handleFirstNameChange(event){
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event){
        setLastName(event.target.value)
    }
     return(
        <>
        <label>
            First name:
            <input value={firstName} onChange={handleFirstNameChange}></input>
        </label>

        <label>
            Last name:
            <input value={lastName} onChange={handleLastNameChange}></input>
        </label>
        <p><b>Bom dia, {firstName}{lastName}.</b></p>
        </>
    )
}