import Link from "next/link";
import "./TheHeader.css";
export default function TheHeader() {
  return (
    <header className="">
      <div className="relative z-[2] ">
        <div className="bg-nav overflow-hidden w-full h-[180px] md:h-[380px] absolute ring-0 top-0 ">
          <div className=" animate_wrapper relative z-[3]">
            <div className="scroller flex gap-10">
              <Link href={"tel:+998997224753"}>
                <div className=" flex items-center ">
                  <span className="nomer text-[13px] text-[#593f0d] md:text-[54px] xl:text-[50px] font-bold">
                    +998 99 722 47 53
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className=" relative navbar flex container mx-auto px-[15px] w-full  items-center z-10  ">
        <Link href="/">
          <img
            className={` w-[100px] md:w-[200px] mt-[8px]`}
            src={"/logo.svg"}
            alt="logo"
            referrerPolicy="no-referrer"
          />
        </Link>
        <ul className={` flex gap-[6px] items-center md:gap-[12px]`}>
          <li className=" w-[50px] md:w-auto"></li>
        </ul>
      </nav>
    </header>
  );
}
