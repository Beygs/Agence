const data = [
  {
    name: "Platon",
    path: "platon-study-case",
    title: "Le challenge",
    content: `Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
    Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.`,
  },
  {
    name: "Solane",
    path: "solane-study-case",
    title: "Solane est le premier vendeur de fraises du Poitou-Charentes",
    content: "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.",
  },
  {
    name: "Sedal",
    path: "sedal-study-case",
    title: "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
    content: "Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, \"les derniers seront les premiers\".",
  },
];

export default data;

export const getWork = (path: string) => (data.find((d) => d.path === path));
