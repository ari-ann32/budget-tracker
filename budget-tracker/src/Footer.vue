<script setup>
</script>

<template>
    <footer>
    <p> &copy; 2026 Budget Tracker</p>
    <p>Saved in your browser</p>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    background-color: var(--surface);
    color: var(--ink-muted);
    padding: 20px;
    font-size: 14px;
    margin: 30px 0px 0px;
    left: 0;
    right: 0;
    width: 100%;
    align-items: center;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
    border-top: 1px solid var(--line);
    height: 80px;
}
@media (max-width: 800px) {
    p {
        display: none;
    }
    footer {
        border: none;
        background-color: var(--paper);
        box-shadow: none;
    }
}
   
</style>