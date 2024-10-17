import { login } from "./login";
import { save } from "../../storage/index";

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(() => null),
}));

describe("login function", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    jest.clearAllMocks();
  });

  it("should store token when provided with valid credentials", async () => {
    const mockToken = "mocked_token";
    const mockProfile = { name: "Test User", accessToken: mockToken };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProfile,
    });

    const email = "test@example.com";
    const password = "valid_password";

    await login(email, password);

    expect(save).toHaveBeenCalledWith("token", mockToken);
  });

  it("should throw an error when response is not ok", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    const email = "invalid@example.com";
    const password = "invalid_password";

    await expect(login(email, password)).rejects.toThrow("Unauthorized");
  });
});
