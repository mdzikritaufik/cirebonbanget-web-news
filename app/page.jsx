import Button from './components/button/button'

export default function Home() {
  return (
    <section className="py-24 mx-10">
    {/* Hero Section Start */}
      <div id="hero" className="w-full flex flex-col justify-evenly items-center my-10 md:flex-row">
        <div className="max-w-xl px-4 flex flex-col text-center md:text-justify">
          <h3 className="text-dark font-poppins text-xl font-[600] drop-shadow-lg md:text-3xl">cirebon aja ga cukup, <br/>kamu harus</h3>
          <h1 className="text-yellow-400 font-bebas text-5xl drop-shadow-lg mt-2 md:text-7xl">#cirebonbanget</h1>
          <p className="inline-block text-secondary font-rubik text-md my-3 md:text-xl md:pr-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque libero doloribus, possimus incidunt voluptates voluptas, odit voluptatem ratione veritatis id quam nobis non. Nostrum, incidunt!</p>
          <div className="max-w-fit flex self-center md:self-start my-5">
            <Button/>
          </div>
        </div>
        <div className="max-w-xl my-4 rotate-0 md:my-6 md:rotate-6">
          <img src="https://source.unsplash.com/400x350?city" className="rounded-xl shadow-md" alt="" />
        </div>
      </div>
    {/* Hero Section End */}
    {/* About Section Start */}
      <div className='w-full flex flex-col justify-center items-center my-28 md:flex-row'>
        <div className="flex gap-x-4 my-5">
          <div>
            <img src="https://source.unsplash.com/250x300?person" alt="person1" />
          </div>
          <div>
            <img src="https://source.unsplash.com/250x300?alien" alt="person2" />
          </div>
          <div>
            <img src="https://source.unsplash.com/250x300?animal" alt="person3" />
          </div>
        </div>
        <div className="inline-block pl-0 md:pl-12 text-center">
          <h1 className="text-yellow-400 font-poppins text-xl font-[600] drop-shadow-lg md:text-3xl md:text-start">
            Kenapa harus jadin member <span className="bg-dark rounded-md">#cirebonbanget</span>?
          </h1>
          <p className="inline-block text-slate-800 font-rubik text-md my-3 md:text-xl md:text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestias atque, sapiente mollitia eveniet voluptatem fuga dolorum fugit quae ipsa.
          </p>
        </div>
      </div>
    {/* About Section End */}
    {/* More Secion Start */}
      <div>
        <div className='text-center'>
          <h1 className='font-poppins text-3xl font-[600] pb-4 text-yellow-400 drop-shadow-lg'>
            Sebar Pengaruh Kebaikan
          </h1>
          <p className='font-rubik text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eius minus, impedit quia blanditiis assumenda placeat voluptate ad deleniti, repellat esse molestias quod aperiam tenetur cum nostrum consectetur ipsam inventore?
          </p>
        </div>
        <div>
          bloack
        </div>
      </div>
    </section>
  )
}































// export default function Home() {
//   return (
//     <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
//       <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
//         <svg
//           className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
//           viewBox="0 0 100 100"
//           fill="currentColor"
//           preserveAspectRatio="none slice"
//         >
//           <path d="M50 0H100L50 100H0L50 0Z" />
//         </svg>
//         <img
//           className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
//           src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//           alt=""
//         />
//       </div>
//       <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
//         <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
//           <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
//             Brand new
//           </p>
//           <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
//             Everything you
//             <br className="hidden md:block" />
//             can imagine{' '}
//             <span className="inline-block text-deep-purple-accent-400">
//               is real
//             </span>
//           </h2>
//           <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//             quae. explicabo.
//           </p>
//           <div className="flex items-center">
//             <a
//               href="/"
//               className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//             >
//               Get started
//             </a>
//             <a
//               href="/"
//               aria-label=""
//               className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
//             >
//               Learn more
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
