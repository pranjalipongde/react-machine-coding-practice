import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [siblingCount, setSiblingCount] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.products.length / 10));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const start = Math.max(1, page - siblingCount);
    const end = Math.min(totalPages, page + siblingCount);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <span
          className={page === i ? "pagination__selected" : ""}
          onClick={() => selectPageHandler(i)}
          key={i}
        >
          {i}
        </span>
      );
    }

    return buttons;
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />{" "}
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {totalPages > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? " " : "pagination__disabled"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ⬅️
          </span>

          {renderPageButtons()}

          <span
            className={page < totalPages ? " " : "pagination__disabled"}
            onClick={() => selectPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
