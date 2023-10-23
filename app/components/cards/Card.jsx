'use client'

export default function Card({name, person}) {
  return (
    <div className="w-full max-w-xs bg-white overflow-hidden rounded-lg shadow-md my-4">
        <img class="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
        </img>

        <div className="py-5 text-center">
            <p className="font-rubik font-semibold">
              {name}
            </p>
        </div>
    </div>
  )
}
