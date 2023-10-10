/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from 'react'
import { DarkThemeToggle, Dropdown, Navbar } from 'flowbite-react'
import { useSidebarContext } from '../context/SidebarContext'
import isSmallScreen from '../helpers/is-small-screen'
import Icon from '../icons'

const ExampleNavbar: FC = function () {
  const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
    useSidebarContext()

  return (
    <Navbar fluid>
      <div className='w-full p-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            {isPageWithSidebar && (
              <button
                onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
                className='mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline'
              >
                <span className='sr-only'>Toggle sidebar</span>
                {isOpenOnSmallScreens && isSmallScreen() ? (
                  <Icon name='HiX' className='h-6 w-6' />
                ) : (
                  <Icon name='HiMenuAlt1' className='h-6 w-6' />
                )}
              </button>
            )}
            <Navbar.Brand href='/'>
              <img alt='' src='/images/logo.png' className='mr-2 h-6 sm:h-8' />
              <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
                React Admin
              </span>
            </Navbar.Brand>
          </div>
          <div className='flex items-center lg:gap-3'>
            <div className='flex items-center'>
              <DarkThemeToggle />
            </div>
            <div className='flex items-center'>
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  )
}

const UserDropdown: FC = function () {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <span>
          <span className='sr-only'>User menu</span>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900'>
            <Icon name='ProfileIcon' />
          </div>
        </span>
      }
    >
      <Dropdown.Header>
        <span className='block text-sm'>Legend</span>
        <span className='block truncate text-sm font-medium'>
          0x.legend1@gmail.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

export default ExampleNavbar
