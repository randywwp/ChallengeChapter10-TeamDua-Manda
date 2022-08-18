import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../redux/action";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  const dispatch = useDispatch();

  function handleSetUser(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (user.password !== user.confirmationPassword) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await dispatch(registerInitiate(user.email, user.password));
      setMessage("Processing...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } catch {
      if (user.password.valueOf.length < 6) {
        setError("Password must 6 character");
      } else {
        setError("Failed to register!");
      }
    }

    setLoading(false);
  }

  return (
    <>
      <Container
        className="mt-5"
        style={{
          background: "#0FC1A1",
          borderRadius: "30px",
        }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ height: 700 }}
        >
          <div className="col-4">
            <Form
              onSubmit={handleSubmit}
              className="p-5"
              style={{
                background: "#CBFFCE",
                borderRadius: "10px",
              }}
            >
              <div className="text-center pb-3">
                <h3
                  style={{
                    fontFamily: "arial",
                    fontSize: "50px",
                  }}
                >
                  <b>Register</b>
                </h3>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <b>Email</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleSetUser}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleSetUser}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Confirm Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="confirmationPassword"
                  value={user.confirmationPassword}
                  onChange={handleSetUser}
                />
              </Form.Group>
              <div className="text-center pt-2 d-grid"></div>
              <div className="text-center pt-2 d-grid">
                <Button variant="primary" type="submit" disabled={loading}>
                  {message === "" ? "Submit" : message}
                </Button>
              </div>
              <div className="text-center pt-3">
                Already have an account?{" "}
                <Link href="/login" className="link">
                  Login
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}
