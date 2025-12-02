import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

const API_BASE_URL = 'http://localhost:3001'

// Composant pour la liste des tâches (page d'accueil)
function TaskListPage() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_BASE_URL}/tasks`)
      if (!res.ok) throw new Error('Erreur lors du chargement des tâches')
      const data = await res.json()
      setTasks(data)
      setError('')
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) return
    try {
      const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Erreur lors de la suppression')
      setTasks((prev) => prev.filter((t) => t.id !== id))
    } catch (e) {
      alert(e.message)
    }
  }

  const handleEdit = (task) => {
    navigate(`/modifier/${task.id}`, { state: { task } })
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Gestion de Tâches</h1>
        <Link className="btn btn-primary" to="/ajouter">
          + Ajouter une tâche
        </Link>
      </header>

      {loading && <p>Chargement des tâches...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && tasks.length === 0 && <p>Aucune tâche pour le moment.</p>}

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-header">
              <h2>{task.title}</h2>
              <span className={`status status-${task.status?.toLowerCase()?.replace(' ', '-')}`}>
                {task.status}
              </span>
            </div>
            {task.description && <p className="task-description">{task.description}</p>}
            <div className="task-actions">
              <button className="btn btn-secondary" onClick={() => handleEdit(task)}>
                Modifier
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Composant formulaire (ajout / modification)
function TaskFormPage({ mode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const existingTask = location.state?.task || null

  const [title, setTitle] = useState(existingTask?.title || '')
  const [description, setDescription] = useState(existingTask?.description || '')
  const [status, setStatus] = useState(existingTask?.status || 'À faire')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isEdit = mode === 'edit'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) {
      setError('Le titre est obligatoire.')
      return
    }
    setError('')
    setSubmitting(true)

    const payload = { title, description, status }

    try {
      const url = isEdit
        ? `${API_BASE_URL}/tasks/${existingTask.id}`
        : `${API_BASE_URL}/tasks`
      const method = isEdit ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(isEdit ? 'Erreur lors de la mise à jour' : 'Erreur lors de la création')
      }

      navigate('/')
    } catch (e) {
      setError(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>{isEdit ? 'Modifier une tâche' : 'Ajouter une nouvelle tâche'}</h1>
        <Link className="btn btn-secondary" to="/">
          ← Retour à la liste
        </Link>
      </header>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex : Faire les devoirs React"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Détails supplémentaires (optionnel)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Statut</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>À faire</option>
            <option>En cours</option>
            <option>Terminé</option>
          </select>
        </div>

        {error && <p className="error">{error}</p>}

        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting
            ? isEdit
              ? 'Mise à jour...'
              : 'Création...'
            : isEdit
            ? 'Mettre à jour'
            : 'Créer'}
        </button>
      </form>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/ajouter" element={<TaskFormPage mode="create" />} />
        <Route path="/modifier/:id" element={<TaskFormPage mode="edit" />} />
      </Routes>
    </div>
  )
}

export default App
