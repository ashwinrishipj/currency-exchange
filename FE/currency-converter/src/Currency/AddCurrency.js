import React, { useState, useEffect } from "react";
import { countryList } from "../Helpers/CountryList";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userId, currencyList } from "../redux/actions";
import DisplayCurrency from "./DisplayCurrency";

function AddCurrency() {
    const [isCountrySuggestied, setisCountrySuggested] = useState(false);
    const [countrySuggestions, setcountrySuggestions] = useState([]);
    const [defaultCountryValue, setdefaultCountryValue] = useState("");
    const [toCountry, setToCountry] = useState("");

    const user = useSelector((state) => state.userId);
    const currenciesList = useSelector((state) => state.currencyList);
    const dispatch = useDispatch();

    const requestOptions = {
        method: "GET",
    };

    useEffect(() => {
        const fetchData = async => {
            fetch(`http://localhost:8080/get/${user}`, requestOptions)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(currencyList(data.currencies));
                })
                .catch((error) => {
                    console.log("alert");
                });
        }

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
        setisCountrySuggested(false);
        setToCountry(data);
        setdefaultCountryValue(data);
    }

    const addCurrency = () => {
        const currencies = currenciesList;
        currencies.push(toCountry);

        console.log("currencies:" + currencies);
        const body = {
            "userId": `${user}`,
            "currencies": JSON.stringify[`${currencies}`]
        }

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
                dispatch(currencyList(data.currencies));
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <div>
            <div className="text-center">
                <h2 className="mb-4"> Add currency </h2>
                <button type="button" className="btn btn-sm btn-warning mr-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Press Escape to clear list">
                    note
                </button>
                <input className="ml-4" autoComplete="nope" onKeyDown={(e) => validateEscape(e)} className="form-control" value={defaultCountryValue} style={{ width: "30%" }} id="myInput" onChange={(e) => getCountrySuggestionList(e)} type="text" placeholder="Search Country!." className="text-align-center" />
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
                <Button className="mt-4" onClick={() => addCurrency()}>Add Currency </Button>

                <h2>Table </h2>
                <DisplayCurrency />
            </div>
        </div>
    )
}

export default AddCurrency;