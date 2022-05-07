import {combineReducers} from 'redux';

const balanceReducer = (balance = 1488 ,action) => {
    if (action.type === 'INCOME')
    {
        return (balance + action.payload.amount);
    }
    else if (action.type === 'EXPENSE')
    {
        return (balance - action.payload.amount);
    }
    return (
        balance
    )
}

const recordReducer = (record = [{type: "INCOME",amount: 1500, des:"Opening Balance"},{type: "EXPENSE",amount: 12, des:"Ate Dinner"}], action) => {
    if (action.type === "INCOME" || action.type === "EXPENSE") {
        const t = {
            type: action.type,
            amount: action.payload.amount,
            des: action.payload.des
        };
        console.log(typeof(action));
        return (
            [...record, t]
        )
    }

    return record
}

const reducers = combineReducers ({
    balance: balanceReducer,
    record: recordReducer
})

export default reducers;