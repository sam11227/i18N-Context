import React, { createContext , useState } from "react";

export const BookContext = createContext( );

const BookContextProvider  = (props) =>{
    const [books , setBooks] = useState ([
        {title: 'Name of wind' , id : 1},
        {title: 'Wild of life'  , id : 2},
        {title: 'The hero of age' , id :3},
        {title: 'Mountain Boy' , id : 4}
    ])
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
export default BookContextProvider;