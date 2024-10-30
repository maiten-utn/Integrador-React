import { elementActive } from '../../main'

export const openPopUp = () => {
  document.getElementById('myModal').style.display = 'flex'

  const buttonDelete = document.getElementById('deleterBtn')
  if (elementActive) {
    buttonDelete.style.display = 'block'
  } else {
    buttonDelete.style.display = 'none'
  }
}
export const closePopUP = () => {
  document.getElementById('myModal').style.display = 'none'
  resetProps()
}

const resetProps = () => {
  let nameInput = document.getElementById('name')
  let imagenInput = document.getElementById('imagen')
  let precioInput = document.getElementById('precio')
  let categoriaInput = document.getElementById('categoria')
  nameInput.value = ''
  imagenInput.value = ''
  precioInput.value = 0
  categoriaInput.value = 'Seleccione una categoria'
}
