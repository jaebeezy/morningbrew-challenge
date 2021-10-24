import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "../src/components/form";

describe("Form", () => {
  it("form properly formats phone number", () => {
    const phoneNumber = screen.getByRole("textbox", {
      name: /phone number/i,
    });

    userEvent.type(phoneNumber, "1234569999");

    expect(phoneNumber).toContainHTML("(123) 456-9999");
  });

  it("form will replace digits for full name", () => {
    const name = screen.getByRole("textbox", {
      name: /your full name/i,
    });

    userEvent.type(name, "1223123");

    expect(name).toHaveValue("");
  });

  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<Form onSubmit={onSubmit} />);
  });

  it("clicks submit only when required inputs are completed", () => {
    const name = screen.getByRole("textbox", {
      name: /your full name/i,
    });

    userEvent.type(name, "LeBron James");

    const email = screen.getByRole("textbox", {
      name: /your email/i,
    });

    userEvent.type(email, "KingJames23@gmail.com");

    const checkbox = screen.getByRole("checkbox", {
      name: /morning/i,
    });

    userEvent.click(checkbox);

    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  // TODO: test that form will not pass validation on empty fields when submitted

  // TODO: test invalid fields won't be accepted

  // TODO: test if successful submit, submitted button will appear on dom

  // TODO: test local storage state
});
