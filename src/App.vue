<template>
  <h1>message: {{ message }}</h1>
  <hr />
  <h1>number: {{ number }}</h1>
  <hr>  
  <h1>doubleNum(50): {{ doubleNum(50) }}</h1>
  <hr>
  <h1>number * 2 = {{ number * 2 }}</h1>
  <hr>
  <h1>{{ number > 150? 'number is greater than 150' : 'number is less than 150' }}</h1>
  <hr>
  <h1 v-text="number"></h1>
  <hr>
  <h1>{{ wizards }}</h1>
  <hr>
  <h1>{{ wizards.at(2) }}</h1>
  <hr>
  <h1> {{ rawHtml }}</h1>
  <h1 v-text="rawHtml"></h1>
  <h1 v-html="rawHtml"></h1>

</template>

<script setup>
 let message = 'Hello, Vue!'
 let number = 50

 function doubleNum(num){
    return num * 2
 }

 const wizards = [
            {
                name: 'Harry Potter',
                height: 165,
                hair_color: 'black',
                gender: 'male'
            },
            {
                name: 'Hermione Granger',
                height: 165,
                hair_color: 'brown',
                gender: 'female'
            },
            {
                name: 'Ron Weasley',
                height: 173,
                hair_color: 'red',
                gender: 'male'
            },
            {
                name: 'Draco Malfoy',
                height: 175,
                hair_color: 'blond',
                gender: 'male'
            },
        ];

        let rawHtml = '<span style="color: red">This should be red</span>'

</script>

<style lang="scss" scoped>

</style>