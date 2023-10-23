'use client'

export default function Card() {
  return (
    <div className="w-full max-w-xs bg-white overflow-hidden rounded-lg shadow-md">
        <img class="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
        </img>

        <div className="py-5 text-center">
            <p className="font-rubik font-semibold">Siapa nih gaes ?</p>
        </div>
    </div>
  )
}
