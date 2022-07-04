

export class AuthService{

  get isLogged(): boolean {
    return this._isLogged;
  }
  private _isLogged : boolean = false



  isAuth(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._isLogged)
      }, 10)

    })
  }


  login() {
    this._isLogged = true
  }

  logout() {
    this._isLogged = false
  }
}
