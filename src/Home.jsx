// function Home() {
//     return (
//         <div>
//             <h1>Welcome to Home Page</h1>
//         </div>
//     );
// }
// export default Home;



// import './Hello.css';
import wp from './python.png'
function Home() {
    var a = 10
    var b = 20
    var mycolor = { color: 'white', backgroundColor: 'black' }
    return (<>
        <h1> Home </h1>
        A value is {a} <br />
        B value is {b}
        <p style={{ color: 'yellow', backgroundColor: 'red' }}>Hello I am P Tag</p>
        <p style={mycolor}> I am P again</p>
        <img src={wp} />

    </>)
}
export default Home


