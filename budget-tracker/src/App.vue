<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import Header from './Header.vue'
import Summary from './Summary.vue'
import TransactionForm from './TransactionForm.vue'
import FilterBar from './FilterBar.vue'
import TransactionTable from './TransactionTable.vue'
import Footer from './Footer.vue'

const transactions = ref([])
const filters = ref({ category: 'All', type: 'All', fromDate: '', toDate: '' })

onMounted(() => {
  const saved = localStorage.getItem('budget-transactions')
  if (saved) transactions.value = JSON.parse(saved)
})

watch(transactions, (newValue) => {
  localStorage.setItem('budget-transactions', JSON.stringify(newValue))
}, {deep: true })

function addTransaction(newTransaction) {
  transactions.value.push(newTransaction)
}

function deleteTransaction(index) {
  transactions.value.splice(index, 1)
}

function updateFilters(newFilters) {
  filters.value = newFilters
}

const filteredTransactions = computed(() => 
  transactions.value.filter((t) => {
    const matchesCategory = filters.value.category === 'All' || t.category === filters.value.category
    const matchesType = filters.value.type === 'All' || t.type === filters.value.type
    const matchesFrom = !filters.value.fromDate || t.date >= filters.value.fromDate
    const matchesTo = !filters.value.toDate || t.date <= filters.value.toDate
    return matchesCategory && matchesType && matchesFrom && matchesTo
  })
)
</script>

<template>
  <div>
    <Header/>
  <div class="container">
    <Summary :transactions="transactions"/>
    <div class="main-grid">
      <TransactionForm @add-transaction="addTransaction"/>
      <div class="table-column">
        <FilterBar @update-filters="updateFilters"/>
        <TransactionTable :transactions="filteredTransactions" @delete-transaction="deleteTransaction"/>
      </div>
    </div>
  </div>
  <Footer/>
</div>
</template>

<style scoped>
.main-grid {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.main-grid > :first-child {
  flex: 1;
  min-width: 280px;
}

.table-column {
  flex: 2;
  min-width: 320px;
}

@media (max-width: 700px) {
  .main-grid {
    flex-direction: column;
  }
}
</style>
