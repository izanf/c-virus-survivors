import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Tag from "../components/Tag";

type SurvivorType = {
  uid: string
  name: string
  avatarUrl: string
  isInfected: boolean
  createdAt: string
}

interface ITableProps {
  data: SurvivorType[]
}

export default function Table({ data }: ITableProps) {
  return (
    <table className="table-auto border-collapse border border-whiteSmoke bg-white w-full">
      <thead className="bg-whiteSmokeSecondary text-sm text-spunPearl">
        <tr>
          <th className="text-left px-6 py-3 font-medium text-xs">Name</th>
          <th className="text-left px-6 py-3 font-medium text-xs">Status</th>
          <th className="text-left px-6 py-3 font-medium text-xs">Date Added</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ uid, name, avatarUrl, isInfected, createdAt }: any) => (
          <tr className="border border-whiteSmoke" key={uid}>
            <td className="flex items-center px-6 py-3">
              <Avatar src={avatarUrl} />
              <span className="ml-3 text-violentViolet font-semibold">{name}</span>
            </td>
            <td className="px-6 py-3">
              <Tag isPositive={!isInfected}>
                {isInfected ? 'Infected' : 'Healthy'}
              </Tag>
            </td>
            <td className="px-6 py-3 text-comet">{createdAt}</td>
          </tr>
        ))}
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
  )
}
