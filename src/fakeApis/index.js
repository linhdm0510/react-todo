import { createServer, Model } from "miragejs"

export const setupServer = () => {
  let server = createServer({
    models: {
      todos: Model
    },

    routes() {
      this.get('/api/todos', (schema) => {
        return schema.todos.all()
      })

      this.post('/api/todos', (schema, request) => {
        const payload = JSON.parse(request.requestBody)

        return schema.todos.create(payload)
      })

      this.post('/api/todo/update', (schema, request) => {
        const id = JSON.parse(request.requestBody)

        const currentItem = schema.todos.find(id)
         
        currentItem.update({
          isCompleted: !currentItem.isCompleted
        })

        return currentItem
      })

    }
  })


}

