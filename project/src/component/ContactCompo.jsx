import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
// import { FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import './style.css';

export const ContactCompo = ()=>
{

    const [user, setUser] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState(
    { rollno: "", 
      name: "",
      email: ""
     });

     // Fetch users from API
  useEffect(() => {
    axios.get("http://localhost:8000/getcontact")
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));
  }, []);

  // const handleChange = (e) => {
  //   setNewUser({ ...newUser, [e.target.name]: e.target.value });//e.target.name will take the name of the input field and e.target.value will take the value of the input field
  // };

  //handle submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8000/register", newUser);
  //     setUser([...user, response.data]); // Update UI
  //     setShowForm(false);
  //     setNewUser({ name: "", email: "",message:"" });
  //   } catch (error) {
  //     console.error("Error adding user:", error);
  //   }
  // };

  // Delete User Function
const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/deletecontact/${id}`);
      setUser(user.filter((u) => u._id !== id)); // Update UI after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

   
    return(
        <>
            <div className="dashboard container">
                <div className="dash-nav d-flex pt-4 pb-2 justify-content-md-between justify-content-around container"></div>
             <p className="d-flex"> <span className='dash-icon shadow '><box-icon name='contact' type='solid' color='#ffff' width='30px' height='30px'></box-icon></span><span className="mx-1 fs-3">Contact</span></p>
            </div>
            <div>
            <Container>
        <div className="btn d-flex justify-content-end ">
        {/* <Button variant="primary" style={{ width: '10%', fontSize:'18px',fontWeight:'bold',display:"flex",justifyContent:"center",padding:'7px'}} onClick={() => setShowForm(true)}>
          Add<span className="d-flex justify-content-center align-items-center mx-1"><FaPlus /></span>


        </Button> */}
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
          <tbody className="tbodyContact">
            {user.map((demo, id) => (
              <tr key={id}>
                <td>{demo.name}</td>
                <td>{demo.email}</td>
                <td>{demo.message}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(demo._id)}> Delete <MdDeleteOutline /></Button>

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      </div>
        </>
    )
}