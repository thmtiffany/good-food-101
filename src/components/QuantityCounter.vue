<template>
    <div>
        <button v-on:click="decrement()">-</button>
        {{ counter }}
        <button v-on:click="increment()">+</button>
    </div>
</template>

<script>
export default {
    name:'QuantityCounter',
    data () {
        return {
            counter: 0
        }
    },
    props:{
        item: {
            type: Array
        }
    },
    methods: {
        decrement: function() {
            if (this.counter > 0) {
                this.counter--;
            }
            this.$emit('counter', this.item, this.counter)
        },
        increment: function() {
            if (this.counter == 10) {
                this.counter = 10;
                alert("You cannot buy more than 10 items.");
            } else {
                this.counter++;
            }
            this.$emit('counter', this.item, this.counter)
        }
    }
}
</script>

<style scoped>
    
    div{
        font-size: 25px;
    }
    button {
        display: inline-block;
        width: 50px;
        height: 50px;
        font-size: 20px;
        text-align: center;
        background-color:indianred;
        color:ivory;
    }

</style>