//=======================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================
$(function () {

    // Create the chart
    $('#ZonalRevenueCollection').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
		lang: {
            numericSymbols: ['k', 'm']
    },
        title: {
            text: null,
            style: {
                color: '#a5a8ad'
            }
        },
        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Total revenue collected'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#a5a8ad'
                }
            }
        },
        xAxis: {
            type: 'category'
        },
		
		

        legend: {
            enabled: true
        },
		
		legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: '#696969',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: '#000000',
            font: '600 10px "Muli", sans-serif'
        },
    },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'black',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },
		
		 plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
//            point: {
//                events: {
//                    mouseOver: updateStackColor(0.2),
//                    mouseOut: updateStackColor(0)
//                }
//            }

        },
        series: {
            //connectNulls: true

            pointWidth: 15,
            borderWidth: 0,
            borderColor: 'white',


        },
    },
		
		 tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
//		useHTML: true,
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
            if (point.drilldown) {
				s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' +Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },

        series: [{
            //national bank collections by the months
            //Private collections
            name: 'Private',
            data: [{

                name: 'Homa Bay Town',
                y: 5,
                drilldown: 'Private-CBD',
                //color: '#e7c500' //yellow
            }, {
                name: 'Ndhiwa',
                y: 2,
                drilldown: 'Private-Kijabe',
                //color: '#e7c500' //yellow
            }, {
                name: 'Rachuonyo-North',
                y: 4,
                drilldown: 'Private-Rachuonyo-North',
                //color: '#e7c500' //yellow
            }, {

                name: 'Rachuonyo-South',
                y: 5,
                drilldown: 'Private-Rachuonyo-South',
                //color: '#e7c500' //yellow
            }, {
                name: 'Rachuonyo-East',
                y: 2,
                drilldown: 'Private-Rachuonyo-East',
                //color: '#e7c500' //yellow
            }, {
                name: 'Rangwe',
                y: 4,
                drilldown: 'Private-Rangwe',
                //color: '#e7c500' //yellow
            }, {

                name: 'Suba-North',
                y: 5,
                drilldown: 'Private-Suba-North',
                //color: '#e7c500' //yellow
            }, {
                name: 'Ngara',
                y: 12,
                drilldown: 'Private-Ngara',
                //color: '#e7c500' //yellow
            }, {
                name: 'Kalanya',
                y: 4,
                drilldown: 'Private-Kalanya',
                //color: '#e7c500' //yellow
            }, {

                name: 'Kalanya',
                y: 15,
                drilldown: 'Private-Kalanya',
                //color: '#e7c500' //yellow
            }, {
                name: 'Kanyabala',
                y: 2,
                drilldown: 'Private-Kanyabala',
                //color: '#e7c500' //yellow
            }, {
                name: 'Katuma',
                y: 4,
                drilldown: 'Private-Katuma',
                //color: '#e7c500' //yellow
            }]
            //end of Private collections
        }, {
            //Pickup collections
            name: 'Pickups',
            data: [{
                name: 'Homa Bay Town',
                y: 11,
                drilldown: 'pickup-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ndhiwa',
                y: 5,
                drilldown: 'pickup-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-North',
                y: 2,
                drilldown: 'pickup-Rachuonyo-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-South',
                y: 1,
                drilldown: 'pickup-Rachuonyo-South',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-East',
                y: 5,
                drilldown: 'pickup-Rachuonyo-East',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rangwe',
                y: 21,
                drilldown: 'pickup-Rangwe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Suba-North',
                y: 11,
                drilldown: 'pickup-Suba-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'pickup-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 2,
                drilldown: 'pickup-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 1,
                drilldown: 'pickup-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kanyabala',
                y: 5,
                drilldown: 'pickup-Kanyabala',
                //color: '#0aae8f' // blue
            }, {
                name: 'Katuma',
                y: 2,
                drilldown: 'pickup-Katuma',
                //color: '#0aae8f' // blue
            }]
            //end of Pickup collections
        }, {
            //Nissan collections
            name: 'Nissan',
            data: [{
                name: 'Homa Bay Town',
                y: 16,
                drilldown: 'nissan-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ndhiwa',
                y: 15,
                drilldown: 'nissan-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-North',
                y: 3,
                drilldown: 'nissan-Rachuonyo-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-South',
                y: 1,
                drilldown: 'nissan-Rachuonyo-South',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-East',
                y: 5,
                drilldown: 'nissan-Rachuonyo-East',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rangwe',
                y: 2,
                drilldown: 'nissan-Rangwe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Suba-North',
                y: 11,
                drilldown: 'nissan-Suba-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'nissan-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 2,
                drilldown: 'nissan-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 1,
                drilldown: 'nissan-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kanyabala',
                y: 5,
                drilldown: 'nissan-Kanyabala',
                //color: '#0aae8f' // blue
            }, {
                name: 'Katuma',
                y: 2,
                drilldown: 'nissan-Katuma',
                //color: '#0aae8f' // blue
            }]
            //end of Nissan collections
        },{
            //Canter collections
            name: 'Canter',
            data: [{
                name: 'Homa Bay Town',
                y: 11,
                drilldown: 'canter-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ndhiwa',
                y: 15,
                drilldown: 'canter-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-North',
                y: 12,
                drilldown: 'canter-Rachuonyo-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-South',
                y: 19,
                drilldown: 'canter-Rachuonyo-South',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-East',
                y: 15,
                drilldown: 'canter-Rachuonyo-East',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rangwe',
                y: 21,
                drilldown: 'canter-Rangwe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Suba-North',
                y: 11,
                drilldown: 'canter-Suba-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'canter-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 2,
                drilldown: 'canter-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 13,
                drilldown: 'canter-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kanyabala',
                y: 5,
                drilldown: 'canter-Kanyabala',
                //color: '#0aae8f' // blue
            }, {
                name: 'Katuma',
                y: 2,
                drilldown: 'canter-Katuma',
                //color: '#0aae8f' // blue
            }]
            //end of Canter collections
        },{
            //Lorry rents
            name: 'Lorry',
            data: [{
                name: 'Homa Bay Town',
                y: 1,
                drilldown: 'lorry-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ndhiwa',
                y: 15,
                drilldown: 'lorry-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-North',
                y: 2,
                drilldown: 'lorry-Rachuonyo-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-South',
                y: 1,
                drilldown: 'lorry-Rachuonyo-South',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-East',
                y: 15,
                drilldown: 'lorry-Rachuonyo-East',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rangwe',
                y: 2,
                drilldown: 'lorry-Rangwe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Suba-North',
                y: 11,
                drilldown: 'lorry-Suba-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'lorry-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 7,
                drilldown: 'lorry-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 13,
                drilldown: 'lorry-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kanyabala',
                y: 5,
                drilldown: 'lorry-Kanyabala',
                //color: '#0aae8f' // blue
            }, {
                name: 'Katuma',
                y: 2,
                drilldown: 'lorry-Katuma',
                //color: '#0aae8f' // blue
            }]
            //end of lorry collections
        },{
            //Minibus rents
            name: 'Minibus',
            data: [{
                name: 'Homa Bay Town',
                y: 1,
                drilldown: 'minibus-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ndhiwa',
                y: 15,
                drilldown: 'minibus-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-North',
                y: 2,
                drilldown: 'minibus-Rachuonyo-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-South',
                y: 1,
                drilldown: 'minibus-Rachuonyo-South',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-East',
                y: 15,
                drilldown: 'minibus-Rachuonyo-East',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rangwe',
                y: 2,
                drilldown: 'minibus-Rangwe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Suba-North',
                y: 11,
                drilldown: 'minibus-Suba-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'minibus-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 7,
                drilldown: 'minibus-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 13,
                drilldown: 'minibus-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kanyabala',
                y: 5,
                drilldown: 'minibus-Kanyabala',
                //color: '#0aae8f' // blue
            }, {
                name: 'Katuma',
                y: 2,
                drilldown: 'minibus-Katuma',
                //color: '#0aae8f' // blue
            }]
            //end of minibus collections
        },{
            //Bus rents
            name: 'Bus',
            data: [{
                name: 'Homa Bay Town',
                y: 1,
                drilldown: 'bus-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ndhiwa',
                y: 15,
                drilldown: 'bus-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-North',
                y: 2,
                drilldown: 'bus-Rachuonyo-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-South',
                y: 1,
                drilldown: 'bus-Rachuonyo-South',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-East',
                y: 15,
                drilldown: 'bus-Rachuonyo-East',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rangwe',
                y: 2,
                drilldown: 'bus-Rangwe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Suba-North',
                y: 11,
                drilldown: 'bus-Suba-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'bus-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 7,
                drilldown: 'bus-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 13,
                drilldown: 'bus-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kanyabala',
                y: 5,
                drilldown: 'bus-Kanyabala',
                //color: '#0aae8f' // blue
            }, {
                name: 'Katuma',
                y: 2,
                drilldown: 'bus-Katuma',
                //color: '#0aae8f' // blue
            }]
            //end of bus collections
        },{
            //Trailer rents
            name: 'Trailer',
            data: [{
                name: 'Homa Bay Town',
                y: 1,
                drilldown: 'trailer-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ndhiwa',
                y: 15,
                drilldown: 'trailer-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-North',
                y: 2,
                drilldown: 'trailer-Rachuonyo-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-South',
                y: 1,
                drilldown: 'trailer-Rachuonyo-South',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rachuonyo-East',
                y: 15,
                drilldown: 'trailer-Rachuonyo-East',
                //color: '#0aae8f' // blue
            }, {
                name: 'Rangwe',
                y: 2,
                drilldown: 'trailer-Rangwe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Suba-North',
                y: 11,
                drilldown: 'trailer-Suba-North',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'trailer-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 7,
                drilldown: 'trailer-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kalanya',
                y: 13,
                drilldown: 'trailer-Kalanya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kanyabala',
                y: 5,
                drilldown: 'trailer-Kanyabala',
                //color: '#0aae8f' // blue
            }, {
                name: 'Katuma',
                y: 2,
                drilldown: 'trailer-Katuma',
                //color: '#0aae8f' // blue
            }]
            //end of trailer collections
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: 'black',
                textShadow: '0 0 2px white, 0 0 2px black'
            },
            series: [
                //Private collections by months and dates
                {
                    id: 'Private-CBD',
                    name: 'Private collections in Homa Bay Town 2020',
                    data: [
                        ['1st CBD', 4],
                        ['2nd CBD', 2],
                        ['3rd CBD', 1],
                        ['4th CBD', 2],
                        ['5th CBD', 1]
                    ]
                }, {
                    id: 'Private-Kijabe',
                    name: 'Private collections in Kijabe 2020',
                    data: [
                        ['1st Kijabe', 4],
                        ['2nd Kijabe', 2]
                    ]
                }, {
                    id: 'Private-Rachuonyo-North',
                    name: 'Private collections in Rachuonyo-North 2020',
                    data: [
                        ['1st Rachuonyo-North', 4],
                        ['2nd Rachuonyo-North', 2],
                        ['3rd Rachuonyo-North', 2]
                    ]
                }, {
                    id: 'Private-Rachuonyo-South',
                    name: 'Private collections in Rachuonyo-South 2020',
                    data: [
                        ['1st Rachuonyo-South', 4],
                        ['2nd Rachuonyo-South', 2],
                        ['3rd Rachuonyo-South', 1],
                        ['4th Rachuonyo-South', 2],
                        ['5th Rachuonyo-South', 1]
                    ]
                }, {
                    id: 'Private-Rachuonyo-East',
                    name: 'Private collections in Rachuonyo-East 2020',
                    data: [
                        ['1st Rachuonyo-East', 4],
                        ['2nd Rachuonyo-East', 2]
                    ]
                }, {
                    id: 'Private-Rangwe',
                    name: 'Private collections in Rangwe 2020',
                    data: [
                        ['1st Rangwe', 4],
                        ['2nd Rangwe', 2],
                        ['3rd Rangwe', 2]
                    ]
                }, {
                    id: 'Private-Suba-North',
                    name: 'Private collections in Suba-North 2020',
                    data: [
                        ['1st Suba-North', 4],
                        ['2nd Suba-North', 2],
                        ['3rd Suba-North', 1],
                        ['4th Suba-North', 2],
                        ['5th Suba-North', 1]
                    ]
                }, {
                    id: 'Private-Ngara',
                    name: 'Private collections in Ngara 2020',
                    data: [
                        ['1st Ngara', 4],
                        ['2nd Ngara', 2]
                    ]
                }, {
                    id: 'Private-Kalanya',
                    name: 'Private collections in Kalanya 2020',
                    data: [
                        ['1st Kalanya', 4],
                        ['2nd Kalanya', 2],
                        ['3rd Kalanya', 2]
                    ]
                }, {
                    id: 'Private-Kalanya',
                    name: 'Private collections in Kalanya 2020',
                    data: [
                        ['1st Kalanya', 4],
                        ['2nd Kalanya', 2],
                        ['3rd Kalanya', 1],
                        ['4th Kalanya', 2],
                        ['5th Kalanya', 1]
                    ]
                }, {
                    id: 'Private-Kanyabala',
                    name: 'Private collections in Kanyabala 2020',
                    data: [
                        ['1st Kanyabala', 4],
                        ['2nd Kanyabala', 2]
                    ]
                }, {
                    id: 'Private-Katuma',
                    name: 'Private collections in Katuma  2020',
                    data: [
                        ['1st Katuma', 4],
                        ['2nd Katuma', 2],
                        ['3rd Katuma', 2]
                    ]
                },

                //end of Private collections by months and dates

                //start of Pickups collections by months and dates
                {
                    id: 'lr-CBD',
                    name: 'Landrates revenue collections for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'lr-Kijabe',
                    name: 'Landrates revenue collections for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'lr-Rachuonyo-North',
                    name: 'Landrates revenue collections for Rachuonyo-North 2020',
                    data: [
                        ['1st Rachuonyo-North', 2],
                        ['2nd Rachuonyo-North', 3],
                        ['3rd Rachuonyo-North', 2]
                    ]
                }, {
                    id: 'lr-Rachuonyo-South',
                    name: 'Landrates revenue collections for Rachuonyo-South 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Rachuonyo-South', 2],
                        ['2nd Rachuonyo-South', 3],
                        ['3rd Rachuonyo-South', 1],
                        ['4th Rachuonyo-South', 1],
                        ['5th Rachuonyo-South', 1]
                    ]
                }, {
                    id: 'lr-Rachuonyo-East',
                    name: 'Landrates revenue collections for Rachuonyo-East 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Rachuonyo-East', 4],
                        ['2nd Rachuonyo-East', 3]
                    ]
                }, {
                    id: 'lr-Rangwe',
                    name: 'Landrates revenue collections for Rangwe 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Rangwe', 4],
                        ['2nd Rangwe', 3],
                        ['3rd Rangwe', 3]
                    ]
                }, {
                    id: 'lr-Suba-North',
                    name: 'Landrates revenue collections for Suba-North 2020',
                    data: [
                        ['1st Suba-North', 3],
                        ['2nd Suba-North', 5],
                        ['3rd Suba-North', 6],
                        ['4th Suba-North', 2],
                        ['5th Suba-North', 2]
                    ]
                }, {
                    id: 'lr-Ngara',
                    name: 'Landrates revenue collections for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'lr-Kalanya',
                    name: 'Landrates revenue collections for Kalanya 2020',
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 2]
                    ]
                }, {
                    id: 'lr-Kalanya',
                    name: 'Landrates revenue collections for Kalanya 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 1],
                        ['4th Kalanya', 1],
                        ['5th Kalanya', 1]
                    ]
                }, {
                    id: 'lr-Kanyabala',
                    name: 'Landrates revenue collections for Kanyabala 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Kanyabala', 4],
                        ['2nd Kanyabala', 3]
                    ]
                }, {
                    id: 'lr-Katuma',
                    name: 'Landrates revenue collections for Katuma 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Katuma', 4],
                        ['2nd Katuma', 3],
                        ['3rd Katuma', 3]
                    ]
                },
				
				//start of SBP daily collections
				 {
                    id: 'sbp-Katuma',
                    name: 'SBP collections for Katuma 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Katuma', 4],
                        ['2nd Katuma', 3],
                        ['3rd Katuma', 3]
                    ]
                },{
                    id: 'sbp-CBD',
                    name: 'SBP collections for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'sbp-Kijabe',
                    name: 'SBP collections for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'sbp-Rachuonyo-North',
                    name: 'SBP collections for Rachuonyo-North 2020',
                    data: [
                        ['1st Rachuonyo-North', 2],
                        ['2nd Rachuonyo-North', 3],
                        ['3rd Rachuonyo-North', 2]
                    ]
                }, {
                    id: 'sbp-Rachuonyo-South',
                    name: 'Landrates revenue collections for Rachuonyo-South 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Rachuonyo-South', 2],
                        ['2nd Rachuonyo-South', 3],
                        ['3rd Rachuonyo-South', 1],
                        ['4th Rachuonyo-South', 1],
                        ['5th Rachuonyo-South', 1]
                    ]
                }, {
                    id: 'sbp-Rachuonyo-East',
                    name: 'SBP collections for Rachuonyo-East 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Rachuonyo-East', 4],
                        ['2nd Rachuonyo-East', 3]
                    ]
                }, {
                    id: 'sbp-Rangwe',
                    name: 'SBP collections for Rangwe 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Rangwe', 4],
                        ['2nd Rangwe', 3],
                        ['3rd Rangwe', 3]
                    ]
                }, {
                    id: 'sbp-Suba-North',
                    name: 'SBP collections for Suba-North 2020',
                    data: [
                        ['1st Suba-North', 3],
                        ['2nd Suba-North', 5],
                        ['3rd Suba-North', 6],
                        ['4th Suba-North', 2],
                        ['5th Suba-North', 2]
                    ]
                }, {
                    id: 'sbp-Ngara',
                    name: 'SBP collections for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'sbp-Kalanya',
                    name: 'SBP collections for Kalanya 2020',
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 2]
                    ]
                }, {
                    id: 'sbp-Kalanya',
                    name: 'SBP collections for Kalanya 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 1],
                        ['4th Kalanya', 1],
                        ['5th Kalanya', 1]
                    ]
                },
				{
                    id: 'sbp-Kanyabala',
                    name: 'SBP collections for Kalanya 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 1],
                        ['4th Kalanya', 1],
                        ['5th Kalanya', 1]
                    ]
                },
				//end of SBP collections
				
				//start of market fee collections
				{
                    id: 'market-CBD',
                    name: 'Market fee collections for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'market-Kijabe',
                    name: 'Market fee collections for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'market-Rachuonyo-North',
                    name: 'Market fee collections for Rachuonyo-North 2020',
                    data: [
                        ['1st Rachuonyo-North', 2],
                        ['2nd Rachuonyo-North', 3],
                        ['3rd Rachuonyo-North', 2]
                    ]
                }, {
                    id: 'market-Rachuonyo-South',
                    name: 'Market fee collections for Rachuonyo-South 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Rachuonyo-South', 2],
                        ['2nd Rachuonyo-South', 3],
                        ['3rd Rachuonyo-South', 1],
                        ['4th Rachuonyo-South', 1],
                        ['5th Rachuonyo-South', 1]
                    ]
                }, {
                    id: 'market-Rachuonyo-East',
                    name: 'Market fee collections for Rachuonyo-East 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Rachuonyo-East', 4],
                        ['2nd Rachuonyo-East', 3]
                    ]
                }, {
                    id: 'market-Rangwe',
                    name: 'Market fee collections for Rangwe 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Rangwe', 4],
                        ['2nd Rangwe', 3],
                        ['3rd Rangwe', 3]
                    ]
                }, {
                    id: 'market-Suba-North',
                    name: 'Market fee collections for Suba-North 2020',
                    data: [
                        ['1st Suba-North', 3],
                        ['2nd Suba-North', 5],
                        ['3rd Suba-North', 6],
                        ['4th Suba-North', 2],
                        ['5th Suba-North', 2]
                    ]
                }, {
                    id: 'market-Ngara',
                    name: 'Market fee collections for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'market-Kalanya',
                    name: 'Market fee collections for Kalanya 2020',
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 2]
                    ]
                }, {
                    id: 'market-Kalanya',
                    name: 'Market fee collections for Kalanya 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 1],
                        ['4th Kalanya', 1],
                        ['5th Kalanya', 1]
                    ]
                }, {
                    id: 'market-Kanyabala',
                    name: 'Market fee collections for Kanyabala 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Kanyabala', 4],
                        ['2nd Kanyabala', 3]
                    ]
                }, {
                    id: 'market-Katuma',
                    name: 'Market fee collections for Katuma 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Katuma', 4],
                        ['2nd Katuma', 3],
                        ['3rd Katuma', 3]
                    ]
                },
				
				// end of Canter
				//start of house and stall rents
				{
                    id: 'rent-CBD',
                    name: 'Lorry for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'rent-Kijabe',
                    name: 'Lorry for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'rent-Rachuonyo-North',
                    name: 'Lorry for Rachuonyo-North 2020',
                    data: [
                        ['1st Rachuonyo-North', 2],
                        ['2nd Rachuonyo-North', 3],
                        ['3rd Rachuonyo-North', 2]
                    ]
                }, {
                    id: 'rent-Rachuonyo-South',
                    name: 'Lorry for Rachuonyo-South 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Rachuonyo-South', 2],
                        ['2nd Rachuonyo-South', 3],
                        ['3rd Rachuonyo-South', 1],
                        ['4th Rachuonyo-South', 1],
                        ['5th Rachuonyo-South', 1]
                    ]
                }, {
                    id: 'rent-Rachuonyo-East',
                    name: 'Lorry for Rachuonyo-East 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Rachuonyo-East', 4],
                        ['2nd Rachuonyo-East', 3]
                    ]
                }, {
                    id: 'rent-Rangwe',
                    name: 'Lorry for Rangwe 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Rangwe', 4],
                        ['2nd Rangwe', 3],
                        ['3rd Rangwe', 3]
                    ]
                }, {
                    id: 'rent-Suba-North',
                    name: 'Lorry for Suba-North 2020',
                    data: [
                        ['1st Suba-North', 3],
                        ['2nd Suba-North', 5],
                        ['3rd Suba-North', 6],
                        ['4th Suba-North', 2],
                        ['5th Suba-North', 2]
                    ]
                }, {
                    id: 'rent-Ngara',
                    name: 'Lorry for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'rent-Kalanya',
                    name: 'Lorry for Kalanya 2020',
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 2]
                    ]
                }, {
                    id: 'rent-Kalanya',
                    name: 'Lorry for Kalanya 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kalanya', 2],
                        ['2nd Kalanya', 3],
                        ['3rd Kalanya', 1],
                        ['4th Kalanya', 1],
                        ['5th Kalanya', 1]
                    ]
                }, {
                    id: 'rent-Kanyabala',
                    name: 'Lorry for Kanyabala 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Kanyabala', 4],
                        ['2nd Kanyabala', 3]
                    ]
                }, {
                    id: 'rent-Katuma',
                    name: 'Lorry for Katuma 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Katuma', 4],
                        ['2nd Katuma', 3],
                        ['3rd Katuma', 3]
                    ]
                },
				
            ]
        }
    })
});
//========================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================



