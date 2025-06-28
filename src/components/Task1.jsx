import React, { useEffect, useState } from "react";
import statue from "../assets/statue.png";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import "../App.css";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import axios from "axios";



function Task1() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const [apiData, setApiData] = useState([]);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.in/api/products");
        setApiData(response.data); // ✅ actual data set ho raha hai
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  console.log(apiData)

  return (
    <div className="container">
      {/* Sidebar */}
      <div className={`left-panel ${isSidebarOpen ? "open" : "closed"}`}>
        <IoIosArrowBack className="toggle-icon" onClick={toggleSidebar} />
        <div>
          <h2>MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS</h2>
          <div className="icons">
            <span><CiHeart /> 0</span>
            <span><CiShare2 /> 120</span>
            <span>💬 27</span>
          </div>

          <div className="details">
            <p><strong>Dynasty:</strong> Ahichchhatra</p>
            <p><strong>Period:</strong> 200 CE</p>
            <p><strong>Material:</strong> Sandstone</p>
            <p><strong>Location:</strong> National Museum</p>
          </div>

          <div className="desc">
            Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The
            <div className="read-more">→ READ MORE</div>
          </div>
        </div>
        {/* <div>
          <ul>
            {apiData.map((product) => (
              <li key={product.id}>
                <h4>{product.title}</h4>
                <p>Price: ₹{product.price}</p>
                <img src={product.image} alt={product.title} width="100" />
              </li>
            ))}
          </ul>
        </div> */}

        <div className="buttons">
          <button className="add">ADD TO COLLECTION</button>
          <button className="souvenir">SOUVENIR</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="right-panel">
        <MdOutlineKeyboardDoubleArrowLeft className="toggle-ic" onClick={toggleSidebar} />
        <img src={statue} alt="Statue" className="statue-image" />
      </div>
    </div>
  );
}

export default Task1;
