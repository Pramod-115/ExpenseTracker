import Input from "./input";
import Output from "./Output";
import '../index.css'

const App = () => {
    return (
        <div className="container">
            <div className="title text-center">
                <h1>Expense Tracker App</h1>
                <p>built using <strong className="text-info">Redux</strong></p>
            </div>
            <div className="row">
                <div className="col col-md-6 input"><Input/></div>
                <div className="col col-md-6 output"><Output/></div>
            </div>
        </div>
    )
}

export default App;