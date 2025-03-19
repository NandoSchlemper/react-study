"use client";

import { redirect } from "next/navigation";

export function Home() {
	function handleClick() {
		redirect("/app");
	}

	return (
		<>
			<div className="flex flex-col items-center p-10 rounded-2xl">
				<h1 className="basic-introduction-home">
					Bem vindo à Valkia, guerreiro.
				</h1>
			</div>
			<div className="items-center flex flex-col">
				<div className="adventure-container">
					<img
						className="home-bonfire-gif"
						src={
							"https://i.pinimg.com/originals/23/7a/c5/237ac54cdea81df47af9a65f895ee6db.gif"
						}
						alt="carregando aquecimento..."
					/>
					<div className="start-adventure-div">
						<button
							type="button"
							className="start-adventure-button"
							onClick={handleClick}
						>
							Start
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
