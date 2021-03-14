import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Bar,
    data: function () {
      return {
          datacollection: {
              labels: [],
              datasets: [{
                  label: "Quantity Ordered",
                  backgroundColor:["#FDB5AF", "#FFA8A9","#FB97AA","#D58792","#AE7779","#9E5960" ],
                  data: []
                }]
          },
          options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Total orders for each dish'
              },
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 1
                    }
                }]
            }
          }
      }
    },
    methods: {
      fetchItems: function () {
        database.collection('orders').get().then(querySnapShot => {
            let item = {}
          querySnapShot.forEach(doc => { 
              const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {})
              item = sortObject(doc.data())
              
              if (this.datacollection.labels.length == 0){
                this.datacollection.labels=Object.keys(item)
              }
              
              if (this.datacollection.datasets[0].data.length == 0){
                this.datacollection.datasets[0].data=Object.values(item)
              } else {
                for (let i = 0; i <this.datacollection.datasets[0].data.length; i++) {
                    this.datacollection.datasets[0].data[i] += Object.values(item)[i]
                }
              }
          })
          this.renderChart(this.datacollection, this.options)
        })
      }
    },
    created () {
      this.fetchItems()
    }
  }