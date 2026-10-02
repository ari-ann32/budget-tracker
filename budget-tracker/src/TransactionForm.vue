<script setup>
import { computed, ref } from 'vue';

const emit = defineEmits(['add-transaction'])

const amount = ref('')
const category = ref('')
const type = ref('')
const date = ref('')
const error = ref('')

const incomeCategories = ['Allowance', 'Gift', 'Salary', 'Freelance']
const expenseCategories = ['Food', 'Transport', 'Data', 'Airtime', 'Books', 'Recreation']

const availableCategories = computed(() =>
type.value === 'Income' ? incomeCategories : expenseCategories)

function handleSubmit() {
  if (!amount.value || parseFloat(amount.value) <= 0) {
    error.value = 'Enter an amount greater than zero'    
   return
  }
  if (!date.value || !category.value) return
  error.value = ''

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
<section class="transactionform">
    <div class="form-column">
    <form @submit.prevent="handleSubmit" class="form-outline" method="POST">
      <h2>Add a Transaction </h2>
      <div class="field">
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model="amount" step="0.01"  placeholder="0.00"
        :class="{'field-error': error}"/>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>

      <div class="field">
         <label for="type">Type</label>
         <div class="type-toggle">
         <label :class="['toggle-option', { active: type === 'Income'}]">
         <input type="radio" v-model="type" value="Income"/>
         <span class="dot income-dot"></span>Income
         </label>
         <label :class="['toggle-option', { active: type === 'Expense'}]">
         <input type="radio" v-model="type" value="Expense">
         <span class="dot expenses-dot"></span>Expenses
         </label>
        </div>
      </div>


      <div class="field">
        <label for="category">Category</label>
        <select id="category" v-model="category">
          <option value="" disabled>--Select a category</option>
          <option v-for="c in availableCategories" :key="c" :value="c"> {{ c }}</option>
        </select>
      </div>
      
      

      <div class="field">
        <label for="date">Date</label>
        <input type="date" v-model="date" id="transaction-date">
      </div>

      <div class="preview" v-if="amount">
        <span class="body-text">You are adding</span>
        <span class="amount-figure" :class="type === 'Income' ? 'income-text' : 'expense-text'">
          {{ type === 'Income' ? '+' : '-' }} GH₵ {{ parseFloat(amount|| 0).toFixed(2) }}
        </span>
      </div>
      <div class="preview placeholder body-text" v-else>
        Fill in the form to see a preview here
      </div>
        
      <button type="submit" class="submit-btn">Add Transaction</button>
    </form>
    </div>

</section>
</template>

<style scoped>

.form-column {
  background-color: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
}
h2 {
  text-align: left;
  font-family: 'Newsreader', serif;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 20px;
  color: var(--ink);
}
label {
    font-family: 'IBM Plex Sans', serif;
    font-size: 19px;
    font-weight: 550;
    color: var(--ink-soft);
    display: block;
    margin-bottom: 4px;
    margin-top: 6px;
}
.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}
.form-outline {
    width:100%;
    padding: 12px 16px;
    border: 1px #cccccc;
    border-radius: 6px;
    box-sizing: border-box;
}
input, select {
  border-radius: 8px;
  border: 1px solid var(--field-line);
  font-size: large;
  padding: 16px;
  width: 100%;
}
input:focus, select:focus {
  outline: 2px solid var(--ink);
  outline-offset: 1px;
}

.field-error {
  border-color: var(--expense);
}
.error-message {
  color: var(--expense);
  font-size: 12px;
  margin-top: 4px;
}
.type-toggle {
  display: flex;
  gap: 8px;
}
.toggle-option {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 46px;
  border: 1px solid var(--field-line);
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
}
input[type="radio"] {
 position: absolute;
 opacity: 0;
 pointer-events: none;
}
.toggle-option.active {
  background-color: var(--ink);
  color: var(--surface);
  border-color: var(--ink);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.income-dot {
  background-color: var(--income);
}
.expenses-dot {
  background-color: var(--expense);
}
input[type="date"] {
  color: var(--ink-muted);
}
.preview {
  margin-top: 20px;
  background-color: var(--inset);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.preview.placeholder {
  color: var(--ink-muted);
  justify-content: flex-start;
}

.income-text {
  color: var(--income);
}
.expense-text {
  color: var(--expense);
}
.submit-btn {
    background-color: var(--ink);
    color: var(--surface);
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    width: 100%;
    height: 48px;
    margin-top: 16px;
}
.submit-btn:hover {
    opacity: 0.9;
}
.submit-btn:disabled {
    background-color: var(--line);
    color: var(--ink-muted);
    cursor: not-allowed;
}

  
</style>