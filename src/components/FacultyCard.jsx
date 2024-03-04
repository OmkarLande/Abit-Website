import React, { useState, useEffect } from "react";
import "../firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";

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
      <div className="bg-bg">
        {facultyData.map((data, ) => (
          <div key={data.id}>
            {console.log("data:", data)}
            <img className="z-10 text-white font-bold font-Roboto" src={data.image} />
            <p className="z-10 text-white font-bold font-Roboto">{data.name}</p>
            <p className="z-10 text-white font-bold font-Roboto">{data.position}</p>
            <p className="z-10 text-white font-bold font-Roboto">{data.quote}</p>
            <p className="z-10 text-white font-bold font-Roboto">{data.linkedin}</p>
            <p className="z-10 text-white font-bold font-Roboto">{data.mail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyCard;
