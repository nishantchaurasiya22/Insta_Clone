import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayOut from "../features/auth/layouts/AuthLayOut"
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register"
import HomeLayOut from "../features/home/layouts/HomeLayOut"
import Home from "../features/home/pages/Home"
import ProtectedRoute from "./ProtectedRoutes"
import Profile from "../features/profile/components/Profile"
import CreatePost from "../features/post/components/CreatePost"
import { PostProvider } from "../features/post/post.context"
import { FollowProvider } from "../features/follow/follow.context"
import Feed from "../features/post/components/Feed"


const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayOut />,
            children: [
                {
                    index: true,
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        },
        {
            path: "/home",
            element: <ProtectedRoute />,
            children: [
                {
                    element: <HomeLayOut />,
                    children: [
                        {
                            element:
                                <PostProvider>
                                    <FollowProvider>
                                        <Home />
                                    </FollowProvider>
                                </PostProvider>
                            ,
                            children: [
                                {
                                    index: true,
                                    element: <Feed />
                                },
                                {
                                    path: "profile",
                                    element: <Profile />
                                },
                                {
                                    path: "create_post",
                                    element: <CreatePost />
                                }]
                        }]
                }]
        }])
    return (<RouterProvider router={router} />)
}
export default AppRoutes