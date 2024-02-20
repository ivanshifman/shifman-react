import "./checkOut.css";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/config";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import {
  getDocs,
  collection,
  query,
  where,
  addDoc,
  documentId,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { Spinner, SpinnerError } from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchaseDay, setPurchaseDay] = useState("");

  const { carrito, total, clearCart } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const createOrder = async (data) => {
    if (carrito.length === 0) {
      const result = await Swal.fire({
        title: "Error",
        text: "Carrito debe contener productos",
        icon: "error",
        confirmButtonText: "Aceptar",
        allowOutsideClick: false,
        customClass: {
          icon: "iconoAlertaDos",
          confirmButton: 'boton-confirmar-check'
        },
      });
  
      return result.isConfirmed;
    }

    setIsLoading(true);
    setIsError(false);

    try {
      const objOrder = {
        buyer: data,
        items: carrito,
        total: total(),
        date: Timestamp.fromDate(new Date()),
        purchaseDate: new Date().toLocaleString(),
        purchaseDay: new Date().toLocaleDateString("en-US", {
          weekday: "long",
        }),
      };

      setPurchaseDate(objOrder.purchaseDate);
      setPurchaseDay(objOrder.purchaseDay);

      const batch = writeBatch(db);

      const ids = carrito.map((prod) => prod.id);

      const productRef = collection(db, "productos");

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = carrito.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.cantidad;

        batch.update(doc.ref, { stock: stockDb - prodQuantity });
      });

      await batch.commit();

      const orderRef = collection(db, "pedidos");

      const orderAdded = await addDoc(orderRef, objOrder);

      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  if (isLoading) return <Spinner isLoading={isLoading} />;

  if (isError) return <SpinnerError isError={isError} />;

  if (orderId) {
    return (
      <div className="checkOutId">
        <div className="checkId">
          <h2>Tu orden ha sido generada</h2>
          <p>Order Id: {orderId}</p>
          <span>Fecha de la compra: {purchaseDate}</span>
          <span>Dia semanal de la compra: {purchaseDay}</span>
          <Link className="boton-check" to={`/`}>
            <button className="boton-check-b">Volver a inicio</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkOut">
      <div className="form-check">
        <h3>Termina tu compra</h3>
        <form onSubmit={handleSubmit(createOrder)}>
          <div className="form-check-contenido">
            <div className="fila100-check">
              <div className="input-contenido-check">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  id="nombre"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "Nombre es requerido",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Nombre no debe contener números ni espacios",
                    },
                    minLength: {
                      value: 3,
                      message: "Nombre debe tener al menos 3 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "Nombre debe ser menor a 20 caracteres",
                    },
                  })}
                />
                {errors.nombre && <span>{errors.nombre.message}</span>}
              </div>
            </div>
            <div className="fila100-check">
              <div className="input-contenido-check">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  placeholder="Apellido"
                  id="apellido"
                  {...register("apellido", {
                    required: {
                      value: true,
                      message: "Apellido es requerido",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Apellido no debe números ni espacios",
                    },
                    minLength: {
                      value: 3,
                      message: "Apellido debe tener al menos 3 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "Apellido debe ser menor a 20 caracteres",
                    },
                  })}
                />
                {errors.apellido && <span>{errors.apellido.message}</span>}
              </div>
            </div>

            <div className="fila100-check">
              <div className="input-contenido-check">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Correo es requerido",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Correo no válido",
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
            </div>
            <div className="fila100-check">
              <div className="input-contenido-check">
                <label htmlFor="emailrepeat">Repetir Email</label>
                <input
                  type="email"
                  placeholder="Repetir Email"
                  id="emailrepeat"
                  {...register("emailrepeat", {
                    required: {
                      value: true,
                      message: "Confirmar correo es requerido",
                    },
                    validate: (value) =>
                      value === watch("email") || "Los emails no coinciden",
                  })}
                />
                {errors.emailrepeat && (
                  <span>{errors.emailrepeat.message}</span>
                )}
              </div>
            </div>

            <div className="fila100-check">
              <div className="input-contenido-check">
                <label htmlFor="numero">Número</label>
                <input
                  type="tel"
                  placeholder="Numero"
                  id="numero"
                  {...register("numero", {
                    required: {
                      value: true,
                      message: "Número es requerido",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Número debe contener solo números",
                    },
                    minLength: {
                      value: 8,
                      message: "Número debe tener al menos 8 caracteres",
                    },
                    maxLength: {
                      value: 15,
                      message: "Número debe ser menor a 15 caracteres",
                    },
                  })}
                />
                {errors.numero && <span>{errors.numero.message}</span>}
              </div>
            </div>

            <div className="fila100-check">
              <div className="input-contenido-check input-boton-check">
                <button type="submit">Comprar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
