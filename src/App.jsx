import reactLogo from "./assets/react.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderForm } from "./components/header.articulo";


function App() {
  //useState para la api 
  const [lista, setLista] = useState([]);
  //useState para la cantidad seleccionada
  const [cantidad, setCantidad] = useState(0);

  //useState para localStorage item y objeto
  const [objetoCarro, setObjetoCarro] = useState({});
  const [objetosCarro, setObjetosCaro] = useState([]);

  //LocalStorage Variable 
  const [local, setLocal] = useState([]);


  useEffect(() => {
    datos();
    
  }, []);

  //Consulta Appi
  const datos = async () => {
    const respuestaArticulos = await axios(
      "http://192.168.43.83:8080/articulo"
    );
    setLista(respuestaArticulos.data._embedded.articuloes);
  };


  //Valor de la cantidad deseada por el usuario
  const handleChange = ({target}) => {
    setCantidad(target.value);
  }

  //Guardar en localStorage
  const guardarLocal = async (e, item) => {
    item.cantidad = cantidad
    objetosCarro.push(item)
    localStorage.setItem('carrito', JSON.stringify(objetosCarro));
    get()
    
  }

  //Consultar localStorage
  const get = () =>{
    const datos = localStorage.getItem("carrito");
    const datosA  = JSON.parse(datos);
    // datosA.forEach(element => {
    //   local.push(element)
    // });
    // console.log(local)
    setLocal(datosA)
    console.log(local)
  }


  return (
    <>
      <HeaderForm></HeaderForm>
      <h1 className="text-center mb-5">Lista de Articulos</h1>
      <div className="container">
        <div className="row">
          { lista.map((item, index) => (
            <>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/01/10/15156055021146.jpg"
                    className="card-img-top img-fluid"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.codInterno}</h5>
                    <p className="card-text">
                      <strong> {item.descripcion}</strong>
                    </p>
                    <p>
                      <strong>Precio:</strong> ${item.precioCompra}
                    </p>
                    <div className="row mb-3">
                    
                      <div className="col-md-4">
                        <select
                          class="form-select w-100"
                          aria-label="Default select example"
                          onChange={handleChange}
                          value={cantidad}
                          required
                        >
                          {/* <option >-</option> */}
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div className="col-md-8">
                        <button href="#" className="btn btn-outline-primary w-100"  onClick={((e) => guardarLocal(e, item))}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-bag-check-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                   

                   

                    <a href="#" className="btn btn-outline-danger w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              
            </>
          ))}
        </div>
      </div>
      <h1>Carrito</h1>
      {local.map((item, index) =>{
        <h1>{item.descripcion}</h1>
      })}
    </>
  );
}

export default App;
