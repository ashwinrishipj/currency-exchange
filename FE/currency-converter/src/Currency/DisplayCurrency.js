import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { currencyList } from "../redux/actions";

function DisplayCurrency() {

    const data = useSelector((state) => state.currencyList);

    return (
        <div>
            <Table style={{ backgroundColor: "whitesmoke" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Currencies</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => {
                        return (
                            <tr index={index}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {data}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DisplayCurrency;