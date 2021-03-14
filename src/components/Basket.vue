<template> 
<div>
    <h2> Menu </h2>
    <ul>  
        <li v-for="item in this.itemsSelected" v-bind:key="item[0]">
            {{item[0]}} x {{item[1]}}
        </li>
    </ul>  
    <button v-on:click="findTotal() + sendOrder()">Add Order</button>
    <!-- <p v-show="show">
        Subtotal: ${{totalPrice}} <br>
        Grand Total: ${{grandTotal}} 
        {{order}}
    </p> -->
</div>               
</template>

<script>
import database from "../firebase.js"
export default {
    data() {
        return {
            totalPrice: 0,
            show: false,
        }
    },
    props: {
        itemsSelected: {
            type: Array
        },
        itemsList: {
            type: Array
        }
    },
    methods: {
        findTotal: function(){
            this.show=true;
            this.totalPrice = 0;
            for (let i = 0; i < this.itemsSelected.length; i++) {
                const curr_item = this.itemsSelected[i];
                this.totalPrice = this.totalPrice + curr_item[1] * curr_item[2];
            }
        },
        sendOrder: function() {
            let order={}
            
            for (let i = 0; i < this.itemsList.length; i++) {
                const item = this.itemsList[i];
                order[item.name] = 0;
            }

            for (let j = 0; j < this.itemsSelected.length; j++) {
                    const curr_item = this.itemsSelected[j];
                    order[curr_item[0]] = curr_item[1];
                }
            database.collection('orders').add(order).then(()=> location.reload())
        }
    },
    computed: {
        grandTotal: function() {
            var total = this.totalPrice * 1.07;
            return total.toFixed(2);
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: disc;
}

li {
  flex-basis: 300px;
  text-align: left;
  padding: 2px;
  font-size: 20px;
}

button {
    background-color: indianred;
    color:ivory;
}
</style>