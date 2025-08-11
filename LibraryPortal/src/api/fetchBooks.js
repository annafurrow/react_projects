export const fetchBooks = async (searchText, booksCallBack, errorCallback, finallyCallBack) => {
    try{
        //for strings in react, do not use quotes! use back ticks ``````
         const response = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=b1ef107e&type=movie`);
         const data = await response.json();

        if(data.Response === 'True'){
            const booksPromise = data.Search.map((book) => fetchBookDetails(book.imdbID, errorCallback));
            const bookDetails = await Promise.all(booksPromise);
            booksCallBack(bookDetails);
            errorCallback(null);
        }
        else{
            booksCallBack([]);
            errorCallback(data.Error); 
        }
    }
    catch(err){
        booksCallBack([]);
        errorCallback('An error occurred while fetching data.');
    }
    finally{
        finallyCallBack(); 
    }
};

const fetchBookDetails = async(id, errorCallback) => {
    try{
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=b1ef107e&type=movie`);
        const data = await response.json();

        if(data.Response === 'True'){
            return data; 
        }
        else{
            throw new Error(data.Error);
        }
    }
    catch(err)
    {
        errorCallback('An error occurred while fetching data.');
    }
};