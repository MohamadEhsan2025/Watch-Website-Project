import React, { useState } from 'react'
import './App.css'
import Products from './Products'
import ClockPart2 from './ClockParts2'

function App() {




  
    const clocks = [
        {image:  "src/images/product1.png",
            name: "JAZZMASTER",
            price: 1050,
            button: "ADD TO CART",
        },
          {image:  "src/images/product2.png",
            name: "INGERSOLL",
            price: 250,
            button: "ADD TO CART",
        },
          {image:  "src/images/product3.png",
            name: "ROSE GOLD",
            price: 890,
            button: "ADD TO CART",
        },
    ];




const [cart, setCart] =useState([])

const cartButton =(clocks)=>{
      setCart([...cart,clocks])
};

  const [darkMode, setDarkMode] = useState(false);



// const darkModeButoon = darkMode ?" bg-white" : "bg-black";


  return (
    <>

      <div className={darkMode ? "bg-gray-900" :" bg-white"  } >



      <div className={darkMode ? "bg-gray-900 text-white" :" bg-white text-black"  }>
  <div className="flex justify-between w-[100%] h-[50%]" >
      


                {/* this is NavBar */}
                   
                        <div className="w-[48%] flex justify-between ">
                                
                                <div className="flex text-black gap-2 "> <img src="src/images/bxs.png" /><p> Rolex </p></div>
                                <p className='text-amber-600'> Home </p>
                                <p> Featured </p>
                                <p>Products</p>
                                <p> New </p>
                                 
                            </div>
                        
                   <div className=" mx-[40px]  w-[20%] flex justify-end gap-7  z-20">
                       <button className="cursor-pointer hover:bg-yellow-200 " onClick={() => setDarkMode(!darkMode)} > <img src="src/images/Dark.png" /></button> 
                       <button className="cursor-pointer hover:bg-yellow-200"> <img src="src/images/Vector.png" /> </button> 
                  </div>

                        </div>  
            


            {/* this is headline part */}

            <div className="flex">
            <div className=" w-[50%] h-[50%] my-[150px]">

                
                     
                            <h1 className="text-5xl font-bold mb-6"> NEW WATCH COLLECTIONs B720</h1>
                          <p className='mb-3'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, 
                          <br />  autem voluptate fugiat repudiandae reiciendis magni?</p>
                                <p className="text-amber-500 text-2xl"> $12345</p> 
                        

                            <div className="flex my-10 ">
                                <button className="bg-gray-400 text-black w-30 h-15"> Discover</button>
                                <button className="bg-black text-amber-50 w-36 h-17 my-[-4px]"> ADD TO CART</button>
                            </div>
                  
                    
                        </div> 

        <div className='mx-200 my-[-100px] w-[90%] h-[100%] absolute'><img src="src/images/Home.png" className="h-[80%] mt-19 w-[400px] relative"></img></div>

      </div></div>


      {/* this is the first part */}


      <div className="flex   shadow-xl shadow-gray-200 mx-23 gap-30 w-[80%] h-[40%] px-1 my-50  text-amber-50 shadow-4xl ">

            {clocks.map((clocks,index)=>{

                return(

                    <div className=" flex-col px-2 m-3 w-[40%]
                     text-amber-50  shadow-xl shadow-gray-200" key={index}>


                        <img src={clocks.image} className="w-[50%] mt-6 mx-15" />
                        <p className="m-2">{clocks.name}</p>
                        <p className="m-1">${clocks.price}</p>
                        <button  onClick={()=>cartButton(clocks)} className="  mb-6 bg-red-400 text-black h-10 cursor-pointer w-[120px] rounded">{clocks.button}</button>
                    </div>
                )

            })}

            </div>


            <div className="flex w-[100%] h-[50%] ">


                <div className="w-[50%] ">
                    <img src="src/images/story.png " className="p-12 absolute my-[-70px] left-[130px]" />
                    <img src="src/images/back.png" className="p-12" />

                </div>




                <div className=" w-[50%]" >
                    
                    <p className="m-10 mt-20 font-bold text-xl items-start"> OUR STORY</p>
                    <p className="text-4xl font-bold m-3"> Inspiration Watch of<br /> this year</p>
                    <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Reiciendis illo repudiandae eius aperiam beatae ipsa?</p>

                  <button className="mb-3 bg-gray-800 text-white w-23 h-10 shadow-2xl shadow-gray-600"> Discover</button>
                </div>

            </div>
            

<div> 



              {/* this is where cart are added */}

              <div className="bg-yellow-100 p-4">
                <h2>Cart Items:</h2>
                {cart.map((item, i) => (
                  <p key={i}>{item.name} - ${item.price}</p>
                ))}
              </div>



      <Products />
      <ClockPart2 />
      </div>
      </div>
    </>
  )
}

export default App;
