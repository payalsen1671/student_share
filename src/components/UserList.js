function UserList({
    users,
    loading,
    onEdit,
    onDelete,
  }) {
    if (loading) {
      return <h3>Loading...</h3>;
    }
  
    return (
      <div className="list-card">
  
        <h2>User List</h2>
  
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table>
  
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
  
              {users.map((user, index) => (
                <tr key={user._id}>
  
                  <td>{index + 1}</td>
  
                  <td>{user.name}</td>
  
                  <td>{user.email}</td>
  
                  <td>
                    <button
                      onClick={() => onEdit(user)}
                    >
                      Edit
                    </button>
  
                    <button
                      onClick={() => onDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
  
                </tr>
              ))}
  
            </tbody>
  
          </table>
        )}
  
      </div>
    );
  }
  
  export default UserList;
  