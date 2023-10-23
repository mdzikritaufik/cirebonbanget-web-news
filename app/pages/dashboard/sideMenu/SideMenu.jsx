import Menu from '../../../components/menu/Menu'


export default function SideMenu() {
  return (
    <div className='bg-sky w-2/12 min-h-screen shadow-sm text-night'>
        <div className='py-8'>
          <Menu>Biodata</Menu>
          <Menu>Keamanan</Menu>
          <Menu>Tulisan Saya</Menu>
        </div>
    </div>
  )
}
