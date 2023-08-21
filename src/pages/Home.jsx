import { IconArrow } from '../components/Icons'
import HomeStyles from '../assets/css/home.module.css'
import Card from '../components/Card'
import LabelText from '../components/LabelText'
import Avatar from '../components/Avatar'
import AvatarImg from '../assets/images/user.png'
import Radio from '../components/Radio'

function Home() {
  return (
    <>
      {/* breadcrumbs */}
      <div className={HomeStyles.breadcrumbs}>
        <a href="#">Dashboard</a> |{' '}
        <a className={HomeStyles.active} href="#">
          My Account
        </a>
      </div>

      <section className={HomeStyles.mainCard}>
        <div className={HomeStyles.mainCardHeader}>
          <a className="text-accent-lime" href="#">
            <IconArrow />
          </a>
          My Account
        </div>

        <Card title="My Profile">
          <div className="flex items-start gap-x-4 lg:gap-x-8">
            <Avatar url={AvatarImg} name={'Divya Chatterjee'} />
            <div>
              <p className="text-lg font-semibold pb-3">Divya Chatterjee</p>
              <LabelText label="Designation">Assistant Manager - HR</LabelText>
              <LabelText label="Company Name">XXY Company Name</LabelText>
            </div>
          </div>
          <LabelText label="About Me">
            Microsoft enables digital transformation for the era of an
            intelligent cloud and an intelligent edge. Its mission is to empower
            every person and every organization on the planet to achieve more.
            Microsoft set up its India operations in 1990. Microsoft in India
            offers its global cloud services from local data centers to
            accelerate digital transformation across Indian start-ups,
            businesses, and government agencies.
          </LabelText>
        </Card>

        <div className={HomeStyles.grids}>
          <Card title="My Account Settings">
            <div className="grid gap-2 sm:gap-4 sm:grid-cols-2">
              <LabelText label="Full Name *">Divya Chatterjee</LabelText>
              <LabelText label="Designation">Assistant Manager - HR</LabelText>
              <LabelText label="Phone / Landline">7012248563</LabelText>
              <LabelText label={<>&nbsp;</>}>
                <a
                  href="#"
                  className="text-blue-500 font-semibold leading-none"
                >
                  Change Password
                </a>
              </LabelText>
            </div>
          </Card>

          <Card title={'Application Settings'}>
            <LabelText label="Receive job applications via" />

            <Radio
              name={'default-radio'}
              id={'radio-1'}
              label={'Only on my dashboard'}
            />
            <Radio
              name={'default-radio'}
              id={'radio-2'}
              label={'Email and on my dashboard'}
            />

            <LabelText
              label={
                '*Please note, this setting will not impact your old job postings'
              }
            />
          </Card>
        </div>
      </section>
    </>
  )
}
export default Home
