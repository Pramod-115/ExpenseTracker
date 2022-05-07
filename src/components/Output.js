import { useSelector } from "react-redux";


const Output = () => {

    const {balance, record} = useSelector((state) => { return state})
    const listdata = record.map((item) =>{
        console.log(item);
        return (
            <div key={`${item.des + item.amont}`} className={`item row ${item.type==="INCOME" ? "income" : "expense"}`}>

                <div className="col-3 type">
                    {`${item.type==="INCOME" ? "Income" : "Expense"}`}
                </div>
                <div className="col-6 des">
                    {item.des}
                </div>
                <div className="col-3 amt">
                   $ {item.amount}
                </div>
            </div>
        )
    })

    return(
        <div>
            {/* <h2 className="mb-5">Your Current Balance and History</h2> */}
            <h3 className="balanceHead">Current Balance: $ <span className="balance">{balance}</span></h3>
            {listdata}
        </div>
    )
}

export default Output;