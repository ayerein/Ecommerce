import { Outlet } from "react-router-dom"
import { NavBar } from "../pages/navbar/NavBar"

export const PublicLayout = ({ getProducts }) => {
  return (
    <>
      <NavBar getProducts={getProducts} />
      <Outlet />
    </>
  )
}