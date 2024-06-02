import { FC } from 'react'
import { getUser, APIVersion } from '@/api'

export const UserInfo: FC<{ version: APIVersion }> = async ({ version }) => {
  const userData = await getUser(version)

  return (
    <>
      <h2>ユーザー情報</h2>
      {userData.version === 'v1' && (
        <div>
          <p>名前: {userData.data.name}</p>
          <p>Eメール: {userData.data.email}</p>
        </div>
      )}
      {userData.version === 'v2' && (
        <div>
          <p>フルネーム: {userData.data.fullName}</p>
          <p>Eメール: {userData.data.email}</p>
        </div>
      )}
    </>
  )
}
