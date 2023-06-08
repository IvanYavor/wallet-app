import React from "react";

import dailyPointsCompute from "../utils/dailyPointsCompute";

const DailyPoints: React.FC = () => {
  const currentDate = new Date();
  const day = currentDate.getDate(); // Get the current day (1-31)
  const month = currentDate.getMonth() + 1; // Get the current month (0-11), add 1 to match the usual month range (1-12)
  console.log(day, month);

  const dailyPoints = dailyPointsCompute(day, month);

  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="text-sm text-left">Daily Points</div>
      <div className="text-xs text-gray-500 text-left">{dailyPoints}</div>
    </div>
  );
};

export default DailyPoints;
