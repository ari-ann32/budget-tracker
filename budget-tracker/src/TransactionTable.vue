<script setup>
import {computed} from 'vue'

const props =defineProps(['transactions'])
const emit = defineEmits(['delete-transaction'])

const netTotal = computed(() =>
  props.transactions.reduce((sum,t) => sum + (t.type === 'Income' ? t.amount : -t.amount), 0)
)

</script>

<template>
<section class="transactions">
      <table class="transaction-table">
        <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Type</th>
          <th>Amount</th>
          <th></th>
        </tr>
        </thead>

        <tbody v-if="transactions.length">
        <tr v-for="(t, index) in transactions" :key="index">
          <td>{{ t.date }}</td>
          <td>{{ t.category }}</td>
          <td>
            <span :class="['pill', t.type === 'Income' ? 'pill-income' : 'pill-expense']">
              {{t.type}}
            </span> 
          </td>
          <td :class="t.type === 'Income' ? 'income-text' : 'expense-text'">
            {{ t.type === 'Income' ? '+' : '-' }} {{ t.amount.toFixed(2) }}
          </td>
          <td class="align-right">
            <button class="delete-btn" @click="emit('delete-transaction', index)">🗑</button>
          </td>
        </tr>
        </tbody>
      </table>

      <div v-if="!transactions.length" class="empty-state">
        <p class="section-heading"> No transactions yet</p>
        <p class="body-text ink-muted">Record your first income or expense using the form on the left. Your balance and totals update the moment you save it.</p>
      </div>

      <div v-else class="table-footer">
        <span> Showing {{ transactions.length }} of {{ transactions.length }} transactions</span>
        <span> Net for this range <strong class="amount-figure"> GH₵ {{ netTotal.toFixed(2) }}</strong></span>
      </div>
</section>
</template>

<style scoped>
section {
    background-color: var(--surface);
    border: 1px solid var(--line);
    border-radius: 16px;
    overflow: hidden;
}

.transaction-table {
  width: 100%;
  border-collapse: collapse;
}

th{
  background-color: var(--inset);
  text-align: left;
  padding: 16px 20px;
}

td {
  padding: 16px 20px;
  border-top: 1px solid var(--line);
}

.align-right {
  text-align: right;
}

.income-text {
  color: var(--income);
}

.expense-text {
  color: var(--expense);
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

.table-footer {
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  border-top: 1 px solid var(--line);
  font-size: 14px;
  color: var(--ink-muted);
}

.empty-state {
  text-align: center;
  padding: 48px 20px;
}

.empty-state .body-text {
  max-width: 320px;
  margin: 8px auto 0;
}
</style>