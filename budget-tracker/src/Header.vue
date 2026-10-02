<script setup>
</script>

<template>
    <header>
      <div class="brand">
      <span><font-awesome-icon icon="fa-solid fa-folder-plus" style="color: var(--income);"/></span>
      <h1>Budget Tracker</h1>
      </div>
      <p>All amounts in Ghana cedi (GH₵)</p>
    </header>

</template>

<style scoped>
header{
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: var(--surface);
    padding: 0px 50px 0px;
    border-bottom: 1px solid var(--line);
    color: var(--ink);
    width: 100%;
}
.brand {
    display: flex;
    align-items: center;
    gap: 8px;
}
span {
    font-size: 25px;
}
p {
    color: var(--ink-muted);
}
@media (max-width: 1000px) {
    p {
        display: none;
    }
    header {
        font-size: 10px;
        padding: 0px 20px;
        width: 100%;
    }
}


</style>










