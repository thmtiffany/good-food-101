import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [],
                label: "west",
                borderColor:"#2D7DD2",
                fill: false
            },{ 
                data: [],
                label: "national",
                borderColor:"#97CC04",
                fill: false
            },{ 
                data: [],
                label: "east",
                borderColor:"#EEB902",
                fill: false
            },{ 
                data: [],
                label: "central",
                borderColor:"#F45D01",
                fill: false
            },{ 
                data: [],
                label: "south",
                borderColor:"#D62839",
                fill: false
            },{ 
                data: [],
                label: "north",
                borderColor:"#0A0903",
                fill: false
            }]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            response.data.items.forEach(data =>{
                this.datacollection.labels.push(data["timestamp"])

                let psi = data.readings['psi_twenty_four_hourly']
                this.datacollection.datasets[0].data.push(psi.west)
                this.datacollection.datasets[1].data.push(psi.national)
                this.datacollection.datasets[2].data.push(psi.east)
                this.datacollection.datasets[3].data.push(psi.central)
                this.datacollection.datasets[4].data.push(psi.south)
                this.datacollection.datasets[5].data.push(psi.north)
            })
            
            
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}