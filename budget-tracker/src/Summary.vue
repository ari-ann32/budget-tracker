<script setup>
import { computed } from 'vue'

const props = defineProps(['transactions'])

const totalIncome = computed(() =>
  props.transactions.filter((t) =>t.type === 'Income').reduce((sum,t) => sum + t.amount,0)
)
const totalExpenses = computed(() =>
  props.transactions.filter((t) => t.type === 'Expense').reduce((sum,t) => sum + t.amount, 0)
)
const balance = computed(() => totalIncome.value - totalExpenses.value)
const transactionCount = computed(() => props.transactions.length)
</script>

<template>
<section class="summary">
  <div class="balance">
    <p class="balance-text">CURRENT BALANCE </p>
    <div class="cb-values">
    <p class="balance-currency">GH₵  </p>
    <p class="balance-value">{{  balance.toFixed(2) }}</p>
    </div> 
    <p class="transactioncount-text">
      {{ transactionCount === 0 ? 'Nothing recorded yet' : `${transactionCount} transaction${transactionCount == 1 ? '' : 's'} recorded` }}
    </p>
  </div>
  
    <div class="remaining">
      <div class="income-block">
        <div class="text">
        <p class="remaining-text">TOTAL INCOME</p>
        <diV :class="totalIncome !== 0 ? 'income-currency-value' : 'neutral-value'">GH₵ {{ totalIncome.toFixed(2) }}</div>
        </div>
        <div :class="totalIncome == 0 ? 'neutral-symbol' : 'income-symbol'">
        <font-awesome-icon icon="fa-solid fa-circle-arrow-up"/>
        </div>
      </div>
      <div class="expenses-block">
        <div class="text">
        <p class="remaining-text">TOTAL EXPENSES</p>
        <div :class="totalExpenses !== 0 ? 'expenses-currency-value' : 'neutral-value'">GH₵ {{ totalExpenses.toFixed(2) }}</div>
        </div>
        <div :class="totalExpenses == 0 ? 'neutral-symbol' : 'expense-symbol'">
          <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
        </div>
      </div>
    </div>
</section>
</template>

<style scoped>
.summary {
    display: flex;
    gap: 16px;
    margin: 20px 0;
    flex-wrap: wrap;
    padding: 20px 50px 20px;
}
.balance {
    flex: 2;
    min-width: 300px;
    background-color: var(--ink);
    color: var(--surfaace);
    border-radius: 16px;
    padding: 10px
}
.balance-text, .transactioncount-text, .balance-currency {
  color: var(--ink-muted);
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.1em;
}
.balance-text {
  margin: 0px;
  margin-left: 8px;
}
.transactioncount-text {
  margin-top: 4px;
}
.cb-values {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 8px;
}
.balance-value {
  color: var(--surface);
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: 60px;
}
.remaining {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.income-block, .expenses-block {
  display: flex;
  border:1px solid var(--line);
  justify-content: space-between;
  background-color: var(--surface);
  border-radius: 16px;
  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 4px;
  align-items: center;
}

.text {
  padding: 4px;
  overflow: hidden;
  word-break: break-word;
  text-align: left;
}
.income-symbol {
  font-size: 50px;
  color: #aac7b4;
}
.expense-symbol {
  font-size: 50px;
  color: #ebc4b8;
}
.neutral-symbol{
  font-size: 50px;
  color: var(--ink-muted)
}
.remaining-text {
  color: var(--ink-muted);
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.1em;
  padding-bottom: 30px;
}
.income-currency-value, .expenses-currency-value {
  font-family: 'Newsreader', serif;
  font-size: 30px;
  font-weight: 500;
}
.income-currency-value {
  color: var(--income);
}
.expenses-currency-value {
  color: var(--expense);
}
.neutral-value {
  font-family: 'Newsreader', serif;
  font-size: 30px;
  font-weight: 500;
  color: var(--ink);
}
@media (max-width:450px) {
.summary {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0px;
  margin: 5px 0px 5px 0px;
}
.balance {
  flex: 1;
  height: 20px;
  padding: 4px;
}
.remaining {
  flex: 1;
  display: flex;
  flex-direction: row;
  min-width: none;
  width: 100%;
}
.balance-value {
  font-size: 20px;
}
.transactioncount-text {
  margin-top: 0px;
}
.balance-text, .balance-currency, .transactioncount-text {
  font-size: 10px;
}
.cb-values {
  margin-top: 0px;
}
.remaining-text {
  font-size: 10px;
  padding-bottom: 10px;
}
.income-block, .expenses-block {
  padding: 0px;
  width: 50%;
}
.income-currency-value, .expenses-currency-value {
  font-size: 20px
}
.income-symbol, .expense-symbol, .neutral-symbol {
  display: none;
}
.text {
  padding: 2px;
}
}
@media (max-width:1050px) {
.income-symbol, .expense-symbol, .neutral-symbol {
  font-size: 30px;
  padding: 20px;
}
.summary {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.balance {
  flex: 1;
  height: 20px;
  min-width: 60px;
  padding: 4px;
}
.remaining {
  flex: 1;
  display: flex;
  flex-direction: row;
  min-width: none;
  width: 100%;
}
.balance-value {
  font-size: 20px;
}
.transactioncount-text {
  margin-top: 0px;
}
.balance-text, .balance-currency, .transactioncount-text {
  font-size: 10px;
}
.cb-values {
  margin-top: 0px;
}
.remaining-text {
  font-size: 10px;
  padding-bottom: 10px;
}
.income-block, .expenses-block {
  padding: 0px;
  width: 50%;
}
.income-currency-value, .expenses-currency-value {
  font-size: 20px
}
.text {
  padding: 2px;
}
}
</style>