import { useState } from "react";

export default function Products() {
  const clockProducts = [
    {
      image: "src/images/product1.png",
      name: "JAZZMASTER",
      price: 1050,
      button: "ADD TO CART",
    },
    {
     image: "src/images/product2.png",
      name: "INGERSOLL",
      price: 250,
      button: "ADD TO CART",
    },
    {
      image: "src/images/product3.png",
      name: "ROSE GOLD",
      price: 890,
      button: "ADD TO CART",
    },
    {
      image: "src/images/product2.png",
      name: "INGERSOLL",
      price: 250,
      button: "ADD TO CART",
    },
    {
      image: "src/images/product1.png",
      name: "JAZZMASTER",
      price: 1050,
      button: "ADD TO CART",
    },
  ];

  const quot = [
    {
      quotation: "src/images/Group1.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consecteelit.consecteturelit.consecteturtur adipisicing elit. Placeat Placeat ",
      date: "21 Aug 2025",
      image: "src/images/group71.png",
      name2: "John Doe",
      position: "Director of Company",
    },
    {
      quotation:  "src/images/Group1.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elitelit.conelit.consecteturelit.consectetursectetur. Placeat consectetur adipisicing elit. Placeat",
      date: "22 Aug 2025",
      image: "src/images/Mask.png",
      name2: "Bob Doe",
      position: "Manager of Company",
    },
  ];

  const [value, setValue] = useState(0);

  // ✅ make them functions
  const prevCard = () => {
    setValue((prev) => (prev - 1 + quot.length) % quot.length);
  };

  const nextCard = () => {
    setValue((prev) => (prev + 1) % quot.length);
  };

  return (
    <>
      {/* Product Section */}
     
        
        



        <div className="flex flex-wrap gap-7  
        
        w-[100%] h-[850px]  p-3 

          ">
          
          
          
          
          {clockProducts.map((clock, index) => (
            <div className= "  shadow-xl shadow-gray-200 flex-wrap  px-2 w-[30%] mx-2 text-amber-100 h-[400px]" key={index}>
              
              <div className=" m-5 w-[35%] mt-11 h-[40%] mx-29"><img src={clock.image} alt={clock.name} 
             
             className="w-[100%] h-[100%] mt-3"/></div>


              <p className="p-2">{clock.name}</p>
              <p className="p2 ">${clock.price}</p>
              <button className="m-2 mb-4 bg-red-400 text-black h-10 cursor-pointer w-[120px] rounded">{clock.button}</button>
            </div>
          ))}
      
 
</div>












      {/* Quotation Section */}
      <div className="flex w-[100%] h-[600px]       ">
        


        <div className="w-[400px] h-[200px] mt-40 mx-10">
          <div className=" p-4 w-[100%] mx-20">
            <img src={quot[value].quotation} />
             <p>{quot[value].text}</p>
            <div className="m-3 italic mr-60"><p className="font-bold">{quot[value].date}</p></div>

            <div className="flex mt-5">
              <div><img src={quot[value].image} /></div>
            
                    <div className="mt-2 mx-3">
                      <p>{quot[value].name2}</p>
                      <p>{quot[value].position}</p>
                    </div>
              </div>
   


        <div className="flex gap-2 ml-22 m-4">
          <button
            className=" text-black w-25 h-10"
            onClick={prevCard}
          >
            Prev
          </button>
          <button
            className="bg-amber-100 text-black w-25 h-10"
            onClick={nextCard}
          >
            Next
          </button>
        </div></div>
      </div>



{/* picture on the right side */}

        <div className="p-4 ml-20 mt-10 mr-3 h-[400px] w-[100%] ">

                <div className="w-[70%] h-[100%] mx-43">
                  <img src="src/images/back.png" alt="extra" className="
                  w-[100%] h-[100%] " />
                </div>
            <div className="w-[70%] h-[100%] my-[-300px] mx-30">   
          <img src="src/images/handw.png" alt="extra" className="relative
           
          w-[100%] h-[100%] "/>
              </div>  
        </div>


           


  </div>



    </>
  );
}
