<template>
  <div class="card">
    <h2>Message: {{ message }}</h2>
    <h2>Number: {{ number }}</h2>
    <button @click="changeMessageToUpperCase">
      Change message to upper case
    </button>
    <button @click="incrementNumber">Increment number</button>
  </div>
  <div class="card">
    <h2>Name: {{ wizard.name }}</h2>
    <h2>Wand: {{ wizard.wand }}</h2>
    <button @click="changeNameToUpperCase">Change name to upper case</button>
    <button @click="changeWandCore">Change wand core</button>
    <button @click="changeWizard">Change wizard</button>
  </div>

  <div class="card">
    <h2>Array: {{ wizards }}</h2>
    <button @click="wizards.push('Draco')">Add a new Wizard</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, Reactivity!')
let number = ref(1)

function changeMessageToUpperCase() {
  message.value = message.value.toUpperCase()
  console.log(message.value)
}
function incrementNumber() {
  number.value += 1
  console.log(number.value)
}

let wizard = ref({
  id: 101,
  name: 'Gandalf',
  house: 'Gryffindor',
  age: 2019,
  wand: {
    wood: 'Elder',
    core: 'Phoenix feather',
    length: 11
  }
})

function changeNameToUpperCase() {
  wizard.value.name = wizard.value.name.toUpperCase()
}
function changeWandCore() {
  wizard.value.wand.core = 'Dragon heartstring'
}
function changeWizard() {
  wizard.value = {
    id: 102,
    name: 'Dumbledore',
    house: 'Gryffindor',
    age: 2020,
    wand: {
      wood: 'Elder',
      core: 'Phoenix feather',
      length: 15
    }
  }
}

let wizards = ref(['Harry', 'Ron', 'Hermione'])

</script>

<style scoped>
.card {
  background-color: purple;
  color: white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>