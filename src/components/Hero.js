import heroImg from "../assets/images/hero.png"

const Hero = () => {
  return (
    <div className="h-full bg-gray-500 flex items-center px-20">
      <div className="w-1/2" style={{ color: "rgba(255,255,255,1)" }}>
        <h1
          className="text-7xl font-bold mb-9 w-4/5"
          style={{ lineHeight: "62px" }}
        >
          Furniture that everyone loves
        </h1>
        <span className="font-extralight text-white">
          We have 5000+ Reviews and our customers trust on our Furniture and
          quality products.
        </span>
        <div className="mt-10">
          <button className="bg-gray-800 px-8 py-2 mr-4 rounded-3xl text-white shadow-md">
            Buy now
          </button>
          <button className="px-8 py-2 rounded-3xl border border-white text-white">
            Explore
          </button>
        </div>
      </div>
      <div className="w-1/2 self-end">
        <img src={heroImg} className="mx-auto" alt="hero" />
      </div>
    </div>
  )
}

export default Hero
