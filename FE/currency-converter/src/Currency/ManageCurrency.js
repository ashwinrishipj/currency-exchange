import React, { useState } from "react";
import { Table } from "react-bootstrap"

function ManageCurrency() {
    const [updateTable, setUpdatetable] = useState(true);

    const data =
    {
        "currencyId": 1,
        "userId": 4,
        "currencies": [
            "TOP",
            "USD",
            "EUR"
        ]
    }

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
                    {updateTable ?
                        data.currencies.map((data, index) => {
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
                        })

                        : ""}
                </tbody>
            </Table>
        </div>
    )
}

export default ManageCurrency;