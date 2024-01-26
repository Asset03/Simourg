<template>
 <div class="content__inner cocktail">
    <div class="cocktail__desc">
        <h3 class="cocktail__title">{{data.strDrink}}</h3>
        <p class="cocktail__details">{{ data.strCategory }} {{ data.strAlcoholic }} {{ data.strGlass }}</p>
        <h5 class="cocktail__list">List of ingredients</h5>
        <template v-for="(item, index) in listOfIngredients" :key="index">
            <span v-html="item"></span><br>
        </template>
    </div>
    <div class="cocktail__img">
      <img class="sqr-img" :src="String(data.strDrinkThumb)" alt="Cocktail Image" loading="lazy">
    </div>
 </div>
</template>

<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../store'

const route = useRoute()
const store = useStore()

const data = computed(() => store.getSingleData)
const listOfIngredients = computed(() => store.getListOfIngredients)

watch(
    () => route.params.type,
    async (newVal) => {
        store.activeCocktail = String(newVal)
        await store.fetchDetail()
    },
    { immediate: true }
)
</script>