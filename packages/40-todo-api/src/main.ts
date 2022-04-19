import express from 'express'
import cors from 'cors'
import { v4 as uuidV4 } from 'uuid'
import fs from 'fs'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

interface Todo {
  id: string
  content: string
}

app.get('', async (_, res) => {
  res.send('ok')
})

app.get('/todos', async (_, res) => {
  if (!fs.existsSync('./db.json')) {
    res.json({ todos: [] })
    return
  }

  const todos: Todo[] = JSON.parse(fs.readFileSync('./db.json').toString())

  res.json({ todos })
})

type CreateTodoParams = Pick<Todo, 'content'>

app.post('/todos', async (req, res) => {
  const params: CreateTodoParams = req.body
  const todo: Todo = { ...params, id: uuidV4() }

  if (!fs.existsSync('./db.json')) {
    fs.writeFileSync('./db.json', JSON.stringify([todo], null, 2))
    res.json({ message: 'Success!' })

    return
  }

  const todos: Todo[] = JSON.parse(fs.readFileSync('./db.json').toString())
  const newTodos: Todo[] = [...todos, todo]
  fs.writeFileSync('./db.json', JSON.stringify(newTodos, null, 2))
  res.json({ message: 'Success!' })
})

app.delete('/todos/:id', async (req, res) => {
  if (!fs.existsSync('./db.json')) {
    res.status(404).json({ message: 'Not found the todo.' })
    return
  }

  const todos: Todo[] = JSON.parse(fs.readFileSync('./db.json').toString())
  const targetTodoId = req.params.id
  const targetTodo = todos.find((todo) => todo.id === targetTodoId)
  if (targetTodo == null) {
    res.status(404).json({ message: 'Not found the todo.' })
    return
  }

  const newTodos: Todo[] = todos.filter((todo) => todo.id !== targetTodo.id)
  fs.writeFileSync('./db.json', JSON.stringify(newTodos, null, 2))

  res.json({ message: 'Success!' })
})

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001')
})
