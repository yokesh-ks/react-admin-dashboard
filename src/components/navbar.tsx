/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from "flowbite-react";
import {
  HiMenuAlt1,
  HiX,
} from "react-icons/hi";
import { useSidebarContext } from "../context/SidebarContext";
import isSmallScreen from "../helpers/is-small-screen";

const ExampleNavbar: FC = function () {
  const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
    useSidebarContext();

  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isPageWithSidebar && (
              <button
                onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline"
              >
                <span className="sr-only">Toggle sidebar</span>
                {isOpenOnSmallScreens && isSmallScreen() ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt1 className="h-6 w-6" />
                )}
              </button>
            )}
            <Navbar.Brand href="/">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                <img
                    alt=""
                    src="public/images/TradeLoopf.png"
                    className="mr-3 h-6 sm:h-8"
                />
              </span>
            </Navbar.Brand>

          </div>
          <div className="flex items-center lg:gap-3">
            <div className="flex items-center">
              <button
                onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
              >

              </button>
              <DarkThemeToggle />
            </div>
            <div className="hidden lg:block">
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};



const UserDropdown: FC = function () {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span>
          <span className="sr-only">User menu</span>
          <Avatar
            alt=""
            img="../images/users/Legend.png"
            rounded
            size="sm"
          />
        </span>
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">Legend</span>
        <span className="block truncate text-sm font-medium">
          0x.legend1@gmail.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Account</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default ExampleNavbar;
