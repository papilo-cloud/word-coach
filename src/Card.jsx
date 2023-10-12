
export const Card = ({children, message}) => {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}
