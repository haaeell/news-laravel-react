import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    console.log("user", user);
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route('login')}>Login </Link>
                                </li>
                                <li>
                                <Link href={route('register')}> Register</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <a className="justify-between">
                                    <Link href={route('dashboard')}> Dashboard</Link>
                                        <span className="badge">New</span>
                                    </a>

                                </li>
                                <li><Link > Settings</Link></li>
                                <li><Link href={route('logout')} method="post"> Logout</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
