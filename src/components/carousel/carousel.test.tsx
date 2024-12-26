import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from ".";
import { User } from "types";

describe("Carousel Component", () => {
  const mockUsers: User[] = [
    { avatar: "/lorem-1.png", name: "User 1", role: "Role 1", id: 1 },
    { avatar: "/lorem-2.png", name: "User 2", role: "Role 2", id: 2 },
    { avatar: "/lorem-3.png", name: "User 3", role: "Role 3", id: 3 },
    { avatar: "/lorem-4.png", name: "User 4", role: "Role 4", id: 4 },
  ];

  it("should render the carousel with users", () => {
    render(<Carousel users={mockUsers} />);

    mockUsers.forEach((user) => {
      expect(screen.getByAltText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.role)).toBeInTheDocument();
    });

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should display the correct number of users in the carousel viewport", () => {
    render(<Carousel users={mockUsers} />);

    const userCards = screen.getAllByRole("img");
    expect(userCards.length).toBe(mockUsers.length);
  });

  it("should reset to the first user when reaching the end", () => {
    render(<Carousel users={mockUsers} />);

    const button = screen.getByRole("button");

    for (let i = 0; i < mockUsers.length; i++) {
      fireEvent.click(button);
    }

    const firstUser = screen.getByAltText(mockUsers[0].name);
    expect(firstUser).toBeInTheDocument();
  });
});
