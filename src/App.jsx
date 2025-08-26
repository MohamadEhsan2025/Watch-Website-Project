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






  return (
    <>

      <div className={darkMode ? "bg-gray-900" :" bg-white"  } >



      <div className={`${darkMode ? "bg-gray-900 text-white" :"bg-white         text-black" } flex justify-between items-center px-4 py-3`} >
      

0
                {/* this is NavBar */}
                   
                        <div className="flex items-center gap-6 ">
                                
                                <div className="flex items-center gap-2 "> <img src="src/images/bxs.png"
                                 className='w-6 h-6' /><p className='font-bold'> Rolex </p></div>
                                 <nav className='hidden md:flex gap-6'>
                                <p className='text-amber-600 cursor-pointer'> Home </p>
                                <p className='cursor-pointer'> Featured </p>
                                <p className='cursor-pointer'>Products</p>
                                <p className='cursor-pointer'>New </p>
                                 </nav>
                            </div>
                        
                   <div className=" flex gap-5">
                       <button className="cursor-pointer hover:bg-yellow-200 p-1 rounded" onClick={() => setDarkMode(!darkMode)} > <img src="src/images/Dark.png" className='w-6 h-6'/></button> 
                       <button className="cursor-pointer hover:bg-yellow-200 p-1"> <img src="src/images/Vector.png"  className='h-6 w-6'/> </button> 
                  </div>

                        </div>  
            


            {/* this is headline part */}

            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 ">
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

<div className="flex justify-center items-center w-full md:w-1/2 relative">
  <img
    src="src/images/Home.png"
    className="w-56 sm:w-72 md:w-96 lg:w-[400px] h-auto"
    alt="Home Watch"
  />
</div>

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


                 <div className="p-4 ml-20 mt-2 mr-3 h-[400px] w-[56%] ">

                <div className="w-[75%] h-[100%] mx-2">
                  <img src="src/images/image2.png" alt="extra" className="
                  w-[100%] h-[100%] " />
                </div>
             
        </div>



<div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
  <p className="mt-10 md:mt-20 font-bold text-lg md:text-xl">OUR STORY</p>

  <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
    Inspiration Watch of <br /> this year
  </p>

  <p className="mt-6 text-gray-600 dark:text-gray-300">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden sm:block" />
    Reiciendis illo repudiandae eius aperiam beatae ipsa?
  </p>

  <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded shadow-lg hover:bg-gray-700">
    Discover
  </button>
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

.

      <Products />
      <ClockPart2 />
      </div>
      
    </>
  )
}

export default App;
