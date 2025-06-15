import Table from "react-bootstrap/Table";
import { Container, Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export const TableCompo = () => {
  const [user, setUser] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState(
    { rollno: "", 
      name: "",
      email: ""
     });

  // Update-related states
  const [editingUser, setEditingUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  // Fetch users from API
  useEffect(() => {
    axios.get("http://localhost:8000/getcontact")
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));
  }, []);

  

  // Handle Add Form Change
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });//e.target.name will take the name of the input field and e.target.value will take the value of the input field
  };

  // Handle Edit Form Change
  const handleEditChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  // Add User Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", newUser);
      setUser([...user, response.data]); // Update UI
      setShowForm(false);
      setNewUser({ name: "", email: "",message:"" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Open Edit Modal
  const handleEdit = (userData) => {
    setEditingUser(userData);
    setShowEditForm(true);
  };

  // Update User Submit
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/update/${editingUser._id}`, editingUser);
      setUser(user.map(u => (u._id === editingUser._id ? editingUser : u)));
      setShowEditForm(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete User Function
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/deletecontact/${id}`);
    setUser(user.filter((u) => u._id !== id)); // Update UI after deletion
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};


  return (
    <>
      <Container>
        <div className="btn d-flex justify-content-end ">
        <Button variant="primary" style={{ width: '10%', fontSize:'18px',fontWeight:'bold',display:"flex",justifyContent:"center",padding:'7px'}} onClick={() => setShowForm(true)}>
          Add<span className="d-flex justify-content-center align-items-center mx-1"><FaPlus /></span>


        </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((demo, id) => (
              <tr key={id}>
                <td>{demo.name}</td>
                <td>{demo.message}</td>
                <td>{demo.email}</td>
                <td>
                  <Button variant="secondary" className="mx-2" onClick={() => handleEdit(demo)}>
                    Update<span><FaRegEdit /></span>
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(demo._id)}>
  Delete <MdDeleteOutline />
</Button>

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Add User Modal */}
      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Roll No:</Form.Label>
              <Form.Control type="text" name="rollno" value={newUser.rollno} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" value={newUser.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={newUser.email} onChange={handleChange} required />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowForm(false)}>Close</Button>
              <Button variant="primary" type="submit">Save</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Update User Modal */}
      <Modal show={showEditForm} onHide={() => setShowEditForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingUser && (
            <Form onSubmit={handleUpdateSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Roll No:</Form.Label>
                <Form.Control type="text" name="rollno" value={editingUser.rollno} onChange={handleEditChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" name="name" value={editingUser.name} onChange={handleEditChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name="email" value={editingUser.email} onChange={handleEditChange} required />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowEditForm(false)}>Close</Button>
                <Button variant="primary" type="submit">Update</Button>
              </Modal.Footer>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
