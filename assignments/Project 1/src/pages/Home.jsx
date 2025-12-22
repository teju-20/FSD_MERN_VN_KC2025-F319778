import booksData from "../data/books.json";

function Home() {
  // Books added by Seller (Admin)
  const addedBooks = JSON.parse(localStorage.getItem("books")) || [];

  // Combine default books + admin added books
  const books = [...booksData, ...addedBooks];

  const addToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if book already exists in cart
    const alreadyAdded = cart.find(item => item.id === book.id);

    if (alreadyAdded) {
      alert("Book already in cart");
      return;
    }

    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Book added to cart");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Available Books</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />

            <h3>{book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Price:</b> ₹{book.price}</p>

            <button
              onClick={() => addToCart(book)}
              style={{
                padding: "8px 12px",
                background: "#1e3a8a",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
