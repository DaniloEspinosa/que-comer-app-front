import { useState, useEffect } from "react";
import AddButton from "./AddButton";
import Header from "./Header";
import ListProducts from "./ListProducts";
import Form from "./Form";
import {
  getProducts,
  saveProduct,
  deleteProduct,
  updateProduct,
} from "../services";
import Loading from "./Loading";

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});

  async function loadProduct() {
    const response = await getProducts();
    if (response.status === 200 && Array.isArray(response.data)) {
      setProducts(response.data);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadProduct();
  }, [products]);

  const handleSubmit = async (data) => {
    await saveProduct(data);
    loadProduct();
    setIsModalOpen(false);
  };

  const handleClickModal = (title, producto) => {
    setTitleModal(title);
    setProductSelected({ ...productSelected, ...producto });
    console.log(productSelected);
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <Header title="Que comer?? APP" />
      <AddButton
        onClick={() =>
          handleClickModal("Agregar nueva comida", {
            name: "nombre",
            description: "descripcion",
            category: "otro",
          })
        }
      />
      <br />
      {isLoading && <Loading />}
      {!isLoading && !products.length && (
        <h2 className="title has-text-centered">You don't have products</h2>
      )}
      {!isLoading && products.length && (
        <ListProducts
          products={products}
          deleteProduct={deleteProduct}
          updateProduct={updateProduct}
          handleClickModal={handleClickModal}
        />
      )}

      {/* Este es el modal del formulario */}
      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{titleModal}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setIsModalOpen(false)}
            ></button>
          </header>
          <section className="modal-card-body">
            <Form
              handleSubmit={handleSubmit}
              productSelected={productSelected}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
