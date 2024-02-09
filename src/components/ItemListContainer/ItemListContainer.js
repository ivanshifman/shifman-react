import "./itemListContainer.css";
import { pedirDatos } from "../../utils/promiseUtils";
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
    pedirDatos(categoriaId)
      .then((res) => {
        setProductos(res);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
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
