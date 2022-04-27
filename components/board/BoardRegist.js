import React, { useState } from "react";

export default function BoardRegist({ handleSubmit }) {
  const [reportInfo, setReportInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportInfo({ ...reportInfo, [name]: value });
    console.log(reportInfo);
  };

  return (
    <section className="w-2/5 pb-4 rounded-xl shadow-2xl flex flex-col justify-center items-center bg-[#eee]">
      <h2 className="m-8 text-xl font-semibold">구조활동 등록</h2>
      <form
        onSubmit={() => handleSubmit(reportInfo)}
        className="w-3/5 flex flex-col justify-evenly items-center"
      >
        <div className="m-4">
          <label htmlFor="moveNfa">출동지: </label>
          <input
            className="ml-2"
            type="text"
            id="moveNfa"
            name="moveNfa"
            value={reportInfo.moveNfa}
            onChange={handleChange}
          />
        </div>
        <div className="m-4">
          <label htmlFor="reportDate">접수일: </label>
          <input
            className="ml-2"
            type="text"
            id="reportDate"
            name="reportDate"
            value={reportInfo.reportDate}
            onChange={handleChange}
          />
        </div>
        <div className="m-4">
          <label htmlFor="distance">거리: </label>
          <input
            className="ml-2"
            type="text"
            id="distance"
            name="distance"
            value={reportInfo.distance}
            onChange={handleChange}
          />
        </div>
        <div className="m-4">
          <label htmlFor="patientGender">환자 성별: </label>
          <input
            className="ml-2"
            type="text"
            id="patientGender"
            name="patientGender"
            value={reportInfo.patientGender}
            onChange={handleChange}
          />
        </div>
        <div className="m-4">
          <label htmlFor="patientAge">환자 연령: </label>
          <input
            className="ml-2"
            type="number"
            id="patientAge"
            name="patientAge"
            value={reportInfo.patientAge}
            onChange={handleChange}
          />
        </div>
        <div className="m-4">
          <label htmlFor="address">사고발생지: </label>
          <input
            className="ml-2"
            type="text"
            id="accidentCity"
            name="accidentCity"
            value={reportInfo.accidentCity}
            onChange={handleChange}
          />
        </div>
        <button
          className="m-4 py-2 px-8 text-lg font-semibold border-solid border-2 border-[#555] rounded-xl hover:bg-[#555] hover:text-[#eee]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
