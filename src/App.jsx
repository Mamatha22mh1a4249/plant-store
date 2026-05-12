function App() {

  return (

    <main className="bg-[#0F1B13] min-h-screen text-white">

      <nav className="flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold text-green-400">
          Plantify
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">

          <li className="hover:text-green-400 cursor-pointer">
            Home
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Plants
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Reviews
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Contact
          </li>

        </ul>

      </nav>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20">

        <div className="max-w-xl">

          <h1 className="text-6xl font-bold leading-tight">
            Earth's Exhale
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            Bring nature into your home with beautiful indoor plants.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition">
              Shop Now
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Explore
            </button>

          </div>

        </div>

        <img
          src="https://images.unsplash.com/photo-1545241047-6083a3684587"
          alt="Plant"
          className="w-[350px] rounded-3xl mt-10 md:mt-0"
        />

      </section>
      <section className="px-8 py-20">

  <h2 className="text-4xl font-bold mb-12">
    Trending Plants
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-[#1A2A1F] rounded-3xl p-5 hover:scale-105 transition">

      <img
        src="https://images.unsplash.com/photo-1545241047-6083a3684587"
        alt="Plant"
        className="w-full h-[250px] object-cover rounded-2xl"
      />

      <h3 className="text-2xl font-semibold mt-5">
        Snake Plant
      </h3>

      <p className="text-green-400 mt-2 text-xl">
        $20
      </p>

      <button className="w-full mt-5 bg-green-500 py-3 rounded-2xl hover:bg-green-600 transition">
        Add To Cart
      </button>

    </div>

    <div className="bg-[#1A2A1F] rounded-3xl p-5 hover:scale-105 transition">

      <img
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
        alt="Plant"
        className="w-full h-[250px] object-cover rounded-2xl"
      />

      <h3 className="text-2xl font-semibold mt-5">
        Peace Lily
      </h3>

      <p className="text-green-400 mt-2 text-xl">
        $24
      </p>

      <button className="w-full mt-5 bg-green-500 py-3 rounded-2xl hover:bg-green-600 transition">
        Add To Cart
      </button>

    </div>

    <div className="bg-[#1A2A1F] rounded-3xl p-5 hover:scale-105 transition">

      <img
        src="https://images.unsplash.com/photo-1485955900006-10f4d324d411"
        alt="Plant"
        className="w-full h-[250px] object-cover rounded-2xl"
      />

      <h3 className="text-2xl font-semibold mt-5">
        Monstera
      </h3>

      <p className="text-green-400 mt-2 text-xl">
        $30
      </p>

      <button className="w-full mt-5 bg-green-500 py-3 rounded-2xl hover:bg-green-600 transition">
        Add To Cart
      </button>

    </div>

    <div className="bg-[#1A2A1F] rounded-3xl p-5 hover:scale-105 transition">

      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
        alt="Plant"
        className="w-full h-[250px] object-cover rounded-2xl"
      />

      <h3 className="text-2xl font-semibold mt-5">
        Aloe Vera
      </h3>

      <p className="text-green-400 mt-2 text-xl">
        $18
      </p>

      <button className="w-full mt-5 bg-green-500 py-3 rounded-2xl hover:bg-green-600 transition">
        Add To Cart
      </button>

    </div>

  </div>

</section>
<section className="px-8 py-20">

  <h2 className="text-4xl font-bold mb-12">
    Customer Reviews
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-[#1B2A20] p-6 rounded-3xl">

      <div className="flex items-center gap-4">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="w-14 h-14 rounded-full"
        />

        <div>

          <h3 className="text-xl font-semibold">
            Lahari
          </h3>

          <p className="text-yellow-400">
            ★★★★★
          </p>

        </div>

      </div>

      <p className="text-gray-300 mt-5">
        Amazing quality plants and beautiful packaging.
      </p>

    </div>

    <div className="bg-[#1B2A20] p-6 rounded-3xl">

      <div className="flex items-center gap-4">

        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-14 h-14 rounded-full"
        />

        <div>

          <h3 className="text-xl font-semibold">
            Kiran
          </h3>

          <p className="text-yellow-400">
            ★★★★★
          </p>

        </div>

      </div>

      <p className="text-gray-300 mt-5">
        Very modern UI and healthy indoor plants.
      </p>

    </div>

    <div className="bg-[#1B2A20] p-6 rounded-3xl">

      <div className="flex items-center gap-4">

        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="User"
          className="w-14 h-14 rounded-full"
        />

        <div>

          <h3 className="text-xl font-semibold">
            Teja
          </h3>

          <p className="text-yellow-400">
            ★★★★★
          </p>

        </div>

      </div>

      <p className="text-gray-300 mt-5">
        Loved the smooth experience and clean design.
      </p>

    </div>

  </div>

</section>
<footer className="bg-black px-8 py-16 mt-20">

  <div className="grid md:grid-cols-4 gap-10">

    <div>

      <h1 className="text-3xl font-bold text-green-400">
        Plantify
      </h1>

      <p className="text-gray-400 mt-5">
        Best indoor plants for your modern lifestyle and healthy environment.
      </p>

    </div>

    <div>

      <h2 className="text-2xl font-semibold mb-5">
        Quick Links
      </h2>

      <ul className="space-y-3 text-gray-400">

        <li className="hover:text-green-400 cursor-pointer">
          Home
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Plants
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Reviews
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Contact
        </li>

      </ul>

    </div>

    <div>

      <h2 className="text-2xl font-semibold mb-5">
        Support
      </h2>

      <ul className="space-y-3 text-gray-400">

        <li className="hover:text-green-400 cursor-pointer">
          Help Center
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Privacy Policy
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Terms
        </li>

      </ul>

    </div>

    <div>

      <h2 className="text-2xl font-semibold mb-5">
        Newsletter
      </h2>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-4 rounded-2xl bg-[#1A1A1A] outline-none"
      />

      <button className="bg-green-500 w-full py-3 rounded-2xl mt-5 hover:bg-green-600 transition">
        Subscribe
      </button>

    </div>

  </div>

  <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

    © 2026 Plantify. All Rights Reserved.

  </div>

</footer>

    </main>

  )
}

export default App