import Table from "react-bootstrap/Table";
import { Container, Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./style.css";

 const AdminCertifications = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [certs, setCerts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [newCert, setNewCert] = useState({
    title: "",
    provider: "",
    issued: "",
    imageUrl: "",
    credentialUrl: "",
  });
  const [editingCert, setEditingCert] = useState(null);

  // Fetch Certifications
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/certifications`)
      .then((res) => setCerts(res.data))
      .catch((err) => console.log(err));
  }, [backendUrl]);

  // Add Form Change
  const handleChange = (e) => {
    setNewCert({ ...newCert, [e.target.name]: e.target.value });
  };

  // Edit Form Change
  const handleEditChange = (e) => {
    setEditingCert({ ...editingCert, [e.target.name]: e.target.value });
  };

  // Add Certification
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/certifications`, newCert);
      setCerts([...certs, res.data]);
      setShowForm(false);
      setNewCert({ title: "", provider: "", issued: "", imageUrl: "", credentialUrl: "" });
    } catch (err) {
      console.log(err);
    }
  };

  // Update Certification
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${backendUrl}/api/certifications/${editingCert._id}`,
        editingCert
      );
      setCerts(
        certs.map((c) => (c._id === editingCert._id ? res.data : c))
      );
      setShowEditForm(false);
      setEditingCert(null);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Certification
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/certifications/${id}`);
      setCerts(certs.filter((c) => c._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Certifications</h2>
        <Button onClick={() => setShowForm(true)}>
          <FaPlus /> Add
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Provider</th>
            <th>Issued</th>
            <th>Image</th>
            <th>Credential</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {certs.map((c) => (
            <tr key={c._id}>
              <td>{c.title}</td>
              <td>{c.provider}</td>
              <td>{c.issued}</td>
              <td>
                <img src={c.imageUrl} alt="" width="60" height="40" />
              </td>
              <td>
                <a href={c.credentialUrl} target="_blank" rel="noreferrer">
                  View
                </a>
              </td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => {
                    setEditingCert(c);
                    setShowEditForm(true);
                  }}
                >
                  <FaRegEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(c._id)}
                >
                  <MdDeleteOutline />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Modal */}
      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Certification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              placeholder="Title"
              name="title"
              value={newCert.title}
              onChange={handleChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Provider"
              name="provider"
              value={newCert.provider}
              onChange={handleChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Issued (Month Year)"
              name="issued"
              value={newCert.issued}
              onChange={handleChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Image URL"
              name="imageUrl"
              value={newCert.imageUrl}
              onChange={handleChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Credential URL"
              name="credentialUrl"
              value={newCert.credentialUrl}
              onChange={handleChange}
              className="mb-2"
              required
            />
            <Button type="submit" className="mt-2 w-100">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditForm} onHide={() => setShowEditForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Certification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Control
              placeholder="Title"
              name="title"
              value={editingCert?.title || ""}
              onChange={handleEditChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Provider"
              name="provider"
              value={editingCert?.provider || ""}
              onChange={handleEditChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Issued"
              name="issued"
              value={editingCert?.issued || ""}
              onChange={handleEditChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Image URL"
              name="imageUrl"
              value={editingCert?.imageUrl || ""}
              onChange={handleEditChange}
              className="mb-2"
              required
            />
            <Form.Control
              placeholder="Credential URL"
              name="credentialUrl"
              value={editingCert?.credentialUrl || ""}
              onChange={handleEditChange}
              className="mb-2"
              required
            />
            <Button type="submit" className="mt-2 w-100">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminCertifications;