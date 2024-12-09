import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ListProducts = ({
  products,
  deleteProduct,
  updateProduct,
  handleClickModal,
}) => {
  return (
    <div className="fixed-grid has-1-cols-mobile has-2-cols-tablet has-4-cols-desktop has-6-cols-fullhd">
      <div className="grid">
        {products.map((item) => (
          <div className="cell" key={item._id}>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">{item.name}</p>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <CiEdit
                      onClick={() =>
                        handleClickModal("Editar comida seleccionada", {
                          name: item.name,
                          description: item.description,
                          category: item.category,
                        })
                      }
                    />
                  </span>
                </button>
                <button className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <MdDeleteOutline onClick={() => deleteProduct(item._id)} />
                  </span>
                </button>
              </header>
              <div className="card-image">
                <figure className="image">
                  <img src={item.imgUrl} alt={item.name} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p>{item.description}</p>
                  <p>{item.category}</p>

                  <br />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
