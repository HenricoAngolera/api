const UserCreateService = require("./UserCreateService")

it("user should be create", () => {
  const user = {
    name: "User test",
    email: "usertest@email.com",
    password: "123"
  }

  const userCreateService = new UserCreateService();
  const userCreated = await userCreateService.execute(user)

  except(userCreated).toHaveProperty("id");

})