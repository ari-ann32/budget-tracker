<script setup>
</script>

<template>
<section>
    <form class="form-outline" method="POST">

      <div class="field">
        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount" min="0.01" step="0.01" placeholder="0.00">
      </div>

      <div class="field">
        <label for="category">Choose a category:</label>
        <select id="category" name="selected_category">
          <option value="">--Select an option</option>
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
      </div>
      
      <div class="field">
         <label for="type">Choose a type:</label>
         <select id="type" name="selected_type">
          <option value="">--Select an option</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
         </select>
      </div>

      <div class="field">
        <label for="transaction-date">Date:</label>
        <input type="date" id="transaction-date" name="day">
      </div>

      <button type="submit" class="submit">Submit</button>
    </form>
</section>
</template>

<style scoped>
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
</style>