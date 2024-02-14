import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./pieChart.css";
// import Chart from "react-google-charts";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";

const pieChart = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["House", 42],
    ["Food", 28],
    ["Transport", 14],
    ["Shopping", 11],
    ["Others", 5],
  ];

  const options = {
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className="pie-chart">
      <div className="chart">
        <h4 className="font-bold">Outcome</h4>
        {/* <Chart
          chartType="PieChart"
          width="100%"
          height="250px"
          data={data}
          options={options}
        /> */}
        <div className="price">
          <h4 className="font-bold">
            <FaRupeeSign />
            8273927.00
          </h4>
          <p>Total</p>
        </div>
      </div>
      <div className="filter">
        <select className="form-select w-auto" aria-label="Default select example">
          <option selected>Last Month</option>
          <option value="1">August</option>
          <option value="2">July</option>
          <option value="3">June</option>
        </select>
        <br />
        <div className="prices">
          <div className="each">
            {/* <MovingIcon className="ui-icons icons" /> */}
            <BiTrendingUp className="ui-icons icons" />
            <div>
              <p>Income</p>
              <h5 className="font-bold">
                <FaRupeeSign />
                3267.00
              </h5>
            </div>
          </div>
          <br />
          <div className="each">
            {/* <TrendingDownIcon className="ui-icons icons" /> */}
            <BiTrendingDown className="ui-icons icons" />
            <div>
              <p>Outcome</p>
              <h5 className="font-bold">
                <FaRupeeSign />
                3267.00
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pieChart;
