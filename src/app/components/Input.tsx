interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ label, ...props }: IInputProps) {
  return (
    <div className="flex flex-col">
      {label && <label className="font-medium text-brightGray text-sm mb-2">{label}</label>}
      <input className="shadow-sm p-3 border-2 rounded-lg border-whisper text-sm" {...props} />
    </div>
  )
}
