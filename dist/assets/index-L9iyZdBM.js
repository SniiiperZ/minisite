(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const i=`
    <nav class="navbar">
    <a href="/"><img src="/images/chat-logo-removebg-preview.png" alt="logo" class="navbar-logo"></a>
        <a href="/">Accueil</a>
        <a href="/produit/">Produits</a>
        <a href="/equipe/">L'équipe</a>
        <a href="/contact/">Contactez-nous</a>
    </nav>
    `,u=`
    <footer>
        <p>&copy; Cedric 2024</p>
    </footer>
    `;async function a(){document.querySelector("#app").innerHTML=`
  ${i}
  <div class="main">
  <h1>
      Bienvenue chez Ronron, le paradis des passionnés de moustaches
      frémissantes et de queues touffues !
    </h1>
    <p>
      Chez Ronron, nous savons que derrière chaque boule de poils se cache un
      roi ou une reine avec ses caprices, ses jeux et ses petits moments de
      folie. C'est pourquoi notre mission est de fournir à ces majestés félines
      tout ce dont elles peuvent rêver : des croquettes croustillantes, des
      jouets qui zigzaguent, et des lits si confortables que même un humain y
      jalouserait une sieste.
    </p>

    <h1>Qui sommes-nous ?</h1>

    <p>
      Nous sommes une bande de fous de chats, des techniciens de la caresse et
      des experts en ronron thérapie, qui ont décidé un jour que nos amis à
      quatre pattes méritaient le meilleur du meilleur. Fondé par deux amis,
      Alex et Sam, qui se sont rencontrés grâce à une étrange coïncidence
      impliquant un chat, un arbre et une échelle, Ronron est le fruit de notre
      passion commune pour ces créatures mystérieusement câlines.
    </p>

    <h1>Pourquoi choisir Ronron ?</h1>

    <p>
      Parce que nous testons tous nos produits sur un panel très exigeant : nos
      propres chats ! Si ça ne provoque pas un ronronnement de satisfaction chez
      eux, c'est retour à la case départ. Chez Ronron, seulement le meilleur
      pour vos petits tyrans domestiques !
    </p>

    <h1>Notre promesse :</h1>

    <p>
      Chez Ronron, nous vous promettons des produits de qualité, des livraisons
      rapides et des moments de complicité garantis. Parce que voir votre chat
      heureux, c'est un peu comme entendre un doux ronron qui vous dit : "Merci,
      humain."
    </p>

    <h1>Rejoignez la famille Ronron :</h1>

    <p>
      Parce qu'ici, chaque client devient membre de notre grande famille. Et
      dans cette famille, les chats sont les patrons ! Alors, prêts à faire
      ronronner de plaisir votre petit félin ? Explorez notre site et découvrez
      tout ce que nous avons à offrir pour embellir la vie de votre compagnon
      poilu.
    </p>

    <h2>Ronron - Pour les chats, par des amoureux des chats !</h2>
    </div>
    ${u}
  `}a();
