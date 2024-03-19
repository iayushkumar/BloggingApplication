import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function Post() {
    const first = useContext(noteContext);
    const { addNote } = first;

    const [Notes, setNotes] = useState({ title: '', description: '', url: '', tag: '' });

    const handleOnClick = (e) => {
        e.preventDefault();
        addNote(Notes.title, Notes.description, Notes.url, Notes.tag);
        setNotes({ title: '', description: '', url: '', tag: '' });
    };

    const onChange = (e) => {
        setNotes({ ...Notes, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-3">
            <h2>Enter your Blog Content</h2>
            <br />
            <br />

            <form onSubmit={handleOnClick}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        <h4>Enter Title</h4>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        aria-describedby="emailHelp"
                        value={Notes.title}
                        onChange={onChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        <h4>Description</h4>
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={Notes.description}
                        onChange={onChange}
                        style={{ height: '400px' }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">
                        <h4>URL</h4>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="url"
                        name="url"
                        value={Notes.url}
                        onChange={onChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                        <h4>Tag</h4>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        value={Notes.tag}
                        onChange={onChange}
                    />
                </div>

                <button
                    disabled={Notes.title.length < 5 || Notes.description.length < 5}
                    type="submit"
                    className="btn btn-primary"
                >
                    Add Note
                </button>
            </form>
        </div>
    );
}
