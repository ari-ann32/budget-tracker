<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update-filters'])

const category = ref('All')
const type = ref('All')
const fromDate = ref('')
const toDate = ref('')

const menuOpen = ref(false)
const activePanel = ref(null) 

const categories = ['All', 'Food', 'Transport', 'Data', 'Airtime', 'Books', 'Recreation', 'Allowance', 'Gift', 'Salary']

watch([category, type, fromDate, toDate], () => {
    emit('update-filters', {
        category: category.value,
        type: type.value,
        fromDate: fromDate.value,
        toDate: toDate.value
    })
})

function toggleMenu() {
    menuOpen.value = !menuOpen.value
    if (!menuOpen.value) activePanel.value = null
}

function openPanel(panel) {
    activePanel.value = panel
}

function selectCategory(c) {
    category.value = c
    activePanel.value = null
    menuOpen.value = false
}

function applyDateRange() {
    activePanel.value = null
    menuOpen.value = false
}

function clearAll() {
    category.value = 'All'
    type.value = 'All'
    fromDate.value = ''
    toDate.value = ''
    menuOpen.value = false
    activePanel.value = null
}

function clearFilters() {
    category.value = 'All'
    type.value = 'All'
    fromDate.value = ''
    toDate.value = ''
}
</script>

<template>
<section class>

    <div class="filter-bar">
      <div class="filter-item">
        <label>Category</label>
        <select v-model="category">
        <option v-for="c  in categories" :key="c" :value="c">{{ c === 'All' ? 'All Categories' : c }}</option>
        </select>
      </div>

      <div class="filter-item">
        <label>Type</label>
        <select v-model="type">
          <option value="All">Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expenses</option>
        </select>
      </div>

      <div class="filter-item">
        <label>From</label>
        <input type="date" v-model="fromDate"/>
      </div>
      
      <div class="filter-item">
        <label>To</label>
        <input type="date" v-model="toDate"/>
      </div>

      <button class="clear-btn" @click="clearFilters">Clear Filters</button>
      </div>
</section>



<div class="filter-wrapper">
    <div class = "pill-row">
        <button v-for="option in ['All', 'Income', 'Expense']" :key="option" :class="['pill-btn', { active: type === option}]" @click="type = option">
            {{ option === 'Expense' ? 'Expenses' : option }}
        </button>

        <div class="menu-container">
            <button class="icon-btn" @click="toggleMenu"> ☰</button>

            <div v-if="menuOpen" class="dropdown-menu">
                <div v-if="!activePanel" class="menu-list">
                    <button class="menu-item" @click="openPanel('category')">Category</button>
                    <button class="menu-item" @click="openPanel('date')">Date</button>
                    <button class="menu-item clear" @click="clearAll">Clear All</button>
                </div>

                <div v-else-if="activePanel === 'category'" class="menu-list">
                    <button class="menu-item back" @click="activePanel = null">← Back</button>
                    <button v-for="c in categories" :key="c" class="menu-item" @click="selectCategory(c)" >
                        {{ c === 'All' ? 'All Categories' : c }}
                    </button>
                </div>

                <div v-else-if="activePanel === 'date'" class="menu-list date-panel">
                    <button class="menu-item back" @click="activePanel = null">← Back</button>
                    <label class="date-label">From</label>
                    <input type="date" v-model="fromDate"/>
                    <label class="date-label">To</label>
                    <input type="date" v-model="toDate"/>
                    <button class="apply-btn" @click="applyDateRange">Apply</button>
                </div>

            </div>
        </div>
    </div>
</div>  

</template>

<style scoped>
section {
    width: 100%;
}
.filter-bar {
   display: flex;
   flex-wrap: wrap;
   flex: 1;
   gap: 16px;
   align-items: flex-end;
   background-color: var(--surface);
   border: 1px solid var(--line);
   border-radius: 16px;
   padding: 16px 20px;
   margin-bottom: 16px;
}
.filter-item {
   display: flex;
   flex-direction: column;
}
label {
    margin-bottom: 4px;
}
select, input {
    height: 46px;
    padding: 8px;
    border: 1px solid var(--field-line);
    border-radius: 10px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
    min-width: 210px;
}
input[type="date"] {
    color: var(--ink-muted);
}
.clear-btn {
    background: none;
    border: none;
    text-decoration: underline;
    color: var(--ink);
    cursor: pointer;
    height: 44px;
}
@media (min-width:800px) {
    .filter-wrapper {
        display: none;
    }
}
@media (max-width:800px) {
    section {
       display: none;
    }
    .filter-wrapper {
        padding: 0px 20px;
        max-width: 100%;
        position: relative;
    }
    .pill-row {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding: 8px 0;
    }
    .pill-btn {
        height: 36px;
        padding: 10px 18px;
        border-radius: 999px;
        border: 1px solid var(--field-line);
        background-color: var(--surface);
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
    }
    .pill-btn.active {
        background-color: var(--ink);
        color: var(--surface);
        border-color: var(--ink);
    }
    .menu-container {
        margin-left: auto;
    }
    .icon-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid var(--field-line);
        background-color: var(--surface);
        font-size: 18px;
    }
    .dropdown-menu {
        position:sticky;
        top: 52px;
        background-color: var(--surface);
        border: 1px solid var(--line);
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        z-index:10;
        padding: 8px 0;
    }
    .menu-list {
        display: flex;
        flex-direction: column;
    }
    .menu-item {
        padding: 10px 16px;
        text-align: left;
        background: none;
        border: none;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 14px;
        padding: 10px 12px;
        border-radius: 8px;
    }
    .menu-item.back {
        color: var(--ink-muted);
        font-size: 13px;
    }
    .menu-item.clear {
        color: var(--ink);
        text-decoration: underline;
        border-top: 1px solid var(--line);
        margin-top: 8px 10px;
        padding-top: 10px;
    }
    .date-panel {
        gap:6px;
    }
    .date-label {
        padding: 2px 10px;
        font-size: 13px;
        color: var(--ink);

    }
    .date-panel input {
        height: 40px;
        width: 90%;
        align-self: center;
        padding: 0 10px;
        border: 1px solid var(--field-line);
        border-radius: 8px;
        font-size: 14px;
    }
    .apply-btn {
        margin-top: 10px;
        height: 40px;
        background-color: var(--ink);
        color: var(--surface);
        border: none;
        border-radius: 8px;
        font-weight: 1000;
    }
}

</style>
 