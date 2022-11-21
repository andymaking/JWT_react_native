import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AppContext = createContext(null);

export const AppProvider = ({children}) =>{

    const [articles, setArticles]= useState([])

    const getNews = (search)=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=59e6977e04aa41ffbf62251db3334b28', {
            params:{
                category: 'technology',
                q: search
            }
        })
            .then( (response) => {
                setArticles(response.data.articles)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }

    useEffect(() => {
        getNews("");
        console.log(articles);
    }, [])

    return(
        <AppContext.Provider value={{getNews, articles}}>
            {children}
        </AppContext.Provider>
    )
}
