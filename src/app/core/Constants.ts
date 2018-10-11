export class Constants {
  public static readonly signUpValidationMessage = {
    'prenom' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'nom' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'dateDeNaissance' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'marqueMoto' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'modeleMoto' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'immatriculationMoto' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'datePermis' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'email': [
      { type: 'required', message: 'L\'adresse email est obligatoire' },
      { type: 'email', message: 'L\'adresse n\'est pas une adresse email valide' }
    ],
    'password': [
      { type: 'required', message: 'Le mot de passe est obligatoire' },
    ],
  }
}
