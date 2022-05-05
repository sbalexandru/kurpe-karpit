// Used on Karpit Page
import i18n from "../i18n";

import Suzuki1 from "../img/karpit/szuzuki1.jpg";
import Suzuki2 from "../img/karpit/szuzuki2.jpg";
import Suzuki3 from "../img/karpit/szuzuki3.jpg";
import Suzuki4 from "../img/karpit/szuzuki4.jpg";
import Suzuki5 from "../img/karpit/szuzuki5.jpg";

import Audi1 from "../img/wheel/audi1.jpg";
import Audi2 from "../img/wheel/audi2.jpg";
import Audi3 from "../img/wheel/audi3.jpg";
import Audi4 from "../img/wheel/audi4.jpg";

import KanapeRetush from "../img/sofa/2kanape (2).jpg";
import Kanape from "../img/sofa/2kanape (1).jpg";
import NagyKanape from "../img/sofa/3kanape (1).jpg";
import NagyKanapeRetush from "../img/sofa/3kanape (2).jpg";

export const KarpitImages = [
  {
    id: { key: 1 },
    event: [
      {
        src: Suzuki1,
        width: 4,
        height: 2.5,
      },
      {
        src: Suzuki2,
        width: 4,
        height: 2.5,
      },
      {
        src: Suzuki3,
        width: 4,
        height: 2.5,
      },
      {
        src: Suzuki4,
        width: 4,
        height: 2.5,
      },
      {
        src: Suzuki5,
        width: 4,
        height: 2.5,
      },
    ],
    description: {
      title: "Szuzuki",
      text: i18n.t("about.welcome"),
    },
  },
  {
    id: { key: 2 },
    event: [
      {
        src: Audi1,
        width: 4,
        height: 2.5,
      },

      {
        src: Audi2,
        width: 4,
        height: 2.5,
      },
      {
        src: Audi3,
        width: 4,
        height: 2.5,
      },
      {
        src: Audi4,
        width: 4,
        height: 2.5,
      },
    ],
    description: {
      title: "Szuzuki 1",
      text: i18n.t("about.welcome"),
    },
  },
  {
    id: { key: 3 },
    event: [
      {
        src: KanapeRetush,
        width: 4,
        height: 2.5,
      },
      {
        src: Kanape,
        width: 4,
        height: 2.5,
      },
      {
        src: NagyKanape,
        width: 4,
        height: 2.5,
      },
      {
        src: NagyKanapeRetush,
        width: 4,
        height: 2.5,
      },
    ],
    description: {
      title: "NagyKanapeRetush 2",
      text: i18n.t("about.welcome"),
    },
  },

  {
    id: { key: 4 },
    event: [
      {
        src: Audi2,
        width: 4,
        height: 2.5,
      },
      {
        src: Suzuki5,
        width: 4,
        height: 2.5,
      },
      {
        src: Audi2,
        width: 4,
        height: 2.5,
      },
      {
        src: Suzuki5,
        width: 4,
        height: 2.5,
      },
    ],
    description: {
      title: "Szuzuki 3",
      text: i18n.t("about.welcome"),
    },
  },
  // {
  //   id: { key: 5 },

  //   event: [
  //     {
  //       src: Suzuki1,
  //       width: 4,
  //       height: 2.5,
  //     },

  //     {
  //       src: Suzuki2,
  //       width: 4,
  //       height: 2.5,
  //     },
  //     {
  //       src: Suzuki5,
  //       width: 4,
  //       height: 2.5,
  //     },
  //     {
  //       src: Suzuki5,
  //       width: 4,
  //       height: 2.5,
  //     },
  //   ],
  //   description: {
  //     title: "Szuzuki 4",
  //     text: i18n.t("about.welcome"),
  //   },
  // },
  // {
  //   id: { key: 6 },

  //   event: [
  //     {
  //       src: Audi2,
  //       width: 4,
  //       height: 2.5,
  //     },

  //     {
  //       src: Audi4,
  //       width: 4,
  //       height: 2.5,
  //     },
  //     {
  //       src: Suzuki3,
  //       width: 4,
  //       height: 2.5,
  //     },
  //     {
  //       src: Audi1,
  //       width: 4,
  //       height: 2.5,
  //     },
  //     {
  //       src: Suzuki5,
  //       width: 4,
  //       height: 2.5,
  //     },
  //   ],
  //   description: {
  //     title: "Szuzuki 5",
  //     text: i18n.t("about.welcome"),
  //   },
  // },
];
