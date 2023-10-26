import Header from './header/Header'
import SideMenu from './sideMenu/SideMenu'
import MyProfile from '../dashboard/substances/myProfile/MyProfile'

export default function Dashboard(props) {
    const {titleHeader} = props;
  return (
    <div className='bg-night'>
      <div>
        <Header title={titleHeader}/>
      </div>
      <div className='flex flex-row-reverse'>
        <MyProfile/>
        <SideMenu/>
      </div>
    </div>
  )
}
