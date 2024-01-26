import type { Store } from 'pinia'

export type Name = 'cocktail'

export type State = {
  activeCocktail: string
  listCocktails: Array<string>
  data: Array<Record<string, unknown>>
}

export type Getters = {
    getActiveCocktail(): string
    getListCocktails(): Array<string>
    getSingleData(): Record<string, unknown>
    getListOfIngredients(): Array<string>
}

export type Actions = {
  fetchDetail (): Promise<void>
}

export type StoreType = Store<Name, State, Getters, Actions>
