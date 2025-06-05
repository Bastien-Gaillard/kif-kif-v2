export namespace Users {
  export interface CreateUser {
    firstname: string; // Nom de l'utilisateur
    lastname: string; // Prénom de l'utilisateur
    birthday: string; // Date de naissance de l'utilisateur (format ISO 8601)
    email: string; // Email de l'utilisateur
    password: string; // Mot de passe de l'utilisateur
    newsletter?: boolean; // Indique si l'utilisateur souhaite recevoir la newsletter
    idRole: number; // ID du rôle de l'utilisateur (optionnel, par défaut 1)
  }

  export interface LoginUser {
    email: string; // Email de l'utilisateur
    password: string; // Mot de passe de l'utilisateur
  }

}
