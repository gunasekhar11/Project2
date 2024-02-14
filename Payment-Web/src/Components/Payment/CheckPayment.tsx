import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Baseurl, authHeaders } from '../Custom/ApiEndpoints';
import axios from 'axios';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Loader from './Loader';
import Success from '../PaymentStatus/Success';
import Failure from '../PaymentStatus/Failure';

const CheckPayment: React.FC = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  const checkStatus = () => {
    const headers = authHeaders;
    axios.get(Baseurl + "razorpay/" + id, { headers })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "successful") {
          setStatus("successful");
          setLoading(false);
        } else if (response.data.message === "failed") {
          setStatus("failed");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className='text-center'>
      {loading ? (
          <Loader />
      ) : (
        <motion.div
          initial={{ scale: 0 }} // Initial scale of 0
          animate={{ scale: 1 }} // Animate to scale 1
          transition={{ type: 'tween', duration: 0.5 }} // Use "tween" transition
        >
          {status === "successful" ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'tween', duration: 0.5 }} // Use "tween" transition
            >
              {/* Your Success component content */}
              <Success />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Your Failure component content */}
              <Failure />
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CheckPayment;
