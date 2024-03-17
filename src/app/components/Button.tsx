export default function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="text-violentViolet font-semibold shadow-sm p-2 border-2 rounded-lg  border-whisper text-sm">
      {children}
    </button>
  )
}
