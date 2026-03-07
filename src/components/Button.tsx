import type React from "react"

export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ primary = false, children, ...props }) => {
  const baseStyles = "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  const primaryStyles = "bg-blue-500 hover:bg-blue-700 text-white"
  const secondaryStyles = "bg-gray-300 hover:bg-gray-400 text-gray-800"

  const buttonStyles = `${baseStyles} ${primary ? primaryStyles : secondaryStyles}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

