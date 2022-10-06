import reactLogo from "./assets/react.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderForm } from "./components/header.articulo";

function App() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    datos();
  }, []);

  const datos = async () => {
    const respuesta = await axios(`https://jsonplaceholder.typicode.com/users`);

    // const respuestaArticulos = await fetch('http://192.168.43.114:8080/articulo/');
    // const respuestaData = await respuestaArticulos.json();
    // console.log(respuestaData)

    // await fetch(`https://jsonplaceholder.typicode.com/users`);
    // const datos = await respuesta.json()

    setLista(respuesta.data);
  };

  return (
    <>
      <HeaderForm></HeaderForm>
      <h1 className="text-center mb-5">Lista de usuarios conaxios</h1>
      <div className="container">
        <div className="row">
          {lista.map((item, index) => (
            <>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/01/10/15156055021146.jpg"
                    className="card-img-top img-fluid"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <p>
                      <strong>Precio:</strong> $700.60
                    </p>
                    <a href="#" className="btn btn-outline-primary w-75"> 
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
                    </a>
                    <a href="#" className="btn btn-outline-danger w-20 mx-2">
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
    </>
  );
}

export default App;
