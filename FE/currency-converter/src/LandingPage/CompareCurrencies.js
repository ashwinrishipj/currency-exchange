import React, { useState } from "react";
import { countryList } from "../Helpers/CountryList";
import { Card, Button } from "react-bootstrap";

function CompareCurrencies() {
    const [isCountrySuggestied, setisCountrySuggested] = useState(false);
    const [countrySuggestions, setcountrySuggestions] = useState([]);
    const [defaultCountryValue, setdefaultCountryValue] = useState("");
    const [toCountry, setToCountry] = useState("");

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

    return (
        <div>
            <Card className="text-center" bg="light">
                <Card.Header>Currency Converter</Card.Header>
                <Card.Body>
                    <Card.Title>Choose the To currency:</Card.Title>
                    <Card.Text>
                        <label>From</label>
                        <input autoComplete="nope" placeholder="USD" className="form-control " value={defaultCountryValue} style={{ width: "30%" }} id="myInput" value="USD" type="text" placeholder="Search Country!." className="text-center" />

                        <label>To:</label>
                        <input autoComplete="nope" onKeyDown={(e) => validateEscape(e)} className="form-control" value={defaultCountryValue} style={{ width: "30%" }} id="myInput" onChange={(e) => getCountrySuggestionList(e)} type="text" placeholder="Search Country!." className="text-center" />
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
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}
export default CompareCurrencies;