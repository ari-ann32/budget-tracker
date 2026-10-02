<script setup>
import {computed} from 'vue'

const props =defineProps(['transactions'])
const emit = defineEmits(['delete-transaction'])

const netTotal = computed(() =>
  props.transactions.reduce((sum,t) => sum + (t.type === 'Income' ? t.amount : -t.amount), 0)
)

function formatDate(dateString) {
  const date = new Date(dateString) 
  return date.toLocaleDateString('en-GB',{ day: 'numeric', month: 'short' })
}
</script>

<template>
<section class="transactions">
      <table class="transaction-table">
        <thead>
        <tr>
          <th>DATE</th>
          <th>CATEGORY</th>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th></th>
        </tr>
        </thead>
        

        <tbody v-if="transactions.length">
        <tr v-for="(t, index) in transactions" :key="index">
          <td class="date">{{ formatDate(t.date) }}</td>
          <td>{{ t.category }}</td>
          <td>
            <span :class="['pill', t.type === 'Income' ? 'pill-income' : 'pill-expense']">
              {{t.type}}
            </span> 
          </td>
          <td :class="t.type === 'Income' ? 'income-text' : 'expense-text'">
            {{ t.type === 'Income' ? '+' : '-' }}{{ t.amount.toFixed(2) }}
          </td>
          <td class="align-right">
            <button class="delete-btn" @click="emit('delete-transaction', index)"><font-awesome-icon icon="fa-solid fa-trash-can" style="color: rgb(0, 0, 0);" /></button>
          </td>
        </tr>
        <div v-if="!transactions.length" class="empty-state">
        <span><font-awesome-icon icon="fa-solid fa-file" style="color: grey;" /></span>
        <h1 class="section-heading"> No transactions yet</h1>
        <p class="body-text ink-muted">Record your first income or expense using the form on the</p>
        <p class="body-text ink-muted">Your balance and totals update the moment you save it.</p>
      </div>
        </tbody>
        
      </table>
      
         
        <div class="bottom" >
         <span>Showing {{ transactions.length }} of {{ transactions.length }} transactions</span>
         <span>Net for this range <strong class="amount-figure"> GH₵ {{ netTotal.toFixed(2) }}</strong></span>
        </div>
      
</section>

<div class="transactioncount">{{ transactions.length === 0 ? 'Nothing recorded yet' : `${transactions.length} transaction${transactions.length == 1 ? '' : 's'} recorded` }} </div>

<div class="mobile-responsive">
  <ul class="mobile-transactions">
    <li v-for="(t, index) in transactions" :key="index" class=mobile-transaction>
      <div>
        <h3> {{t.category}}</h3>
        <p> {{ formatDate(t.date) }} . {{ t.type }}</p>
      </div>
      <span :class="t.type === 'Income' ? 'amount-income' : 'amount-expense'"> {{ t.type === 'Income' ? '+' : '-' }} {{ t.amount.toFixed(2) }} </span>
      <button class="delete-btn" @click="emit('delete-transaction', index)"><font-awesome-icon icon="fa-solid fa-trash-can" style="color: rgb(0, 0, 0);" /></button>
    </li>
  </ul>
</div>
</template>

<style scoped>

section {
    background-color: var(--surface);
    border: 1px solid var(--line);
    border-radius: 16px;
    overflow-y: auto;
    height: 590px;
    
}
.transaction-table {
  width: 100%;
  border-collapse: collapse;
}
th{
  background-color: var(--inset);
  color: var(--ink-muted);
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.1em;
  padding: 16px 20px;
  text-align: left;
}
td {
  padding: 16px 20px;
  border-top: 1px solid var(--line);
  text-align: left;
}
.date {
  color: var(--ink-muted);
}
.pill {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}
.pill-income {
  background-color: var(--income-tint);
  color: var(--income);
}
.pill-expense {
  background-color: var(--expense-tint);
  color: var(--expense);
}
.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  min-height: 44px;
  min-width: 44px;
  opacity: 0.5;
  font-size: 20px;
}
.delete-btn:hover {
  opacity: 1;
}
.bottom {
    display: flex;
    justify-content: space-between;
    background-color: var(--surface);
    color: var(--ink-muted);
    padding: 20px;
    font-size: 14px;
    margin: 30px 0px 0px;
    bottom: 0px;
    width: 100%;
    align-items: center;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
    border-top: 1px solid var(--line);
    position: sticky;
    z-index: 1;
}
.empty-state {
  text-align: center;
  padding: 48px 20px;
  color: var(--ink);
}
.empty-state .body-text {
  margin: 8px auto 0;
  text-align: center;
}
ul {
  margin: 0;
  padding: 0;
}


@media (max-width: 800px) {
  section {
    display: none;
  }
  .mobile-responsive {
    border: 1px solid var(--line);
    margin: 20px;
    background-color: var(--surface);
    border-radius: 16px;
    padding: 10px 20px;
    max-height: 600px;
    overflow-y: auto;
  }
  h3 {
    font-family: 'IBM Plex Sans', 'sans-serif';
    font-weight: 400;
    font-size: 20px;
  }
  p {
    font-family: 'IBM Plex Sans', 'sans-serif';
    font-weight: 400;
    font-size: 14px;
    color: var(--ink-muted);
  }
  .mobile-transaction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--line);
  background-color: var(--surface);
}
.amount-income, .amount-expense {
  font-family: 'IBM Plex Mono', 'serif';
  font-weight: 400;
  font-size: 15px;
}
.amount-income {
  color: var(--income);
}
.transactioncount {
   font-family: 'IBM Plex Mono', 'serif';
  font-weight: 400;
  font-size: 15px;
  text-align: left;
  margin-top: 10px;
  padding-left: 20px;
}
} 
@media (min-width: 800px) {
 .mobile-responsive {
  display: none;
 }
 .transactioncount {
  display: none;
 }
}
</style>