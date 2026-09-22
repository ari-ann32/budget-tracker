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
    filters.value
  })
})
</script>

<template>
  <div class="container">
  <Header/>
  <Summary/>
  <TransactionForm/>
  <FilterBar/>
  <TransactionTable/>
  <Footer/>
</div>
</template>

<style scoped></style>
