import React, { useState, useEffect } from "react";
import "../firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Flipcard from "../components/Flipcard";
import Navbar from "../components/Navbar";

const FacultyCard = () => {
  const [facultyData, setFacultyData] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      console.log("1");
      const querySnapshot = await getDocs(
        collection(db, "faculty-information")
      );
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push({ key: doc.id, data: doc.data() }); 
      });
  
      tempArr.sort((a, b) => parseInt(a.key) - parseInt(b.key));
      const sortedData = tempArr.map(item => item.data);
  
      setFacultyData(sortedData);
      console.log("tempArr: ", tempArr);
      console.log(facultyData);
    };
    fetchDataFromFirestore();
  }, []);
  

  return (
    <div>
      <Navbar/>
      <div className="bg-bg flex flex-row flex-wrap justify-center items-center mt-32">
        {facultyData.map((data) => (
          <div key={data.id} className="">
            <Flipcard
              name={data.name}
              image={data.image}
              position={data.position}
              quote={data.quote}
              linkedin={data.linkedin}
              mail={data.mail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyCard;
