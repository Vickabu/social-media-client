import { logout } from "./logout";
import { remove } from "../../storage/index";

jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should clear the token and profile from storage", () => {
    logout();
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
