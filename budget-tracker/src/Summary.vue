<script setup>
import { computed } from 'vue'

const props = defineProps(['transactions'])

const totalIncome = computed(() =>
  props.transactions
    .filter((t) =>t.type === 'income')
    .reduce((sum,t) => sum + t.amount,0)
    )

const totalExpenses = computed(() =>
  props.transactions
    .filter((t) => t.type === 'expenses')
    .reduce((sum,t) => sum + t.amount, 0)
    )

const balance = computed(() => totalIncome.value - totalExpenses.value)
</script>

<template>
<section>

    <div class="summary">
 
      <div class="income-block">
        <label><h1>Total Income</h1></label>
        <div id="income-currency" class="placeholder-text"><h1>GH₵ {{ totalIncome.toFixed(2) }}</h1></div>
      </div>

      <div class="expenses-block">
        <label><h1>Total Expenses</h1></label>
        <div id="expenses-currency" class="placeholder-text"><h1>GH₵ {{ totalExpenses.toFixed(2) }}</h1></div>
      </div>

      <div class="balance-block">
        <label><h1>Current Balance</h1></label>
        <div id="balance-currency" class="placeholder-text"><h1>GH₵ {{ balance.toFixed(2) }}</h1></div>
      </div>

    </div>

</section>
</template>

<style scoped>


.summary {
    display: flex;
    width: 800px;
    margin: 0 auto;
    padding: 20px;
    gap: 16px;
    height: 50vh;
    position:sticky;
    top: 0;
    margin-bottom: 24px;
    box-sizing: border-box;
}

.income-block, .expenses-block, .balance-block {
    flex: 1;
    min-width: 0;
    min-height: 0;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    overflow: hidden;
    word-break: break-word;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
}

.block label {
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.85;
}

#income-currency, #expenses-currency, #balance-currency {
  font-size: clamp(16px, 4w, 26px);
  font-weight: bold;
}

.income-block {
  background-color: #e6f7ee;
  border: 2px solid #e6f7ee;
}

#income-currency {
  color: var(--emerald);
}

.expenses-block {
  background-color: #fdecea;
  border: 2px solid #fdecea;
}

#expenses-currency {
  color: var(--red);
}

.balance-block {
  background-color: var(--navy);
  color: var(--white);
  flex: 1.3;
}
</style>