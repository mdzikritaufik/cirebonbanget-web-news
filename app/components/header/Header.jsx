import {Bell, Chevron} from '../../components/icons/Icons'
import Photo from '../../components/icons/PhotoProfile'

export default function Header({title}) {
  return (
    <>
        <nav className="flex justify-between h-16 w-full shadow-sm items-center px-6 font-[600] bg-fresh text-night font-poppins">
            <h2 className="text-sky font-[800] text-2xl pl-14">{title}</h2>
            <div className="flex flex-row gap-x-3 items-center">
                <div>
                    <Bell color='grey' />
                </div>
                <div>
                    <Photo/>
                </div>
                <div>
                    <Chevron color='grey'/>
                </div>
            </div>
        </nav>
    </>
  )
}
