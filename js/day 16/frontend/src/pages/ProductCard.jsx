import '../components/navBar.css';

function Products() {

  // ✅ Your JS goes here
  const products = [
    { id: 1, name: "Watch", price: "₹999", img: "https://via.placeholder.com/150", para:"lorem ipsum dolor sit amet consecteur adipisicing elit"},
    { id: 2, name: "Shoes", price: "₹1999", img: "https://via.placeholder.com/150", para:"lorem ipsum dolor sit amet consecteur adipisicing elit"},
    { id: 3, name: "Phone", price: "₹15000", img: "https://via.placeholder.com/150", para:"lorem ipsum dolor sit amet consecteur adipisicing elit"}
  ];

  return (
    <div className="cards">
      {products.map((item) => (
        <div className="cad" key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.para}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;