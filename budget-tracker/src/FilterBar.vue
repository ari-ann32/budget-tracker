<script setup>
</script>

<template>
<section class="filter">
      <label for="category">Category:</label>
      <select id="category" name="selected_category">
          <option value="all-categories">All Categories</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="data">Data</option>
          <option value="airtime">Airtime</option>
          <option value="books">Books</option>
          <option value="recreation">Recreation</option>
          <option value="allowance">Allowance</option>
          <option value="gift">Gift</option>
          <option value="salary">Salary</option>
      </select>

      <label for="type">Type:</label>
      <select id="type" name="selected_type">
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
      </select>

      <label for="from-date">From Date:</label>
      <input type="date" id="from-date" name="day">

      <label for="to-date">To Date:</label>
      <input type="date" id="to-date" name="day">
</section>
</template>

<style scoped>
section {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border: 2px solid var(--white);
    border-radius: 8px;
    text-align: center;
    font-size: large;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
}
</style>