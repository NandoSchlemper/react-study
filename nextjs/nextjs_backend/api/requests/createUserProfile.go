package requests

import (
	"encoding/json"
	"math/rand"
	"net/http"
	"soyfueda/api/utils"
)

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Class string `json:"class"`
	Race  string `json:"race"`
}

func CreateUserProfile(w http.ResponseWriter, r *http.Request) {
	utils.WrapperHeader(&w)

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	var user User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	user.ID = rand.Intn(1000)

	userJson, err := json.Marshal(user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}
	w.Write(userJson)
}
