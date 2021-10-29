import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userId, currencyList } from "../redux/actions";
import DisplayCurrency from "./DisplayCurrency";

function ManageCurrency() {
    const [updateTable, setUpdatetable] = useState(false);

    const user = useSelector((state) => state.userId);
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
                setUpdatetable(true);
            })
            .catch((error) => {
                console.log("alert");
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="text-center container">
            <div className="row">
                <div className="col-md-5">
                    <h6 className="text-warning">
                        <div class="mycontent-left">
                            update Currency
                        </div>
                    </h6>
                </div>
                <div className="col-md-5">
                    <h6 className="text-warning">delete Currency </h6>
                </div>
            </div>

            <h6 className="text-warning">Updated Table: </h6>
            {updateTable ? <DisplayCurrency /> : ""}

        </div>
    )
}

export default ManageCurrency;