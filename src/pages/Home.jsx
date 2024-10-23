import React, { useState, useEffect } from "react";

// Components
import NewGroupForm from "../components/NewGroupForm";
import Group from "../components/Group";

// Axios
import api from "../api";

const Home = () => {
  const [groups, setGroups] = useState([]);

  // GET group data
  const getGroups = async () => {
    try {
      const res = await api.get("/api/groups/");
      setGroups(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

  // Create a group
  const createGroup = async (newGroup) => {
    try {
      const res = await api.post("/api/groups/", newGroup);
      setGroups((prev) => [...prev, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE a group
  const deleteGroup = async (id) => {
    try {
      await api.delete(`/api/groups/delete/${id}/`);
      setGroups((prev) => prev.filter((group) => group.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {groups.length === 0 && <NewGroupForm createGroup={createGroup} />}
      {groups &&
        groups.map((group) => (
          <Group group={group} deleteGroup={deleteGroup} key={group.id} />
        ))}
    </main>
  );
};

export default Home;
