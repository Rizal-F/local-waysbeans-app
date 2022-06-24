import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import { Navbar } from "../../exports";

const Struck = () => {
  const [struct, setStruct] = useState({});
  let { id } = useParams();
  const getStruct = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };

      const response = await API.get("/transactionstruct/" + id, config);
      // Store product data to useState variabel
      setStruct(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStruct(id);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <p>WaysBeans</p>
        <p>Tanggal</p>
        <p>Product</p>
        <p>Qty</p>
        <p>Subtotal</p>
        <p>Total</p>
      </div>
    </div>
  );
};

export default Struck;
