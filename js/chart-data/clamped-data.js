Highcharts.chart('item_clamped_chart', {

    chart: {
        type: 'item',
        backgroundColor: 'transparent'
    },

    title: {
        text: null
    },

    subtitle: {
        text: null
    },

    accessibility: {
        announceNewData: {
          enabled: true
        }
    },

    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Number of Vehicles'
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
    legend: {
        labelFormat: '<span style="font-size:10px;">{name} <span style="font-weight:bold; font-size:10px;  color:{x.point.color}">{y}</span><span>'
    },
    plotOptions:{
        series: {
          animation: {
            duration: 2000
        },
            dataLabels:{
                enabled:true
            }
        }
    },

    series: [{
        name: 'Vehicles',
        data: [{
            name: 'Compliant',
            y: 3201,
            colors: '#64A12D',
            drilldown: "Compliant"
        },{
            name: 'To be Clamped',
            y: 2500,
            colors: '#EB001F',
            drilldown: "To be Clamped"

        },{
            name: 'Clamped',
            y: 11,
            colors: '#1666c0',
            drilldown: "Clamped"

        },{
            name: 'To Be Unclamped',
            y: 53,
            colors: '#FFED00',
            drilldown: "To Be Unclamped"

        }],
        
        // dataLabels: {
        //     enabled: true,
        //     format: '{point.label}'
        // },

        // Circular options
        center: ['50%', '88%'],
        size: '120%',
        startAngle: -100,
        endAngle: 100
    }],  
    
    drilldown: {
        series: [
          {
            type: 'column',
            name: "Compliant",
            id: "Compliant",
            data: [
              [
                "Buru",
                100 
              ],
              [
                "CBD",
                181 
              ],
              [
                "COMM",
                325 
              ],
              [
                "County Bus Station",
                41 
              ],
              [
                "Eastleigh",
                88
              ],
              [
                "HighRidge",
                56
              ],
              [
                "Hurlingham",
                45
              ],
              [
                "Ind. Area",
                49
              ],
              [
                "Karen",
                32
              ],
              [
                "Kariokor",
                29
              ],
              [
                "Kenyatta Market",
                79
              ],
              [
                "Kijabe",
                18
              ],
              [
                "Kilimani",
                13
              ],
              [
                "Kombo",
                16
              ],
              [
                "Langata Rd",
                13
              ],
              [
                "Lavington",
                11
              ],
              [
                "Muthaiga",
                17
              ],
              [
                "Nairobi West",
                26
              ]
            ]
          },
          {
            type: 'column',
            name: "To be Clamped",
            id: "To be Clamped",
            data: [
                [
                  "Buru",
                  100 
                ],
                [
                  "CBD",
                  181 
                ],
                [
                  "COMM",
                  325 
                ],
                [
                  "County Bus Station",
                  41 
                ],
                [
                  "Eastleigh",
                  88
                ],
                [
                  "HighRidge",
                  56
                ],
                [
                  "Hurlingham",
                  45
                ],
                [
                  "Ind. Area",
                  49
                ],
                [
                  "Karen",
                  32
                ],
                [
                  "Kariokor",
                  29
                ],
                [
                  "Kenyatta Market",
                  79
                ],
                [
                  "Kijabe",
                  18
                ],
                [
                  "Kilimani",
                  133
                ],
                [
                  "Kombo",
                  168
                ],
                [
                  "Langata Rd",
                  135
                ],
                [
                  "Lavington",
                  112
                ],
                [
                  "Muthaiga",
                  170
                ],
                [
                  "Nairobi West",
                  26
                ]
              ]
          },
          {
            type: 'column',
            name: "Clamped",
            id: "Clamped",
            data: [
                [
                  "Buru",
                  100 
                ],
                [
                  "CBD",
                  181 
                ],
                [
                  "COMM",
                  325 
                ],
                [
                  "County Bus Station",
                  41 
                ],
                [
                  "Eastleigh",
                  88
                ],
                [
                  "HighRidge",
                  56
                ],
                [
                  "Hurlingham",
                  45
                ],
                [
                  "Ind. Area",
                  49
                ],
                [
                  "Karen",
                  32
                ],
                [
                  "Kariokor",
                  29
                ],
                [
                  "Kenyatta Market",
                  79
                ],
                [
                  "Kijabe",
                  18
                ],
                [
                  "Kilimani",
                  40
                ],
                [
                  "Kombo",
                  388 
                ],
                [
                  "Langata Rd",
                  151 
                ],
                [
                  "Lavington",
                  435 
                ],
                [
                  "Muthaiga",
                  378 
                ],
                [
                  "Nairobi West",
                  500
                ]
              ]
          },
          {
            type: 'column',
            name: "To Be Unclamped",
            id: "To Be Unclamped",
            data: [
                [
                  "Buru",
                  100 
                ],
                [
                  "CBD",
                  181 
                ],
                [
                  "COMM",
                  325 
                ],
                [
                  "County Bus Station",
                  41 
                ],
                [
                  "Eastleigh",
                  88
                ],
                [
                  "HighRidge",
                  56
                ],
                [
                  "Hurlingham",
                  45
                ],
                [
                  "Ind. Area",
                  49
                ],
                [
                  "Karen",
                  32
                ],
                [
                  "Kariokor",
                  29
                ],
                [
                  "Kenyatta Market",
                  79
                ],
                [
                  "Kijabe",
                  18
                ],
                [
                  "Kilimani",
                  13
                ],
                [
                  "Kombo",
                  500
                ],
                [
                  "Langata Rd",
                  401 
                ],
                [
                  "Lavington",
                  223 
                ],
                [
                  "Muthaiga",
                  196 
                ],
                [
                  "Nairobi West",
                  469 
                ]
              ]
          }
        ]
    }
});
