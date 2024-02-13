import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider, Outlet, useParams} from "react-router-dom"
import Contact from "./components/Contact"
import Error from "./components/Error"
import ResturantMenu from "./components/ResturantMenu"

/**
 * chunking
 * code splitting
 * lazy loading
 */
const About = lazy (()=>{return import ("./components/About")})
/**
 * Header
 *   Logo
 *   NavItems
 * Body
 *   SearchBar
 *   CardContainer
 *      Resturant Card
 *          img
 *          anme of Res,Rating, cuisine, delievery Time
 * Footer
 *   Container
 *   Links
 *   Address
 *   Contact 
 */

const AppLayout = ()=>{

    return  (
        <div className = "app">
            <Header />
            <Outlet />
            

            
        </div>
    );
}
 
const appRouter  = createBrowserRouter (
    [
        {
            path: "/",
            element: <AppLayout />,
            children:[
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <Suspense
                    fallback = {<h1>loading creators</h1>} 
                    ><About /></Suspense>,
                    errorElement: <Error />
                },
                {
                    path:"/contact",
                    element: <Contact/>,
                    
        
                },
                {
                    path: "/restaurants/:resId",
                    element: <ResturantMenu  />
                  }
                  
            ],
            // errorElement:<Error />
        },
        
    ]
)

const root = ReactDOM.createRoot (document.getElementById("root"));
root.render (<RouterProvider router = {appRouter}></RouterProvider>)