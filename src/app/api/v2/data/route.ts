import { NextResponse } from 'next/server'
import { UserV2 } from '@/api'

export const GET = () => {
  const userV2: UserV2 = {
    version: 'v2',
    data: {
      fullName: '山田 花子',
      email: 'yamada.hanako@example.com',
    },
  }

  return NextResponse.json(userV2)
}
