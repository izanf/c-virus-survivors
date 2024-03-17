import Avatar from "../components/Avatar"
import Button from "../components/Button"

export default function SurvivorsPage() {
  return (
    <main>
      <section className="container mx-auto my-16">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-violentViolet">Reports</h1>
          <h2 className="text-sm text-comet">Your camp has grown <span className="text-oceanGreen">+5%</span> this month</h2>
        </div>
        <table className="table-auto border-collapse border border-whiteSmoke bg-white w-full">
          <thead className="bg-whiteSmokeSecondary text-sm text-spunPearl">
            <tr>
              <th className="text-left px-6 py-3 font-medium text-xs">Name</th>
              <th className="text-left px-6 py-3 font-medium text-xs">Status</th>
              <th className="text-left px-6 py-3 font-medium text-xs">Date Added</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-whiteSmoke">
              <td className="flex items-center px-6 py-3">
                <Avatar />
                <span className="ml-3 text-violentViolet font-semibold">Ellie Williams</span>
              </td>
              <td className="px-6 py-3">Healthy</td>
              <td className="px-6 py-3 text-comet">May 14, 2023</td>
            </tr>
            <tr className="border border-whiteSmoke">
              <td className="flex items-center px-6 py-3">
                <Avatar />
                <span className="ml-3 text-violentViolet font-semibold">Witchy Woman</span>
              </td>
              <td className="px-6 py-3">The Eagles</td>
              <td className="px-6 py-3 text-comet">1972</td>
            </tr>
            <tr className="border border-whiteSmoke">
              <td className="flex items-center px-6 py-3">
                <Avatar />
                <span className="ml-3 text-violentViolet font-semibold">Shining Star</span>
              </td>
              <td className="px-6 py-3">Earth, Wind, and Fire</td>
              <td className="px-6 py-3 text-comet">1975</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="px-6 py-3">
                <p className="text-sm font-medium text-comet">
                  Showing <span className="font-semibold text-haiti">1</span> to <span className="font-semibold text-haiti">5</span> of <span className="font-semibold text-haiti">100</span> Results
                </p>
              </td>
              <td className="px-6 py-3 flex gap-4 justify-end">
                <Button>Previous</Button>
                <Button>Next</Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  )
}
