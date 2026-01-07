import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const login = async () => {
    setError("")

    const res = await fetch("http://localhost:5000/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.message)
      return
    }

    localStorage.setItem("adminToken", data.token)
    navigate("/admin")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-6 rounded"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default AdminLogin
