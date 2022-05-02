import { useState } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { userActions } from "@/redux/reducers/userReducer.ts";

export default function Join() {
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.joinRequest(userInfo));
  };

  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <section className="w-2/5 pb-4 rounded-xl shadow-2xl flex flex-col justify-center items-center bg-[#eee]">
        <h2 className="m-8 text-xl font-semibold">회원가입</h2>
        <form
          onSubmit={handleSubmit}
          className="w-3/5 flex flex-col justify-evenly items-center"
        >
          <div className="m-4">
            <label htmlFor="id">사용자 ID: </label>
            <input
              className="ml-2"
              type="text"
              id="id"
              name="id"
              value={userInfo.userId}
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label htmlFor="password">비밀번호: </label>
            <input
              className="ml-2"
              type="password"
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label htmlFor="email">이메일: </label>
            <input
              className="ml-2"
              type="text"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label htmlFor="userName">이름: </label>
            <input
              className="ml-2"
              type="text"
              id="userName"
              name="userName"
              value={userInfo.userName}
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label htmlFor="phone">전화번호: </label>
            <input
              className="ml-2"
              type="text"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label htmlFor="address">주소: </label>
            <input
              className="ml-2"
              type="text"
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
            />
          </div>
          <div className="m-4">
            <label htmlFor="birth">생년월일: </label>
            <input
              className="ml-2"
              type="text"
              id="birth"
              name="birth"
              value={userInfo.birth}
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
    </>
  );
}
