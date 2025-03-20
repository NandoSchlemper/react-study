"use server";

import { Home } from "@/components/home";
import "./home_style.css";

export default async function App() {
    return (
        <div>
            <title>bonfire</title>
            <Home />
        </div>
    );
}
