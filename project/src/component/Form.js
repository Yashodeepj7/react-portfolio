import Table from "react-bootstrap/Table";
import { Container, Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export const ProjectForm = () => {  // Renamed from Form to ProjectForm
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [user, setUser] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [image, setImage] = useState(null);

  // State for new project form
  const [newUser, setNewUser] = useState({
    projectName: "",
    projectDisc: ""
  });

  // Fetch users from API
  useEffect(() => {
    axios.get(`${backendUrl}/getcontact`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Handle Add Form Change
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Handle Edit Form Change
  const handleEditChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  // Add User Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = new FormData();
    newData.append("projectName", newUser.projectName);
    newData.append("projectDisc", newUser.projectDisc);
    newData.append("image", image);

    try {
      const res = await axios.post(`${backendUrl}registerproject`, newData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Data added successfully!");
      setUser([...user, res.data]); // Update UI with new entry
      setShowForm(false);
      setNewUser({ projectName: "", projectDisc: "" });
      setImage(null);
    } catch (error) {
      alert("Error adding data");
      console.error("Error adding data:", error);
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
      await axios.put(`${backendUrl}update/${editingUser._id}`, editingUser);
      setUser(user.map((u) => (u._id === editingUser._id ? editingUser : u)));
      setShowEditForm(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete User Function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}deletecontact/${id}`);
      setUser(user.filter((u) => u._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <Container>
        <div className="btn d-flex justify-content-end">
          <Button
            variant="primary"
            style={{ width: "10%", fontSize: "18px", fontWeight: "bold", display: "flex", justifyContent: "center", padding: "7px" }}
            onClick={() => setShowForm(true)}
          >
            Add<span className="d-flex justify-content-center align-items-center mx-1"><FaPlus /></span>
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((demo, id) => (
              <tr key={id}>
                <td>{demo.name}</td>
                <td>{demo.email}</td>
                <td>{demo.message}</td>
                <td>
                  <Button variant="secondary" className="mx-2" onClick={() => handleEdit(demo)}>
                    Update <FaRegEdit />
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
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Project Name:</Form.Label>
              <Form.Control type="text" name="projectName" value={newUser.projectName} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" name="projectDisc" value={newUser.projectDisc} onChange={handleChange} rows={3} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Image:</Form.Label>
              <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} required />
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
