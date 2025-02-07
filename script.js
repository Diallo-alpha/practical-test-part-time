 // Sélection des éléments
 const formulaire = document.querySelector('form');
 const champNomUtilisateur = document.querySelector('input[type="text"]');
 const champEmail = document.querySelector('input[type="email"]');
 const champTelephone = document.querySelector('input[type="tel"]');
 const champMotDePasse = document.querySelector('input[type="password"]');
 const caseACocher = document.querySelector('input[type="checkbox"]');
 const bouton = document.querySelector('button');

 // Messages d'erreur
 const erreurNomUtilisateur = document.getElementById('username-err');
 const erreurEmail = document.getElementById('email-err');
 const erreurTelephone = document.getElementById('phone');
 const erreurMotDePasse = document.getElementById('pwd-err');
 const erreurGenerale = document.getElementById('error');

 // Fonctions de validation
 function validerNomUtilisateur(nom) {
     return nom.length >= 5;
 }

 function validerEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
 }

 function validerTelephone(telephone) {
     return telephone.length === 8 && /^\d+$/.test(telephone);
 }

 function validerMotDePasse(motDePasse) {
     const contientLettre = /[a-zA-Z]/.test(motDePasse);
     const contientChiffre = /\d/.test(motDePasse);
     const contientSymbole = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(motDePasse);
     return motDePasse.length >= 6 && contientLettre && contientChiffre && contientSymbole;
 }

 // Gestionnaire d'événements pour le bouton d'inscription
 bouton.addEventListener('click', () => {
     // Réinitialisation des messages d'erreur
     erreurNomUtilisateur.textContent = '';
     erreurEmail.textContent = '';
     erreurTelephone.textContent = '';
     erreurMotDePasse.textContent = '';
     erreurGenerale.textContent = '';

     let estValide = true;

     // Validation du nom d'utilisateur
     if (!validerNomUtilisateur(champNomUtilisateur.value)) {
         erreurNomUtilisateur.textContent = "Le nom d'utilisateur doit contenir au moins 5 caractères";
         estValide = false;
     }

     // Validation de l'email
     if (!validerEmail(champEmail.value)) {
         erreurEmail.textContent = "Veuillez saisir une adresse email valide";
         estValide = false;
     }

     // Validation du numéro de téléphone
     if (!validerTelephone(champTelephone.value)) {
         erreurTelephone.textContent = "Le numéro de téléphone doit contenir 8 chiffres";
         estValide = false;
     }

     // Validation du mot de passe
     if (!validerMotDePasse(champMotDePasse.value)) {
         erreurMotDePasse.textContent = "Le mot de passe doit contenir au moins 6 caractères, incluant des lettres, des chiffres et des symboles";
         estValide = false;
     }

     if (estValide) {
         erreurGenerale.textContent = "Inscription réussie !";
         erreurGenerale.style.color = 'green';
     }
 });

 // Afficher/Masquer le mot de passe
 caseACocher.addEventListener('change', () => {
     champMotDePasse.type = caseACocher.checked ? 'text' : 'password';
 });