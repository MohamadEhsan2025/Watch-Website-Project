

import React, { useState } from "react";

export default function ClockPart2(){
    const clocks = [
        {image:  "src/images/product3.png",
            name: "JAZZMASTER",
            price: 1050,
            button: "ADD TO CART",
        },
          {image:   "src/images/product2.png",
            name: "INGERSOLL",
            price: 250,
            button: "ADD TO CART",
        },
          {image:  "src/images/product1.png",
            name: "ROSE GOLD",
            price: 890,
            button: "ADD TO CART",
        },
           
    ];


    const [cart, setCart] = useState([])

    const addCart=(clocks)=>{
            setCart([...cart]);

    }
    return(
        <>
       
        <div className=" my-1 flex gap-7  
        
        w-[100%] h-[440px]  p-3  

          ">


        {clocks.map((clocks,index)=>{

            return(

                    <div className= "  shadow-xl shadow-gray-200 flex-wrap  px-2 w-[30%] mx-2 text-gray-600-100 h-[400px]" key={index}>
                    <div className="ml-[100px] pt-15"><img src={clocks.image} className="ml-8"  /> </div>
                    <p className="m-3">{clocks.name}</p>
                    <p>{clocks.price}</p>
                    <button className=" m-2 bg-red-400 text-black h-10 cursor-pointer w-[120px] rounded">{clocks.button}</button>
                </div>
            )

        })}

        </div>



{/* add to cart */}

<div className="flex justify-between w-[1000px] px-2 mx-2">

    {
        clocks.map((item,index)=>{
            return(

                    <div className="flex justify-between " key={index}>
                        <img src ={clocks.image} />
                        <p>{clocks.name}</p>
                        <p> {clocks.price}</p>
                        <button onClick={addCart}>{clocks.button}</button>

                    </div>

            )
        })

    }
</div>


      
 <div className="flex p-4 w-[90%] bg-orange-300 mt-10 mx-14 ">

            <div className=" w-[50%] ">
                1
                <h1 className="text-3xl font-bold"> Subscribe Our <br /> Newsletter</h1>
                <p className="m-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> 
                Non porro recusandae dicta.Non porro recusandae dicta.Non <br />
                porro recusandae dicta.</p>
            </div>

            <div className="w-[50%] my-14 bg-peach ">
                <input 
                placeholder="Enter your email " className="bg-amber-100 h-[45px] w-[300px]"></input>
                <button className="bg-black text-white h-[45px] w-[100px]"> SUBSCRIBE</button>
            </div>


       

        </div>


           

  
        

       
{/* 
 <div>
            2
        </div> */}

                    {/* this is footer */}

                    <div className="flex justify-between mt-25 text-gray-700">

                     


                      <div>
                        <p className="font-bold mb-2 text-black"> Company</p>
                        <p>About</p>
                        <p> Careers</p>
                        <p> Mobile</p>
                      </div>

                      <div>
                      <p className="font-bold mb-2 text-black"> Contact</p>
                        <p>Help/FAQ</p>
                        <p> Press</p>
                        <p> Affilites</p>
                      </div>

                      <div>
                          <p className="font-bold mb-2 text-black"> More</p>
                        <p>Airlinees</p>
                        <p> Airline</p>
                        <p> Low fore tips</p>
                      </div>


                      <div>
                          <div className="flex w-[40px] " >
                            <img src="src/images/play.png"></img>
                            <img src="src/images/play.png"></img>
                            <img src="src/images/play.png"></img>
                          </div>
                          <p> Discover our app</p>
                          <div> 
                            <button> play store </button>
                            <button className="font-black"> apple</button>
                          </div>
                      </div>
                    
                    </div>
                    <footer className=" text-[14px] mt-8 text-gray-700"> All Rigt reserved @jadoo.co </footer>

                    


        </>
    );
};