Highcharts.chart('RevenueStreams', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent'

    },
    title: {
        text: 'Collection by Revenue stream',
        style: {
            color: '#a5a8ad'
        }
    },
    xAxis: {
        categories: ['CBD', 'Kijabe', 'Rachuonyo-North', 'Rachuonyo-South', 'Rachuonyo-East', 'Rangwe', 'Suba-North', 'Ngara', 'Kalanya', 'Kalanya', 'Kanyabala', 'Katuma']
    },
    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Total revenue collected'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#a5a8ad'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },
    tooltip: {
        headerFormat: '<h3><strong class="mb-3" style="font-size: 20px !important;">{point.x}</strong></h3><br/><br/><br/>',
        /*  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}', */
        pointFormat: '<strong style="color:{series.color}; font-weight:bold;">{series.name}</strong>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/><br/>',
		footerFormat	: 
                 '<table></tbody><tr style="border-top:1px solid black 0.5px; color:white;"><th>Total: </th>'
        		+'<td style="text-align:right"><b>KES {point.total:,.0f}</b></td></tr>'
            	+'</tbody></table>',
        shared: true,
        crosshairs: true


    },

    plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
            point: {
                events: {
                    mouseOver: updateStackColor(0.2),
                    mouseOut: updateStackColor(0)
                }
            }

        },
        series: {
            //connectNulls: true

            pointWidth: 10,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
    series: [{
        name: 'Private Fees',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3]
    }, {
        name: 'Billboards and Advertisements',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2]
    }, {
        name: 'Other incomes',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Canter',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Nissan',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Pickups',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Plans and Inspections',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Fire Inspection Certificate',
        data: [2, 5, 3, 4, 3, 4, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'House and stall rents',
        data: [5, 3, 4, 3, 4, 4, 4, 2, 2, 5, 3, 4]
    }]
});
//		hover effect
function updateStackColor(alpha) {
    return function () {
        const x = this.x
        const color = Highcharts.color
        const colors = Highcharts.getOptions().colors

        this.series.chart.series.forEach((series, i) => {
            series.data.forEach(point => {
                const basePointColor = color(colors[i])

                point.update({
                    color: alpha === 0
                        ? basePointColor.get() // set original color
                        : point.x === x
                        ? basePointColor.brighten(-alpha).get() // brighten original color
                        : basePointColor.brighten(alpha).get() // dim orignal color
                }, false)
            })
        })

        this.series.chart.redraw(false)
    }
}


//		hover effect

