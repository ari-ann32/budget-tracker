<script setup>
defineProps(['transactions'])
</script>

<template>
<section class="transactions">
      <h2>Transactions</h2>
      <table class="transaction-table">

        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>

        <tr v-for="(t, index) in transactions" :key="index">
          <td>{{ t.date }}</td>
          <td>{{ t.category }}</td>
          <td><span :class="['pill', t.type === 'Income' ? 'pill-income' : 'pill-expense']">{{ t.type }} </span> </td>
          <td>
             GH₵ {{ t.amount.toFixed(2) }}
          </td>
        </tr>
        
      </table>

</section>
</template>

<style scoped>
section {
  padding-top: 60px;
  padding-bottom: 60px;
  text-transform: capitalize;
}
.transaction-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    background-color: var(--white);
    
}

.transaction-table th, .transaction-table td {
    padding: 12px 16px;
    text-align: left;
}

.transaction-table th {
    background-color: var(--navy);
    color: var(--white);
    font-weight: 600;
}

.transaction-table tr:nth-child(even) {
    background-color: #f5f5f5;
}

.pill {
    display:inline-block;
    padding: 4px 12px;
    border-radius: 999px;
    font-weight: bold;
    font-size: 14px;
    text-transform: capitalize;
}

.pill-income {
    background-color: #e6f7ee;
    color: var(--emerald);
}

.pill-expense {
    background-color: #fdecea;
    color: var(--red);
}


</style>