const currencyList = (state = [], action) => {
    if (action.type === "CURRENCYLIST") {
        return action.payload;
    } else {
        return state;
    }
}

export default currencyList;
