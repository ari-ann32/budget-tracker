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
    <div class="form-column">
    
    <form @submit.prevent="handleSubmit" class="form-outline" method="POST">
      <h2>Add Transaction </h2>
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
    </div>

    <div class="preview-column">
      <div class="preview-card">
        <p class="preview-label"> Preview </p>
        <p class="preview-category"> {{ category }}</p>
        <p :class="['preview-amount', type === 'Income' ? 'income' : 'expenses']">
          GH₵ {{ amount || '0.00' }}
        </p>
        <p class="preview-date">{{ date || 'No date selected' }}</p>
      </div>
    </div>
</section>
</template>

<style scoped>

section {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

h2 {
  align-items: center;
  text-align: center;
}

.form-column, .preview-column {
  flex: 1;
  min-width: 250px;
}
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

.preview-card {
  background-color: var(--navy);
  color: var(--white);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  width: 70%;
}

.preview-label {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 8px;
}

.preview-category {
  font-size: 16px;
  margin-bottom: 6px;
}

.preview-amount {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 6px;
}

.preview-amount.income {
  color: var(--emerald);
}

.preview-amount.expenses {
  color: var(--red);
}

.preview-date {
  font-size: 13px;
  opacity: 0.7;
}
</style>