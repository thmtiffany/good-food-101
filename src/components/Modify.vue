<template>
<div>
    <ul>
        
        <li v-for="(count, name, index) in datapacket" v-bind:key="index">
            <label v-bind:for="name">{{name}}: {{count}}</label> <br>
            <input v-bind:id="index" placeholder =0 type="number" min="0"> <br>
        </li>
    </ul>
    <button v-on:click="updateOrder"> Update Order </button>
</div>
</template>

<script>
import database from "../firebase.js"
export default {
    data() {
        return {
            datapacket: {}
        }
    },
    methods: {
        fetchItems:function() {
            const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {})
            database.collection('orders').doc(this.$route.params.id).get().then(doc => this.datapacket=sortObject(doc.data()))
        },
        updateOrder:function(){
            let updatedData = JSON.parse(JSON.stringify(this.datapacket));
            for(let i=0; i<6; i++){
                const newCount = document.getElementById(i).value;
                if (newCount != ""){
                    updatedData[Object.keys(updatedData)[i]] = Number(newCount);
                }  
            }
            database.collection('orders').doc(this.$route.params.id).set(updatedData).then(() => this.$router.push({path:'/orders'}));
        }
    },
    created() {
        this.fetchItems()
    }
    }
</script>

<style scoped>
ul {
  display: inline;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  padding: 10px;
  margin: 10px;
}
button {
flex-grow: 1;
  flex-basis: 300px;
  padding: 10px;
  margin: 20px;
}

</style>