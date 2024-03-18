interface ITagProps {
  children: React.ReactNode
  isPositive?: boolean
}

export default function Tag({ children, isPositive }: ITagProps) {
  const variant = isPositive ? 'bg-bubbles text-oceanGreen' : 'bg-cosmos text-roman'

  return (
    <span className={`inline-block px-2 py-1 rounded-2xl font-medium text-xs ml-3 ${variant}`}>
      {children}
    </span>
  )
}
