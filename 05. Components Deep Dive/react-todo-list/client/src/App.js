import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Table from "./Components/Table";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            {/* <Loading /> */}

            <Table />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
