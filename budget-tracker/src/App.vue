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
const showMobileForm = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('budget-transactions')
  if (saved) transactions.value = JSON.parse(saved)
})

watch(transactions, (newValue) => {
  localStorage.setItem('budget-transactions', JSON.stringify(newValue))
}, { deep: true })

function addTransaction(newTransaction) {
  transactions.value.push(newTransaction)
  showMobileForm.value = false
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
        <div class="desktop-form">
          <TransactionForm @add-transaction="addTransaction"/>
        </div>
        <div class="table-column">
          <FilterBar @update-filters="updateFilters"/>
          <TransactionTable :transactions="filteredTransactions" @delete-transaction="deleteTransaction"/>
        </div>
      </div>
    </div>
    <Footer/>

    <button class="mobile-fab" @click="showMobileForm = true">
      + Add transaction
    </button>

    
    <div v-if="showMobileForm" class="mobile-form-overlay">
      <div class="mobile-form-header">
        <button class="back-btn" @click="showMobileForm = false">← Back</button>
      </div>
      <div class="mobile-form-body">
        <TransactionForm @add-transaction="addTransaction"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 800px) {
.main-grid {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px  50px;
}

.main-grid > :first-child {
  flex: 1;
}

.table-column {
  flex: 3;
}
}
.mobile-fab {
  display: none;
}

.mobile-form-overlay {
  display: none;
}

@media (max-width: 800px) {
  .desktop-form {
    display: none;
  }
  .mobile-fab {
    display: block;
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
    height: 55px;
    background-color: var(--ink);
    color: var(--surface);
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    z-index: 20;
  }
  .mobile-form-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--paper);
    z-index: 30;
    overflow-y: auto;
  }

  .mobile-form-header {
    padding: 16px;
    border-bottom: 1px solid var(--line);
    background-color: var(--surface);
  }

  .back-btn {
    background: none;
    border: none;
    font-size: 15px;
    color: var(--ink);
    cursor: pointer;
  }

  .mobile-form-body {
    padding: 16px;
  }
}
</style>