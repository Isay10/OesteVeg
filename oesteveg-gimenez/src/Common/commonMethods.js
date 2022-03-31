export const onAdd = (qty) => {
  alert(
    `Se ${qty > 1 ? "han" : "ha"} agregado ${qty} ${
      qty > 1 ? "productos" : "producto"
    } al carrito`
  );
};
