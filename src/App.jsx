import Counter from "./components/counter";
const App = () => {
  const newItemsArr = [
    { name: "Jackets", rating: 4 },
    { name: "Shirts", rating: 3.5 },
    { name: "Caps", rating: 4.1 },
    { name: "Jeans", rating: 4.2 },
    { name: "T-Shirts", rating: 4.9 }
  ];

  return (
    <div>
      {newItemsArr.map((clothItems, index) => {
        return <Counter key={index} items={clothItems} />;
      })}
    </div>
  );
};

export default App;
