import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Mateo Fonseca",
  email: "test@gmial.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};
