import React, { useState, useEffect } from "react";
import { countryList } from "../Helpers/CountryList";
import { Button, Modal } from "react-bootstrap";
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
    const [Alert, setAlert] = useState("");
    const [inputPosition, setInputPosition] = useState();
    const typeOfCurrencyUpdate = props.type;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = useSelector((state) => state.userId);
    var currenciesList = useSelector((state) => state.currencyList);
    const dispatch = useDispatch();
    var currency, countries, parsedCurrenciesList;

    const requestOptions = {
        method: "GET",
    };

    const modal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Table Updated Successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

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
                console.log("Alert");
            });
    }


    useEffect(() => {
        fetchData();
    }, [])

    const getCountrySuggestionList = (e) => {
        setAlert("");
        countries = Object.keys(countryList);
        var countrySuggestionsList = countries.filter(countrySuggestion => {
            return countrySuggestion.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setcountrySuggestions(countrySuggestionsList);
        setisCountrySuggested(true);
        setdefaultCountryValue(e.target.value);
    }

    const validateEscape = (e) => {
        setAlert("");
        if (e.keyCode === 27) {
            setisCountrySuggested(false);
        }
    }

    const selectedCountry = (data) => {
        setAlert("");
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
                setShow(true);
            })
            .catch((error) => {
                Alert(error);
            });
    }

    const inputNumber = (e) => {
        e.preventDefault();
        setInputPosition(e.target.value)
    }

    const addCurrency = () => {
        currency = JSON.parse(currenciesList);

        if (typeOfCurrencyUpdate == "update") {

            if (inputPosition > 0 && (currency.indexOf(toCountry) === -1)) {
                currency[inputPosition - 1] = toCountry;
                insert();
            } else {
                setAlert("The number must be > 0 and duplicate courrency not allowed");
            }
        } else if (typeOfCurrencyUpdate == "delete") {
            if (inputPosition > 0) {
                currency.splice(inputPosition-1, 1);
                insert();
            } else {
                setAlert("The number must be > 0");
            }
        } else {
            if (currency.indexOf(toCountry) === -1) {
                setUpdated(false);
                currency.push(toCountry)
                console.log("currencies:" + currency);
                insert();
            } else { setAlert("cannot Add duplicate Items") };
        }
    }

    return (
        <div>
            {modal()}
            <div className="text-center">
                <h4 className="mb-4 text-warning"> {typeOfCurrencyUpdate} currency  </h4>

                <div className="Alert-style">
                    {Alert.length > 0 ? <NegativeAlert content={"cannot add duplicate items or empty items"} /> : ""}
                </div>
                {typeOfCurrencyUpdate !== "add" ?
                    <input type="number" onChange={(e) => inputNumber(e)} placeholder="enter the position to modify" />

                    : <button type="button" className="btn btn-sm btn-warning mb-1 " data-bs-toggle="tooltip" data-bs-placement="top" title="Press Escape to clear list">
                        note
                    </button>}

                {typeOfCurrencyUpdate !== "delete" ? <>
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
                </> : " "}
               
                    <Button className="btn btn-sm" onClick={() => addCurrency()}>{typeOfCurrencyUpdate} Currency </Button>
              
                {typeOfCurrencyUpdate === "add" ? <>
                    <h4 className="text-success mt-4">Table: </h4>
                    {updated ? <DisplayCurrency /> : ""}
                </> : ""}

            </div>
        </div>
    )
}

export default AddCurrency;