const TEST = ({ p, cat }) => {
  console.log(p);
  console.log(cat);
  return (
    <div>
      {cat.map((ele) => (
        <div>{ele}</div>
      ))}
    </div>
  );
};

export default TEST;

/* 
<Route path="smartphones" element={<ItemList p={p} filter="smartphones" />} />;
 */
