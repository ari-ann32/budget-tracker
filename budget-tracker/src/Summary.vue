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
  const transactionCount = computed(() => props.transactions.length)
   

const balance = computed(() => totalIncome.value - totalExpenses.value)
</script>

<template>
<section class="summary">
  
  <div class="balance">
    <p class="balance-text">CURRENT BALANCE</p>
    <div class="cb-values">
    <p class="balance-currency">GH₵  </p>
    <p class="balance-value">{{  balance.toFixed(2) }}</p>
    </div> 
    <p class="transactioncount-text">{{ transactionCount }} transaction{{ transactionCount == 1 ? '' : 's' }} recorded</p>
    </div>
  
    <div class="remaining">
 
      <div class="income-block">
        <p class="remaining-text">TOTAL INCOME</p>
        <diV class="currency-value">GH₵ {{ totalIncome.toFixed(2) }}</div>
      </div>

      <div class="expenses-block">
        <p class="remaining-text">TOTAL EXPENSES</p>
        <div class="currency-value">GH₵ {{ totalExpenses.toFixed(2) }}</div>
      </div>

    </div>

</section>
</template>

<style scoped>


.summary {
    display: flex;
    padding: 20px;
    gap: 16px;
    height: 40vh;
    margin-bottom: 24px;
    position: sticky;
}

.balance {
    width: 70%;
    overflow: hidden;
    word-break: break-word;
    border-radius: 12px;
    height: 250px;
    justify-content: space-between;
    text-align: left;
    background-color: var(--ink);
    padding: 20px;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
    box-sizing: border-box;
}

.balance-text, .transactioncount-text, .balance-currency {
  color: var(--ink-muted);
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
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
  
}

.balance-value {
  color: var(--surface);
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: 60px;
}

.remaining {
    width: 30%;
    height: 250px;
    display: grid;
    gap: 16px;
    position: sticky;
}

.income-block, .expenses-block {
  overflow: hidden;
  word-break: break-word;
  border-radius: 12px;
  height: 117px;
  justify-content: space-between;
  text-align: left;
  background-color: var(--surface);
  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 8px;
}

.remaining-text {
  color: var(--ink-muted);
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.1em;
  padding-bottom: 30px;
}

.currency-value {
  font-family: 'Newsreader', serif;
  font-size: 27px;
  font-weight: 500;
}




#income-currency {
  color: var(--emerald);
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