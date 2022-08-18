import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/Auth";

export default function UpdateProfile() {
  const [user, setUser] = useState({
    photoURL: "",
    displayName: "",
    email: "",
    password: "",
    confirmationPassword: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { updateName, updateMail, currentUser, gantiPassword } = useAuth();

  const router = useRouter();

  function handleSetUser(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccess("");
    setError("");
    setMessage("");
    setLoading(true);

    if (user.password !== user.confirmationPassword) {
      return setError("Password do not match");
    }

    const promises = [];
    if (user.displayName !== currentUser.displayName) {
      promises.push(updateName(user.displayName));
    }

    if (user.email !== currentUser.email) {
      promises.push(updateMail(user.email));
    }

    if (user.password !== currentUser.password) {
      promises.push(gantiPassword(user.password));
    }

    Promise.all(promises)
      .then(() => {
        setMessage("Processing...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Container className=" mt-5">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: 700 }}
        >
          <div className="col-4">
            <Form
              onSubmit={handleSubmit}
              className="border border-5 border-light rounded-3 p-5"
            >
              <div className="text-center pb-3">
                <h3>Update Profile</h3>
              </div>
              <Form.Group className="mb-3">
                {success && <Alert variant="success"> {success} </Alert>}
                {error && <Alert variant="danger"> {error} </Alert>}
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={
                    currentUser.displayName
                      ? currentUser.displayName
                      : "please update username"
                  }
                  name="displayName"
                  value={user.displayName}
                  onChange={handleSetUser}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={currentUser.email}
                  name="email"
                  value={user.email}
                  onChange={handleSetUser}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="optional"
                  name="password"
                  value={user.password}
                  onChange={handleSetUser}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="optional"
                  name="confirmationPassword"
                  value={user.confirmationPassword}
                  onChange={handleSetUser}
                />
              </Form.Group>
              <div className="text-center pt-2 d-grid">
                <Button variant="primary" type="submit">
                  {message === "" ? "Update" : message}
                </Button>
              </div>
              <div className="text-center pt-3">
                <Link href="/dashboard" className="link">
                  Cancel
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}
