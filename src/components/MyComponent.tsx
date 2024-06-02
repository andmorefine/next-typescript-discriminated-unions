type LoadingState = { status: 'loading' }
type SuccessState<T> = { status: 'success'; data: T }
type ErrorState = { status: 'error'; message: string }

type State<T> = LoadingState | SuccessState<T> | ErrorState

function MyComponent<T>({ state }: { state: State<T> }) {
  switch (state.status) {
    case 'loading':
      return <div>読み込み中...</div>
    case 'success':
      return <div>データが読み込まれました: {String(state.data)}</div>
    case 'error':
      return <div>エラー: {state.message}</div>
    default:
      return null
  }
}
