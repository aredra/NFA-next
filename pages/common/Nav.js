import Link from "next/link";

export default function Nav() {
  return (
    <nav className="top-0 left-0 container min-w-full text-[#333] border">
      <ul className="p-6 flex justify-evenly font-mono text-xl font-bold">
        <li className="">
          <Link href="/">메인</Link>
        </li>
        <li className="">
          <Link href="/board/board-list">게시판</Link>
        </li>
        <li className="">
          <Link href="/user/login">로그인</Link>
        </li>
        <li className="">
          <Link href="/user/join">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
}
