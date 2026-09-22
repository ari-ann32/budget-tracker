<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update-filters'])

const category = ref('All')
const type = ref('All')
const fromDate = ref('')
const toDate = ref('')

const categories = ['All', 'Food', 'Transport', 'Data', 'Airtime', 'Books', 'Recreation', 'Allowance', 'Gift', 'Salary']

watch([category, type, fromDate, toDate], () => {
    emit('update-filters', {
        category: category.value,
        type: type.value,
        fromDate: fromDate.value,
        toDate: toDate.value
    })
})
</script>

<template>
<section class="filter">
      <label for="category">Category:</label>
      <select id="category" v-model="category" name="selected_category">
          <option v-for="c  in categories" :key="c" :value="c">{{ c }}</option>
      </select>

      <label for="type">Type:</label>
      <select id="type" v-model="type" name="selected_type">
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
      </select>

      <label for="from-date">From Date:</label>
      <input type="date" id="from-date" v-model="fromDate "name="day">

      <label for="to-date">To Date:</label>
      <input type="date" id="to-date" v-model="toDate" name="day">
</section>
</template>

<style scoped>
section {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border: 2px solid var(--white);
    border-radius: 8px;
    text-align: center;
    font-size: large;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
}
</style>