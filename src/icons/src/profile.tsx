import type { SVGProps } from 'react'
const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <path
      fill='#1E58DA'
      fillRule='evenodd'
      d='M10 0c2.481 0 4.5 2.019 4.5 4.5S12.481 9 10 9a4.505 4.505 0 0 1-4.5-4.5C5.5 2.019 7.519 0 10 0ZM7.5 4.5C7.5 5.879 8.622 7 10 7s2.5-1.121 2.5-2.5S11.378 2 10 2a2.503 2.503 0 0 0-2.5 2.5Z'
      clipRule='evenodd'
    />
    <path
      fill='#1E58DA'
      d='M0 20h2c0-4.411 3.589-8 8-8v-2C4.486 10 0 14.486 0 20ZM12.682 10.366l-1.697 1.697C14.933 12.55 18 15.923 18 20h2c0-4.585-3.102-8.459-7.318-9.634Z'
    />
  </svg>
)
export default ProfileIcon
