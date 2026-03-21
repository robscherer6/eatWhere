const Hero = () => {
  return (
    <div className="bg-orange-500 text-white py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">
        🍽️ Not Sure Where to Eat?
      </h1>
      <p className="text-orange-100 text-xl max-w-lg mx-auto mb-6">
        Search local restaurants, filter by cuisine and distance, or let the wheel decide for you.
      </p>
      <div className="flex justify-center gap-8 text-orange-100 text-sm font-medium">
        <span>🔍 Search Locally</span>
        <span>🎡 Spin to Decide</span>
        <span>❤️ Save Favorites</span>
      </div>
    </div>
  )
}

export default Hero