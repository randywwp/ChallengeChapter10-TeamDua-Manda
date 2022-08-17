import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import { logoutInitiate } from "../redux/action";
// import { useAuth } from "../context/Auth";

export const Nav = () => {
  const { logout } = logoutInitiate();

  return (
    <>
      <Container className="">
        <div className="row">
          <div className="col-11 pt-2">
            <Link href="/dashboard" className="link">
              <h5 style={{ color: "black" }}>DASHBOARD</h5>
            </Link>
          </div>
          <div className="col pt-1">
            <Link href="/login">
              <Button size="sm" variant="primary" onClick={logout}>
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
