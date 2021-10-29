import React, { useState, useEffect } from "react";
import { countryList } from "../Helpers/CountryList";
import { Button, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userId, currencyList } from "../redux/actions";
import DisplayCurrency from "./DisplayCurrency";
import NegativeAlert from "../Alerts/NegativeAlert";
import "./currency.css";

function AddCurrency(props) {
    const [isCountrySuggestied, setisCountrySuggested] = useState(false);
    const [countrySuggestions, setcountrySuggestions] = useState([]);
    const [defaultCountryValue, setdefaultCountryValue] = useState("");
    const [toCountry, setToCountry] = useState("");
    const [updated, setUpdated] = useState(false);
    const [alert, setAlert] = useState(false);
    const typeOfOperation = props;
    var currency;

    const user = useSelector((state) => state.userId);
    const currenciesList = useSelector((state) => state.currencyList);
    const dispatch = useDispatch();

    const requestOptions = {
        method: "GET",
    };

    const fetchData = async => {
        fetch(`http://localhost:8080/get/${user}`, requestOptions)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(currencyList(JSON.stringify(data.currencies)));
                setUpdated(true);
            })
            .catch((error) => {
                console.log("alert");
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    const getCountrySuggestionList = (e) => {
        var countries = Object.keys(countryList);
        var countrySuggestionsList = countries.filter(countrySuggestion => {
            return countrySuggestion.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setcountrySuggestions(countrySuggestionsList);
        setisCountrySuggested(true);
        setdefaultCountryValue(e.target.value);
    }

    const validateEscape = (e) => {
        if (e.keyCode === 27) {
            setisCountrySuggested(false);
        }
    }

    const selectedCountry = (data) => {
        setAlert(false);
        setisCountrySuggested(false);
        setToCountry(data);
        setdefaultCountryValue(data);
    }

    const insert = () => {
        currency = Array.from(currency);
        const body = JSON.stringify({
            "userId": parseFloat(user),
            "currencies": currency
        })

        console.log("body:" + body);
        let request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body
        };

        fetch(`http://localhost:8080/update/`, request)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(currencyList(JSON.stringify(data.currencies)));
                setUpdated(true);
            })
            .catch((error) => {
                alert(error);
            });
    }

    const addCurrency = () => {
        currency = JSON.parse(currenciesList);

        if (currency.indexOf(toCountry) === -1 && toCountry !== "" || null || undefined) {
            setUpdated(false);
            currency.push(toCountry)
            console.log("currencies:" + currency);
            insert();
        } else { setAlert(true) };
    }

    return (
        <div>
            <div className="text-center">
                <h4 className="mb-4 text-warning"> Add currency  </h4>

                <div className="alert-style">
                    {alert ? <NegativeAlert content={"cannot add duplicate items or empty items"} /> : ""}
                </div>
                <button type="button" className="btn btn-sm btn-warning mb-1 " data-bs-toggle="tooltip" data-bs-placement="top" title="Press Escape to clear list">
                    note
                </button>

                <input autoComplete="nope" onKeyDown={(e) => validateEscape(e)} className="form-control" value={defaultCountryValue} style={{ width: "30%" }} id="myInput" onChange={(e) => getCountrySuggestionList(e)} type="text" placeholder="Search Country!." className="text-align-center" />
                <ul className="list-group scroll-auto home-list" id="myList">
                    {isCountrySuggestied ?
                        <>
                            {countrySuggestions.map((data, key) => {
                                return (
                                    <li key={key} href="return false" style={{ cursor: "pointer" }} onClick={() => selectedCountry(data)} className="list-group-item">{data}</li>
                                )
                            })}
                        </> : ""}
                </ul>

                <Button className="mt-4 btn btn-sm" onClick={() => addCurrency()}>Add Currency </Button>

                <h4 className="mt-4 mt-4 text-warning">User Table </h4>
                {updated ? <DisplayCurrency /> : ""}
            </div>
        </div>
    )
}

export default AddCurrency;