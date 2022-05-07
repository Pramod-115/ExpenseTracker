import { bindActionCreators } from "redux";
import { actionCreator } from "./actions";
import { useDispatch } from "react-redux";


const Input = () => {

    const dispatch = useDispatch();
    const actionC = bindActionCreators(actionCreator, dispatch);

    const onFormSumbit = (e) => {
        e.preventDefault();
        const data = {
            type: e.target[0].value,
            amount:parseInt(e.target[1].value),
            des: e.target[2].value
            // type: "e.target[0].value",
            // payload: {
            // }
        }
        actionC(data);
        
    }

    return (
        <div>
            <h2 className="mb-5">Input Your Income or Expense</h2>
            <form onSubmit={onFormSumbit}>
                <div>
                    <label htmlFor="cato">Choose a Category</label>
                    <select name="type" id="cato">
                        <option value="INCOME">Income</option>
                        <option value="EXPENSE">Expense</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="amt">Enter The Amonut in $</label>
                    <input id="amt" type="number" required></input>
                </div>
                <div>
                    <label htmlFor="des">Describe the Transaction</label>
                    <input id="des" type="text" required></input>
                </div>
                <button type="sumbit">Sumbit</button>
            </form>
            
        </div>
    )
}

export default Input;