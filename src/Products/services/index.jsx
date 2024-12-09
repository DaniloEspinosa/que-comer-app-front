import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getProducts() {
  try {
    const response = await axios({
      url: `${baseUrl}/products/`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getOneProduct() {
  
}

export async function saveProduct(productData) {
  try {
    console.log(productData)
    const formData = new FormData();
    formData.append("name", productData.name);
    if (productData.image) {
      formData.append("image", productData.image);
    }
    formData.append("description", productData.description);
    formData.append("category", productData.category);

    const response = await axios({
      url: `${baseUrl}/products/`,
      method: "POST",
      data: formData,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function updateProduct(id) {
  alert(`Producto con el id: ${id} eliminado`)

}

export async function deleteProduct(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/products/${id}`,
      method: "DELETE",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
  alert(`Producto con el id: ${id} eliminado`)

}