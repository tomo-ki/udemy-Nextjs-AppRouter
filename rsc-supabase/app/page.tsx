import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'

export default function Home() {
  return (
    <main className="m-10 text-center">
      <NotesList />
      <TimerCounter />
    </main>
  )
}
