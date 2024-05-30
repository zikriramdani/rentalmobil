import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Users from "./pages/users";

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Users />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;