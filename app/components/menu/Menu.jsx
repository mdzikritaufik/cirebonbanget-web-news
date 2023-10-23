export default function Menu(props) {
    const { children, Icon, Mark } = props;
    return (
    <div className='flex flex-row justify-around py-5 px-3 text-md font-poppins hover:bg-fresh hover:text-sky hover:text-md'>
        <div>
            {Icon}
        </div>
        <div>
            {children}
        </div>
        <div>
            {Mark}
        </div>
    </div>
  )
}
