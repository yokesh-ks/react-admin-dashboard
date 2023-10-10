import React from 'react'
import type { IconType } from 'react-icons'
import {
  HiBriefcase,
  HiChevronLeft,
  HiCloudUpload,
  HiDesktopComputer,
  HiDeviceMobile,
  HiDocumentDownload,
  HiDotsVertical,
  HiHeart,
  HiMap,
  HiMenuAlt1,
  HiOutlinePencilAlt,
  HiPaperAirplane,
  HiX,
  HiArrowLeft,
  HiArrowRight,
  HiChevronRight,
  HiClock,
  HiExclamationCircle,
  HiFolder,
  HiOutlineTag,
  HiPaperClip,
  HiPhotograph,
  HiPrinter,
  HiReply,
  HiLockOpen,
  HiViewGrid,
  HiOutlineExclamationCircle,
  HiTrash,
  HiUpload,
  HiCog,
  HiDownload,
  HiHome,
  HiArrowsExpand,
  HiClipboard,
  HiClipboardCopy,
  HiEye,
  HiPencilAlt,
  HiPlus,
} from 'react-icons/hi'
import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaSmile,
  FaTwitter,
  FaPlus,
} from 'react-icons/fa'
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
