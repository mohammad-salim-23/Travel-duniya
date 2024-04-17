import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import SingleVisits from "../components/SingleVisits";
import { useState } from "react";

const Home = () => {
    const states = useLoaderData();
    const [isHovered,setIsHovered] = useState(false);
    // console.log(states)
    const handleMouseEnter = ()=>{
        setIsHovered(true);
    }
    const handleMouseLeave=()=>{
        setIsHovered(false);
    }
    return (
        <div>
           <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
               >
           
                {
                  states.map(state=><SingleVisits
                  key={state.id}
                  state={state}
                  >

                  </SingleVisits>)
                }    
       
           </div>
        </div>
    );
};

export default Home;