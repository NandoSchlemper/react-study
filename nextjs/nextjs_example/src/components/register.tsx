"use client"

import { instance } from "@/api/api.instance";
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

type UserProfile = {
    Name: string,
    Class: string,
    Race: string
}

export function RegisterForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<UserProfile>({
        Name: '',
        Class: '',
        Race: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (!formData.Name || !formData.Class || !formData.Race) {
            console.log("Por favor, preencha todos os campos");
            return;
        }

        const response = await fetch('http://localhost:3030/api/user/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })
        
        const data = await response.json()

        
        console.log(data);
        console.log(localStorage.getItem("user"))
        
        redirect('/game')
    }

    useEffect(() => {
        try {
            localStorage.setItem("user", JSON.stringify(formData))
        } catch (err) {
            console.error(err)
        }
    })

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="progress-indicator">
                    <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
                </div>

                {step === 1 && (
                    <div className="form-step">
                        <h2>Informe seu nome</h2>
                        <label>
                            <input 
                                type="text"
                                name="Name"
                                value={formData.Name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <div className="form-navigation">
                            <button type="button" onClick={nextStep} className="next-btn">
                                Próximo
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <h2>Escolha sua classe</h2>
                        <label>
                            <select 
                                name="Class"
                                value={formData.Class}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione uma classe</option>
                                <option value="guerreiro">Guerreiro</option>
                                <option value="mago">Mago</option>
                                <option value="ladino">Ladino</option>
                            </select>
                        </label>
                        <div className="form-navigation">
                            <button type="button" onClick={prevStep} className="prev-btn">
                                Anterior
                            </button>
                            <button type="button" onClick={nextStep} className="next-btn">
                                Próximo
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step">
                        <h2>Escolha sua raça</h2>
                        <label>
                            <select
                                name="Race"
                                value={formData.Race}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione uma raça</option>
                                <option value="elfo">Elfo</option>
                                <option value="humano">Humano</option>
                                <option value="anao">Anão</option>
                            </select>             
                        </label>
                        <div className="form-navigation">
                            <button type="button" onClick={prevStep} className="prev-btn">
                                Anterior
                            </button>
                            <button type="submit" className="submit-btn">
                                Finalizar Registro
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
