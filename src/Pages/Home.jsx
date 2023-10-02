import {Link} from "react-router-dom"

const Home =() =>{
    return (
    <div><span>Home page</span>
    <br />
    <Link to="/starred">go to the starred page</Link>
    </div>
)}

export default Home;