import { getCat, printProd } from "../components/Apis";

const TEST = () => {
  console.clear();
  const lista = printProd();
  const listaCat = getCat(lista);

  console.log(listaCat);

  const a = lista.filter((ele) => ele.category == "laptops");
  console.log(a);
  return <div>Test</div>;
};

export default TEST;
