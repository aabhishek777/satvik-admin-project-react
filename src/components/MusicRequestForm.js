import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicRequestForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [chargeCustomers, setChargeCustomers] = useState(false);
  const [customRequestAmount, setCustomRequestAmount] = useState(99);
  const [regularRequestAmounts, setRegularRequestAmounts] = useState([79, 59, 39, 19]);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://your-api-endpoint"); // Replace with your actual API endpoint
      setName(response.data.name);
      setLocation(response.data.location);
      setChargeCustomers(response.data.charge_customers);
      setCustomRequestAmount(response.data.category_6);
      setRegularRequestAmounts([
        response.data.category_7,
        response.data.category_8,
        response.data.category_9,
        response.data.category_10,
      ]);
      setIsSaveEnabled(true); // Enable save button by default
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCustomAmountChange = (value) => {
    setCustomRequestAmount(value);
    setIsSaveEnabled(value > 99); // Enable save button only if the value is higher than 99
  };

  const handleRegularAmountChange = (index, value) => {
    const newRegularAmounts = [...regularRequestAmounts];
    newRegularAmounts[index] = value;
    setRegularRequestAmounts(newRegularAmounts);
    const isAllValid = newRegularAmounts.every((amount) => amount > [79, 59, 39, 19][index]);
    setIsSaveEnabled(isAllValid);
  };

  const handleSave = () => {
    // Handle save logic, send updated values to the server
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Charge Customers for Song Requests: {chargeCustomers ? "Yes" : "No"}</p>

      {chargeCustomers && (
        <div>
          <label>
            Custom Song Request Amount:
            <input
              type="number"
              value={customRequestAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
            />
          </label>

          <h3>Regular Song Request Amounts:</h3>
          {regularRequestAmounts.map((amount, index) => (
            <label key={index}>
              {`Category ${index + 7}:`}
              <input
                type="number"
                value={amount}
                onChange={(e) => handleRegularAmountChange(index, e.target.value)}
              />
            </label>
          ))}
        </div>
      )}

      <button onClick={handleSave} disabled={!isSaveEnabled}>
        Save
      </button>
    </div>
  );
};

export default MusicRequestForm;
