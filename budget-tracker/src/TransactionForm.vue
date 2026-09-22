<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-transaction'])

const amount = ref('')
const category = ref('')
const type = ref('')
const date = ref('')

const categories = ['Food', 'Transport', 'Data', 'Airtime', 'Books', 'Recreation', 'Allowance', 'Gift', 'Salary']

function handleSubmit() {
  if (!amount.value || !date.value) return

  emit('add-transaction', {
    amount: parseFloat(amount.value),
    category: category.value,
    type: type.value,
    date: date.value
  })

  amount.value = ''
  date.value = ''
  category.value = ''
  type.value = ''
}

</script>

<template>
<section>
    <h2>Add Transaction </h2>
    <form @submit.prevent="handleSubmit" class="form-outline" method="POST">

      <div class="field">
        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount" min="0.01" step="0.01" placeholder="0.00" v-model="amount">
      </div>

      <div class="field">
        <label for="category">Choose a category:</label>
        <select id="category" v-model="category "name="selected_category">
          <option v-for="c in categories" :key="c" :value="c"> {{ c }}</option>
        </select>
      </div>
      
      <div class="field">
         <label for="type">Choose a type:</label>
         <select id="type" v-model="type" name="selected_type">
          <option value="">--Select an option</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
         </select>
      </div>

      <div class="field">
        <label for="transaction-date">Date:</label>
        <input type="date" v-model="date" id="transaction-date" name="day">
      </div>

      <button type="submit" class="submit">Add Transaction</button>
    </form>
</section>
</template>

<style scoped>
.form-outline {
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    margin-bottom: 60px;
}

.form-outline label {
    font-size: larger;
    font-weight: 600;
}
.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.form-outline input[type="number"], .form-outline select, .form-outline, .form-outline input[type="date"] {
    width:100%;
    padding: 12px 16px;
    font-size: large;
    border: 1px #cccccc;
    border-radius: 6px;
    box-sizing: border-box;
}

.form-outline button {
    background-color: var(--navy);
    color: var(--white);
    padding: 12px 16px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;
    border: none;
    outline: none;
}
</style>