import { NextPage } from 'next'
import { UserInfo } from '@/components/UserInfo'
import {
  Circle,
  Square,
  Triangle,
  calculateArea,
} from '@/functions/calculateArea'

const Home: NextPage = () => {
  const circle: Circle = { kind: 'circle', radius: 5 }
  const square: Square = { kind: 'square', sideLength: 4 }
  const triangle: Triangle = { kind: 'triangle', base: 3, height: 6 }

  const circleValue = calculateArea(circle)
  const squareValue = calculateArea(square)
  const triangleValue = calculateArea(triangle)

  return (
    <main>
      <div>円の面積: {circleValue}</div>
      <div>正方形の面積: {squareValue}</div>
      <div>三角形の面積: {triangleValue}</div>
      <UserInfo version={'v1'} />
      <UserInfo version={'v2'} />
    </main>
  )
}

export default Home
