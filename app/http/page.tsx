'use client'

import axios from "axios"
import { useState } from "react"

interface Todos {
    completed:boolean
    id:number
    title:string
    userId:number
}

export default function Http() {

    //const url = "http://localhost:3000"
    const url = "https://jsonplaceholder.typicode.com/todos"
    const [todos,setTodos] = useState<Todos[]>([])

    const payload = {
        id:1,
        name:"lk"
    }

    const handleGet = async () => {
        const res = await axios.get(url)

        if (res.status === 200) {
            setTodos(res.data)
        }
    }

    const handlePost = async () => {
        await axios.post(url,payload)
    }


  return (
    <div>
        <button
            className="btn" onClick={handleGet}
        >GET</button>
        <button
            className="btn" onClick={handlePost}
        >POST</button>

        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    id = {todo.id}, 
                    title = {todo.title},
                    completed = {todo.completed.toString()},  
                    userId = {todo.userId}
                </div>
            ))}
        </div>
    </div>
  )
}
