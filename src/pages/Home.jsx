import { useLoaderData } from "react-router-dom";

import SingleVisits from "../components/SingleVisits";

import Banner from "../components/Banner";
const Home = () => {
    const states = useLoaderData();
 
    // console.log(states)
   
    return (
        <div>
             <Banner></Banner>
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