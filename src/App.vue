<template>
  <div class="container">
    <h1>Cocktail Details</h1>
    <div class="main">
      <div class="main__inner">
        <div class="main__menu menu">
          <ul class="menu__items">
            <li v-for="(item, index) in listCocktails" :key="index" class="menu__item">
              <RouterLink :to="`/${item}`" :class="`menu__link${item === activeCocktail ? '-active' : ''}`" @click="onClick(item)">{{ item }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="main__content">
            <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from './store'

const store = useStore()

const activeCocktail = computed(() => store.getActiveCocktail)
const listCocktails = computed(() => store.getListCocktails)
debugger
const onClick = (item: string) => {
  store.activeCocktail= item
}
</script>

<style scoped>
</style>
