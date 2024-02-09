const formatarMoedaReal = valor => {
  valor = valor.toString().replace(/\D/g, "");
  valor = Number(valor) / 100;
  valor = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  return valor;
};

export default formatarMoedaReal;