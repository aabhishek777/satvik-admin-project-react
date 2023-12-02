import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MusicRequestForm from "./MusicRequestForm";

const Dashboard = () => {
  const [adminData, setAdminData] = useState({});
  const data = useSelector((state) => state?.login);

  useEffect(() => {
    getAdminDetails();
  }, [data]); 
  const getAdminDetails = async () => {
    try {
      const response = await axios.get(
        `https://stg.dhunjam.in/account/admin/${data?.login?.data?.id}`
      );
      setAdminData(response?.data);
      console.log('adminData', adminData);
    } catch (error) {
      console.error('Error fetching admin details:', error);
    }
  };

  const updatePrice = async () => {
    try {
      const response = await axios.put(
        `https://stg.dhunjam.in/account/admin/${data?.login?.data?.id}`,
        {
          amount: {
            category_6: 500,
          },
        }
		);
		getAdminDetails();
    //   console.log(response?.data?.data);
    //   setAdminData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Dashboard
      <button onClick={updatePrice}>updatePrice</button>
		  <p>hi</p>
		  <MusicRequestForm/>
    </div>
  );
};

export default Dashboard;
