import Button from './components/button/Button'
import Card from './components/cards/Card'
import Navbar from './Template/navbar/Navbar'
import InputForm from './components/input/InputForm'

export default function Home() {
  return (
    <section className="mx-0">
    <div className='fixed z-50 bg-white'>
      <Navbar className='relative top-0' />
    </div>
    {/* Hero Section Start */}
    <div className='flex flex-wrap h-screen'>
      <div id="hero" className="w-full flex flex-col justify-evenly items-center mt-24 lg:flex-row">
        <div className="max-w-xl px-8 flex flex-col md:text-justify">
          <h3 className="text-dark font-poppins text-lg font-[600] drop-shadow-lg text-center md:text-3xl md:text-left">Cirebon aja ga cukup, kamu harus</h3>
          <h1 className="text-sky font-bebas text-5xl drop-shadow-lg mt-2 text-center md:text-7xl md:text-left">#cirebonbanget</h1>
          <p className="inline-block text-dark font-rubik text-md my-3 text-center md:text-lg md:text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque libero doloribus, possimus incidunt voluptates voluptas, odit voluptatem ratione veritatis id quam nobis non. Nostrum, incidunt!</p>
          <div className="max-w-fit flex self-center md:self-start my-5">
            <Button btnTitle={"Gabung Yuk!"} link={"/access/register"}/>
          </div>
        </div>
        <div className="my-4 rotate-0 w-48 md:my-6 md:rotate-6 md:w-[480px]">
          <img src="/logo.png" alt="cirebon banget logo"/>
        </div>
      </div>
        <div className='relative h-60 w-full bg-sky self-end'>
          <div className='flex justify-center items-center mt-28 gap-16'>
            <a href="http://instagram.com/cirebon.banget" target='_blank' className='w-9 h-9 text-night hover:text-fresh'>
            <svg role="img" width="50" class='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
            </a>

            <a href="http://facebook.com/cirebon.banget" target='_blank' className='w-9 h-9 text-night hover:text-fresh'>
            <svg role="img" class='fill-current' width={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>

            <a href="http://youtube.com/@cirebon.banget" target='_blank' className='w-9 h-9 text-night hover:text-fresh'>
            <svg role="img" class='fill-current' width={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
      </div>
    </div>
    {/* Hero Section End */}
    {/* About Section Start */}
    <div id='about'>
      <div className='relative w-full min-h-max bg-sky'>
        <h2 className='text-night text-center font-rubik text-4xl py-10 font-semibold'>Apa itu Cirebon Banget?</h2>
        <div className='w-full flex flex-col text-[14px] p-8 text-center justify-between md:flex-row md:text-[20px] md:px-12'>
          <div className= 'w-full flex text-justify font-poppins p-4 text-white md:w-1/2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sapiente quisquam. Architecto quasi facere recusandae? Adipisci omnis esse temporibus tempore excepturi nisi, cumque ex dolorum?</p>
          </div>
          <div className='w-full flex text-justify font-poppins p-4 text-white md:w-1/2'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, esse? Ab accusantium magnam incidunt eligendi animi doloremque perspiciatis minus, asperiores veniam, tenetur cupiditate ex itaque? Nemo omnis debitis labore asperiores a accusantium itaque praesentium vero!</p>
          </div>
        </div>
      </div>
    </div>
    {/* About Section End */}
          {/* Community Section Start */}
          {/* <div className='w-full flex flex-col justify-center items-center my-28 md:flex-row'>
        <div className="flex flex-row gap-y-5 items-center md:w-full md:relative md:gap-x-4">
          <div>
            <img src="https://source.unsplash.com/100x150?person" alt="person1" className='rounded-2xl' />
          </div>
          <div>
            <img src="https://source.unsplash.com/100x150?alien" alt="person2" className='rounded-2xl mt-20 md:mt-0'/>
          </div>
          <div>
            <img src="https://source.unsplash.com/100x150?animal" alt="person3" className='rounded-2xl'/>
          </div>
        </div>
        <div className="inline-block pl-0 md:pl-12 text-center">
          <h1 className="text-fresh font-poppins text-xl font-[600] drop-shadow-lg md:text-3xl md:text-start">
            Kenapa harus jadin member <span className="bg-dark rounded-md">#cirebonbanget</span>?
          </h1>
          <p className="inline-block text-slate-800 font-rubik text-md my-3 md:text-xl md:text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestias atque, sapiente mollitia eveniet voluptatem fuga dolorum fugit quae ipsa.
          </p>
        </div>
      </div> */}
      {/* Community Section close */}
    {/* Communities Secion Start */}
      <div className='mt-20'>
        <div className='text-center'>
          <h1 className='font-rubik text-4xl font-[600] pb-4 text-sky drop-shadow-lg w-2/3 inline-block md:w-full'>
            Buat Komunitasmu Makin Eksis !
          </h1>
          <p className='font-poppins text-lg text-[14px] md:text-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eius minus, impedit quia blanditiis assumenda placeat voluptate ad deleniti, repellat esse molestias quod aperiam tenetur cum nostrum consectetur ipsam inventore?
          </p>
        </div>
        <div className='mt-16 flex flex-col gap-5 items-center md:flex-row md:justify-around md:flex-wrap'>
          <Card name={'Funakoshi'}/>
          <Card name={'Felix'}/>
          <Card name={'Nakamura'}/>
        </div>
      </div>
    {/* Communities Section End */}
    <div>
      <InputForm label="Nama" name="Nama" type="E-mai" placeholder="example"/>
    </div>
    </section>
  )
}