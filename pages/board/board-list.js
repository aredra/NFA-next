import Head from "next/head";

export default function Board() {
  const response = [
    // {
      // id: 1,
      // moveNfa: "양평소방서",
      // reportDate: "2020-05-01",
      // moveDate: "2020-05-01",
      // moveTime: "10:00",
      // distance: 1.5,
      // arrivalDate: "2020-05-01",
      // arrivalTime: "10:10",
      // returnDate: "2020-05-01",
      // returnTime: "10:20",
      // patientGender: "남",
      // patientAge: "20",
      // accidentCity: "냠양주시",
    // },
  ];
  return (
    <>
      <Head>
        <title>게시판</title>
      </Head>
      <section className="w-4/5 pb-4 rounded-xl shadow-2xl flex flex-col justify-center items-center bg-[#eee]">
        {response && response.length ? (
          <>
            <h2 className="m-8 text-xl font-semibold">
              2018년도 소방청 구급활동현황
            </h2>
            <table className="w-5/6 table-auto border-collapse border">
              <thead>
                <tr>
                  <th className="p-2 border">Song</th>
                  <th className="p-2 border">Artist</th>
                  <th className="p-2 border">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="p-2 border">Malcolm Lockyer</td>
                  <td className="p-2 border">1961</td>
                </tr>
                <tr>
                  <td className="p-2 border">Witchy Woman</td>
                  <td className="p-2 border">The Eagles</td>
                  <td className="p-2 border">1972</td>
                </tr>
                <tr>
                  <td className="p-2 border">Shining Star</td>
                  <td className="p-2 border">Earth, Wind, and Fire</td>
                  <td className="p-2 border">1975</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <p className="m-8 text-xl font-semibold">게시글이 없습니다.</p>
        )}
      </section>
    </>
  );
}
