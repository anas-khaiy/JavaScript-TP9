// src/components/TodoList.js
import React, { useReducer, useState } from 'react';
import { todoReducer, ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../reducers/todoReducer';
import { useTheme } from '../contexts/ThemeContext';

function TodoList() {
    // État local pour le champ de saisie
    const [text, setText] = useState('');

    // État pour le mode édition
    const [editMode, setEditMode] = useState(null);
    const [editText, setEditText] = useState('');

    // Utilisation du reducer pour gérer l'état des todos
    const [todos, dispatch] = useReducer(todoReducer, []);

    // Accès au thème
    const { theme } = useTheme();

    // Styles basés sur le thème
    const todoItemStyle = {
        backgroundColor: theme === 'dark' ? '#444' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        border: `1px solid ${theme === 'dark' ? '#555' : '#ddd'}`,
        borderRadius: '4px',
        padding: '10px',
        margin: '5px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    // Gestionnaires d'événements
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch({ type: ADD_TODO, payload: text });
            setText('');
        }
    };

    const handleToggle = (id) => {
        dispatch({ type: TOGGLE_TODO, payload: id });
    };

    const handleDelete = (id) => {
        dispatch({ type: DELETE_TODO, payload: id });
    };

    const handleEdit = (todo) => {
        setEditMode(todo.id);
        setEditText(todo.text);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (editText.trim()) {
            dispatch({
                type: EDIT_TODO,
                payload: { id: editMode, text: editText }
            });
            setEditMode(null);
        }
    };

    return (
        <div className="todo-list">
            <h2>Liste de tâches</h2>

            {/* Formulaire d'ajout */}
            <form onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ajouter une tâche..."
                />
                <button type="submit">Ajouter</button>
            </form>

            {/* Liste des tâches */}
            <div>
                {todos.length === 0 ? (
                    <p>Aucune tâche pour le moment.</p>
                ) : (
                    todos.map(todo => (
                        <div key={todo.id} style={todoItemStyle}>
                            {editMode === todo.id ? (
                                // Mode édition
                                <form onSubmit={handleUpdate} style={{ display: 'flex', width: '100%' }}>
                                    <input
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        style={{ flex: 1 }}
                                    />
                                    <button type="submit">Enregistrer</button>
                                    <button type="button" onClick={() => setEditMode(null)}>Annuler</button>
                                </form>
                            ) : (
                                // Mode affichage
                                <>
                                    <span
                                        style={{
                                            textDecoration: todo.completed ? 'line-through' : 'none',
                                            cursor: 'pointer',
                                            flex: 1,
                                            textAlign: 'left'
                                        }}
                                        onClick={() => handleToggle(todo.id)}
                                    >
                                        {todo.text}
                                    </span>
                                    <div>
                                        <button onClick={() => handleEdit(todo)}>✏️</button>
                                        <button onClick={() => handleDelete(todo.id)}>🗑️</button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoList;
