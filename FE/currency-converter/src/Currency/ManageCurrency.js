import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userId, currencyList } from "../redux/actions";
import AddCurrency from "./AddCurrency";
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
            })
            .catch((error) => {
                console.log("alert");
            });
            setUpdatetable(true);
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
                            <AddCurrency type="update" />
                        </div>
                    </h6>
                </div>
                <div className="col-md-5">
                    <h6 className="text-warning"><AddCurrency type="delete" /> </h6>
                </div>
            </div>

            <h4 className="mt-4 text-warning">Updated Table: </h4>
            {updateTable ? <DisplayCurrency /> : ""}

        </div>
    )
}

export default ManageCurrency;