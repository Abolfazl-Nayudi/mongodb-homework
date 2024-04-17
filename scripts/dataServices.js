const baseURL = "https://mongodb-homework.onrender.com";

const getAllUser = async () => {
  try {
    const res = await fetch(`${baseURL}/user`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (userData) => {
  try {
    await fetch(`${baseURL}/user`, { body: JSON.stringify(userData), method: "POST", headers: { "Content-Type": "application/json" } });
    return { res: true, error: false };
  } catch (error) {
    console.log(error);
    return { res: false, error: true };
  }
};

const deleteUser = async (id) => {
  try {
    await fetch(`${baseURL}/user/${id}`, { method: "DELETE" });
    return { res: true, error: false };
  } catch (error) {
    console.log(error);
    return { res: false, error: true };
  }
};

export { getAllUser, deleteUser, createUser };
