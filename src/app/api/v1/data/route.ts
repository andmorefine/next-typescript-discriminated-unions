import { NextResponse } from 'next/server'
import { UserV1 } from '@/api'

export const GET = () => {
  const userV1: UserV1 = {
    version: 'v1',
    data: {
      name: '山田',
      email: 'yamada.hanako@example.com',
    },
  }

  return NextResponse.json(userV1)
}
