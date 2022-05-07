

export const actionCreator = (details) => {
    console.log(details)
    return ({
        type: details.type,
        payload: {
            amount: details.amount,
            des: details.des
        }
    })
}

