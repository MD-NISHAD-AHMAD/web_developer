import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const navpath = [
        { path: '/', element: 'home'},
        { path: 'auth', element: 'auth'},
        { path: '/show_login', element: 'show_login'},
    ];

return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
        {navpath.map((el,i) => {
            return (
                <NavLink
                style={{
                    color: 'black',
                    fontSize: '35px',
                    textTransform: 'capitalize',
                    fontWeight: '900',
                }}
                to={el.path}
                end
                key={i}
                >
                    {el.element}
                </NavLink>
            );
        })}
    </div>
);

};