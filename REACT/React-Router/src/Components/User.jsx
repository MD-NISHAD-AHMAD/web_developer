import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const getData = (url) => {
  return fetch(url, {
    headers: {
      "x-api-key": 'reqres_0e78ae308e754581bf5083b6934547ce'
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getCurrentPageFromUrl = (value) => {
  value = Number(value);

  if (typeof value === "number" && value <= 0) value = 1;
  if (!value) value = 1;

  return value;
};

export const User = () => {
  const [data, setData] = React.useState({});
  const { toggleAuth } = React.useContext(AuthContext);
  const [searchParam, setSearchParams] = useSearchParams();

  const initial = getCurrentPageFromUrl(searchParam.get("page"));
  const [page, setPage] = React.useState(initial);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    getData(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setData(res);
    });
  }, [page]);

  React.useEffect(() => {
    setSearchParams({ page, text });
  }, [page, text, setSearchParams]);

  return (
    <>
      <h1>User</h1>

      <button onClick={toggleAuth}>Log out</button>

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search text"
      />

      <div>
        {data.data?.map((el) => (
          <div
            key={el.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img src={el.avatar} alt="person-logo" width={80} />

            <Link to={`/users/${el.id}`}>View Profile</Link>

            <p>
              {el.first_name} {el.last_name}
            </p>
          </div>
        ))}

        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <button>{page}</button>

        <button disabled={page >= 2} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};
