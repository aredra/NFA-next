import { useState } from "react";
import Head from "next/head";

export default function Login() {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("로그인 요청!");
  };

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <section className="w-2/5 pb-4 rounded-xl shadow-2xl flex flex-col justify-center items-center bg-[#eee]">
        <h2 className="m-8 text-xl font-semibold">로그인</h2>
        <form
          className="w-3/5 flex flex-col justify-evenly items-center"
          onSubmit={handleSubmit}
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
          <button
            className="m-4 py-2 px-8 text-lg font-semibold border-solid border-2 border-[#555] rounded-xl hover:bg-[#555] hover:text-[#eee]"
            type="submit"
          >
            접속
          </button>
        </form>
      </section>
    </>
  );
}
