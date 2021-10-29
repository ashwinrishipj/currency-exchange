import React from "react";
import { Line, Pie } from "react-chartjs-2"

// DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
// Date date = new Date();
// System.out.println(dateFormat.format(date));
// var fortnightAway = new Date(+new Date - 12096e5);

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

function Charts() {
    return (
        <div>
            <div className="text-center">
                <h2>Charts </h2>
                <p>Update the currency list to see more values in the chart</p>
            </div>
            <Line data={data} options={options} />
            <Pie data={pieData} />
        </div>
    )
}

export default Charts;