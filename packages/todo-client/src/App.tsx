import { useEffect, useState, VFC } from 'react'

interface Todo {
  id: string
  content: string
}

interface FetchTodosResponseJson {
  todos: Todo[]
}

const App: VFC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [content, setContent] = useState('')

  const fetchTodos = async () => {
    const fetchTodosResponse = await fetch('http://localhost:3001/todos', {
      method: 'GET',
    })
    const fetchTodosResponseJson: FetchTodosResponseJson =
      await fetchTodosResponse.json()
    setTodos(fetchTodosResponseJson.todos)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <h1>Todoリスト</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          ;(async () => {
            await fetch('http://localhost:3001/todos', {
              method: 'POST',
              body: JSON.stringify({ content }),
              headers: {
                'Content-Type': 'application/json',
              },
            })

            setContent('')

            await fetchTodos()
          })()
        }}
      >
        <input
          type="text"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button type="submit">Todo追加</button>
      </form>

      <div>
        {todos.length === 0 && <>Todoがありません</>}
        {todos.length > 0 && (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.content}
                <button
                  onClick={() => {
                    ;(async () => {
                      await fetch(`http://localhost:3001/todos/${todo.id}`, {
                        method: 'DELETE',
                      })

                      await fetchTodos()
                    })()
                  }}
                >
                  Todo削除
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
