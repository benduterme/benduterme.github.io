// ==========================================
// 1. CONFIGURATION (REMPLIS ICI AVEC TES CODES !)
// ==========================================
const EMAIL_CONFIG = {
    serviceID: "service_h1qentp",   // Ton Service ID (ex: service_z8n...)
    templateID: "template_dz44q0a", // Ton Template ID (C'est celui que tu as créé)
    shopEmail: "lagourmandisebouillon@gmail.com" // L'email qui reçoit les commandes
};

// ==========================================
// 2. DONNÉES DES PRODUITS (Ne pas toucher)
// ==========================================
const DATA = {
    articles: [
      {
        type: "pralibel",
        typeName: "Pralibel",
        prix: { "250 g": 10., "500 g": 20., "1 kg": 40. },
        articles: [
          {id: "pralibel-1", nom: "Assortiment Chocolats noirs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-2", nom: "Assortiment Chocolats au lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-3", nom: "Assortiment Chocolats blancs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-4", nom: "Assortiment Pralinés noirs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-5", nom: "Assortiment Pralinés au lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-6", nom: "Assortiment Pralinés blancs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-7", nom: "Assortiment Chocolats noirs - blancs - lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-8", nom: "Assortiment Pralinés noirs - blancs - lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "pralibel-9", nom: "Assortiment Pâtes d'amandes", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
        ]
      },
      {
        type: "ovidias",
        typeName: "Ovidias",
        prix: { "250 g": 7., "500 g": 14., "1 kg": 28. },
        articles: [
          {id: "ovidias-2", nom: "Assortiment Chocolats noirs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "ovidias-3", nom: "Assortiment Chocolats au lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "ovidias-4", nom: "Assortiment Chocolats blancs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "ovidias-5", nom: "Assortiment Pralinés noirs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "ovidias-6", nom: "Assortiment Pralinés au lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "ovidias-7", nom: "Assortiment Pralinés blancs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "ovidias-8", nom: "Assortiment Chocolats noirs - blancs - lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
          {id: "ovidias-9", nom: "Assortiment Pralinés noirs - blancs - lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{value: "250 g", count: 0, type: "poids", poids: 0.25}, {value: "500 g", count: 0, type: "poids", poids: 0.5}, {value: "1 kg", count: 0, type: "poids", poids: 1}]},
        ]
      },
      {
        type: "confiseries",
        typeName: "Confiseries et spécialités",
        prix: {},
        articles: [
          {id: "confiseries-1", nom: "Orangettes - 180 g", img: "./src/img/Cadeaux/Orangettes.jpg", choix: [{value: 8.5, count: 0, type: "euros", poids: 0.18}]},
          {id: "confiseries-2", nom: "Cerisettes - 180 g", img: "./src/img/Pralibel/confiseries/cerisette.png", choix: [{value: 9.5, count: 0, type: "euros", poids: 0.18}]},
          {id: "confiseries-3", nom: "Mendiants - 180 g", img: "./src/img/Cadeaux/Mendiants.jpg", choix: [{value: 8.5, count: 0, type: "euros", poids: 0.18}]},
          {id: "confiseries-4", nom: "Gianduja - 180 g", img: "./src/img/Cadeaux/Gianduja.png", choix: [{value: 8.5, count: 0, type: "euros", poids: 0.18}]},
          {id: "confiseries-5", nom: "Liqueurs - 180 g", img: "./src/img/Cadeaux/liqueurs.jpg", choix: [{value: 9.5, count: 0, type: "euros", poids: 0.18}]},
          {id: "confiseries-6", nom: "Truffes - 250 g", img: "./src/img/Cadeaux/Truffes.jpg", choix: [{value: 8.5, count: 0, type: "euros", poids: 0.25}]},
          {id: "confiseries-7", nom: "Pâtes de fruits - 180 g", img: "./src/img/Cadeaux/Pâtes de Fruits.jpg", choix: [{value: 8.5, count: 0, type: "euros", poids: 0.18}]},
          {id: "confiseries-8", nom: "Pralines sans sucre - 250 g", img: "./src/img/Cadeaux/Stevia.jpg", choix: [{value: 13.5, count: 0, type: "euros", poids: 0.25}]},
          {id: "confiseries-9", nom: "Florentines - ± 10 pcs", img: "./src/img/Cadeaux/florentines.jpg", choix: [{value: 9.5, count: 0, type: "euros", poids: 0.25}]},
          {id: "confiseries-10", nom: "Palets de chocolat - 17 pcs", img: "./src/img/Cadeaux/palets-chocolat.png", choix: [{value: 8.5, count: 0, type: "euros", poids: 0.25}]},
          {id: "confiseries-11", nom: "Assortiment - 24 mini tablettes", img: "./src/img/Cadeaux/assortiment-noël.png", choix: [{value: 22, count: 0, type: "euros", poids: 0.25}]},
          {id: "confiseries-12", nom: "Nougats - 150 g", img: "./src/img/Cadeaux/nougats.PNG", choix: [{value: 8.4, count: 0, type: "euros", poids: 0.15}]},
        ]
      },
    ]
};

// ==========================================
// 3. LOGIQUE DU MAGASIN ET ENVOI
// ==========================================
function shop() {
  return {
    articles: DATA["articles"],
    panier: {},
    total: 0.,
    user: {
      nom: "", prenom: "", email: "", telephone: "", date: "",
      recupMarchandise: "Magasin", modePaiement: "",
      paysLivraison: "Belgique/Lux", destinataire: "", address: "", codePostal: "", ville: ""
    },
    errors: [],
    success: [],
    loading: false, 

    mounted() {
      // Initialisation des produits
      for (let topArticle of this.articles) {
        for (let article of topArticle.articles) {
          article.prix = topArticle.prix
          for (let choix of article.choix) {
            let nom = `${topArticle.typeName} - ${article.nom}`
            if (choix.type === "poids") nom = `${nom} - ${choix.value}`
            this.panier[this._getId(article, choix)] = { 
                nom, count: choix.count, prix: 0, poids: 0, 
                choixRef: choix, articleRef: article 
            }
          }
        }
      }
    },

    // --- Gestion du panier ---
    resetArticlePanier(id) {
      this.panier[id].count = 0; this.panier[id].prix = 0; this.panier[id].poids = 0;
      this.panier[id].choixRef.count = 0;
    },
    decreaseArticlePanier(id) {
      this.decremente(this.panier[id].articleRef, this.panier[id].choixRef);
    },
    increaseArticlePanier(id) {
      this.incremente(this.panier[id].articleRef, this.panier[id].choixRef);
    },
    decremente(article, choix) {
      choix.count--;
      let id = this._getId(article, choix);
      this.panier[id].count--;
      this.panier[id].prix = this._getPrix(article, choix);
      this.panier[id].poids = choix.poids * this.panier[id].count;
    },
    incremente(article, choix) {
      choix.count++;
      let id = this._getId(article, choix);
      this.panier[id].count++;
      this.panier[id].prix = this._getPrix(article, choix);
      this.panier[id].poids = choix.poids * this.panier[id].count;
    },
    _getId({ id }, { type, value }) { return `${id}-${type}-${value}`; },
    _getPrix(article, choix) {
      if (choix.type === "poids") return choix.count * article.prix[choix.value];
      if (choix.type === "euros") return choix.count * choix.value;
      return 0;
    },
    getPanier() { return Object.entries(this.panier).filter(([_, article]) => article.count > 0); },
    getQteTotal() { return this.getPanier().reduce((acc, [_, a]) => acc + a.count, 0); },
    getTotal() { return this.getPanier().reduce((acc, [_, a]) => acc + a.prix, 0); },
    getPoidsTotal() { return this.getPanier().reduce((acc, [_, a]) => acc + a.poids, 0); },
    getArticles(type) { return this.articles.find(el => el.type === type).articles; },
    choixStr(choix) { return choix.type == "euros" ? choix.value + " €" : choix.value; },
    
    // --- Calcul Frais de Port ---
    getShippingPrice() {
      if (this.user.recupMarchandise !== "Livraison") return 0;
      let total = this.getPoidsTotal();
      
      if (this.user.paysLivraison === "Belgique/Lux") {
        if(total <= 3) return 4.10;
        if(total <= 7) return 4.60;
        return 5.70;
      }
      if (this.user.paysLivraison === "France") {
        if(total <= 0.5) return 6.20;
        if(total <= 1) return 7.10;
        if(total <= 3) return 8.40;
        if(total <= 5) return 10.00;
        if(total <= 7) return 11.20;
        if(total <= 10) return 15.80;
        if(total <= 15) return 19.60;
      }
      if (this.user.paysLivraison === "Espagne") {
        if(total <= 0.5) return 9.20;
        if(total <= 1) return 10.00;
        if(total <= 2) return 10.70;
        if(total <= 3) return 13.00;
        if(total <= 5) return 15.40;
        if(total <= 7) return 17.60;
        if(total <= 10) return 23.00;
        if(total <= 15) return 27.70;
      }
      return 0;
    },
    getFinalTotal() {
        return (this.user.recupMarchandise === "Livraison") 
            ? this.getTotal() + this.getShippingPrice() 
            : this.getTotal();
    },

    // --- Utilitaires ---
    getRandomNumber() { return Math.floor(Math.random() * 9); },
    getRefCom() {
      return Array(6).fill(0).map(() => this.getRandomNumber()).join('');
    },
    setSuccess(msg) { this.success = msg; },
    setError(msg) { this.errors = msg; },

    // --- FONCTION D'ENVOI D'EMAIL (NOUVELLE VERSION) ---
    sendEmail() {
      this.errors = [];
      this.success = [];
      
      // 1. Validation du formulaire
      let errors = [];
      if (!this.user.nom || !this.user.prenom || !this.user.email) errors.push("Il manque des informations personnelles");
      if (this.user.recupMarchandise === "Magasin" && !this.user.date) errors.push("Veuillez indiquer une date d'enlèvement");
      if (!this.user.recupMarchandise) errors.push("Veuillez indiquer le mode de récupération");
      if (this.user.recupMarchandise === "Livraison") {
          if (!this.user.paysLivraison) errors.push("Pays de livraison manquant");
          if (!this.user.destinataire || !this.user.address || !this.user.codePostal || !this.user.ville) errors.push("Adresse de livraison incomplète");
      }
      if (!this.user.modePaiement) errors.push("Veuillez indiquer le mode de paiement");
      if (!this.getPanier().length) errors.push("Votre panier est vide");

      if (errors.length) {
        this.setError(errors);
        return;
      }

      // Début de l'envoi
      this.loading = true; 
      let refCom = this.getRefCom();

      // --- Construction du HTML du Panier ---
      let cartHTML = `<table style="width:100%; border-collapse: collapse; margin-top:10px; border: 1px solid #ddd;">
                        <tr style="background:#f0f0f0; text-align:left;"><th style="padding:8px;">Article</th><th style="padding:8px;">Qté</th><th style="padding:8px;">Prix</th></tr>`;
      
      for (let [id, article] of this.getPanier()) {
        cartHTML += `<tr>
            <td style="padding:8px; border-bottom:1px solid #ddd;">${article.nom}</td>
            <td style="padding:8px; border-bottom:1px solid #ddd;">${article.count}</td>
            <td style="padding:8px; border-bottom:1px solid #ddd;">${article.prix.toFixed(2)} €</td>
        </tr>`;
      }

      let totalCmd = this.getTotal();
      if (this.user.recupMarchandise === "Livraison") {
          let shipping = this.getShippingPrice();
          cartHTML += `<tr><td colspan="2" style="text-align:right; padding:8px;">Livraison:</td><td style="padding:8px;">${shipping.toFixed(2)} €</td></tr>`;
          totalCmd += shipping;
      }
      cartHTML += `<tr style="font-weight:bold; background:#fafafa;"><td colspan="2" style="text-align:right; padding:8px;">Total:</td><td style="padding:8px;">${totalCmd.toFixed(2)} €</td></tr>`;
      cartHTML += `</table>`;

      // --- Email 1 : Contenu pour le MAGASIN ---
      let msgShop = `<h3>Nouvelle Commande (Réf: ${refCom})</h3>
                     <p><b>Client:</b> ${this.user.nom} ${this.user.prenom} (${this.user.email})<br>
                     <b>Tél:</b> ${this.user.telephone || "Non renseigné"}</p>
                     <p><b>Mode:</b> ${this.user.recupMarchandise}<br>
                     ${this.user.recupMarchandise === 'Magasin' ? `<b>Date retrait:</b> ${this.user.date}` : ''}</p>`;
      
      if (this.user.recupMarchandise === "Livraison") {
          msgShop += `<p><b>Adresse de livraison:</b><br>
          ${this.user.destinataire}<br>${this.user.address}<br>${this.user.codePostal} ${this.user.ville} (${this.user.paysLivraison})</p>`;
      }
      msgShop += `<p><b>Paiement:</b> ${this.user.modePaiement}</p>`;
      msgShop += cartHTML;

      // --- Email 2 : Contenu pour le CLIENT ---
      let msgClient = `<h3>Confirmation de votre commande (Réf: ${refCom})</h3>
                       <p>Bonjour ${this.user.prenom},<br>
                       Nous avons bien reçu votre commande et nous vous en remercions.</p>`;
      
      if (this.user.modePaiement === "Virement") {
          msgClient += `<div style="background:#f9f9f9; padding:15px; border:1px solid #ccc; border-radius:5px; margin: 10px 0;">
              <strong>Instructions de paiement :</strong><br>
              Merci de virer le montant de <b>${totalCmd.toFixed(2)} €</b> sur le compte :<br>
              IBAN: <b>BE45 7326 6015 6789</b><br>
              BIC: <b>CREGBEBB</b><br>
              Communication: <b>${this.user.nom} ${refCom}</b>
          </div>`;
          
          if (this.user.recupMarchandise === "Livraison") {
            msgClient += `<p>Dès réception du paiement, nous vous confirmerons l'envoi de votre commande.</p>`;
          } else {
            msgClient += `<p>Dès réception du paiement, nous préparerons votre commande pour l'enlèvement.</p>`;
          }

      } else {
          msgClient += `<p>Le paiement se fera sur place lors du retrait de votre commande.</p>`;
          msgClient += `<p>Nous préparerons votre commande avec le plus grand soin pour la date souhaitée.</p>`;
      }
      
      msgClient += `<h4>Récapitulatif :</h4>` + cartHTML;
      msgClient += `<br><p>Cordialement,<br>L'équipe La Gourmandise Bouillon</p>`;

      // --- ENVOI DES EMAILS ---
      
      // 1. Envoi au Magasin
      const sendToShop = emailjs.send(EMAIL_CONFIG.serviceID, EMAIL_CONFIG.templateID, {
          subject: `Nouvelle commande - ${refCom} - ${this.user.nom}`,
          to_email: EMAIL_CONFIG.shopEmail, // Envoi au patron
          html_message: msgShop
      });

      // 2. Envoi au Client
      const sendToClient = emailjs.send(EMAIL_CONFIG.serviceID, EMAIL_CONFIG.templateID, {
          subject: `Votre commande La Gourmandise - ${refCom}`,
          to_email: this.user.email, // Envoi au client
          html_message: msgClient
      });

      Promise.all([sendToShop, sendToClient])
        .then(() => {
            this.loading = false;
            this.setSuccess(["Votre commande a bien été envoyée ! Un email de confirmation vous a été transmis."]);
            // On vide le panier
            this.panier = {}; 
             for (let topArticle of this.articles) {
                for (let article of topArticle.articles) {
                  for (let choix of article.choix) {
                     let id = this._getId(article, choix);
                     if(this.panier[id]) {
                         this.resetArticlePanier(id);
                     }
                  }
                }
             }
        })
        .catch((err) => {
            this.loading = false;
            console.error("Erreur EmailJS:", err);
            this.setError(["Une erreur est survenue lors de l'envoi. Si le problème persiste, merci de nous contacter par téléphone."]);
        });
    }
  }
}
