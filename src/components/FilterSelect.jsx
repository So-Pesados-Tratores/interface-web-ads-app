import Select from "react-select";
import { useCallback, useEffect, useState } from "react";
import { ProductService } from "../services/routes/products";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ products, setFilterList }) => {
  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  const handleGetCategories = useCallback(() => {
    setLoading(true);
    ProductService.getCategories()
      .then((res) => {
        setCategoriesList(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

  const handleChange = (selectedOption) => {
    if (selectedOption.value === "") {
      setFilterList(products);
    } else {
      setFilterList(
        products.filter((item) => item.category === selectedOption.value)
      );
    }
  };

  const formattedCategories = [
    { value: "", label: "Limpar Filtro" },
    ...categoriesList,
  ];

  return (
    <Select
      options={formattedCategories}
      defaultValue={{ value: "", label: "Filtre pela Categoria" }}
      styles={customStyles}
      onChange={handleChange}
      isLoading={loading}
    />
  );
};

export default FilterSelect;
