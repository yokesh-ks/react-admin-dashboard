import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import { SidebarProvider, useSidebarContext } from '../context/SidebarContext'

interface NavbarSidebarLayoutProps {
  isFooter?: boolean
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> =
  function ({ children }) {
    return (
      <SidebarProvider>
        <Navbar />
        <div className='flex items-start pt-16'>
          <Sidebar />
          <MainContent>{children}</MainContent>
        </div>
      </SidebarProvider>
    )
  }

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
  children,
}) {
  const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext()

  return (
    <main
      className={classNames(
        'overflow-y-auto relative w-full h-full bg-gray-50 dark:bg-gray-900',
        isSidebarOpen ? 'lg:ml-16' : 'lg:ml-64',
      )}
    >
      {children}
    </main>
  )
}

export default NavbarSidebarLayout
