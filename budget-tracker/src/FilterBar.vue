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

function clearFilters() {
    category.value = 'All'
    type.value = 'All'
    fromDate.value = ''
    toDate.value = ''
}
</script>

<template>
<section class>

      <div class="filter-bar">
      <div class="filter-item">
      <label>Category</label>
      <select v-model="category">
          <option v-for="c  in categories" :key="c" :value="c">{{ c === 'All' ? 'All Categories' : c }}</option>
      </select>
      </div>

      <div class="filter-item">
      <label>Type</label>
      <select v-model="type">
          <option value="all">Income and expenses</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
      </select>
      </div>

      <div class="filter-item">
      <label>From</label>
      <input type="date" v-model="fromDate"/>
      </div>
      
      <div class="filter-item">
      <label>To</label>
      <input type="date" v-model="toDate"/>
      </div>

      <button class="clear-btn" @click="clearFilters">Clear Filters</button>
      </div>
</section>
</template>

<style scoped>
.filter-bar {
   display: flex;
   flex-wrap: wrap;
   gap: 16px;
   align-items: flex-end;
   background-color: var(--surface);
   border: 1px solid var(--line);
   border-radius: 16px;
   padding: 16px 20px;
   margin-bottom: 16px;
}

.filter-item {
   display: flex;
   flex-direction: column;
   min-width: 140px;
}

label {
    margin-bottom: 4px;
}

select, input {
    height: 46px;
    padding: 8px;
    border: 1px solid var(--field-line);
    border-radius: 10px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
}

.clear-btn {
    background: none;
    border: none;
    text-decoration: underline;
    color: var(--ink);
    cursor: pointer;
    height: 44px;
}
</style>
 