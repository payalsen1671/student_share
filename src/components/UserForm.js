import { useEffect, useState } from "react";

function UserForm({
  onAddUser,
  onUpdateUser,
  editingUser,
  onCancelEdit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
      });
    } else {
      setFormData({
        name: "",
        email: "",
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please enter name and email");
      return;
    }

    if (editingUser) {
      onUpdateUser(formData);
    } else {
      onAddUser(formData);
    }

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <div className="form-card">

      <h2>
        {editingUser ? "Update User" : "Add User"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">
          {editingUser ? "Update User" : "Add User"}
        </button>

        {editingUser && (
          <button
            type="button"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}

      </form>
    </div>
  );
}

export default UserForm;
