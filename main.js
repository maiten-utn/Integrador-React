import { renderCategories } from './src/services/categories'
import { handleSearchProducByName } from './src/services/searchBar'
import { handleGetProductsToStore } from './src/views/store'
import './style.css'

export let categoryActive = null
export let elementActive = null
export const setCategorieActive = categorieIn => {
  categoryActive = categorieIn
}
export const setProductActive = productIn => {
  elementActive = productIn
}
renderCategories()
handleGetProductsToStore()

const buttonConfirmSearch = document.getElementById('buttonSearch')
buttonConfirmSearch.addEventListener('click', () => {
  handleSearchProducByName()
})
