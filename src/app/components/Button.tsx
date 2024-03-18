type ButtonVariantType = 'default' | 'primary';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType
}

const buttonVariants: Record<ButtonVariantType, string> = {
  default: 'border-whisper text-violentViolet',
  primary: 'border-hotPurple text-white bg-hotPurple'
}

export default function Button({ children, variant = 'default', ...props }: IButtonProps) {
  return (
    <button {...props} className={`font-semibold shadow-sm p-3 border-2 rounded-lg text-sm ${buttonVariants[variant]}`}>
      {children}
    </button>
  )
}
