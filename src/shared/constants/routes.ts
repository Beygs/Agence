export default Object.freeze({
  HOME: {
    name: "Accueil",
    route: "/",
  },
  ABOUT: {
    name: "A propos",
    route: "about",
  },
  WORKS: {
    name: "Projets",
    route: "works",
    subroutes: {
      STUDY_CASE: {
        name: "study_case",
        route: ":studyCase",
      },
    },
  },
});
