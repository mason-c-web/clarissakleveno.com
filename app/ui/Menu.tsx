"use client";
import websiteData from "./websiteData";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const getMenuItems = websiteData.pages.map((item, index) => {
    return <MenuItem title={item.title} index={index} key={index} />;
  });

  return (
    <div className="navbar bg-base-100 shadow-sm menu-custom">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {getMenuItems}
          </ul>
        </div>
        <h1 className=" text-xl">{websiteData.websiteTitle}</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{getMenuItems}</ul>
      </div>
      <div className="navbar-end" />
    </div>
  );
}
