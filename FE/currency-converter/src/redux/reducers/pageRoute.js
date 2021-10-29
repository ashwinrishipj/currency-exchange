const pageRoute = (state = "login", action) => {
    if (action.type === 'PAGEROUTE') {
        if (action.payload === "logout") {
            alert("logout clicked:");
            localStorage.clear();
            return "login";
        } else {
            return action.payload;
        }
    } else {
        return state;
    }
}

export default pageRoute;