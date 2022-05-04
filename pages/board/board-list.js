import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { boardActions } from "@/redux/reducers/boardReducer.ts";
import { getRescueActivityListApi } from "@/api/boardApi.ts";
import BoardRegist from "@/components/board/BoardRegist.js";

export default function Board() {
  const [note, setNote] = useState();
  const [showRegistModal, setShowRegistModal] = useState(false);
  const [activityList, setActivityList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getRescueActivityListApi();
      if (response) {
        console.log(response);
        setActivityList(response);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      if (!token) {
        throw new Error("로그인이 필요합니다.");
      }
    } catch (error) {
      alert("로그인이 필요합니다.");
      location.href = "/user/login";
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const onSubmit = (report) => {
    if (report?._id) {
      console.log("수정");
      dispatch(boardActions.updateRescueActivity(report));
      return;
    }
    console.log("생성");
    dispatch(boardActions.createRescueActivity(report));
  };
  const onClickCreate = useCallback(() => {
    console.log("onClickCreate");
    setShowRegistModal(true);
  }, []);
  const onClickUpdate = useCallback((data) => {
    console.log("onClickUpdate");
    setNote(data);
    setShowRegistModal(true);
  }, []);
  const onClickDelete = useCallback((data) => {
    if (!data._id) {
      alert("삭제할 수 없습니다.");
      return;
    }
    dispatch(boardActions.deleteRescueActivity(data._id));
    fetchData();
  }, []);
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
                      <th className="p-2 border">설정</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityList.map((data) => {
                      if (!data.moveNfa) {
                        return;
                      }
                      return (
                        <tr key={data._id}>
                          <td className="p-2 border">{data.moveNfa}</td>
                          <td className="p-2 border">{data.reportDate}</td>
                          <td className="p-2 border">{data.distance}</td>
                          <td className="p-2 border">{data.patientGender}</td>
                          <td className="p-2 border">{data.patientAge}</td>
                          <td className="p-2 border">{data.accidentCity}</td>
                          <td className="p-2 border flex justify-center">
                            <button
                              className="py-1 px-2 border-solid border-2 rounded-md"
                              onClick={() => onClickUpdate(data)}
                            >
                              수정
                            </button>
                            <button
                              className="ml-2 py-1 px-2 border-solid border-2 rounded-md"
                              onClick={() => onClickDelete(data)}
                            >
                              삭제
                            </button>
                          </td>
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
          </div>
        </>
      )}
      {showRegistModal && <BoardRegist handleSubmit={onSubmit} note={note} />}
    </>
  );
}
