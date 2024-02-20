import "./itemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner, SpinnerError } from "../Spinner/Spinner";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { categoriaId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const productosRef = collection(db, "productos");
    const queryFilter = categoriaId
      ? query(productosRef, where("categoria", "==", categoriaId))
      : productosRef;

    getDocs(queryFilter)
      .then((res) => {
        setProductos(
          res.docs
            .map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
            .sort((a, b) => a.titulo.localeCompare(b.titulo))
        );
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
        setIsError(false);
      });
  }, [categoriaId, setIsLoading, setIsError]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  if (isError) return <SpinnerError isError={isError} />;

  return (
    <>
      {categoriaId === undefined && <Banner />}
      <ItemList productos={productos} categoriaId={categoriaId} />
    </>
  );
};

export default ItemListContainer;
