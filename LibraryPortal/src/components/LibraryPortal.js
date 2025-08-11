import { useState } from "react"; 
import { fetchBooks } from "../api/fetchBooks";
import ErrorAlert from "./ErrorAlert";
import LibraryDetail from "./LibraryDetail";


function LibraryPortal() {
  //returns value of state (searchInputText) and a function to return the start (setSearchInputText)
  const [searchInputText, setSearchInputText] = useState('')
  const [userEnteredText, setUserEnteredText] = useState('') 
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)
  //helps us to hold the user entered search text 
  const onSearchTextEnter = (e) => {
    e.preventDefault(); 
    fetchBooks(searchInputText, setBooks, setError)
    setUserEnteredText(searchInputText)
  };

  //wrapping in a react fragment so we can return multiple divs!
  return (
    <> 
      <div className="row">
        <div className="col-md-12">
          <form className="d-flex" onSubmit={onSearchTextEnter}>
            <input className="form-control me-sm-2" type="text" placeholder="Search Library"
              value={searchInputText}
              onChange={(e) => setSearchInputText(e.target.value)}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
      {error && <ErrorAlert error={error} search={userEnteredText}/>}
      {books.length > 0 && <p className='text-dark'>Showing {books.length} results for '{userEnteredText}'</p>}
      {books.map((book) => (
                <LibraryDetail key={book.imdbID} movie={book} />
            ))}
    </>
    
  );
}

export default LibraryPortal;