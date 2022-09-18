import { getCat, printProd } from "../components/Apis";

const TEST = () => {
  const lista = printProd();
  const listaCat = getCat(lista);

  return <div>Test</div>;
};

export default TEST;
