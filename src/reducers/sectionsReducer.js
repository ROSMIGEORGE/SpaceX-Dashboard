const INITVALUE = {
  info: {},
  general: {
    history: { title: "History", path: "/history" },
    launches: { title: "Launches", path: "/launches" },
    lanchPad: { title: "Launch pad", path: "/launch-pad" },
    LandingPad: { title: "Landing pad", path: "/landing-pad" },
    missions: { title: "Missions", path: "/missions" },
  },
  machines: {
    capsule: { title: "Capsule", path: "/capsule" },
    cores: { title: "Cores", path: "/cores" },
    dragons: { title: "Dragons", path: "/dragons" },
    payload: { title: "Payloads", path: "/payloads" },
    rocket: { title: "Rockets", path: "/rockets" },
    roadster: { title: "Roadster", path: "/roadster" },
    ships: { title: "Ships", path: "/ships" },
  },
};

export default (state = INITVALUE, action) => {
  return state;
};
