import React,{useEffect} from 'react';
import Highcharts from 'highcharts';
import {useSelector} from 'react-redux';
// import HighchartsReact from 'highcharts-react-official';

const Graph = () => {
	const adminData = useSelector(state => state.admin)
	console.log(adminData);


	const amount = adminData?.adminData
	console.log(amount);


	let lableName = Object.keys(amount?.amount);
	let lableData = Object.values(amount?.amount);

	console.log("Keys Array:",lableData);
	console.log("Values Array:",lableName);
	

useEffect(() => {
    const options = {
        chart: {
            type: 'column',
            backgroundColor: '#030303' // Background color
        },
        title: {
            text: '',
            style: {
                color: '#FFFFFF' // Title text color
            }
        },
        xAxis: {
            categories: lableName,
            title: {
                text: 'Categories',
                style: {
                    color: '#FFFFFF' // X-axis title color
                }
            },
            labels: {
                style: {
                    color: '#FFFFFF' // X-axis labels color
                }
            },
            lineColor: '#FFFFFF', // X-axis line color
            startOnTick: true // Ensure X-axis starts from 0
        },
        yAxis: {
            title: {
                text: 'Data',
                style: {
                    color: '#FFFFFF' // Y-axis title color
                }
            },
            labels: {
                style: {
                    color: '#FFFFFF' // Y-axis labels color
                }
            },
            gridLineColor: 'transparent', // Transparent grid lines
            minorGridLineColor: 'transparent' // Transparent minor grid lines
        },
        plotOptions: {
            column: {
                color: '#F0C3F1', // Bar color
                borderWidth: 0.5 // Border width of the bars
            }
        },
        series: [{
            name: 'Data',
            data: lableData
        }]
    };

    // Render the chart
    Highcharts.chart('container', options);
}, [lableData]); // Empty dependency array to ensure useEffect runs only once

	return (
		<div id="container">

		</div>
	);
};

export default Graph;
