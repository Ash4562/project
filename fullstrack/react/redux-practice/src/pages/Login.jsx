import React, { useEffect, useState } from 'react'
import { loginUser } from '../redux/action/Useraction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [userResponse, setUserResponse] = useState({

        email: "ross@gmail.com",
        password: "123"

    })
    const handleChagne = e => {
        setUserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }
    const callAction = useDispatch()
    const handleSubmit = e => {
        callAction(loginUser(userResponse))

    }
    const navigate = useNavigate()
    const { loading, error, auth } = useSelector(state => state.clients)
    useEffect(() => {
        if (auth) {

            navigate("/dash")
        }
    }, [auth])

    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <div>
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    onChange={handleChagne}

                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    onChange={handleChagne}

                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <button type="button" onClick={handleSubmit}
                                class="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p class="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login
