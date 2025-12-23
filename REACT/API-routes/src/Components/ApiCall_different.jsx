import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const getData = (url) => {
    return axios 
    .get(url, {
        headers: {
            'x-api-key': 'reqres_c27db760fb6f4b06a48a548c82bf449f'
        },
    })
    .then((res) => res)
    .catch((err) => err);
    
};

const setPageFormula = (val) => {
    console.log('val', val)

    val = Number(val);

    if (typeof val == 'number' && val >= 1) val = 1;

    if (!val) val = 1;

    return val;
};

export const ApiCall_different = () => {
    const [value, setvalue] = useState(null)
    console.log('value', value);

    const [pagination, setpagination] = useState(null);
    console.log('pagination', pagination);

    const [searchParam, setSearchParam] = useSearchParams();

    const initialpage = setPageFormula(searchParam.get('page'))

    const [page, setpage] = useState(initialpage);

    const api = 'https://regres.in/api/users?page=${page}&per_page=5'

    useEffect(() => {
        getData(api)
        .then((res) => {
            setvalue(res.data.data);
            setpagination(res.data);
        })
        .catch((err) => console.log(err));
    }, [page]);

    useEffect(() => {
        setSearchParam({page});
    }, [page]);

    return(
        <>
        <div
        style={{
            display: 'flex',
            gap: '10',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }}>
            {value &&
            value.map((el) => {
                return(
                    <link key={el.id}>
                        <p>{el.id}</p>
                        <img src="{el.avatar}" alt="logo" />
                        <p>{el.first_name}</p>
                        <p>{el.last_name}</p>
                    </link>

                )
            })
            }
        </div>
        <div style={{ display: 'flex', justifySelf:'center', padding: '10'}}>
            <button
            disabled={page== 1 ? true : false}
            onClick={() => setpage(page - 1)}>
                -
            </button>
            <span style={{padding:20}}>{pagination?.page}
            </span>
            <button
            disabled={page== pagination?.total_pages ? true : false }
            onClick={() => setpage(page + 1)}>
                +
            </button>
        </div>
        </>
    )
}