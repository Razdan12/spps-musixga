import React from "react";

const DataChart = () => {
  return (
    <>
      <div className="flex justify-between gap-4">
        <div className="w-1/3 bg-gradient-to-br from-primary to-secondary h-32 rounded-md">
          <div className="flex items-center justify-center mt-2 text-white font-bold">
            Pemasukan Bulan Juli
          </div>
        </div>
        <div className="w-1/3 bg-gradient-to-br from-oren1 to-merah h-32 rounded-md">
          <div className="flex items-center justify-center mt-2 text-white font-bold">
            Pemasukan Bulan Juli
          </div>
        </div>
        <div className="w-1/3 bg-gradient-to-br from-green1 to-green2 h-32 rounded-md">
          <div className="flex items-center justify-center mt-2 text-white font-bold">
            Pemasukan Bulan Juli
          </div>
        </div>
      </div>
    </>
  );
};

export default DataChart;
