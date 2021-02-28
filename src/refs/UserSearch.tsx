import { useState, useRef, useEffect } from 'react'

const users = [
  { name: 'sara', age: 20 },
  { name: 'alex', age: 20 },
  { name: 'micheal', age: 20 },
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  useEffect(() => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
  }, [])

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name)
    console.log(foundUser)
    setUser(foundUser)
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>find user</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  )
}

export default UserSearch
