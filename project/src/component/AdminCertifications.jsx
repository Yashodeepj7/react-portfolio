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
    credentialUrl: "",
  });
  const [newImage, setNewImage] = useState(null);
  const [editingCert, setEditingCert] = useState(null);
  const [editImage, setEditImage] = useState(null);

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
      const formData = new FormData();
      formData.append("title", newCert.title);
      formData.append("provider", newCert.provider);
      formData.append("issued", newCert.issued);
      formData.append("credentialUrl", newCert.credentialUrl);
      if (newImage) formData.append("image", newImage);

      const res = await axios.post(`${backendUrl}/api/certifications`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setCerts([...certs, res.data]);
      setShowForm(false);
      setNewCert({ title: "", provider: "", issued: "", credentialUrl: "" });
      setNewImage(null);
    } catch (err) {
      console.log(err);
    }
  };

  // Update Certification
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", editingCert.title);
      formData.append("provider", editingCert.provider);
      formData.append("issued", editingCert.issued);
      formData.append("credentialUrl", editingCert.credentialUrl);
      if (editImage) formData.append("image", editImage);

      const res = await axios.put(
        `${backendUrl}/api/certifications/${editingCert._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setCerts(certs.map((c) => (c._id === editingCert._id ? res.data : c)));
      setShowEditForm(false);
      setEditingCert(null);
      setEditImage(null);
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
          <FaPlus /> Add Certification
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Provider</th>
            <th>Issued</th>
            <th>Image</th>
            <th>Credential URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {certs.map((cert) => (
            <tr key={cert._id}>
              <td>{cert.title}</td>
              <td>{cert.provider}</td>
              <td>{cert.issued}</td>
              <td>
                {cert.imageUrl && (
                  <img
                    src={cert.imageUrl}
                    alt="cert"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                )}
              </td>
              <td>
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                  View
                </a>
              </td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => {
                    setEditingCert(cert);
                    setShowEditForm(true);
                  }}
                >
                  <FaRegEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(cert._id)}
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
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newCert.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Provider</Form.Label>
              <Form.Control
                type="text"
                name="provider"
                value={newCert.provider}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Issued</Form.Label>
              <Form.Control
                type="text"
                name="issued"
                value={newCert.issued}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Credential URL</Form.Label>
              <Form.Control
                type="text"
                name="credentialUrl"
                value={newCert.credentialUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setNewImage(e.target.files[0])}
                required
              />
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditForm} onHide={() => setShowEditForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Certification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingCert && (
            <Form onSubmit={handleEditSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editingCert.title}
                  onChange={handleEditChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Provider</Form.Label>
                <Form.Control
                  type="text"
                  name="provider"
                  value={editingCert.provider}
                  onChange={handleEditChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Issued</Form.Label>
                <Form.Control
                  type="text"
                  name="issued"
                  value={editingCert.issued}
                  onChange={handleEditChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Credential URL</Form.Label>
                <Form.Control
                  type="text"
                  name="credentialUrl"
                  value={editingCert.credentialUrl}
                  onChange={handleEditChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>New Image (optional)</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEditImage(e.target.files[0])}
                />
              </Form.Group>
              <Button type="submit">Update</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminCertifications;
