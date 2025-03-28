export const classes = [   
    { value: "", label: "Selecione uma classe" },
    { value: "feiticeiro", label: "Feiticeiro" },
    { value: "mago", label: "Mago" },
    { value: "bruxo", label: "Bruxo" },
    { value: "clerigo", label: "Clérigo" },
    { value: "druida", label: "Druida" },
    { value: "bardo", label: "Bardo" },
    { value: "paladino", label: "Paladino" },
    { value: "inventor", label: "Inventor" },
  ];
  
export const racas = [
    { value: "", label: "Selecione uma raça" },
    { value: "elfo", label: "Elfo" },
    { value: "humano", label: "Humano" },
    { value: "anao", label: "Anão" },
    { value: "draconato", label: "Draconato" },
    { value: "tiefling", label: "Tiefling" },
    { value: "halfling", label: "Halfling" },
  ];

export type UserProfile = {
  Name: string;
  Class: string;
  Race: string;
};

