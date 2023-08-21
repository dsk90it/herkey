import Logo from '../assets/images/logo.png'
import PartnerLogo from '../assets/images/partner-logo.png'
import ClientLogo from '../assets/images/client-logo.png'
import {
  IconBriefCase,
  IconDocument,
  IconGrid,
  IconGroup,
  IconOffice,
  IconPeople,
  IconUser,
  IconWallet,
} from '../components/Icons'

const content = {
  navbar: {
    logo: Logo,
    menus: [
      {
        id: 1,
        text: 'Dashboard',
        url: '#',
      },
      {
        id: 2,
        text: 'Packages',
        url: '#',
      },
      {
        id: 3,
        text: 'Events',
        url: '#',
      },
      {
        id: 4,
        text: 'Blogs',
        url: '#',
      },
    ],
    secondaryLogo: {
      img: PartnerLogo,
      name: 'Forever 21',
    },
  },

  sidebar: {
    clientInfo: {
      logo: ClientLogo,
      name: 'Hewlett Packard Enterprise',
    },
    menus: [
      {
        id: 1,
        text: 'Dashboard',
        url: '#',
        icon: IconGrid,
        isActive: false,
      },
      {
        id: 2,
        text: 'Jobs',
        url: '#',
        icon: IconBriefCase,
        isActive: false,
      },
      {
        id: 3,
        text: 'Applications',
        url: '#',
        icon: IconDocument,
        isActive: false,
      },
      {
        id: 4,
        text: 'Followers',
        url: '#',
        icon: IconPeople,
        isActive: false,
      },
      {
        id: 5,
        text: 'My Inventory',
        url: '#',
        icon: IconWallet,
        isActive: false,
      },
      {
        id: 6,
        text: 'Company Profile',
        url: '#',
        icon: IconOffice,
        isActive: false,
      },
      {
        id: 7,
        text: 'All Users',
        url: '#',
        icon: IconGroup,
        isActive: false,
      },
      {
        id: 8,
        text: 'My Account',
        url: '#',
        icon: IconUser,
        isActive: true,
      },
    ],
  },
}

export default content
