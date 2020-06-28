const Role = {
  Scientist: "Scientist",
  User: "User",
};

export function configureFakeBackend() {
  let users = [
    {
      id: 1,
      username: "elon",
      password: "admin",
      firstName: "Elon",
      lastName: "Musk",
      role: Role.Scientist,
    },
    {
      id: 2,
      username: "rosmi",
      password: "user",
      firstName: "Rosmi",
      lastName: "George",
      role: Role.User,
    },
  ];

  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate - public
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          const params = JSON.parse(opts.body);
          const user = users.find(
            (x) =>
              x.username === params.username && x.password === params.password
          );
          if (!user) return error("Username or password is incorrect");
          return ok({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            token: `fake-jwt-token.${user.role}`,
          });
        }

        // pass through any requests not handled above
        realFetch(url, opts).then((response) => resolve(response));

        // private helper functions

        function ok(body) {
          resolve({
            ok: true,
            data: body,
          });
        }

        function error(message) {
          resolve({
            status: 400,
            error: { message },
          });
        }
      }, 500);
    });
  };
}
