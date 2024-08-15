export const errorInterceptor = (error) => {
    
    if(error.message === "Network Error") {
        return Promise.reject(new Error("Sem conexão com a internet"));
    }
}