/* import { useEffect, useState } from "react" */
import { useParams } from "react-router-dom";
/* import axios from "axios" */
import "../../assets/CriptoPage.css";
import usePetition from "../../hooks/usePetition";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistorial from "./info/CriptoHistorial";

const CriptoPage = () => {
  const params = useParams();

  /*
    const API_URL = import.meta.env.VITE_API_URL
    const [cripto,setCripto] = useState({})
    const [history,setHistory] = useState([])

    useEffect( ()=>{

        axios.get(`${API_URL}assets/${params.cryptoid}`)
        .then((data)=>{
            console.log("Data recovered",data.data.data);
            setCripto(data.data.data)
        })
        .catch(
            ()=>{
            console.log("Something failed retrieving the data from the endpoint!!")}
            //e => console.error(e) //no me funciono
        )

        
        axios.get(`${API_URL}assets/${params.cryptoid}/history?interval=d1`)
        .then((data)=>{
            console.log("History recovered",data.data.data);
            setHistory(data.data.data)
        })
        .catch(
            ()=>{
            console.log("Something failed retrieving the data from the endpoint!!")}
            //e => console.error(e) //no me funciono
        )


    },[]) */

  const [cripto,criptoLoading] = usePetition(`assets/${params.cryptoid}`);
  const [history,historyLoading] = usePetition(`assets/${params.cryptoid}/history?interval=d1`);

 /*  if ( !cripto || !history) return <h2>FETCHING DATA....</h2> */
if(criptoLoading || historyLoading) return <span>Still fetching data from endpoint!!!</span>


  return (
    <>
      <div className="cripto-page-container">
        {cripto && <CriptoInfo cripto={cripto}/>}        
        {history && <CriptoHistorial history={history} /> }
    </div>
      
    </>
  );
};

export default CriptoPage;
