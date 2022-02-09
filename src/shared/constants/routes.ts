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
    name: "Travaux",
    route: "works",
    subroutes: {
      STUDY_CASE: {
        name: "study_case",
        route: ":studyCase",
      },
    },
  },
});
