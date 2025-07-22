import Table from "react-bootstrap/Table";
import { Container, Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./style.css";

export const FormCompo = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [user, setUser] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [newUser, setNewUser] = useState({
    projectName: "",
    projectDisc: "",
    githubLink: "",
    demoLink: "",
    image: null,
  });
  const [editingUser, setEditingUser] = useState(null);

  // Fetch projects
useEffect(() => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/getproject`)
    .then((res) => {
      // console.log("GET /getproject RESPONSE:", res.data); // 👀 Add this
      console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

      setUser(res.data);
    })
    .catch((err) => console.log(err));
}, []);


  // Handle Add Form Change
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setNewUser({ ...newUser, image: e.target.files[0] });
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  // Handle Edit Form Change
  const handleEditChange = (e) => {
    if (e.target.name === "image") {
      setEditingUser({ ...editingUser, image: e.target.files[0] });
    } else {
      setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
    }
  };

  // Add Project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("projectName", newUser.projectName);
      formData.append("projectDisc", newUser.projectDisc);
      formData.append("githubLink", newUser.githubLink);
      formData.append("demoLink", newUser.demoLink);
  
      if (newUser.image) formData.append("image", newUser.image);
  
      const response = await axios.post(
        `${backendUrl}/registerproject`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      setUser([...user, response.data]);
      setShowForm(false);
      setNewUser({ projectName: "", projectDisc: "", githubLink: "", demoLink: "", image: null });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message); // 💡 Show alert for large file
      } else {
        console.error("Error adding project:", error);
      }
    }
  };
  

  // Open Edit Modal
  const handleEdit = (userData) => {
    setEditingUser(userData);
    setShowEditForm(true);
  };

  // Update Project
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("projectName", editingUser.projectName);
      formData.append("projectDisc", editingUser.projectDisc);
      formData.append("githubLink", editingUser.githubLink);
      formData.append("demoLink", editingUser.demoLink);

      if (editingUser.image) formData.append("image", editingUser.image);

      await axios.put(
        `${backendUrl}/updateproject/${editingUser._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setUser(user.map((u) => (u._id === editingUser._id ? editingUser : u)));
      setShowEditForm(false);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  // Delete Project
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/deleteproject/${id}`);
      setUser(user.filter((u) => u._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <>
      <div className="dashboard container">
        <div className="dash-nav d-flex pt-4 pb-2 justify-content-md-between justify-content-around container"></div>
        <p className="d-flex">
          <span className="dash-icon shadow ">
            <box-icon
              type="logo"
              name="graphql"
              color="#ffff"
              width="30px"
              height="30px"
            ></box-icon>
          </span>
          <span className="mx-1 align-self-center fs-3">Project</span>
        </p>
      </div>

      <Container>
        <div className="btn d-flex justify-content-end ">
          <Button
            variant="primary"
            style={{
              width: "10%",
              fontSize: "18px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              padding: "7px",
            }}
            onClick={() => setShowForm(true)}
          >
            Add
            <span className="d-flex justify-content-center align-items-center mx-1">
              <FaPlus />
            </span>
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Github Link</th>
              {/* <th>Demo Link</th> */}
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {user.map((demo, id) => (
              <tr key={id}>
                <td>{demo.projectName}</td>
                <td>{demo.projectDisc}</td>
                <td>{demo.githubLink}<br />{demo.demoLink}</td>
                
                <td>
                  {demo.image && (
                    <img
                      src={`${backendUrl}images/${demo.image}`}
                      alt="Project"
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                 
                </td>
                <td>
                  <Button
                    variant="secondary"
                    className="mx-2"
                    onClick={() => handleEdit(demo)}
                  >
                    Update
                    <span className="ms-1">
                      <FaRegEdit />
                    </span>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(demo._id)}
                  >
                    Delete <MdDeleteOutline />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Add Project Modal */}
      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Project Name:</Form.Label>
              <Form.Control
                type="text"
                name="projectName"
                value={newUser.projectName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="projectDisc"
                value={newUser.projectDisc}
                onChange={handleChange}
                rows={3}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>GitHub Link:</Form.Label>
              <Form.Control
                type="url"
                name="githubLink"
                value={newUser.githubLink}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Demo Link:</Form.Label>
              <Form.Control
                type="url"
                name="demoLink"
                value={newUser.demoLink}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowForm(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Update Project Modal */}
      <Modal show={showEditForm} onHide={() => setShowEditForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingUser && (
            <Form onSubmit={handleUpdateSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Project Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="projectName"
                  value={editingUser.projectName}
                  onChange={handleEditChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="projectDisc"
                  value={editingUser.projectDisc}
                  onChange={handleEditChange}
                  rows={3}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Change Image:</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleEditChange}
                  accept="image/*"
                />
              </Form.Group>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setShowEditForm(false)}
                >
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
