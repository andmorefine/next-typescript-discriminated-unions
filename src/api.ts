import { REST_API_DOMAIN } from '@/constants/domain'
export type APIVersion = 'v1' | 'v2'

export type UserV1 = {
  version: 'v1'
  data: {
    name: string
    email: string
  }
}

export type UserV2 = {
  version: 'v2'
  data: {
    fullName: string
    email: string
  }
}

export type User = UserV1 | UserV2

export async function getUser(version: APIVersion): Promise<User> {
  const response = await fetch(`${REST_API_DOMAIN}/api/${version}/data`)
  return await response.json()
}
