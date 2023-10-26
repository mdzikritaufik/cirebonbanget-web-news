import Menu from '../../../components/menu/Menu'


export default function SideMenu() {
  return (
    <div className='bg-sky w-3/12 min-h-screen shadow-sm text-night'>
        <div className='py-8'>
          <Menu>Profile</Menu>
          <Menu>Tulisan Saya</Menu>
          <Menu>Pengaturan</Menu>
        </div>
    </div>
  )
}
