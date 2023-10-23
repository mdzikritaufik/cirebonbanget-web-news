import Image from "next/image"


export default function Navbar() {
  
    const menuNav = [
        ['About', '/about'],
        ['Read', '/articles'],
        ['Photography', '/photos'],
        ['Contact', '/contact'],
    ];

    const accessNav = [
        ['Masuk', '/access/login'],
        ['Daftar', '/access/register'],
    ];

    return (

    <nav className="w-screen relative flex justify-between bg-fresh shadow-md px-10">
        <div className="self-center">
            <Image src="/logo.png" alt="logo cirebon banget" width={40} height={40} />
        </div>
        <div className="flex space-x-4 h-16 items-center">   
            {menuNav.map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 text-dark font-medium hover:text-fresh hover:bg-sky">
                    {title}
                </a>
            ))}
        </div>
        <div className="flex self-center space-x-4">
            {accessNav.map(([access, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 text-dark font-medium hover:text-fresh hover:bg-sky">{access}</a>
            ))}
        </div>
    </nav>    
  )
}
