const Card = () => (
  <div className="bg-white rounded-xl border-2 border-whiteSmoke text-violentViolet">
    <div className="p-6">
      <h2 className="mb-4 font-semibold">Number of Healthy Survivors</h2>
      <div>
        <p className="inline-block font-medium text-3xl flex items-center">
          1,205
          <span className="inline-block px-2 py-1 rounded-2xl bg-bubbles text-oceanGreen font-medium text-xs ml-3">+5%</span>
        </p>
        <span className="block text-xs mt-2">Last 30 days</span>
      </div>
    </div>
    <div className="border-t-2 border-whiteSmoke px-4 py-2">
      <button className="font-semibold text-xs p-2">Download Report</button>
    </div>
  </div>
)

export default Card
