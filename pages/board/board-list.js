import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { boardActions } from "@/redux/reducers/boardReducer.ts";
import { getRescueActivityListApi } from "@/api/boardApi.ts";
import BoardRegist from "@/components/board/BoardRegist.js";

export default function Board() {
  const [note, setNote] = useState();
  const [showRegistModal, setShowRegistModal] = useState(false);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRescueActivityListApi();
        if (response) {
          setActivityList(activityList);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const onSubmit = (report) => {
    dispatch(boardActions.createRescueActivity(report));
    setShowRegistModal(false);
  };
  const onClickCreate = () => {
    console.log("onClickCreate");
    setShowRegistModal(true);
    console.log("dispatch end");
  };
  const onClickUpdate = () => {
    dispatch(boardActions.updateRescueActivity(note));
  };
  const onClickDelete = () => {
    dispatch(boardActions.deleteRescueActivity(note));
  };
  return (
    <>
      <Head>
        <title>게시판</title>
      </Head>
      {!showRegistModal && (
        <>
          <section className="w-4/5 pb-4 rounded-xl shadow-2xl flex flex-col justify-center items-center bg-[#eee]">
            {activityList && activityList.length ? (
              <>
                <h2 className="m-8 text-xl font-semibold">
                  2018년도 소방청 구급활동현황
                </h2>
                <table className="w-5/6 table-auto border-collapse border">
                  <thead>
                    <tr>
                      <th className="p-2 border">출동지</th>
                      <th className="p-2 border">접수일</th>
                      <th className="p-2 border">거리</th>
                      <th className="p-2 border">환자 성별</th>
                      <th className="p-2 border">환자 연령</th>
                      <th className="p-2 border">사고발생지</th>
                    </tr>
                  </thead>
                  <tbody>
                    {response.map((data) => {
                      return (
                        <tr key={data.id}>
                          <td className="p-2 border">{data.moveNfa}</td>
                          <td className="p-2 border">{data.reportDate}</td>
                          <td className="p-2 border">{data.distance}</td>
                          <td className="p-2 border">{data.patientGender}</td>
                          <td className="p-2 border">{data.patientAge}</td>
                          <td className="p-2 border">{data.accidentCity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            ) : (
              <p className="m-8 text-xl font-semibold">게시글이 없습니다.</p>
            )}
          </section>
          <div className="m-8 flex justify-center">
            <button
              className="py-2 px-4 border-solid border-2 rounded-md"
              onClick={onClickCreate}
            >
              등록
            </button>
            <button
              className="ml-4 py-2 px-4 border-solid border-2 rounded-md"
              onClick={onClickUpdate}
            >
              수정
            </button>
            <button
              className="ml-4 py-2 px-4 border-solid border-2 rounded-md"
              onClick={onClickDelete}
            >
              삭제
            </button>
          </div>
        </>
      )}
      {showRegistModal && <BoardRegist handleSubmit={onSubmit} />}
    </>
  );
}
