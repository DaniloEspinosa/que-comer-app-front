import { useState, useRef, useEffect } from "react";

const Form = ({ handleSubmit, productSelected }) => {
  const [formValues, setFormValues] = useState({
    name: productSelected.name,
    description: productSelected.description,
    category: productSelected.category,
  });

  const inputFileRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ ...formValues, image: inputFileRef.current?.files[0] });
  };

  return (
    <>
      <form onSubmit={_handleSubmit}>
        <div className="field">
          <label className="label">Nombre comida</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Ingresar nombre"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Descripción</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Ingresar descripción"
              name="description"
              value={formValues.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Categoría</label>
          <div className="control">
            <div className="select">
              <select
                name="category"
                value={formValues.category}
                onChange={handleChange}
              >
                <option value="desayuno">Desayuno</option>
                <option value="almuerzo">Almuerzo</option>
                <option value="merienda">Merienda</option>
                <option value="cena">Cena</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input type="file" ref={inputFileRef} />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary" type="submit">
              save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
