import React from "react";
import { link, usenavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from './../Context/contextCreated';

const getData = (url) => {
    return fetch(url, {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    }).then((res) => res.json())
    .catch((err) => console.log(err))
}

const getCurrentPageFormUrl = (value) => {
    value =Number(value);
    if (typeof value === "number" && value <= 0 ) value = 1;

    if (!value) value = 1;

    return value;
}

export const User = () => {
const [data, setdata] = React.useState({});
const { toggleAuth } = React.useContext(AuthContext);
const [searchParam, setSearchParams] = useSearchParams();
const initial = getCurrentPageFormUrl(searchParam.get("page"));
const [page, setpage] = React.useState(initial);

const [text, setText] =React.useState("") 
}

React.useEffect(() => {
    getData(https://reqres.in/api/users?page=${page})
    .then((res) => setData(res))
    .catch((err) => console.log(err))
}, [page]);

React.useEffect(() => {
    setSearchParams({ page, text })
}, [page, text])

return (<>
        <h1>user</h1>
        <button onClick={toggelAuth}>log out</button>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <div>
            {
                data.data?.map((el, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                        <img src={el.avatar} alt="peron_logo" />
                        <Link to={/users/${el.id}}>
                            {el.first_name} {" "} {el.last_name}
                        </Link>
                    </div>
                ))
            }
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <button>{page}</button>
            <button disabled={page >= 2} onClick={() => setPage(page + 1)}>Next</button>
        </div>
    </>)