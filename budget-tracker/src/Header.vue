<script setup>
</script>

<template>
    <header>
        <span>💰</span>
      <h1>My Budget Tracker</h1>
    </header>
</template>

<style scoped>
header{
    height: 20vh;
    align-items: center;
    text-align: left;
    display: flex;
    gap: 12px;
    flex-direction: row;
    justify-content: left;
    margin-bottom: 60px;
    padding: 20px 0;
    border-bottom: 2px solid var(--white);
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
}

span {
    font-size: 30px;
}

header h1 {
    font-size: 30px;
    color:var(--navy);
    font-weight: bold;
}
</style>