import { Child } from './Child'

const Parent = () => {
  return (
    <Child
      color='green'
      onClick={() => {
        console.log('yolo')
      }}
    />
  )
}

export default Parent
