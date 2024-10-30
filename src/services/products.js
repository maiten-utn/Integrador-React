import Swal from 'sweetalert2'
import {
  handleGetProductsLocalStorage,
  setProductsLocalStorage,
} from '../persistence/localStorage'
import { handleGetProductsToStore } from '../views/store'
import { elementActive, setProductActive } from '../../main'
import { closePopUP, openPopUp } from '../views/popUp'

export const saveProduct = () => {
  let name = document.getElementById('name').value
  let imagen = document.getElementById('imagen').value
  let precio = document.getElementById('precio').value
  let categoria = document.getElementById('categoria').value
  if (
    name.length > 0 &&
    imagen.length > 0 &&
    parseInt(precio) !== 0 &&
    categoria !== 'Seleccione una categoria'
  ) {
    let product
    if (elementActive) {
      product = {
        ...elementActive,
        nombre: name,
        imagen,
        precio,
        categoria,
      }
    } else {
      product = {
        id: new Date(),
        nombre: name,
        imagen,
        precio,
        categoria,
      }
    }
    setProductsLocalStorage(product)
    handleGetProductsToStore()
    closePopUP()
    setProductActive(null)
    Swal.fire({
      title: 'perfecto!',
      text: 'Articulo guardado correctamente!',
      icon: 'success',
    })
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Debes ingresar todos los campos correspondientes',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    })
  }
}
document.getElementById('aceptarBtn').addEventListener('click', saveProduct)

export const cancel = () => {
  closePopUP()
  setProductActive(null)
}
document.getElementById('cancelarBtn').addEventListener('click', cancel)

export const showPropsProduct = productIn => {
  // Obtener los elementos de entrada
  let nameInput = document.getElementById('name')
  let imagenInput = document.getElementById('imagen')
  let precioInput = document.getElementById('precio')
  let categoriaInput = document.getElementById('categoria')

  nameInput.value = productIn.nombre
  imagenInput.value = productIn.imagen
  precioInput.value = productIn.precio
  categoriaInput.value = productIn.categoria

  const buttonDelete = document.getElementById('deleterBtn')

  buttonDelete.addEventListener('click', () => {
    handleDeleteProduct()
  })

  openPopUp()
}

export const handleDeleteProduct = () => {
  Swal.fire({
    title: '¿Seguro deseas eliminar este elemento?',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: `Cancelar`,
  }).then(result => {
    if (result.isConfirmed) {
      const products = handleGetProductsLocalStorage()
      const resutl = products.filter(el => el.id !== elementActive.id)
      localStorage.setItem('products', JSON.stringify(resutl))
      handleGetProductsToStore()
      closePopUP()
    } else if (result.isDenied) {
      closePopUP()
    }
  })
}

export const handleProductActive = product => {
  openPopUp()
  showPropsProduct(product)
}

const buttonAddProduc = document.getElementById('addProduct')
buttonAddProduc.addEventListener('click', () => {
  openPopUp()
})
