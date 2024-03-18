interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: { uid: string, label: string }[]
}

export default function Select({ label, options, ...props }: ISelectProps) {
  return (
    <div className="flex flex-col">
      {label && <label className="font-medium text-brightGray text-sm mb-2">{label}</label>}
      <select
        className="shadow-sm p-3 border-2 rounded-lg border-whisper text-sm"
        {...props}
      >
        <option value="" disabled selected>Select</option>
        {options?.map((option) => (
          <option key={option?.uid} value={option?.uid}>{option?.label}</option>
        ))}
      </select>
    </div>
  )
}
