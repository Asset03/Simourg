
import { defineStore } from 'pinia'
import type { Name, State, Getters, Actions } from './types'

import { getDetailsApi } from '../http/axios'

export const useStore = defineStore<Name, State, Getters, Actions>('cocktail', {
  actions: {
    async fetchDetail() {
        if(!this.allData.has(this.activeCocktail)){
            try {
                const { status, data } =  await getDetailsApi(this.activeCocktail.toLowerCase())
                if(status){
                    this.data = data.drinks;
                    this.allData.set(this.activeCocktail, data.drinks)
                }
            } catch (error) {
                console.error(error);
            } 
        }else{
           this.data = this.allData.get(this.activeCocktail)!
        }
    }
  },

  getters: {
        getActiveCocktail() {
            return this.activeCocktail
        },
        getListCocktails() {
            return this.listCocktails
        },
        getSingleData(){
            return this.data[0]
        },
        getListOfIngredients(){
            const list = []
            for(let i =1; i<=15; i++){
                const ingredient = this.data[0][`strIngredient${i}`]
                const measure = this.data[0][`strMeasure${i}`]

                if(ingredient && measure) {
                    list.push(`<strong>${measure}</strong> ${ingredient}`)
                }else if(ingredient){
                    list.push(`${ingredient}`)

                }
            }
            return list
        }
    },

  state () {
    return {
        activeCocktail: '',
        listCocktails: [
            'Margarita',
            'Mojito',
            'A1',
            'Kir',
            '404'
        ],
        data: [],
        allData: new Map()
    }
  }
})
