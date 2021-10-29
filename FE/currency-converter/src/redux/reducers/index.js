import toggleSideBar from "./toggleSideBar";
import currentPage from "./currentPage";
import formRoute from "./formRoute";
import pageRoute from "./pageRoute";
import userId from "./userId";
import currencyList from "./currencyList";
import { combineReducers } from "redux";

const storeReducers = combineReducers({
    toggleSideBar,
    currentPage,
    pageRoute,
    formRoute,
    userId,
    currencyList
});

export default storeReducers;
