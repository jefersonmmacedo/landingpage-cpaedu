import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./depoiments.css"

export function Depoiments() {

    const [depoiments, setDepoiments] = useState([]);

    useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "depoiments"));  
        const list = []
        querySnapshot.forEach((doc) => {
      //      console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            name: doc.data().name,
            image: doc.data().image,
            course: doc.data().course,
            depoiment: doc.data().depoiment,
            }
            
            // console.log(data)
            list.push(data)
          });
          setDepoiments(list)
    }

    loadCondadatos()
}, [])

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, display: "block", background: "#512a79", borderRadius: "50%", border: "1px solid 512a79", padding: "0"  }}
        onClick={onClick}
      />
    );
  }

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#512a79", borderRadius: "50%", border: "1px solid 512a79", padding: "0" }}
        onClick={onClick}
      />
    );
  }


const newDepoiments = depoiments.slice(0,5)

var settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
 

    return (
        <Slider {...settings}>
        {depoiments.map((depoiment) => {
           return (
            <div className="depoimentUnic" key={depoiment.id}>
            {/* <div className="image">
                <img src={depoiment.image} alt={depoiment.name} />
            </div> */}
            <div className="text">
            <h4>{depoiment.depoiment}</h4>                </div>
            <div className="name">
                <h5>{depoiment.name}</h5>
            </div>
            <div className="course">
            <p>{depoiment.course}</p>
            </div>
            </div>
           )
        })}
    </Slider>
    )
}
