const Button = ({ children, onClick, type = 'button', variant = 'primary', isDisabled = false }) => {
  const baseStyles = 'px-4 py-2 rounded-xl font-semibold transition-colors duration-200 cursor-pointer'
  
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseStyles} ${variants[variant]} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button