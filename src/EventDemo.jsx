function EventDemo() {
    const demo=() => {
        alert("Welcome")
    }
    const printData = (event) => {
        console.log(event.target.value)
    }
    return (<>
        <input type="button" onClick={demo} value="Clickme" />
        <input type="button" onClick={() => alert("Inline")} value="Inline" />
        <input type="button" name="B1" value="B1" onClick={printData} />
        Text1<input type="text" name="TXT1" onChange={printData} />
        Text2<input type="text" name="TXT2" onChange={printData} />

    </>)
}
export default EventDemo