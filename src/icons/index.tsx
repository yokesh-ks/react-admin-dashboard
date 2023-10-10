import React from 'react'
import type { IconType } from 'react-icons'
import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaPlus,
  FaSmile,
  FaTwitter,
} from 'react-icons/fa'
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowsExpand,
  HiBriefcase,
  HiChevronLeft,
  HiChevronRight,
  HiClipboard,
  HiClipboardCopy,
  HiClock,
  HiCloudUpload,
  HiCog,
  HiDesktopComputer,
  HiDeviceMobile,
  HiDocumentDownload,
  HiDotsVertical,
  HiDownload,
  HiExclamationCircle,
  HiEye,
  HiFolder,
  HiHeart,
  HiHome,
  HiLockOpen,
  HiMap,
  HiMenuAlt1,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiOutlineTag,
  HiPaperAirplane,
  HiPaperClip,
  HiPencilAlt,
  HiPhotograph,
  HiPlus,
  HiPrinter,
  HiReply,
  HiTrash,
  HiUpload,
  HiViewGrid,
  HiX,
} from 'react-icons/hi'
import { MdComment } from 'react-icons/md'

import ProfileIcon from './src/profile'

interface IconProps {
  name: string
  className?: string
  // Add any other props you expect to receive
}

interface IconComponents {
  [key: string]: IconType
}

const iconComponents: IconComponents = {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaSmile,
  FaTwitter,
  HiArrowLeft,
  HiBriefcase,
  HiChevronLeft,
  HiChevronRight,
  HiClock,
  HiCloudUpload,
  HiCog,
  HiDesktopComputer,
  HiDeviceMobile,
  HiDocumentDownload,
  HiDotsVertical,
  HiExclamationCircle,
  HiFolder,
  HiArrowsExpand,
  HiClipboard,
  HiClipboardCopy,
  HiHeart,
  HiHome,
  HiPencilAlt,
  HiEye,
  FaPlus,
  HiDownload,
  HiMap,
  HiMenuAlt1,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiOutlineTag,
  HiPaperAirplane,
  HiPaperClip,
  HiPhotograph,
  HiUpload,
  HiPlus,
  HiViewGrid,
  HiPrinter,
  HiReply,
  HiTrash,
  HiX,
  HiLockOpen,
  ProfileIcon,
  MdComment,
  HiArrowRight,
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconComponents[name]

  if (IconComponent) {
    return (
      <div className='flex justify-center'>
        <IconComponent {...props} />
      </div>
    )
  }

  return null
}

export default Icon
