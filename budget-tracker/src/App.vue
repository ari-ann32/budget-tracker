<script setup>
import { ref, computed } from 'vue'
import Header from './Header.vue'
import Summary from './Summary.vue'
import TransactionForm from './TransactionForm.vue'
import FilterBar from './FilterBar.vue'
import TransactionTable from './TransactionTable.vue'
import Footer from './Footer.vue'

const transactions = ref([])

const filters = ref({
  category: 'All',
  type: 'All',
  fromDate: '',
  toDate: ''
})

function addTransaction(newTransaction) {
  transactions.value.push(newTransaction)
}

function updateFilters(newFilters) {
  filters.value = newFilters
}

const filteredTransactions = computed(() => {
  return transactions.value.filter((t) => {
    const matchesCategory =
    filters.value.category === 'All' || t.category === filters.value.category
    const matchesType =
    filters.value.type === 'All' || t.type === filters.value.type
    const matchesFrom =
    !filters.value.fromDate || t.date >= filters.value.fromDate
    const matchesTo =
    !filters.value.toDate || t.date <= filters.value.toDate

    return matchesCategory && matchesType && matchesFrom && matchesTo
  })
})
</script>

<template>
  <div class="container">
  <Header/>
  <Summary :transactions="transactions"/>
  <TransactionForm @add-transaction="addTransaction"/>
  <FilterBar @update-filters="updateFilters"/>
  <TransactionTable :transactions="filteredTransactions"/>
  <Footer/>
</div>
</template>

<style scoped></style>
