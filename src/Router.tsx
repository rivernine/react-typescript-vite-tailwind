import { lazy, useEffect, useState } from "react";
import withSuspense from "./hoc/withSuspense";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const HomePage = withSuspense(
  lazy(() => import("./pages/home/HomePage")),
  "HomePage"
)

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default Router;