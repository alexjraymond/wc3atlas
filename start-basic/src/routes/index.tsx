import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3 className='text-8xl'>Welcome Home!!!</h3>
    </div>
  )
}
