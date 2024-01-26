import data from "../data/data.json"

export const pedirDatos = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoriaId) {
                const productosFiltrados = data.filter(item => item.categoria === categoriaId);
                resolve(productosFiltrados);
            } else {
                resolve(data);
            }
        }, 1000);
    });
};

export const pedirDatosId = (productoID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.find(prod => prod.id.toString() === productoID.toString()))
        }, 1000)
    });
}