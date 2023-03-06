import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
    state: () => {
        return {
            loggedIn: false,
            user: {}
        }
    },
    actions: {
        setUser(user) {
            this.user = user;
            this.loggedIn = true;
            console.log("???????????/");
        }
    }
});