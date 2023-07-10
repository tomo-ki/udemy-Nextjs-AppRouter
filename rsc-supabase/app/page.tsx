import { Suspense } from 'react'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import Spinner from './components/spinner'
import RefreshBtn from './components/refresh-btn'

export default function Home() {
  return (
    <main className="m-10 text-center">
      <Suspense fallback={<Spinner color="border-green-500" />}>
        <NotesList />
      </Suspense>
      <TimerCounter />
      <RefreshBtn />
    </main>
  )
}
