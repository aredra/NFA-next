import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "@/redux/reducers/userReducer.ts";

export default function Nav() {
  const [session, setSession] = useState();

  useEffect(() => {
    const isLogin = sessionStorage.getItem("token");
    console.log(isLogin);
    if (isLogin) {
      setSession(JSON.parse(isLogin) || null);
    }
  }, []);

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(userActions.logoutRequest());
  }, []);

  return (
    <nav className="top-0 left-0 container min-w-full text-[#333] border">
      <ul className="p-6 flex justify-evenly font-mono text-xl font-bold">
        <li className="">
          <Link href="/">메인</Link>
        </li>

        {session ? (
          <>
            <li className="">
              <Link href="/board/board-list">게시판</Link>
            </li>
            <li className="">
              <div onClick={handleClick}>로그아웃</div>
            </li>
          </>
        ) : (
          <>
            <li className="">
              <Link href="/user/login">로그인</Link>
            </li>
            <li className="">
              <Link href="/user/join">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
