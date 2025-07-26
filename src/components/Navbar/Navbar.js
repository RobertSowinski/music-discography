"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button, Navbar, Nav } from "rsuite";
import Link from "next/link";

// Reusable navbar with conditional back button
export default function CustomNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Navbar>
      <Nav>
        <Nav.Item as={Link} href="/">
          Home
        </Nav.Item>
      </Nav>
      {!isHome && (
        <Nav pullRight>
          <Nav.Item>
            <Button appearance="primary" onClick={() => router.back()}>
              Back
            </Button>
          </Nav.Item>
        </Nav>
      )}
    </Navbar>
  );
}