import React, { useState } from "react";
import { countryList } from "../Helpers/CountryList";
import { Card, Button, Modal } from "react-bootstrap";

function CompareCurrencies() {
    const [isCountrySuggestied, setisCountrySuggested] = useState(false);
    const [countrySuggestions, setcountrySuggestions] = useState([]);
    const [defaultCountryValue, setdefaultCountryValue] = useState("");
    const [buttonDisabled, setbuttonDisabled] = useState(true);
    const [toCountry, setToCountry] = useState("");
    const [show, setShow] = useState(false);
    const [data, setdata] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getCountrySuggestionList = (e) => {
        var countries = Object.keys(countryList);

        var countrySuggestionsList = countries.filter((countrySuggestion) => {
            return countrySuggestion
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
        });

        setcountrySuggestions(countrySuggestionsList);
        setisCountrySuggested(true);
        setdefaultCountryValue(e.target.value);
    };

    const validateEscape = (e) => {
        if (e.keyCode === 27) {
            setisCountrySuggested(false);
        }
    };

    const selectedCountry = (data) => {
        setisCountrySuggested(false);
        setToCountry(data);
        setdefaultCountryValue(data);
        setbuttonDisabled(false);
    };

    const fetchResult = () => {

        const requestOptions = {
            method: "GET",
            headers: {
                "Accept": "*/*",
            }
        };

        fetch(
            `http://api.exchangeratesapi.io/v1/latest?access_key=40abccb463f63d69919c8c0acdb2c430&symbols=${toCountry}&format=1`, requestOptions)
            .then((response) => response.json())
            .then(result => {
                if (result.success) {
                    setdata(JSON.stringify(result.rates));
                    setShow(true);
                } else {
                    alert('api error');
                }
            })
            .catch((error) => console.log(error));
    };

    const modal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>1 EUR EQUALS TO  {data}!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <div>
            {modal()}
            <Card className="text-center" bg="dark">
                <Card.Header className="text-warning">Currency Converter</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <label>From</label>
                        <input
                            autoComplete="nope"
                            placeholder="EUR"
                            className="form-control "
                            value="CAD"
                            style={{ width: "30%" }}
                            id="myInput"
                            value="EUR"
                            type="text"
                            placeholder="Search Country!."
                            className="text-center"
                        />

                        <label>To:</label>
                        <input
                            autoComplete="nope"
                            onKeyDown={(e) => validateEscape(e)}
                            className="form-control"
                            value={defaultCountryValue}
                            style={{ width: "30%" }}
                            id="myInput"
                            onChange={(e) => getCountrySuggestionList(e)}
                            type="text"
                            placeholder="Search Country!."
                            className="text-center"
                        />
                        <ul className="list-group scroll-auto home-list" id="myList">
                            {isCountrySuggestied ? (
                                <>
                                    {countrySuggestions.map((data, key) => {
                                        return (
                                            <li
                                                key={key}
                                                href="return false"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => selectedCountry(data)}
                                                className="list-group-item"
                                            >
                                                {data}
                                            </li>
                                        );
                                    })}
                                </>
                            ) : (
                                ""
                            )}
                        </ul>
                    </Card.Text>
                    <Button
                        disabled={buttonDisabled}
                        onClick={() => fetchResult()}
                        variant="primary"
                    >
                        Get Rates
                    </Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
}
export default CompareCurrencies;
