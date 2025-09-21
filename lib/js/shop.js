"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var DATA = {
  global: {
    "email": "benduterme@gmail.com",
    "token": "e999d8b6-b853-494b-a600-a3a4dcc0734e"
  },
  articles: [{
    type: "pralibel",
    typeName: "Pralibel",
    prix: {
      "250 g": 10.,
      "500 g": 20.,
      "1 kg": 40.
    },
    articles: [{ id: "pralibel-1", nom: "Assortiment Chocolats noirs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-2", nom: "Assortiment Chocolats au lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-3", nom: "Assortiment Chocolats blancs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-4", nom: "Assortiment Pralinés noirs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-5", nom: "Assortiment Pralinés au lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-6", nom: "Assortiment Pralinés blancs", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-7", nom: "Assortiment Chocolats noirs - blancs - lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-8", nom: "Assortiment Pralinés noirs - blancs - lait", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "pralibel-9", nom: "Assortiment Pâtes d'amandes", img: "./src/img/Pralibel/logo-pralibel.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }]
  }, {
    type: "ovidias",
    typeName: "Ovidias",
    prix: {
      "250 g": 7.,
      "500 g": 14.,
      "1 kg": 28.
    },
    articles: [{ id: "ovidias-2", nom: "Assortiment Chocolats noirs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "ovidias-3", nom: "Assortiment Chocolats au lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "ovidias-4", nom: "Assortiment Chocolats blancs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "ovidias-5", nom: "Assortiment Pralinés noirs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "ovidias-6", nom: "Assortiment Pralinés au lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "ovidias-7", nom: "Assortiment Pralinés blancs", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "ovidias-8", nom: "Assortiment Chocolats noirs - blancs - lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }, { id: "ovidias-9", nom: "Assortiment Pralinés noirs - blancs - lait", img: "./src/img/Ovidias/ovidias-logo.jpg", choix: [{ value: "250 g", count: 0, type: "poids", poids: 0.25 }, { value: "500 g", count: 0, type: "poids", poids: 0.5 }, { value: "1 kg", count: 0, type: "poids", poids: 1 }] }]
  }, {
    type: "confiseries",
    typeName: "Confiseries et spécialités",
    prix: {},
    articles: [{ id: "confiseries-1", nom: "Orangettes - 180 g", img: "./src/img/Cadeaux/Orangettes.jpg", choix: [{ value: 8.5, count: 0, type: "euros", poids: 0.18 }] }, { id: "confiseries-2", nom: "Cerisettes - 180 g", img: "./src/img/Pralibel/confiseries/cerisette.png", choix: [{ value: 9.5, count: 0, type: "euros", poids: 0.18 }] }, { id: "confiseries-3", nom: "Mendiants - 180 g", img: "./src/img/Cadeaux/Mendiants.jpg", choix: [{ value: 8.5, count: 0, type: "euros", poids: 0.18 }] }, { id: "confiseries-4", nom: "Gianduja - 180 g", img: "./src/img/Cadeaux/Gianduja.png", choix: [{ value: 8.5, count: 0, type: "euros", poids: 0.18 }] }, { id: "confiseries-5", nom: "Liqueurs - 180 g", img: "./src/img/Cadeaux/liqueurs.jpg", choix: [{ value: 9.5, count: 0, type: "euros", poids: 0.18 }] }, { id: "confiseries-6", nom: "Truffes - 250 g", img: "./src/img/Cadeaux/Truffes.jpg", choix: [{ value: 8.5, count: 0, type: "euros", poids: 0.25 }] }, { id: "confiseries-7", nom: "Pâtes de fruits - 180 g", img: "./src/img/Cadeaux/Pâtes de Fruits.jpg", choix: [{ value: 8.5, count: 0, type: "euros", poids: 0.18 }] }, { id: "confiseries-8", nom: "Pralines sans sucre - 250 g", img: "./src/img/Cadeaux/Stevia.jpg", choix: [{ value: 13.5, count: 0, type: "euros", poids: 0.25 }] }, { id: "confiseries-9", nom: "Florentines - ± 10 pcs", img: "./src/img/Cadeaux/florentines.jpg", choix: [{ value: 9.5, count: 0, type: "euros", poids: 0.25 }] }, { id: "confiseries-10", nom: "Palets de chocolat - 17 pcs", img: "./src/img/Cadeaux/palets-chocolat.png", choix: [{ value: 8.5, count: 0, type: "euros", poids: 0.25 }] }, { id: "confiseries-11", nom: "Assortiment - 24 mini tablettes", img: "./src/img/Cadeaux/assortiment-noël.png", choix: [{ value: 22, count: 0, type: "euros", poids: 0.25 }] }, { id: "confiseries-12", nom: "Nougats - 150 g", img: "./src/img/Cadeaux/nougats.PNG", choix: [{ value: 8.4, count: 0, type: "euros", poids: 0.15 }] }]
  }]
};

function shop() {

  return {
    articles: DATA["articles"],
    prix: DATA["prix"],
    panier: {},
    total: 0.,
    user: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      date: "",
      recupMarchandise: "Magasin",
      modePaiement: "",
      cgv: "",
      paysLivraison: "Belgique/Lux",
      destinataire: "",
      address: "",
      codePostal: "",
      ville: ""
    },
    errors: [],
    success: [],
    mounted: function mounted() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var topArticle = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = topArticle.articles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var article = _step2.value;

              article.prix = topArticle.prix;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = article.choix[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var choix = _step3.value;

                  var nom = topArticle.typeName + " - " + article.nom;
                  if (choix.type === "poids") {
                    nom = nom + " - " + choix.value;
                  }
                  var count = choix.count;
                  var prix = 0;
                  var poids = 0;
                  this.panier[this._getId(article, choix)] = { nom: nom, count: count, prix: prix, poids: poids, choixRef: choix, articleRef: article };
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    resetArticlePanier: function resetArticlePanier(id) {
      this.panier[id].count = 0;
      this.panier[id].prix = 0;
      this.panier[id].poids = 0;
      this.panier[id].choixRef.count = 0;
    },
    decreaseArticlePanier: function decreaseArticlePanier(id) {
      var article = this.panier[id].articleRef;
      var choix = this.panier[id].choixRef;
      var poids = this.panier[id];
      this.decremente(article, choix, poids);
    },
    increaseArticlePanier: function increaseArticlePanier(id) {
      var article = this.panier[id].articleRef;
      var choix = this.panier[id].choixRef;
      var poids = this.panier[id];
      this.incremente(article, choix, poids);
    },
    setSuccess: function setSuccess(success) {
      while (this.success.length) {
        this.success.pop();
      }
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = success[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var s = _step4.value;
          this.success.push(s);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    },
    setError: function setError(errors) {
      while (this.errors.length) {
        this.errors.pop();
      }
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = errors[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var error = _step5.value;
          this.errors.push(error);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    },
    choixStr: function choixStr(choix) {
      if (choix.type == "euros") {
        return choix.value + " €";
      } else return choix.value;
    },
    _getId: function _getId(_ref, _ref2) {
      var id = _ref.id;
      var type = _ref2.type,
          value = _ref2.value;

      return id + "-" + type + "-" + value;
    },
    getArticles: function getArticles(type) {
      var topArticle = this.articles.find(function (el) {
        return el.type === type;
      });
      return topArticle.articles;
    },
    _getPrix: function _getPrix(article, choix) {
      if (choix.type === "poids") {
        return choix.count * article.prix[choix.value];
      } else if (choix.type === "euros") {
        return choix.count * choix.value;
      } else {
        throw "Mauvais type de choix: peut valoir 'poids' ou 'euros'";
      }
    },
    getTotal: function getTotal() {
      return this.getPanier().map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            _ = _ref4[0],
            article = _ref4[1];

        return article.prix;
      }).reduce(function (acc, prix) {
        return acc + prix;
      }, 0);
    },
    decremente: function decremente(article, choix) {
      choix.count--;
      var id = this._getId(article, choix);
      this.panier[id].count--;
      this.panier[id].prix = this._getPrix(article, choix);
      this.panier[id].poids = choix.poids * this.panier[id].count;
    },
    incremente: function incremente(article, choix) {
      choix.count++;
      var id = this._getId(article, choix);
      this.panier[id].count++;
      this.panier[id].prix = this._getPrix(article, choix);
      this.panier[id].poids = choix.poids * this.panier[id].count;
    },
    getPanier: function getPanier() {
      return Object.entries(this.panier).filter(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            _ = _ref6[0],
            article = _ref6[1];

        return article.count > 0;
      });
    },
    getPoidsTotal: function getPoidsTotal() {
      return this.getPanier().map(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            _ = _ref8[0],
            article = _ref8[1];

        return article.poids;
      }).reduce(function (acc, poids) {
        return acc + poids;
      }, 0);
    },
    getShippingPrice: function getShippingPrice() {
      if (this.user.recupMarchandise !== "Livraison") {
        return 0;
      }

      var total = this.getPoidsTotal();
      if (this.user.paysLivraison === "Belgique/Lux") {
        if (total <= 3) {
          return 4.10;
        } else if (total <= 7) {
          return 4.60;
        } else {
          return 5.70;
        }
      }

      if (this.user.paysLivraison === "France") {
        if (total <= 0.5) {
          return 6.20;
        } else if (total <= 1) {
          return 7.10;
        } else if (total <= 3) {
          return 8.40;
        } else if (total <= 5) {
          return 10.00;
        } else if (total <= 7) {
          return 11.20;
        } else if (total <= 10) {
          return 15.80;
        } else if (total <= 15) {
          return 19.60;
        }
      }

      if (this.user.paysLivraison === "Espagne") {
        if (total <= 0.5) {
          return 9.20;
        } else if (total <= 1) {
          return 10.00;
        } else if (total <= 2) {
          return 10.70;
        } else if (total <= 3) {
          return 13.00;
        } else if (total <= 5) {
          return 15.40;
        } else if (total <= 7) {
          return 17.60;
        } else if (total <= 10) {
          return 23.00;
        } else if (total <= 15) {
          return 27.70;
        }
      }
      throw "Manque pays de Livraison";
    },
    getFinalTotal: function getFinalTotal() {
      if (this.user.recupMarchandise === "Livraison") {
        return this.getTotal() + this.getShippingPrice();
      } else {
        return this.getTotal();
      }
    },
    getRandomNumber: function getRandomNumber() {
      return Math.floor(Math.random() * Math.floor(9));
    },
    getRefCom: function getRefCom() {
      return "" + this.getRandomNumber() + this.getRandomNumber() + this.getRandomNumber() + this.getRandomNumber() + this.getRandomNumber() + this.getRandomNumber();
    },
    getQteTotal: function getQteTotal() {
      return this.getPanier().map(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            _ = _ref10[0],
            article = _ref10[1];

        return article.count;
      }).reduce(function (acc, count) {
        return acc + count;
      }, 0);
    },
    sendEmail: function sendEmail() {
      var _this = this;

      this.errors = [];
      this.success = [];

      var data = DATA.global;
      var hasError = false;
      var errors = [];
      if (!this.user.nom || !this.user.prenom || !this.user.email) {
        errors.push("Il manque des informations personnelles");
      }
      if (this.user.recupMarchandise === "Magasin") {
        if (!this.user.date) {
          errors.push("Veuillez indiquer une date d'enlèvement souhaitée");
        }
      }
      if (!this.user.recupMarchandise) {
        errors.push("Veuillez indiquer comment vous souhaitez récupérer votre marchandise");
      }
      if (this.user.recupMarchandise === "Livraison") {
        if (!this.user.paysLivraison) {
          errors.push("Veuillez indiquer le pays de livraison des marchandises");
        }
        if (!this.user.destinataire || !this.user.address || !this.user.codePostal || !this.user.ville) {
          errors.push("Veuillez compléter les coordonnées de livraison");
        }
      }
      if (!this.user.modePaiement) {
        errors.push("Veuillez indiquer le mode de paiement souhaité");
      }
      if (!this.getPanier().length) {
        errors.push("Votre panier est vide");
      }
      if (errors.length) {
        this.setError(errors);
        return;
      }

      var refCom = this.getRefCom();

      var message = "Demande de commande:<br>" + "-------------------<br><br>" + ("Pour: " + this.user.nom + " " + this.user.prenom + " - " + this.user.email);
      if (this.user.telephone) message += " (" + this.user.telephone + ")<br><br>";else {
        message += '<br><br>';
      }

      message += "R\xE9f\xE9rence: " + refCom + "<br><br>";

      if (this.user.recupMarchandise === "Magasin") {
        message += "Date d'enl\xE8vement: " + this.user.date + "<br><br>";
      }

      message += "<table>";

      message += "<tr><td>Articles</td><td>Quantit\xE9</td><td>Prix</td></tr>";
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.getPanier()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _ref11 = _step6.value;

          var _ref12 = _slicedToArray(_ref11, 2);

          var id = _ref12[0];
          var article = _ref12[1];

          message += "<tr><td>" + article.nom + "</td><td>" + article.count + "</td><td>" + article.prix.toFixed(2) + " \u20AC</td></tr>";
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      var total = this.getTotal();
      if (this.user.recupMarchandise === "Livraison") {
        total += this.getShippingPrice();
      }

      total = total.toFixed(2);

      if (this.user.recupMarchandise === "Livraison") {
        var shippingPrice = this.getShippingPrice().toFixed(2);
        message += "<tr><td colspan=\"2\">Frais de livraison:</td><td>" + shippingPrice + " \u20AC</td></tr>";
      }

      message += "<tr><td>Total:</td><td>" + this.getQteTotal() + "</td><td>" + total + " \u20AC</td></tr>";

      message += "</table><br><br>";

      message += "R\xE9cup\xE9ration de la marchandise: " + this.user.recupMarchandise + "<br><br>";

      if (this.user.recupMarchandise === "Livraison") {
        message += "Nom et pr\xE9nom du destinataire: " + this.user.destinataire + "<br>";
        message += "Adresse: " + this.user.address + "<br>";
        message += "Code postal: " + this.user.codePostal + " - Ville: " + this.user.ville + "<br><br>";
      }

      message += "Mode de paiement: " + this.user.modePaiement;

      var toEmail = encodeURIComponent(data.toemail);
      Email.send({
        SecureToken: data.token,
        To: "lagourmandisebouillon@gmail.com",
        From: data.email,
        Subject: "Demande de commande",
        Body: message
      }).then(function (mess) {
        if (mess === "OK") {
          _this.setSuccess(["Merci pour votre commande. Nous reviendrons vers vous dans les plus brefs délais."]);
        } else {
          _this.setError(["Il y a eu un problème avec l'envoi de votre email."]);
        }
      });

      var message2 = "Commande n\xB0 " + refCom + "<br><br>" + "Madame, Monsieur,<br><br>" + "Nous avons le plaisir de vous confirmer l'envoi de votre commande.<br>" + "Mondial Relay vous informera bient\xF4t par message ou par e-mail de l'arriv\xE9e de votre colis.<br>" + "Nous esp\xE9rons que votre commande r\xE9pondra \xE0 toutes vos attentes.<br><br>" + "R\xE9caputilatif de votre commande:<br>" + "-------------------<br><br>" + ("Nom: " + this.user.nom + " - Pr\xE9nom: " + this.user.prenom + "<br>") + ("E-mail: " + this.user.email);

      if (this.user.telephone) message2 += " - " + this.user.telephone + "<br><br>";else {
        message2 += '<br><br>';
      }

      if (this.user.recupMarchandise === "Magasin") {
        message += "Date d'enl\xE8vement: " + this.user.date + "<br><br>";
      }

      message2 += "<table>";

      message2 += "<tr><td>Articles</td><td>Quantit\xE9</td><td>Prix</td></tr>";
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.getPanier()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _ref13 = _step7.value;

          var _ref14 = _slicedToArray(_ref13, 2);

          var _id = _ref14[0];
          var _article = _ref14[1];

          message2 += "<tr><td>" + _article.nom + "</td><td>" + _article.count + "</td><td>" + _article.prix.toFixed(2) + " \u20AC</td></tr>";
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      if (this.user.recupMarchandise === "Livraison") {
        var _shippingPrice = this.getShippingPrice().toFixed(2);
        message2 += "<tr><td colspan=\"2\">Frais de livraison:</td><td>" + _shippingPrice + " \u20AC</td></tr>";
      }

      message2 += "<tr><td colspan=\"2\">Total:</td><td>" + total + " \u20AC</td></tr>";

      message2 += "</table><br><br>";

      message2 += "R\xE9cup\xE9ration de la marchandise: " + this.user.recupMarchandise + "<br><br>";

      if (this.user.recupMarchandise === "Livraison") {
        message2 += "Nom et pr\xE9nom du destinataire: " + this.user.destinataire + "<br>";
        message2 += "Adresse: " + this.user.address + "<br>";
        message2 += "Code postal: " + this.user.codePostal + " - Ville: " + this.user.ville + "<br><br>";
      }

      message2 += "Mode de paiement: " + this.user.modePaiement + "<br><br>";

      message2 += "<img src=\"\" alt=\"La Gourmandise Bouillon\">";

      if (this.user.recupMarchandise === "Livraison") {
        Email.send({
          SecureToken: data.token,
          To: "lagourmandisebouillon@gmail.com",
          From: data.email,
          Subject: "Votre commande a été expédiée",
          Body: message2
        });
      }

      var message3 = "Commande n\xB0 " + refCom + "<br><br>" + "Madame, Monsieur,<br><br>" + "Merci pour votre commande chez La Gourmandise.<br>" + "Nous vous remercions pour votre confiance et mettrons tout en oeuvre pour qu'elle r\xE9ponde \xE0 vos attentes.<br>";
      if (this.user.modePaiement === "Virement") {
        message3 += "Nous vous invitons, d\xE8s \xE0 pr\xE9sent, \xE0 proc\xE9der au paiement de la commande pour un envoi dans les plus brefs d\xE9lais.<br>";
        message3 += "Les coordonn\xE9es sont les suivantes:<br><br>";
        message3 += "Nom: La Gourmandise Bouillon<br>";
        message3 += "IBAN: BE45 7326 6015 6789<br>";
        message3 += "BIC: CREGBEBB<br>";
        message3 += "Communication: " + this.user.nom + " " + this.user.prenom + " " + refCom + "<br><br>";
        message3 += "\xC0 r\xE9ception du versement, ";
        if (this.user.recupMarchandise === "Livraison") {
          message3 += "nous vous confirmerons l'envoi de votre commande rapidement.<br><br>";
        } else {
          message3 += "nous vous informerons d\xE8s qu'elle sera pr\xEAte pour l'enl\xE8vement.<br><br>";
        }
      } else {
        message3 += "Nous pr\xE9parerons votre commande avec le plus grand soin pour la date souhait\xE9e et ";
        if (this.user.recupMarchandise === "Livraison") {
          message3 += "vous contacterons lorsqu'elle sera envoy\xE9e.<br><br>";
        } else {
          message3 += "vous informerons lorsqu'elle sera pr\xEAte pour l'enl\xE8vement.<br><br>";
        }
      }

      message3 += "R\xE9caputilatif de votre commande:<br>";
      message3 += "-------------------<br><br>";
      message3 += "Nom: " + this.user.nom + " - Pr\xE9nom: " + this.user.prenom + "<br>";
      message3 += "E-mail: " + this.user.email;

      if (this.user.telephone) message3 += " - " + this.user.telephone + "<br><br>";else {
        message3 += '<br><br>';
      }

      if (this.user.recupMarchandise === "Magasin") {
        message += "Date d'enl\xE8vement: " + this.user.date + "<br><br>";
      } else {
        message += "<br>";
      }

      message3 += "<table>";

      message3 += "<tr><td>Articles</td><td>Quantit\xE9</td><td>Prix</td></tr>";
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this.getPanier()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _ref15 = _step8.value;

          var _ref16 = _slicedToArray(_ref15, 2);

          var _id2 = _ref16[0];
          var _article2 = _ref16[1];

          message3 += "<tr><td>" + _article2.nom + "</td><td>" + _article2.count + "</td><td>" + _article2.prix.toFixed(2) + " \u20AC</td></tr>";
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      if (this.user.recupMarchandise === "Livraison") {
        var _shippingPrice2 = this.getShippingPrice().toFixed(2);
        message3 += "<tr><td colspan=\"2\">Frais de livraison:</td><td>" + _shippingPrice2 + " \u20AC</td></tr>";
      }

      message3 += "<tr><td colspan=\"2\">Total:</td><td>" + total + " \u20AC</td></tr>";

      message3 += "</table><br><br>";

      message3 += "R\xE9cup\xE9ration de la marchandise: " + this.user.recupMarchandise + "<br><br>";

      if (this.user.recupMarchandise === "Livraison") {
        message3 += "Nom et pr\xE9nom du destinataire: " + this.user.destinataire + "<br>";
        message3 += "Adresse: " + this.user.address + "<br>";
        message3 += "Code postal: " + this.user.codePostal + " - Ville: " + this.user.ville + "<br><br>";
      }

      message3 += "Mode de paiement: " + this.user.modePaiement + "<br><br>";

      message3 += "<img src=\"\" alt=\"La Gourmandise Bouillon\">";

      Email.send({
        SecureToken: data.token,
        To: "lagourmandisebouillon@gmail.com",
        From: data.email,
        Subject: "Confirmation de votre commande",
        Body: message3
      });

      var message4 = "Commande n\xB0 " + refCom + "<br><br>" + "Madame, Monsieur,<br><br>" + "Nous avons le plaisir de vous annoncer que votre commande est pr\xEAte et disponible dans votre magasin.<br><br>" + "Nous vous invitons \xE0 venir la r\xE9cup\xE9rer durant les heures d'ouverture de celui-ci, \xE0 savoir du mardi au dimanche, de 10 h 00 \xE0 12 h 00 et de 13 h 30 \xE0 18 h 00.<br><br>" + "Merci pour votre confiance et nous esp\xE9rons que vous serez enti\xE8rement satisfaits par nos chocolats.<br><br>" + "<img src=\"\" alt=\"La Gourmandise Bouillon\">";

      if (this.user.recupMarchandise === "Magasin") {
        Email.send({
          SecureToken: data.token,
          To: "lagourmandisebouillon@gmail.com",
          From: data.email,
          Subject: "Votre commande est prête",
          Body: message4
        });
      }
    }
  };
}