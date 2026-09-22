<script setup>
</script>

<template>
<section class="transactions">
      <h2>Transactions</h2>
      <table class="transaction-table">

        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
        </tr>

        <tr>
          <td>Transport</td>
          <td class="amount">40.00</td>
          <td class="expenses">Expenses</td>
          <td>11/05/2026</td>
        </tr>

        <tr>
          <td>Food</td>
          <td class="amount">40.00</td>
          <td class="expenses">Expenses</td>
          <td>11/05/2026</td>
        </tr>

        <tr>
          <td>Allowance</td>
          <td class="amount">500.00</td>
          <td class="income">Income</td>
          <td>11/05/2026</td>
        </tr>

      </table>
</section>
</template>

<style scoped>
section {
  padding-top: 60px;
  padding-bottom: 60px;
}
.transaction-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    
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

.transaction-table .amount {
    text-align: right;
    font-weight: bold;
}

.transaction-table .income {
    color: var(--emerald);
    font-weight: bold;
}

.transaction-table .expenses {
    color: var(--red);
    font-weight: bold;
}

</style>