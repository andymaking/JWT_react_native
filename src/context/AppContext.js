import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AppContext = createContext(null);

export const AppProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false)

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
                setIsLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setIsLoading(false)
            })
            .then(function () {
                setIsLoading(false)
                // always executed
            });

    }

    useEffect(() => {
        getNews("");
        console.log(articles);
    }, [])

    return(
        <AppContext.Provider value={{getNews, articles, isLoading}}>
            {children}
        </AppContext.Provider>
    )
}
