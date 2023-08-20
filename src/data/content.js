import Logo from '../assets/images/logo.png'
import PartnerLogo from '../assets/images/partner-logo.png'

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
}

export default content
