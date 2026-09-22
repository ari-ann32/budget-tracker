<script setup>
</script>

<template>
<section>

    <div class="summary">
 
      <div class="block">
        <label><h1>Total Income</h1></label>
        <div id="currency" class="placeholder-text"><h1>GH₵ 0.00</h1></div>
      </div>

      <div class="block">
        <label><h1>Total Expenses</h1></label>
        <div id="currency" class="placeholder-text"><h1>GH₵ 0.00</h1></div>
      </div>

      <div class="block">
        <label><h1>Current Balance</h1></label>
        <div id="currency" class="placeholder-text"><h1>GH₵ 0.00</h1></div>
      </div>

    </div>

</section>
</template>

<style scoped>


.summary {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    gap: 15px;
    height: 50vh;
    position:sticky;
    top: 0;
    margin-bottom: 60px;
}

.block {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 2px solid #888888;
    border-radius: 8px;
    text-align: center;
    font-size: larger;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
}
</style>