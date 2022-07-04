

export class AuthService{
  private isLogged : boolean = false

  isAuth(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged)
      }, 10)

    })
  }


  login() {
    this.isLogged = true
  }

  logout() {
    this.isLogged = false
  }
}
