import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import decouvrir from "../components/decouvrir.vue";
import newsletter from "../components/newsletter.vue";
import dejacompte from "../components/dejacompte.vue";
/////////////////////////////////////////////////////////  inscription  /////////////////////////////////////////////////////////////////////////////////

import login from "../components/login.vue";
import reinitialiser from "../components/reinitialiser.vue";
import Mtp from "../components/Mtp.vue";
import register from "../components/register.vue";
/////////////////////////////////////////////////////////  Nashboard d'admin  /////////////////////////////////////////////////////////////////////////////////
import dashboard from "../components/admin/dashboard.vue";
import listuser from "../components/listuser.vue";
import listproduit from "../components/listproduit.vue";
import listcommande from "../components/listcommande.vue";
import loginadmin from "../components/loginadmin.vue";


/////////////////////////////////////////////////////////  Nashboard fin d'admin  /////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////  fin d'inscription  /////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////  Nashboard de client  /////////////////////////////////////////////////////////////////////////////////
import mynavbar from "../components/mynavbar.vue";
import contact from "../components/contact.vue";
import commande from "../components/commande.vue";
import profile from "../components/profile.vue";

/////////////////////////////////////////////////////////   Fin de Nashboard  /////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////  Produits  /////////////////////////////////////////////////////////////////////////////////

import myproduitcrepus from "../components/myproduitcrepus.vue";
import produit from "../views/produit";
import produitf from "../views/produitf.vue";
import produitl from "../views/produitl.vue";
import produitb from "../views/produitb.vue";
import produitkids from "../views/produitkids.vue";
import huile from "../views/huile.vue";
import marquenatural from "../components/marquenatural.vue";
import marqueasiam from "../components/marqueasiam.vue";
import marquecreme from "../components/marquecreme.vue";
import marquenatu from "../components/marquenatu.vue";
import marquemielle from "../components/marquemielle.vue";
import brocher from "../components/brocher.vue";
import search from "../components/search.vue";
import accessoire from "../views/accessoire.vue";

/////////////////////////////////////////////////////////  Produits  /////////////////////////////////////////////////////////////////////////////////

import paiement from "../components/paiement.vue";
import panier from "../views/panier";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },


    {
        path: "/Mtp",
        name: "Mtp",
        component: Mtp,
    },
    {
        path: "/dejacompte",
        name: "dejacompte",
        component: dejacompte,
    },
    {
        path: "/reinitialiser",
        name: "reinitialiser",
        component: reinitialiser,
    },
    {
        path: "/loginadmin",
        name: "loginadmin",
        component: loginadmin,
    },
    {
        path: "/admin/dashboard",
        name: "dashboard",
        component: dashboard,
    },
    {
        path: "/listuser",
        name: "listuser",
        component: listuser,
    },
    {
        path: "/listproduit",
        name: "listproduit",
        component: listproduit,
    },
    {
        path: "/listcommande",
        name: "listcommande",
        component: listcommande,
    },
    {
        path: "/mynavbar",
        name: "mynavbar",
        component: mynavbar,
    },
    {
        path: "/compte/:id",
        name: "compte",
        component: () =>
            import ("../components/compte.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: profile

    },
    {
        path: "/search",
        name: "search",
        component: search

    },
    {
        path: "/decouvrir",
        name: "decouvrir",
        component: decouvrir,
    },

    {
        path: "/dtproduit/:id",
        name: "dtproduit",
        component: () =>
            import ("../components/dtproduit.vue"),
    },



    {
        path: "/produit",
        name: "produit",
        component: produit,
    },
    {
        path: "/produitf",
        name: "produitf",
        component: produitf,
    },
    {
        path: "/produitl",
        name: "produitl",
        component: produitl,
    },
    {
        path: "/produitb",
        name: "produitb",
        component: produitb,
    },
    {
        path: "/produitkids",
        name: "produitkids",
        component: produitkids,
    },
    {
        path: "/myproduitcrepus",
        name: "myproduitcrepus",
        component: myproduitcrepus,
    },
    {
        path: "/huile",
        name: "huile",
        component: huile,
    },
    {
        path: "/marquenatu",
        name: "marquenatu",
        component: marquenatu,
    },
    {
        path: "/marquenatural",
        name: "marquenatural",
        component: marquenatural,
    },
    {
        path: "/marqueasiam",
        name: "marqueasiam",
        component: marqueasiam,
    },
    {
        path: "/marquemielle",
        name: "marquemielle",
        component: marquemielle,
    },
    {
        path: "/marquecreme",
        name: "marquecreme",
        component: marquecreme,
    },
    {
        path: "/newsletter",
        name: "newsletter",
        component: newsletter,
    },
    {
        path: "/brocher",
        name: "brocher",
        component: brocher,
    },
    {
        path: "/accessoire",
        name: "accessoire",
        component: accessoire,
    },
    {
        path: "/paiement",
        name: "paiement",
        component: paiement,
    },
    {
        path: "/panier",
        name: "panier",
        component: panier,
    },
    {
        path: "/commande",
        name: "commande",
        component: commande,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },
    {
        path: "/valide/:email",
        name: "valide",
        component: () =>
            import ("../components/valide.vue"),
    },

    {
        path: "/contact",
        name: "contact",
        component: contact,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;