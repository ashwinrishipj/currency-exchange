const userId = (state = "0", action) => {
    if (action.type === "USERID") {
        return action.payload;
    } else {
        return state;
    }
}

export default userId;
