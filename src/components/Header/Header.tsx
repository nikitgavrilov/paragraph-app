"use client";
import { useActions } from "@/hooks/useActions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const pathname = usePathname();

  const { toggleModal, toggleMode } = useActions();

  return (
    <>
      <header style={{ background: "#2d2d2d" }} className="mb-6">
        <div className={`${styles.body} container`}>
          <Link href="/" className={`${styles.logo} text-indigo-300 text-2xl font-bold`}>
            <Image src={logo} width={191} height={44} alt="Logo" className="flex items-center" />
          </Link>
          <nav>
            <ul className="flex items-center flex-wrap gap-4 text-lg">
              {pathname === "/posts" ? (
                <button
                  onClick={() => {
                    toggleMode("add");
                    toggleModal(true);
                  }}
                  className="border-solid border-2 border-indigo-500 py-2 px-4 hover:bg-indigo-500 hover:border-indigo-300 transition-all"
                >
                  Add post
                </button>
              ) : (
                ""
              )}
              <li>
                <Link href="/posts" className={pathname === "/posts" ? "text-indigo-300" : ""}>
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/" className={pathname === "/" ? "text-indigo-300" : ""}>
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
