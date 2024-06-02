export type Circle = {
  kind: 'circle'
  radius: number
}

export type Square = {
  kind: 'square'
  sideLength: number
}

export type Triangle = {
  kind: 'triangle'
  base: number
  height: number
}

type Shape = Circle | Square | Triangle

// 形状の面積を計算する関数
export const calculateArea = (shape: Shape): number => {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
    case 'triangle':
      return (shape.base * shape.height) / 2
    default:
      throw new Error('サポートされていない形状')
  }
}

// 使用例
const circle: Circle = { kind: 'circle', radius: 5 }
const square: Square = { kind: 'square', sideLength: 4 }
const triangle: Triangle = { kind: 'triangle', base: 3, height: 6 }

console.log('円の面積:', calculateArea(circle)) // 出力: 円の面積: 78.53981633974483
console.log('正方形の面積:', calculateArea(square)) // 出力: 正方形の面積: 16
console.log('三角形の面積:', calculateArea(triangle)) // 出力: 三角形の面積: 9
